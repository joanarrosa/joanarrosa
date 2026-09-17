import type {
  ConjugationExercise,
  Exercise,
  Lesson,
  MultipleChoiceExercise,
  TypingExercise,
  VerbConjugation,
  Word,
} from "../types";

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function sampleDistractors(
  pool: Word[],
  exclude: string,
  key: "nl" | "en",
  count: number
): string[] {
  const seen = new Set<string>([exclude.toLowerCase()]);
  const candidates = shuffle(pool);
  const result: string[] = [];
  for (const w of candidates) {
    const val = w[key];
    if (seen.has(val.toLowerCase())) continue;
    seen.add(val.toLowerCase());
    result.push(val);
    if (result.length >= count) break;
  }
  return result;
}

function buildMultipleChoice(
  word: Word,
  pool: Word[],
  direction: "nl-en" | "en-nl",
  id: string
): MultipleChoiceExercise {
  if (direction === "nl-en") {
    const distractors = sampleDistractors(pool, word.en, "en", 3);
    return {
      id,
      type: "multiple-choice-nl-en",
      prompt: word.nl,
      promptPhonetic: word.phonetic,
      options: shuffle([word.en, ...distractors]),
      correctAnswer: word.en,
    };
  }
  const distractors = sampleDistractors(pool, word.nl, "nl", 3);
  return {
    id,
    type: "multiple-choice-en-nl",
    prompt: word.en,
    options: shuffle([word.nl, ...distractors]),
    correctAnswer: word.nl,
  };
}

function buildListening(word: Word, pool: Word[], id: string): MultipleChoiceExercise {
  const distractors = sampleDistractors(pool, word.en, "en", 3);
  return {
    id,
    type: "listening",
    prompt: "Listen and choose the meaning",
    audioText: word.nl,
    options: shuffle([word.en, ...distractors]),
    correctAnswer: word.en,
  };
}

function buildTyping(word: Word, id: string): TypingExercise {
  return {
    id,
    type: "typing",
    prompt: `Type in Dutch: "${word.en}"`,
    promptTranslation: word.en,
    correctAnswer: word.nl,
    phonetic: word.phonetic,
  };
}

function uniqueOptionsWithCorrect(pool: string[], correct: string, target = 4): string[] {
  const unique = Array.from(new Set(pool));
  if (unique.length <= target) return shuffle(unique);
  const others = shuffle(unique.filter((v) => v !== correct)).slice(0, target - 1);
  return shuffle([correct, ...others]);
}

function buildConjugationExercises(conj: VerbConjugation): ConjugationExercise[] {
  const allForms = conj.rows.map((r) => r.form);
  return conj.rows.map((row, i) => ({
    id: `${conj.infinitive}-${conj.tense}-${i}`,
    type: "conjugation-fill" as const,
    sentenceBefore: row.pronoun,
    sentenceAfter: "___",
    infinitive: conj.infinitive,
    infinitiveEn: conj.infinitiveEn,
    options: uniqueOptionsWithCorrect(allForms, row.form),
    correctAnswer: row.form,
  }));
}

/**
 * Builds a randomized, varied exercise set for a lesson.
 * `wordPool` is the broader vocabulary bank used to source plausible wrong answers.
 */
export function buildLessonExercises(lesson: Lesson, wordPool: Word[]): Exercise[] {
  const exercises: Exercise[] = [];
  // Prefer distractors from within the lesson itself (same theme, harder to
  // guess by elimination) and only widen to the full course vocabulary when
  // the lesson doesn't have enough words of its own.
  const distractorPool = lesson.words.length >= 6 ? lesson.words : wordPool;

  lesson.words.forEach((word, i) => {
    const cycle = i % 4;
    const id = `${lesson.id}-w${i}`;
    if (cycle === 0) exercises.push(buildMultipleChoice(word, distractorPool, "nl-en", id));
    else if (cycle === 1) exercises.push(buildMultipleChoice(word, distractorPool, "en-nl", id));
    else if (cycle === 2) exercises.push(buildListening(word, distractorPool, id));
    else exercises.push(buildTyping(word, id));

    // Sprinkle in extra listening reps so every lesson trains the ear.
    if (i % 3 === 0) {
      exercises.push(buildListening(word, distractorPool, `${id}-listen`));
    }
  });

  if (lesson.conjugations) {
    for (const conj of lesson.conjugations) {
      exercises.push(...buildConjugationExercises(conj));
    }
  }

  return shuffle(exercises);
}

export function normalizeAnswer(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

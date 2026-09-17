export interface Word {
  /** Dutch word or phrase */
  nl: string;
  /** English translation */
  en: string;
  /** Simplified phonetic pronunciation guide, e.g. "CHOO-duh-MOR-khun" */
  phonetic: string;
  /** Optional grammar note shown as a tip */
  note?: string;
  /** Optional word type tag, e.g. "verb", "noun", "phrase" */
  tag?: string;
}

export interface ConjugationRow {
  pronoun: string;
  form: string;
  phonetic: string;
}

export interface VerbConjugation {
  infinitive: string;
  infinitiveEn: string;
  tense: "present" | "past";
  rows: ConjugationRow[];
}

export interface GrammarTip {
  title: string;
  body: string;
}

export type LessonKind = "vocab" | "verbs" | "phrases" | "grammar";

export interface Lesson {
  id: string;
  title: string;
  kind: LessonKind;
  words: Word[];
  conjugations?: VerbConjugation[];
  grammarTips?: GrammarTip[];
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  color: string;
  lessons: Lesson[];
}

export type ExerciseType =
  | "multiple-choice-nl-en"
  | "multiple-choice-en-nl"
  | "listening"
  | "typing"
  | "conjugation-fill";

export interface ExerciseBase {
  id: string;
  type: ExerciseType;
}

export interface MultipleChoiceExercise extends ExerciseBase {
  type: "multiple-choice-nl-en" | "multiple-choice-en-nl" | "listening";
  prompt: string;
  promptPhonetic?: string;
  audioText?: string;
  options: string[];
  correctAnswer: string;
}

export interface TypingExercise extends ExerciseBase {
  type: "typing";
  prompt: string;
  promptTranslation: string;
  correctAnswer: string;
  phonetic: string;
}

export interface ConjugationExercise extends ExerciseBase {
  type: "conjugation-fill";
  sentenceBefore: string;
  sentenceAfter: string;
  infinitive: string;
  infinitiveEn: string;
  options: string[];
  correctAnswer: string;
}

export type Exercise =
  | MultipleChoiceExercise
  | TypingExercise
  | ConjugationExercise;

export interface Progress {
  xp: number;
  streak: number;
  lastActiveDate: string | null;
  completedLessons: Record<string, number>;
  dailyGoal: number;
  todayXp: number;
  todayDate: string | null;
}

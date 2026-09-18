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
  /** Optional example sentence showing the word used in a real phrase */
  example?: { nl: string; en: string };
}

/** A full example sentence shown as reading content to model phrase construction. */
export interface SentenceExample {
  nl: string;
  en: string;
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
  /** Example sentences shown as extra reading content. */
  sentences?: SentenceExample[];
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  color: string;
  lessons: Lesson[];
}

export interface Progress {
  xp: number;
  streak: number;
  lastActiveDate: string | null;
  completedLessons: Record<string, number>;
  dailyGoal: number;
  todayXp: number;
  todayDate: string | null;
}

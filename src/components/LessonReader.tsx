import { useMemo, useState } from "react";
import type { Lesson, SentenceExample, VerbConjugation, Word } from "../types";
import Speaker from "./Speaker";
import ProgressBar from "./ProgressBar";

interface LessonReaderProps {
  lesson: Lesson;
  onDone: () => void;
}

type ReadCard =
  | { kind: "word"; word: Word }
  | { kind: "conjugation"; conjugation: VerbConjugation }
  | { kind: "sentence"; sentence: SentenceExample };

const kindLabel: Record<ReadCard["kind"], string> = {
  word: "New word",
  conjugation: "Verb conjugation",
  sentence: "Example sentence",
};

/** For speech, drop alternate pronoun spellings like "jij / je" down to just "jij". */
function speakablePronoun(pronoun: string): string {
  return pronoun.split("/")[0].trim();
}

function WordCard({ word }: { word: Word }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
      <div className="flex items-center justify-center gap-3 mb-2">
        <h2 className="text-3xl font-extrabold text-gray-800">{word.nl}</h2>
        <Speaker text={word.nl} size="md" />
      </div>
      <p className="text-gray-400 italic mb-4">/{word.phonetic}/</p>
      <p className="text-xl text-duo-blue font-bold mb-4">{word.en}</p>
      {word.note && (
        <p className="text-sm text-gray-500 bg-purple-50 border border-purple-100 rounded-lg px-3 py-2 mb-4">
          💡 {word.note}
        </p>
      )}
      {word.example && (
        <div className="mt-4 pt-4 border-t border-gray-100 text-left">
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Example</p>
          <div className="flex items-center gap-2">
            <p className="text-gray-800 font-semibold">{word.example.nl}</p>
            <Speaker text={word.example.nl} size="sm" />
          </div>
          <p className="text-gray-500 text-sm">{word.example.en}</p>
        </div>
      )}
    </div>
  );
}

function ConjugationCard({ conjugation }: { conjugation: VerbConjugation }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-800">{conjugation.infinitive}</h2>
        <p className="text-duo-blue font-bold">{conjugation.infinitiveEn}</p>
        <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mt-1">
          {conjugation.tense} tense
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {conjugation.rows.map((row) => (
          <div
            key={row.pronoun}
            className="flex items-center justify-between gap-3 px-4 py-2 rounded-lg bg-gray-50"
          >
            <span className="text-gray-500 font-semibold">{row.pronoun}</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-800 font-bold">{row.form}</span>
              <span className="text-gray-400 italic text-sm">/{row.phonetic}/</span>
              <Speaker text={`${speakablePronoun(row.pronoun)} ${row.form}`} size="sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SentenceCard({ sentence }: { sentence: SentenceExample }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
      <div className="flex items-center justify-center gap-3 mb-3">
        <h2 className="text-2xl font-extrabold text-gray-800">{sentence.nl}</h2>
        <Speaker text={sentence.nl} size="md" />
      </div>
      <p className="text-lg text-duo-blue font-bold">{sentence.en}</p>
    </div>
  );
}

export default function LessonReader({ lesson, onDone }: LessonReaderProps) {
  const cards = useMemo<ReadCard[]>(() => {
    const wordCards: ReadCard[] = lesson.words.map((word) => ({ kind: "word", word }));
    const conjugationCards: ReadCard[] = (lesson.conjugations ?? []).map((conjugation) => ({
      kind: "conjugation",
      conjugation,
    }));
    const sentenceCards: ReadCard[] = (lesson.sentences ?? []).map((sentence) => ({
      kind: "sentence",
      sentence,
    }));
    return [...wordCards, ...conjugationCards, ...sentenceCards];
  }, [lesson]);

  const [index, setIndex] = useState(0);
  const card = cards[index];
  const isLast = index === cards.length - 1;

  if (!card) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-4 py-4 flex items-center gap-4 max-w-2xl mx-auto w-full">
        <button
          onClick={onDone}
          aria-label="Back to home"
          className="text-gray-400 hover:text-gray-600 text-sm font-bold"
        >
          Exit
        </button>
        <ProgressBar value={index} max={cards.length} colorClass="bg-duo-blue" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md">
          <p className="text-center text-gray-400 font-semibold mb-2 text-sm uppercase tracking-wide">
            {lesson.title} · {kindLabel[card.kind]} {index + 1} of {cards.length}
          </p>
          {card.kind === "word" && <WordCard word={card.word} />}
          {card.kind === "conjugation" && <ConjugationCard conjugation={card.conjugation} />}
          {card.kind === "sentence" && <SentenceCard sentence={card.sentence} />}
        </div>
      </div>

      <div className="px-4 py-5 border-t border-gray-100 bg-white">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            className="px-6 py-3 rounded-xl font-extrabold text-gray-500 disabled:opacity-30"
          >
            Back
          </button>
          {isLast ? (
            <button
              onClick={onDone}
              className="ml-auto bg-duo-green hover:bg-duo-green-dark text-white font-extrabold px-8 py-3 rounded-xl border-b-4 border-duo-green-dark active:border-b-0 active:translate-y-1 transition"
            >
              Finish lesson
            </button>
          ) : (
            <button
              onClick={() => setIndex((i) => Math.min(cards.length - 1, i + 1))}
              className="ml-auto bg-duo-blue hover:brightness-95 text-white font-extrabold px-8 py-3 rounded-xl border-b-4 border-sky-600 active:border-b-0 active:translate-y-1 transition"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

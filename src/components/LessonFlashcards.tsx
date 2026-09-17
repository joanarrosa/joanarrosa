import { useState } from "react";
import type { Word } from "../types";
import Speaker from "./Speaker";
import ProgressBar from "./ProgressBar";

interface LessonFlashcardsProps {
  words: Word[];
  lessonTitle: string;
  onDone: () => void;
}

export default function LessonFlashcards({ words, lessonTitle, onDone }: LessonFlashcardsProps) {
  const [index, setIndex] = useState(0);
  const word = words[index];
  const isLast = index === words.length - 1;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-4 py-4 flex items-center gap-4 max-w-2xl mx-auto w-full">
        <button
          onClick={onDone}
          aria-label="Skip to practice"
          className="text-gray-400 hover:text-gray-600 text-sm font-bold"
        >
          Skip
        </button>
        <ProgressBar value={index} max={words.length} colorClass="bg-duo-blue" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md">
          <p className="text-center text-gray-400 font-semibold mb-2 text-sm uppercase tracking-wide">
            {lessonTitle} · New word {index + 1} of {words.length}
          </p>
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
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">
                  Example
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-gray-800 font-semibold">{word.example.nl}</p>
                  <Speaker text={word.example.nl} size="sm" />
                </div>
                <p className="text-gray-500 text-sm">{word.example.en}</p>
              </div>
            )}
          </div>
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
              Start practice
            </button>
          ) : (
            <button
              onClick={() => setIndex((i) => Math.min(words.length - 1, i + 1))}
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

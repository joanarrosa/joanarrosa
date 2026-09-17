import type { Exercise } from "../types";
import Speaker from "./Speaker";

interface ExerciseViewProps {
  exercise: Exercise;
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
  isCorrect: boolean | null;
}

function optionClasses(
  option: string,
  value: string,
  disabled: boolean,
  correctAnswer: string,
  isCorrect: boolean | null
) {
  const base =
    "w-full text-left px-4 py-3 rounded-xl border-2 font-semibold transition active:scale-[0.99]";
  if (!disabled) {
    return `${base} ${
      option === value
        ? "border-duo-blue bg-sky-50 text-sky-700"
        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
    }`;
  }
  // After checking: highlight correct answer green, chosen-wrong answer red.
  if (option === correctAnswer) {
    return `${base} border-duo-green bg-green-50 text-green-700`;
  }
  if (option === value && !isCorrect) {
    return `${base} border-duo-red bg-red-50 text-red-600`;
  }
  return `${base} border-gray-200 bg-white text-gray-400`;
}

function OptionButtons({
  options,
  value,
  disabled,
  correctAnswer,
  isCorrect,
  onChange,
}: {
  options: string[];
  value: string;
  disabled: boolean;
  correctAnswer: string;
  isCorrect: boolean | null;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          disabled={disabled}
          onClick={() => onChange(opt)}
          className={optionClasses(opt, value, disabled, correctAnswer, isCorrect)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default function ExerciseView({ exercise, value, onChange, disabled, isCorrect }: ExerciseViewProps) {
  switch (exercise.type) {
    case "listening":
      return (
        <div>
          <p className="text-gray-500 font-semibold mb-6">{exercise.prompt}</p>
          <div className="flex justify-center mb-8">
            <Speaker text={exercise.audioText ?? ""} size="lg" />
          </div>
          <OptionButtons
            options={exercise.options}
            value={value}
            disabled={disabled}
            correctAnswer={exercise.correctAnswer}
            isCorrect={isCorrect}
            onChange={onChange}
          />
        </div>
      );

    case "multiple-choice-nl-en":
    case "multiple-choice-en-nl": {
      const isNlPrompt = exercise.type === "multiple-choice-nl-en";
      return (
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold text-gray-800">{exercise.prompt}</h2>
            {isNlPrompt && <Speaker text={exercise.prompt} size="sm" />}
          </div>
          {exercise.promptPhonetic ? (
            <p className="text-sm text-gray-400 mb-6 italic">/{exercise.promptPhonetic}/</p>
          ) : (
            <div className="mb-6" />
          )}
          <OptionButtons
            options={exercise.options}
            value={value}
            disabled={disabled}
            correctAnswer={exercise.correctAnswer}
            isCorrect={isCorrect}
            onChange={onChange}
          />
        </div>
      );
    }

    case "typing":
      return (
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-6">{exercise.prompt}</h2>
          <input
            type="text"
            value={value}
            disabled={disabled}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Type your answer in Dutch..."
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-duo-blue outline-none text-lg"
          />
          {disabled && (
            <div className="mt-4 flex items-center gap-3">
              <span className="text-gray-600">
                Correct answer: <strong>{exercise.correctAnswer}</strong>{" "}
                <span className="text-gray-400 italic">/{exercise.phonetic}/</span>
              </span>
              <Speaker text={exercise.correctAnswer} size="sm" />
            </div>
          )}
        </div>
      );

    case "conjugation-fill":
      return (
        <div>
          <p className="text-gray-500 font-semibold mb-1">
            Conjugate <strong>{exercise.infinitive}</strong> ({exercise.infinitiveEn})
          </p>
          <div className="flex items-center gap-2 mb-6 text-2xl font-bold text-gray-800">
            <span>{exercise.sentenceBefore}</span>
            <span className="px-4 py-1 rounded-lg border-2 border-dashed border-gray-300 text-gray-400 text-lg">
              {value || "___"}
            </span>
          </div>
          <OptionButtons
            options={exercise.options}
            value={value}
            disabled={disabled}
            correctAnswer={exercise.correctAnswer}
            isCorrect={isCorrect}
            onChange={onChange}
          />
        </div>
      );
  }
}

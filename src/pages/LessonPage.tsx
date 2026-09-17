import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ALL_WORDS, findLesson } from "../data";
import { buildLessonExercises, normalizeAnswer } from "../lib/exercises";
import { loadProgress, recordLessonComplete } from "../lib/storage";
import ProgressBar from "../components/ProgressBar";
import ExerciseView from "../components/ExerciseView";
import type { Progress } from "../types";

const XP_PER_CORRECT = 10;

export default function LessonPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const found = lessonId ? findLesson(lessonId) : null;

  const exercises = useMemo(
    () => (found ? buildLessonExercises(found.lesson, ALL_WORDS) : []),
    [found?.lesson.id]
  );

  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState<Progress | null>(null);
  const [showIntro, setShowIntro] = useState(true);

  if (!found) {
    return (
      <div className="max-w-md mx-auto px-4 py-10 text-center">
        <p className="text-gray-600">Lesson not found.</p>
        <button className="mt-4 text-duo-blue font-bold" onClick={() => navigate("/")}>
          Back to home
        </button>
      </div>
    );
  }

  const { lesson } = found;
  const current = exercises[index];

  function evaluate(): boolean {
    if (!current) return false;
    if (current.type === "typing") {
      return normalizeAnswer(value) === normalizeAnswer(current.correctAnswer);
    }
    return value === current.correctAnswer;
  }

  function handleCheck() {
    const correct = evaluate();
    setIsCorrect(correct);
    setChecked(true);
    if (correct) setCorrectCount((c) => c + 1);
  }

  function handleContinue() {
    if (index + 1 < exercises.length) {
      setIndex((i) => i + 1);
      setValue("");
      setChecked(false);
      setIsCorrect(null);
    } else {
      const xp = correctCount * XP_PER_CORRECT;
      const updated = recordLessonComplete(loadProgress(), lesson.id, xp);
      setFinished(updated);
    }
  }

  if (finished) {
    const accuracy = exercises.length > 0 ? Math.round((correctCount / exercises.length) * 100) : 0;
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-sm w-full text-center bg-white rounded-2xl shadow-lg p-8">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-2xl font-extrabold text-gray-800 mb-1">Lesson complete!</h1>
          <p className="text-gray-500 mb-6">{lesson.title}</p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-yellow-50 rounded-xl py-4">
              <div className="text-2xl font-extrabold text-yellow-600">
                +{correctCount * XP_PER_CORRECT}
              </div>
              <div className="text-xs text-gray-500 font-semibold">XP EARNED</div>
            </div>
            <div className="bg-green-50 rounded-xl py-4">
              <div className="text-2xl font-extrabold text-green-600">{accuracy}%</div>
              <div className="text-xs text-gray-500 font-semibold">ACCURACY</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-orange-500 font-bold mb-8">
            🔥 {finished.streak} day streak
          </div>
          <button
            onClick={() => navigate("/")}
            className="w-full bg-duo-green hover:bg-duo-green-dark text-white font-extrabold py-3 rounded-xl border-b-4 border-duo-green-dark active:border-b-0 active:translate-y-1 transition"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  if (showIntro && lesson.grammarTips && lesson.grammarTips.length > 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
          <div className="text-5xl mb-4 text-center">📐</div>
          <h1 className="text-2xl font-extrabold text-gray-800 mb-1 text-center">{lesson.title}</h1>
          <p className="text-gray-500 text-center mb-6">A quick grammar tip before you start</p>
          <div className="flex flex-col gap-4 mb-8">
            {lesson.grammarTips.map((tip) => (
              <div key={tip.title} className="bg-purple-50 border border-purple-100 rounded-xl p-4">
                <p className="font-bold text-duo-purple mb-1">{tip.title}</p>
                <p className="text-gray-600 text-sm">{tip.body}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowIntro(false)}
            className="w-full bg-duo-green hover:bg-duo-green-dark text-white font-extrabold py-3 rounded-xl border-b-4 border-duo-green-dark active:border-b-0 active:translate-y-1 transition"
          >
            Start lesson
          </button>
        </div>
      </div>
    );
  }

  if (!current) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-4 py-4 flex items-center gap-4 max-w-2xl mx-auto w-full">
        <button
          onClick={() => navigate("/")}
          aria-label="Exit lesson"
          className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
        >
          ✕
        </button>
        <ProgressBar value={index} max={exercises.length} />
      </div>

      <div className="flex-1 flex items-start justify-center px-4">
        <div className="w-full max-w-2xl pt-6">
          <ExerciseView
            exercise={current}
            value={value}
            onChange={setValue}
            disabled={checked}
            isCorrect={isCorrect}
          />
        </div>
      </div>

      <div
        className={`px-4 py-5 border-t ${
          checked ? (isCorrect ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100") : "bg-white border-gray-100"
        }`}
      >
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          {checked ? (
            <p className={`font-extrabold text-lg ${isCorrect ? "text-duo-green" : "text-duo-red"}`}>
              {isCorrect ? "Correct! 🎉" : "Not quite"}
            </p>
          ) : (
            <span />
          )}
          {!checked ? (
            <button
              onClick={handleCheck}
              disabled={!value}
              className="ml-auto bg-duo-green disabled:bg-gray-300 hover:bg-duo-green-dark text-white font-extrabold px-8 py-3 rounded-xl border-b-4 border-duo-green-dark disabled:border-gray-400 active:border-b-0 active:translate-y-1 transition"
            >
              Check
            </button>
          ) : (
            <button
              onClick={handleContinue}
              className={`ml-auto text-white font-extrabold px-8 py-3 rounded-xl border-b-4 active:border-b-0 active:translate-y-1 transition ${
                isCorrect
                  ? "bg-duo-green hover:bg-duo-green-dark border-duo-green-dark"
                  : "bg-duo-red hover:bg-red-600 border-red-700"
              }`}
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

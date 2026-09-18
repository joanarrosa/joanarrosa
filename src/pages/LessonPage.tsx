import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findLesson } from "../data";
import { loadProgress, recordLessonComplete } from "../lib/storage";
import LessonReader from "../components/LessonReader";
import type { Progress } from "../types";

const LESSON_COMPLETION_XP = 20;

export default function LessonPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const found = lessonId ? findLesson(lessonId) : null;

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
  const cardCount =
    lesson.words.length + (lesson.conjugations?.length ?? 0) + (lesson.sentences?.length ?? 0);

  function handleDone() {
    const updated = recordLessonComplete(loadProgress(), lesson.id, LESSON_COMPLETION_XP);
    setFinished(updated);
  }

  if (finished) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-sm w-full text-center bg-white rounded-2xl shadow-lg p-8">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-2xl font-extrabold text-gray-800 mb-1">Lesson complete!</h1>
          <p className="text-gray-500 mb-6">{lesson.title}</p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-yellow-50 rounded-xl py-4">
              <div className="text-2xl font-extrabold text-yellow-600">+{LESSON_COMPLETION_XP}</div>
              <div className="text-xs text-gray-500 font-semibold">XP EARNED</div>
            </div>
            <div className="bg-green-50 rounded-xl py-4">
              <div className="text-2xl font-extrabold text-green-600">{cardCount}</div>
              <div className="text-xs text-gray-500 font-semibold">THINGS LEARNED</div>
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

  return <LessonReader lesson={lesson} onDone={handleDone} />;
}

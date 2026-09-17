import { useNavigate } from "react-router-dom";
import type { Lesson } from "../types";

interface LessonNodeProps {
  lesson: Lesson;
  unlocked: boolean;
  completed: boolean;
  offsetClass: string;
}

const kindIcon: Record<Lesson["kind"], string> = {
  vocab: "📖",
  verbs: "🗣️",
  phrases: "💬",
  grammar: "📐",
};

export default function LessonNode({ lesson, unlocked, completed, offsetClass }: LessonNodeProps) {
  const navigate = useNavigate();

  const base =
    "w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-md border-b-4 transition active:scale-95 active:border-b-0 active:translate-y-1";

  let classes = base;
  if (!unlocked) {
    classes += " bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed";
  } else if (completed) {
    classes += " bg-duo-gold border-yellow-600 text-white cursor-pointer";
  } else {
    classes += " bg-duo-green border-duo-green-dark text-white cursor-pointer";
  }

  return (
    <div className={`flex flex-col items-center gap-1 ${offsetClass}`}>
      <button
        type="button"
        disabled={!unlocked}
        onClick={() => unlocked && navigate(`/lesson/${lesson.id}`)}
        className={classes}
        aria-label={lesson.title}
      >
        {!unlocked ? "🔒" : completed ? "✓" : kindIcon[lesson.kind]}
      </button>
      <span className="text-xs font-semibold text-gray-600 text-center max-w-[80px]">
        {lesson.title}
      </span>
    </div>
  );
}

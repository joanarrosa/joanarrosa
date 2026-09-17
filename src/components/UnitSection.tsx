import type { Progress, Unit } from "../types";
import { isLessonUnlocked, isUnitUnlocked } from "../data";
import LessonNode from "./LessonNode";

interface UnitSectionProps {
  unit: Unit;
  unitIndex: number;
  progress: Progress;
}

const offsets = ["translate-x-0", "translate-x-10", "translate-x-16", "translate-x-10", "translate-x-0", "-translate-x-10", "-translate-x-16", "-translate-x-10"];

export default function UnitSection({ unit, unitIndex, progress }: UnitSectionProps) {
  const unlocked = isUnitUnlocked(unitIndex, progress.completedLessons);

  return (
    <section className="mb-10">
      <div
        className={`rounded-2xl px-5 py-4 mb-6 text-white shadow ${
          unlocked ? "bg-duo-blue" : "bg-gray-300"
        }`}
      >
        <h2 className="text-lg font-bold">{unit.title}</h2>
        <p className="text-sm opacity-90">{unit.description}</p>
      </div>
      <div className="flex flex-col items-center gap-6">
        {unit.lessons.map((lesson, i) => (
          <LessonNode
            key={lesson.id}
            lesson={lesson}
            unlocked={isLessonUnlocked(unitIndex, i, progress.completedLessons)}
            completed={(progress.completedLessons[lesson.id] ?? 0) > 0}
            offsetClass={offsets[i % offsets.length]}
          />
        ))}
      </div>
    </section>
  );
}

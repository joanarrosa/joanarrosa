import { useEffect, useState } from "react";
import { UNITS } from "../data";
import { loadProgress } from "../lib/storage";
import type { Progress } from "../types";
import ProgressBar from "../components/ProgressBar";
import UnitSection from "../components/UnitSection";

export default function Home() {
  const [progress, setProgress] = useState<Progress | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  if (!progress) return null;

  return (
    <div className="min-h-screen pb-16">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold text-duo-green">Leer Nederlands</h1>
            <p className="text-xs text-gray-500">Learn Dutch, one lesson at a time</p>
          </div>
          <div className="flex items-center gap-3 text-sm font-bold">
            <span className="flex items-center gap-1 text-orange-500">
              🔥 {progress.streak}
            </span>
            <span className="flex items-center gap-1 text-yellow-500">
              ⭐ {progress.xp}
            </span>
          </div>
        </div>
        <div className="max-w-md mx-auto mt-2">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span>Daily goal</span>
            <span>
              {Math.min(progress.todayXp, progress.dailyGoal)} / {progress.dailyGoal} XP
            </span>
          </div>
          <ProgressBar value={progress.todayXp} max={progress.dailyGoal} />
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-8">
        {UNITS.map((unit, i) => (
          <UnitSection key={unit.id} unit={unit} unitIndex={i} progress={progress} />
        ))}
        <p className="text-center text-gray-400 text-sm mt-4">
          🎉 That's the whole course for now — more units coming soon!
        </p>
      </main>
    </div>
  );
}

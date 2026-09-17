import type { Progress } from "../types";

const STORAGE_KEY = "dutch-app-progress-v1";

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayStr(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

const defaultProgress: Progress = {
  xp: 0,
  streak: 0,
  lastActiveDate: null,
  completedLessons: {},
  dailyGoal: 30,
  todayXp: 0,
  todayDate: null,
};

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultProgress };
    const parsed = JSON.parse(raw) as Progress;
    const merged = { ...defaultProgress, ...parsed };

    // Reset today's XP counter if the day has rolled over.
    if (merged.todayDate !== todayStr()) {
      merged.todayXp = 0;
      merged.todayDate = todayStr();
    }
    return merged;
  } catch {
    return { ...defaultProgress };
  }
}

export function saveProgress(progress: Progress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // localStorage unavailable (private mode, quota, etc.) — progress just won't persist.
  }
}

/** Records a completed lesson, awards XP, and updates the daily streak. */
export function recordLessonComplete(
  progress: Progress,
  lessonId: string,
  xpEarned: number
): Progress {
  const today = todayStr();
  const next: Progress = { ...progress };

  next.xp += xpEarned;

  if (next.todayDate !== today) {
    next.todayXp = 0;
    next.todayDate = today;
  }
  next.todayXp += xpEarned;

  next.completedLessons = {
    ...next.completedLessons,
    [lessonId]: (next.completedLessons[lessonId] ?? 0) + 1,
  };

  if (next.lastActiveDate === today) {
    // already active today, streak unchanged
  } else if (next.lastActiveDate === yesterdayStr()) {
    next.streak += 1;
    next.lastActiveDate = today;
  } else {
    next.streak = 1;
    next.lastActiveDate = today;
  }

  saveProgress(next);
  return next;
}

export function isLessonComplete(progress: Progress, lessonId: string): boolean {
  return (progress.completedLessons[lessonId] ?? 0) > 0;
}

/** True if the user has been active today or yesterday (streak still "alive"). */
export function isStreakActive(progress: Progress): boolean {
  if (!progress.lastActiveDate) return false;
  return progress.lastActiveDate === todayStr() || progress.lastActiveDate === yesterdayStr();
}

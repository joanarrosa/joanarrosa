import type { Unit, Word } from "../types";
import { unit01 } from "./unit01";
import { unit02 } from "./unit02";
import { unit03 } from "./unit03";
import { unit04 } from "./unit04";
import { unit05 } from "./unit05";
import { unit06 } from "./unit06";
import { unit07 } from "./unit07";
import { unit08 } from "./unit08";
import { unit09 } from "./unit09";
import { unit10 } from "./unit10";
import { unit11 } from "./unit11";

export const UNITS: Unit[] = [
  unit01,
  unit02,
  unit03,
  unit04,
  unit05,
  unit06,
  unit07,
  unit08,
  unit09,
  unit10,
  unit11,
];

export const ALL_LESSONS = UNITS.flatMap((u) => u.lessons);

export const ALL_WORDS: Word[] = UNITS.flatMap((u) =>
  u.lessons.flatMap((l) => l.words)
);

export function findLesson(lessonId: string) {
  for (const unit of UNITS) {
    const lesson = unit.lessons.find((l) => l.id === lessonId);
    if (lesson) return { unit, lesson };
  }
  return null;
}

export function isUnitUnlocked(
  unitIndex: number,
  completedLessons: Record<string, number>
): boolean {
  if (unitIndex === 0) return true;
  const prevUnit = UNITS[unitIndex - 1];
  return prevUnit.lessons.every((l) => (completedLessons[l.id] ?? 0) > 0);
}

export function isLessonUnlocked(
  unitIndex: number,
  lessonIndex: number,
  completedLessons: Record<string, number>
): boolean {
  if (!isUnitUnlocked(unitIndex, completedLessons)) return false;
  if (lessonIndex === 0) return true;
  const prevLesson = UNITS[unitIndex].lessons[lessonIndex - 1];
  return (completedLessons[prevLesson.id] ?? 0) > 0;
}

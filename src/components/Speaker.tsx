import { speakDutch } from "../lib/tts";

interface SpeakerProps {
  text: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses: Record<NonNullable<SpeakerProps["size"]>, string> = {
  sm: "w-8 h-8 text-base",
  md: "w-11 h-11 text-xl",
  lg: "w-16 h-16 text-3xl",
};

export default function Speaker({ text, size = "md", className = "" }: SpeakerProps) {
  return (
    <button
      type="button"
      aria-label={`Listen to pronunciation of ${text}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        speakDutch(text);
      }}
      className={`inline-flex items-center justify-center rounded-full bg-sky-100 text-sky-600 hover:bg-sky-200 active:scale-95 transition ${sizeClasses[size]} ${className}`}
    >
      🔊
    </button>
  );
}

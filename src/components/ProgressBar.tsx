interface ProgressBarProps {
  value: number;
  max: number;
  colorClass?: string;
}

export default function ProgressBar({ value, max, colorClass = "bg-duo-green" }: ProgressBarProps) {
  const pct = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;
  return (
    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`h-full ${colorClass} rounded-full transition-all duration-300 ease-out`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

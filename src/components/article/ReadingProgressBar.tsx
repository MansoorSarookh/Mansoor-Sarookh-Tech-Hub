import { useReadingProgress } from '../../hooks/useReadingProgress';

export function ReadingProgressBar() {
  const progress = useReadingProgress();

  if (progress <= 1) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-neutral-200 dark:bg-neutral-800">
      <div
        className="h-full bg-blue-600 transition-all duration-75 ease-out"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}

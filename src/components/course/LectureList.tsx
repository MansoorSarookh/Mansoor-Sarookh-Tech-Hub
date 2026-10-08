import { Link } from 'react-router-dom';
import { Play, Clock } from 'lucide-react';
import { CourseLecture } from '../../types';

interface LectureListProps {
  lectures: CourseLecture[];
  activeVideoId?: string;
}

export function LectureList({ lectures, activeVideoId }: LectureListProps) {
  return (
    <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 divide-y divide-neutral-100 dark:divide-neutral-800/80 overflow-hidden">
      <div className="p-4 bg-neutral-50/70 dark:bg-neutral-900/80 flex items-center justify-between text-xs font-semibold text-neutral-700 dark:text-neutral-300">
        <span>Syllabus & Lecture List</span>
        <span className="font-mono text-neutral-500 tabular-nums">{lectures.length} Total Lectures</span>
      </div>

      {lectures.map((lec) => {
        const isActive = activeVideoId === lec.videoId;
        return (
          <div
            key={lec.id}
            className={`p-4 flex items-start gap-4 transition-colors ${
              isActive
                ? 'bg-blue-50/60 dark:bg-blue-950/20'
                : 'hover:bg-neutral-50 dark:hover:bg-neutral-800/40'
            }`}
          >
            <span className="w-7 h-7 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono text-xs font-semibold flex items-center justify-center shrink-0 tabular-nums">
              {String(lec.lectureNumber).padStart(2, '0')}
            </span>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate">
                  {lec.title}
                </h4>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-500 shrink-0 tabular-nums">
                  <Clock className="w-3 h-3" />
                  {lec.duration}
                </span>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                {lec.summary}
              </p>
            </div>

            <Link
              to={`/videos/${lec.videoId}`}
              aria-label={`Watch lecture: ${lec.title}`}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

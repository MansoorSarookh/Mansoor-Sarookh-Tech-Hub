import { Link } from 'react-router-dom';
import { PlayCircle, Clock } from 'lucide-react';
import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 overflow-hidden shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 flex flex-col h-full">
      <div className="aspect-16/9 w-full overflow-hidden bg-neutral-900 relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-neutral-950/30 group-hover:bg-neutral-950/20 transition-colors flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-black/70 backdrop-blur-xs text-white flex items-center justify-center group-hover:scale-110 transition-transform">
            <PlayCircle className="w-6 h-6 fill-white/20 text-white" />
          </div>
        </div>
        <div className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-xs text-white text-[11px] px-2 py-0.5 rounded font-medium">
          YouTube Course
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Zero-Pill Unboxed Metadata */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-2 font-medium">
            <span>{course.category}</span>
            <span aria-hidden="true">·</span>
            <span>{course.difficulty}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{course.lectureCount} Lectures</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-2 line-clamp-2">
            <Link to={`/courses/${course.slug}`}>{course.title}</Link>
          </h3>

          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed mb-4">
            {course.description}
          </p>
        </div>

        <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-neutral-500">
            <Clock className="w-3.5 h-3.5" />
            <span className="tabular-nums">{course.totalDuration || 'Comprehensive'}</span>
          </div>
          <Link
            to={`/courses/${course.slug}`}
            className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 group-hover:underline"
          >
            Watch Course
          </Link>
        </div>
      </div>
    </article>
  );
}

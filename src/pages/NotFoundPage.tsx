import { Link } from 'react-router-dom';
import { Home, BookOpen, GraduationCap, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="py-24 max-w-xl mx-auto px-4 text-center">
      <div className="inline-block px-3 py-1 mb-4 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-xs font-mono font-semibold text-neutral-600 dark:text-neutral-400">
        404 ERROR
      </div>

      <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-4">
        Looks like this page went off the grid.
      </h1>

      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
        The link you followed may be broken or the content may have been relocated across the Mansoor Sarookh Tech Hub.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
        >
          <Home className="w-3.5 h-3.5" /> Back Home
        </Link>

        <Link
          to="/articles"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" /> Explore Articles
        </Link>

        <Link
          to="/courses"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
        >
          <GraduationCap className="w-3.5 h-3.5" /> Explore Courses
        </Link>
      </div>
    </div>
  );
}

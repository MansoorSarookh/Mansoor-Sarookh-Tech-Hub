import { ReactNode } from 'react';
import { Search, FolderOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
  icon?: ReactNode;
}

export function EmptyState({
  title = 'No items found',
  description = 'Try adjusting your search filters or check back soon for newly published content.',
  actionText = 'Explore all topics',
  actionHref = '/topics',
  icon,
}: EmptyStateProps) {
  return (
    <div className="py-16 px-6 text-center rounded-2xl border border-dashed border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30">
      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 flex items-center justify-center">
        {icon || <FolderOpen className="w-6 h-6" />}
      </div>
      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
        {title}
      </h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm mx-auto mb-6">
        {description}
      </p>
      {actionHref && actionText && (
        <Link
          to={actionHref}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
        >
          {actionText} <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      )}
    </div>
  );
}

export function SearchEmptyState({ onClear }: { onClear?: () => void }) {
  return (
    <div className="py-12 px-4 text-center">
      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-400 flex items-center justify-center">
        <Search className="w-5 h-5" />
      </div>
      <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
        No results found
      </h3>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-xs mx-auto mb-4">
        We couldn&apos;t find any articles, courses, or projects matching your search query.
      </p>
      {onClear && (
        <button
          type="button"
          onClick={onClear}
          className="px-3 py-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          Clear query & reset filters
        </button>
      )}
    </div>
  );
}

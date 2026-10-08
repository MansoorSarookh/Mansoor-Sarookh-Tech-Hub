import { Link } from 'react-router-dom';
import { Compass, FileText, Code2, BookMarked, ArrowUpRight } from 'lucide-react';
import { Resource } from '../../types';

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const getIcon = () => {
    switch (resource.type) {
      case 'roadmap':
        return <Compass className="w-4 h-4 text-indigo-500" />;
      case 'cheatsheet':
        return <FileText className="w-4 h-4 text-emerald-500" />;
      case 'snippet':
        return <Code2 className="w-4 h-4 text-amber-500" />;
      default:
        return <BookMarked className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <article className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-5 shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800">
            {getIcon()}
          </div>
          {/* Zero-Pill Unboxed Type Label */}
          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            {resource.type}
          </span>
        </div>

        <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-2">
          <Link to={`/resources/${resource.slug}`}>{resource.title}</Link>
        </h3>

        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed mb-4">
          {resource.description}
        </p>

        {/* Zero-Pill Tags */}
        <div className="flex flex-wrap items-center gap-x-2 text-xs text-neutral-500 dark:text-neutral-400 font-mono mb-4">
          <span>{resource.topic}</span>
          <span aria-hidden="true">·</span>
          <span>{resource.tags.slice(0, 2).join(' · ')}</span>
        </div>
      </div>

      <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs">
        <span className="text-neutral-500">Curated Reference</span>
        <Link
          to={`/resources/${resource.slug}`}
          className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 group-hover:underline"
        >
          View Resource <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}

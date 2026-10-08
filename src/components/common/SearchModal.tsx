import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, GraduationCap, Video, FolderGit2, FileText, ArrowRight } from 'lucide-react';
import { useSearch } from '../../hooks/useSearch';
import { ContentType } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const { query, setQuery, filterType, setFilterType, results, totalCount, clearQuery } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (url: string) => {
    navigate(url);
    onClose();
  };

  const getTypeIcon = (type: ContentType) => {
    switch (type) {
      case 'article':
        return <BookOpen className="w-3.5 h-3.5 text-blue-500" />;
      case 'course':
        return <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />;
      case 'video':
        return <Video className="w-3.5 h-3.5 text-rose-500" />;
      case 'project':
        return <FolderGit2 className="w-3.5 h-3.5 text-amber-500" />;
      case 'resource':
        return <FileText className="w-3.5 h-3.5 text-emerald-500" />;
      default:
        return <Search className="w-3.5 h-3.5 text-neutral-400" />;
    }
  };

  const filterOptions: { label: string; value: 'all' | ContentType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Articles', value: 'article' },
    { label: 'Courses', value: 'course' },
    { label: 'Videos', value: 'video' },
    { label: 'Projects', value: 'project' },
    { label: 'Resources', value: 'resource' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-neutral-950/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-label="Search content"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-neutral-200 dark:border-neutral-800 gap-3">
          <Search className="w-5 h-5 text-neutral-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, courses, videos, projects, resources..."
            className="w-full bg-transparent text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={clearQuery}
              className="p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 rounded"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-2 py-1 text-[11px] font-mono text-neutral-500 bg-neutral-100 dark:bg-neutral-800 rounded border border-neutral-200 dark:border-neutral-700"
          >
            ESC
          </button>
        </div>

        {/* Filter Segmented Control (Anti-slop clean buttons) */}
        <div className="flex items-center gap-1 px-4 py-2 bg-neutral-50/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800 overflow-x-auto no-scrollbar">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setFilterType(opt.value)}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                filterType === opt.value
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800'
              }`}
            >
              {opt.label}
            </button>
          ))}
          <span className="ml-auto text-[11px] text-neutral-400 font-mono whitespace-nowrap pl-2">
            {totalCount} results
          </span>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 divide-y divide-neutral-100 dark:divide-neutral-800/50">
          {results.length > 0 ? (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item.url)}
                className="group flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-100/80 dark:hover:bg-neutral-800/60 cursor-pointer transition-colors"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSelect(item.url);
                }}
              >
                <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 shrink-0 mt-0.5">
                  {getTypeIcon(item.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-0.5">
                    <span className="capitalize font-medium text-neutral-700 dark:text-neutral-300">
                      {item.type}
                    </span>
                    {item.category && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="truncate">{item.category}</span>
                      </>
                    )}
                  </div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity self-center shrink-0" />
              </div>
            ))
          ) : (
            <div className="py-12 text-center">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                No matching results found
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Try searching for keywords like &ldquo;React&rdquo;, &ldquo;Security&rdquo;, &ldquo;Raft&rdquo;, or &ldquo;DataPilot&rdquo;.
              </p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex items-center justify-between text-[11px] text-neutral-500">
          <span>Navigate with mouse or Tab + Enter</span>
          <span>Mansoor Sarookh Tech Hub Search</span>
        </div>
      </div>
    </div>
  );
}

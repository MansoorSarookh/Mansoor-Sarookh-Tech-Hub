import { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, X, BookOpen, GraduationCap, Video, FolderGit2, FileText, ArrowRight } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ContentType } from '../types';

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialType = (searchParams.get('type') as ContentType) || 'all';

  const { query, setQuery, filterType, setFilterType, results, totalCount, clearQuery } = useSearch();

  useEffect(() => {
    if (initialQuery && initialQuery !== query) {
      setQuery(initialQuery);
    }
    if (initialType && initialType !== filterType) {
      setFilterType(initialType);
    }
  }, []);

  const handleQueryChange = (val: string) => {
    setQuery(val);
    if (val) {
      searchParams.set('q', val);
    } else {
      searchParams.delete('q');
    }
    setSearchParams(searchParams);
  };

  const handleTypeChange = (typeVal: 'all' | ContentType) => {
    setFilterType(typeVal);
    if (typeVal !== 'all') {
      searchParams.set('type', typeVal);
    } else {
      searchParams.delete('type');
    }
    setSearchParams(searchParams);
  };

  const filterOptions: { label: string; value: 'all' | ContentType }[] = [
    { label: 'All Content', value: 'all' },
    { label: 'Articles', value: 'article' },
    { label: 'Courses', value: 'course' },
    { label: 'Videos', value: 'video' },
    { label: 'Projects', value: 'project' },
    { label: 'Resources', value: 'resource' },
  ];

  const getTypeIcon = (type: ContentType) => {
    switch (type) {
      case 'article':
        return <BookOpen className="w-4 h-4 text-blue-500" />;
      case 'course':
        return <GraduationCap className="w-4 h-4 text-indigo-500" />;
      case 'video':
        return <Video className="w-4 h-4 text-rose-500" />;
      case 'project':
        return <FolderGit2 className="w-4 h-4 text-amber-500" />;
      case 'resource':
        return <FileText className="w-4 h-4 text-emerald-500" />;
      default:
        return <Search className="w-4 h-4 text-neutral-400" />;
    }
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Search' }]} className="mb-6" />

      {/* Header */}
      <div className="max-w-3xl mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white mb-3">
          Search the Tech Hub
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Instant multi-format discovery across technical articles, video courses, YouTube lectures, code projects, and roadmaps.
        </p>
      </div>

      {/* Search Input Box */}
      <div className="max-w-2xl mb-6">
        <div className="relative">
          <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Type concepts, algorithms, frameworks, or project names..."
            className="w-full pl-11 pr-10 py-3 text-sm rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-xs"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                clearQuery();
                searchParams.delete('q');
                setSearchParams(searchParams);
              }}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Type Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 mb-8">
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => handleTypeChange(opt.value)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
              filterType === opt.value
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60'
            }`}
          >
            {opt.label}
          </button>
        ))}
        <span className="text-xs font-mono text-neutral-400 ml-auto whitespace-nowrap tabular-nums">
          {totalCount} results
        </span>
      </div>

      {/* Results List */}
      {results.length > 0 ? (
        <div className="space-y-4 max-w-4xl">
          {results.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              className="group block p-5 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50/50 dark:hover:bg-neutral-800/40 transition-all shadow-xs"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 shrink-0 mt-0.5">
                  {getTypeIcon(item.type)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-medium mb-1">
                    <span className="uppercase text-blue-600 dark:text-blue-400 font-semibold">{item.type}</span>
                    {item.category && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{item.category}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1 truncate">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all self-center shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center max-w-md mx-auto">
          <p className="text-base font-semibold text-neutral-900 dark:text-white mb-2">
            No matching items found
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
            We couldn&apos;t find any content matching &ldquo;{query}&rdquo;. Try another term or explore by core discipline.
          </p>
          <Link
            to="/topics"
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
          >
            Explore Topics Directory
          </Link>
        </div>
      )}
    </div>
  );
}

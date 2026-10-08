import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, BookOpen, SlidersHorizontal } from 'lucide-react';
import { articlesData } from '../data/articles';
import { ArticleCard } from '../components/article/ArticleCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { EmptyState } from '../components/common/EmptyState';

export function ArticlesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<'latest' | 'readingTime'>('latest');

  const categories = ['All', 'Web Development', 'Cybersecurity', 'Computer Science', 'Software Engineering', 'Communication Skills'];

  const filteredArticles = useMemo(() => {
    return articlesData
      .filter((art) => {
        const matchesCategory =
          selectedCategory === 'All' || art.category.toLowerCase() === selectedCategory.toLowerCase();
        const matchesQuery =
          searchQuery.trim() === '' ||
          art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesQuery;
      })
      .sort((a, b) => {
        if (sortBy === 'readingTime') {
          return b.readingTime - a.readingTime;
        }
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      });
  }, [selectedCategory, searchQuery, sortBy]);

  const featuredArticle = articlesData.find((a) => a.featured);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Articles' }]} className="mb-6" />

      {/* Page Header */}
      <div className="max-w-3xl mb-10">
        <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
          Knowledge Base & Editorial
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white mt-1 mb-3">
          Articles, Tutorials & Architecture Guides
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Deep technical explanations, code walkthroughs, and practical guides by Mansoor Sarookh. Designed for software engineers, students, and curious builders.
        </p>
      </div>

      {/* Featured Article Spotlight */}
      {featuredArticle && selectedCategory === 'All' && !searchQuery && (
        <div className="mb-12">
          <ArticleCard article={featuredArticle} variant="featured" />
        </div>
      )}

      {/* Controls Bar: Search + Category Filters + Sorting */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search in articles..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-neutral-500">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'latest' | 'readingTime')}
              className="px-2.5 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs font-medium text-neutral-800 dark:text-neutral-200 focus:outline-none"
            >
              <option value="latest">Latest Published</option>
              <option value="readingTime">Reading Time</option>
            </select>
          </div>
        </div>

        {/* Category Segmented Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryChange(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory.toLowerCase() === cat.toLowerCase()
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="standard" />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No articles match your criteria"
          description="Try clearing your search term or choosing another category filter."
          actionText="Reset filters"
          actionHref="/articles"
          icon={<BookOpen className="w-6 h-6" />}
        />
      )}
    </div>
  );
}

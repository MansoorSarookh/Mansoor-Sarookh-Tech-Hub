import { useState, useMemo } from 'react';
import { Search, BookMarked } from 'lucide-react';
import { resourcesData } from '../data/resources';
import { ResourceCard } from '../components/resource/ResourceCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { EmptyState } from '../components/common/EmptyState';
import { ResourceType } from '../types';

export function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');

  const types: { label: string; value: string }[] = [
    { label: 'All Resources', value: 'All' },
    { label: 'Roadmaps', value: 'roadmap' },
    { label: 'Cheat Sheets', value: 'cheatsheet' },
    { label: 'Code Snippets', value: 'snippet' },
    { label: 'Learning Guides', value: 'guide' },
  ];

  const filteredResources = useMemo(() => {
    return resourcesData.filter((res) => {
      const matchType =
        selectedType === 'All' || res.type.toLowerCase() === selectedType.toLowerCase();
      const matchQuery =
        searchQuery.trim() === '' ||
        res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchType && matchQuery;
    });
  }, [selectedType, searchQuery]);

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Resources' }]} className="mb-6" />

      {/* Header */}
      <div className="max-w-3xl mb-10">
        <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
          Study Materials & Tools
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white mt-1 mb-3">
          Learning Roadmaps, Cheat Sheets & Snippets
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
          High-yield educational assets curated by Mansoor Sarookh to accelerate learning. Step-by-step developer roadmaps, cryptographic cheat sheets, architectural design patterns, and verified code templates.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search roadmaps, cheat sheets, snippets..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Type Segmented Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {types.map((t) => (
              <button
                key={t.value}
                type="button"
                onClick={() => setSelectedType(t.value)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  selectedType.toLowerCase() === t.value.toLowerCase()
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No resources found"
          description="Try searching for a different term or resetting the resource type."
          actionText="Reset filters"
          actionHref="/resources"
          icon={<BookMarked className="w-6 h-6" />}
        />
      )}
    </div>
  );
}

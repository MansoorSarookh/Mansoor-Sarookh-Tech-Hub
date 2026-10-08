import { useState, useMemo } from 'react';
import { Search, GraduationCap } from 'lucide-react';
import { coursesData } from '../data/courses';
import { CourseCard } from '../components/course/CourseCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { EmptyState } from '../components/common/EmptyState';

export function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const categories = ['All', 'Cybersecurity', 'Computer Science', 'Software Engineering', 'Web Development', 'Communication Skills', 'Professional Development'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = useMemo(() => {
    return coursesData.filter((crs) => {
      const matchCat =
        selectedCategory === 'All' || crs.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchDiff =
        selectedDifficulty === 'All' || crs.difficulty === selectedDifficulty;
      const matchQuery =
        searchQuery.trim() === '' ||
        crs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        crs.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCat && matchDiff && matchQuery;
    });
  }, [selectedCategory, selectedDifficulty, searchQuery]);

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Courses' }]} className="mb-6" />

      {/* Page Header */}
      <div className="max-w-3xl mb-10">
        <span className="text-xs font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 font-semibold">
          Curated YouTube Course Catalog
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white mt-1 mb-3">
          Video Courses & Educational Playlists
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Structured university-grade technology lecture courses designed and instructed by Mansoor Sarookh. Free, complete, and integrated with code repositories and study guides.
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
              placeholder="Search courses by subject..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-neutral-500">
            <span>Difficulty:</span>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs font-medium text-neutral-800 dark:text-neutral-200 focus:outline-none"
            >
              {difficulties.map((diff) => (
                <option key={diff} value={diff}>
                  {diff}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
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

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No courses found"
          description="Try broadening your category filter or clearing the search text."
          actionText="Reset filters"
          actionHref="/courses"
          icon={<GraduationCap className="w-6 h-6" />}
        />
      )}
    </div>
  );
}

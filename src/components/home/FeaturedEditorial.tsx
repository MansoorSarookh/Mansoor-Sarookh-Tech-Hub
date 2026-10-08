import { Link } from 'react-router-dom';
import { ArrowUpRight, Play, Compass, FileCode2 } from 'lucide-react';
import { articlesData } from '../../data/articles';
import { coursesData } from '../../data/courses';
import { projectsData } from '../../data/projects';

export function FeaturedEditorial() {
  const featuredArticle = articlesData.find((a) => a.slug === 'understanding-usememo-usecallback-react') || articlesData[0];
  const relatedCourse = coursesData.find((c) => c.slug === 'react-deep-dive') || coursesData[0];
  const relatedProject = projectsData.find((p) => p.slug === 'devknowledge-graph') || projectsData[0];

  return (
    <section className="py-14 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Interconnected Knowledge Spotlight
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mt-1">
              From Concept to Video to Architecture
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-md">
            Explore how theoretical principles in written articles connect directly with video course playlists and practical software prototypes.
          </p>
        </div>

        {/* Editorial Composition Card */}
        <div className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200/80 dark:divide-neutral-800">
            {/* Primary Article Anchor (Col 7) */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-medium mb-3">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">Featured Editorial Guide</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredArticle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredArticle.readingTime} min read</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white leading-tight mb-4">
                  <Link
                    to={`/articles/${featuredArticle.slug}`}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {featuredArticle.title}
                  </Link>
                </h3>

                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>

                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800 mb-6 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-mono">
                  &ldquo;Memoization is not free. Wrapping every primitive in useCallback bloats the bundle and complicates code readability. Measure before memoizing.&rdquo;
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-neutral-100 dark:border-neutral-800">
                <span className="text-xs text-neutral-500">By {featuredArticle.author}</span>
                <Link
                  to={`/articles/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
                >
                  Read Comprehensive Guide <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Connected Ecosystem Links (Col 5) */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-neutral-50/60 dark:bg-neutral-900/60 flex flex-col justify-between space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
                  Connected Learning Graph
                </h4>

                {/* 1. Related Course */}
                <div className="mb-5 p-4 rounded-xl bg-white dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/60 shadow-xs">
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 mb-1.5">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Full Course on YouTube</span>
                  </div>
                  <h5 className="text-sm font-bold text-neutral-900 dark:text-white mb-1">
                    <Link to={`/courses/${relatedCourse.slug}`} className="hover:underline">
                      {relatedCourse.title}
                    </Link>
                  </h5>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 mb-2">
                    {relatedCourse.description}
                  </p>
                  <Link
                    to={`/courses/${relatedCourse.slug}`}
                    className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 hover:text-blue-600 flex items-center gap-1"
                  >
                    Watch course playlist <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* 2. Related Project Prototype */}
                <div className="p-4 rounded-xl bg-white dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/60 shadow-xs">
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-amber-600 dark:text-amber-400 mb-1.5">
                    <FileCode2 className="w-3.5 h-3.5" />
                    <span>Inspect Practical Code Application</span>
                  </div>
                  <h5 className="text-sm font-bold text-neutral-900 dark:text-white mb-1">
                    <Link to={`/projects/${relatedProject.slug}`} className="hover:underline">
                      {relatedProject.title}
                    </Link>
                  </h5>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 mb-2">
                    {relatedProject.tagline}
                  </p>
                  <Link
                    to={`/projects/${relatedProject.slug}`}
                    className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 hover:text-blue-600 flex items-center gap-1"
                  >
                    View project architecture <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Related Roadmap Link */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-blue-500" />
                  <span>Step-by-step roadmap available</span>
                </span>
                <Link
                  to="/resources/react-learning-roadmap"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Explore Path →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, BookOpen, GraduationCap, FolderGit2 } from 'lucide-react';
import { siteConfig } from '../../config/site';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-neutral-200/80 dark:border-neutral-800/80">
      {/* Subtle background technical grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          {/* Subtle Editorial Kicker (No Pill Enclosure) */}
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Personal Technology Knowledge Ecosystem</span>
            <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
            <span>By {siteConfig.brand.name}</span>
          </div>

          {/* Primary Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-6 text-balance">
            {siteConfig.brand.tagline}
          </h1>

          {/* Supporting Statement */}
          <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 max-w-2xl">
            Practical knowledge in Computer Science, Artificial Intelligence, Web Development, Software Engineering, and Data Science. Combining in-depth technical writing, structured YouTube video courses, real software projects, and curated learning roadmaps.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
            <Link
              to="/articles"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-xs transition-all hover:gap-3"
            >
              <span>Explore Learning</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl transition-colors shadow-xs"
            >
              <span>View Projects</span>
            </Link>

            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <GraduationCap className="w-4 h-4 text-indigo-500" />
              <span>Video Courses</span>
            </Link>
          </div>

          {/* 3-Core Conceptual Model Proof Points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-neutral-200/60 dark:border-neutral-800/60">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-bold text-neutral-900 dark:text-neutral-100">
                  01. Learn Deeply
                </h2>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-snug">
                  Articles, tutorials, roadmaps, and structured YouTube courses.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 shrink-0">
                <FolderGit2 className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-bold text-neutral-900 dark:text-neutral-100">
                  02. Build Real Systems
                </h2>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-snug">
                  Production tools, AI pipelines, and open GitHub repositories.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-bold text-neutral-900 dark:text-neutral-100">
                  03. Share Generously
                </h2>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-snug">
                  Curated cheat sheets, public lectures, and developer guides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

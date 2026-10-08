import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../../config/site';

export function AboutAuthorPreview() {
  const { author } = siteConfig;

  return (
    <section className="py-16 border-b border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 sm:p-10 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Author Portrait */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 sm:w-60 aspect-square rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border-2 border-neutral-200/80 dark:border-neutral-700 shadow-md">
                <img
                  src={author.avatar}
                  alt={author.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Author Details & Philosophy */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
                  About the Creator & Educator
                </span>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mt-1 mb-2">
                  Mansoor Sarookh
                </h2>

                <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
                  {author.role}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                  {author.bio}
                </p>

                {/* Core Values */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>Focus on foundational first principles over ephemeral tech trends</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>Every conceptual article connects to actionable code and video</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>Open-source software projects with clean reproducible repositories</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>High clarity, jargon-free explanations designed for real comprehension</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-500">Based in {author.location}</span>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
                >
                  Read Full Journey & Philosophy <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

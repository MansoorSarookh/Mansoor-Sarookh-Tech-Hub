import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Article } from '../../types';

interface ArticleCardProps {
  article: Article;
  variant?: 'featured' | 'standard' | 'compact';
}

export function ArticleCard({ article, variant = 'standard' }: ArticleCardProps) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  if (variant === 'featured') {
    return (
      <article className="group relative rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 sm:p-8 shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        {article.coverImage && (
          <div className="w-full md:w-5/12 aspect-16/10 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 shrink-0 relative">
            <img
              src={article.coverImage}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Zero-Pill Unboxed Metadata */}
            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-2 font-medium">
              <span>{article.category}</span>
              <span aria-hidden="true">·</span>
              <span>{formattedDate}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readingTime} min read</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight mb-3">
              <Link to={`/articles/${article.slug}`} className="focus:outline-none">
                {article.title}
              </Link>
            </h3>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed mb-4">
              {article.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800/80 text-xs text-neutral-500">
            <span>By {article.author}</span>
            <Link
              to={`/articles/${article.slug}`}
              className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 group-hover:underline"
            >
              Read full article <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className="group flex flex-col justify-between p-4 rounded-xl border border-neutral-200/60 dark:border-neutral-800/80 hover:bg-neutral-50/50 dark:hover:bg-neutral-800/40 transition-colors">
        <div>
          <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 dark:text-neutral-400 mb-1.5">
            <span>{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}m read</span>
          </div>
          <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            <Link to={`/articles/${article.slug}`}>{article.title}</Link>
          </h4>
        </div>
        <span className="text-[11px] text-neutral-400 mt-2 block">{formattedDate}</span>
      </article>
    );
  }

  // Standard Card
  return (
    <article className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 overflow-hidden shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 flex flex-col h-full">
      {article.coverImage && (
        <div className="aspect-16/9 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative">
          <img
            src={article.coverImage}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Zero-Pill Unboxed Metadata */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-2 font-medium">
            <span>{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{formattedDate}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime} min read</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-2 line-clamp-2">
            <Link to={`/articles/${article.slug}`}>{article.title}</Link>
          </h3>

          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed mb-4">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500">
          <span>{article.author}</span>
          <Link
            to={`/articles/${article.slug}`}
            className="inline-flex items-center gap-1 font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400"
          >
            Read <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

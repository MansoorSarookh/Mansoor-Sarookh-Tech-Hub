import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Play, GraduationCap, FolderGit2 } from 'lucide-react';
import { articlesData } from '../data/articles';
import { coursesData } from '../data/courses';
import { videosData } from '../data/videos';
import { projectsData } from '../data/projects';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { TableOfContents } from '../components/article/TableOfContents';
import { ReadingProgressBar } from '../components/article/ReadingProgressBar';
import { ShareButtons } from '../components/common/ShareButtons';
import { CodeBlock } from '../components/common/CodeBlock';
import { ArticleCard } from '../components/article/ArticleCard';

export function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="py-20 max-w-xl mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
          Article Not Found
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          The article you requested could not be located. It may have been relocated or renamed.
        </p>
        <Link
          to="/articles"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to all articles
        </Link>
      </div>
    );
  }

  // Related entities
  const relatedVideosList = (article.relatedVideos || [])
    .map((vidSlug) => videosData.find((v) => v.slug === vidSlug))
    .filter(Boolean);

  const relatedCoursesList = (article.relatedCourses || [])
    .map((crsSlug) => coursesData.find((c) => c.slug === crsSlug))
    .filter(Boolean);

  const relatedProjectsList = (article.relatedProjects || [])
    .map((prjSlug) => projectsData.find((p) => p.slug === prjSlug))
    .filter(Boolean);

  const relatedArticlesList = (article.relatedArticles || [])
    .map((artSlug) => articlesData.find((a) => a.slug === artSlug))
    .filter(Boolean);

  // Prev / Next articles
  const currentIndex = articlesData.findIndex((a) => a.slug === article.slug);
  const prevArticle = currentIndex > 0 ? articlesData[currentIndex - 1] : null;
  const nextArticle = currentIndex < articlesData.length - 1 ? articlesData[currentIndex + 1] : null;

  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // Render article content with clean formatting & inline code blocks
  const renderFormattedContent = (content: string) => {
    const parts = content.split(/(```[\s\S]*?```)/g);

    return parts.map((part, index) => {
      if (part.startsWith('```')) {
        const lines = part.slice(3, -3).trim().split('\n');
        const firstLine = lines[0].trim();
        const language = firstLine.match(/^[a-zA-Z0-9_-]+$/) ? firstLine : 'typescript';
        const code = (firstLine.match(/^[a-zA-Z0-9_-]+$/) ? lines.slice(1) : lines).join('\n');
        return <CodeBlock key={index} code={code} language={language} />;
      }

      // Render headings, blockquotes, and paragraphs
      const blocks = part.split(/\n\n+/);
      return (
        <div key={index} className="space-y-5">
          {blocks.map((block, bIdx) => {
            const trimmed = block.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith('## ')) {
              const text = trimmed.replace('## ', '');
              const headingId = text
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
              return (
                <h2
                  key={bIdx}
                  id={headingId}
                  className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 pt-6 mt-6 pb-2 border-b border-neutral-100 dark:border-neutral-800 scroll-mt-24"
                >
                  {text}
                </h2>
              );
            }

            if (trimmed.startsWith('### ')) {
              const text = trimmed.replace('### ', '');
              const headingId = text
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
              return (
                <h3
                  key={bIdx}
                  id={headingId}
                  className="text-lg font-bold text-neutral-900 dark:text-neutral-100 pt-4 scroll-mt-24"
                >
                  {text}
                </h3>
              );
            }

            if (trimmed.startsWith('> ')) {
              const quote = trimmed.replace(/^>\s*/gm, '');
              return (
                <blockquote
                  key={bIdx}
                  className="p-4 my-4 rounded-xl border-l-4 border-blue-600 bg-blue-50/50 dark:bg-blue-950/20 text-neutral-700 dark:text-neutral-300 italic text-sm leading-relaxed"
                >
                  {quote}
                </blockquote>
              );
            }

            return (
              <p
                key={bIdx}
                className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal"
              >
                {trimmed}
              </p>
            );
          })}
        </div>
      );
    });
  };

  return (
    <>
      <ReadingProgressBar />

      <article className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Articles', href: '/articles' },
            { label: article.title },
          ]}
          className="mb-8"
        />

        {/* Header Block */}
        <header className="max-w-3xl mb-10">
          {/* Zero-Pill Unboxed Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-medium mb-3">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formattedDate}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readingTime} min read
            </span>
            {article.updatedAt && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-neutral-400">Updated {article.updatedAt}</span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-[1.15] mb-6">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-200/80 dark:border-neutral-800 text-xs">
            <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 font-medium">
              <User className="w-4 h-4 text-neutral-400" />
              <span>Written by {article.author}</span>
            </div>
            <ShareButtons title={article.title} />
          </div>
        </header>

        {/* Hero Image */}
        {article.coverImage && (
          <div className="max-w-4xl mb-12 rounded-2xl overflow-hidden aspect-21/9 bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs">
            <img
              src={article.coverImage}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Article Content (Col 8) */}
          <div className="lg:col-span-8 max-w-prose">
            <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-800 dark:text-neutral-200">
              {renderFormattedContent(article.content)}
            </div>

            {/* Interconnected Video Banner (PRD Feature: "Prefer watching?") */}
            {relatedVideosList.length > 0 && (
              <div className="my-10 p-5 rounded-2xl border border-rose-200/80 dark:border-rose-900/40 bg-rose-50/50 dark:bg-rose-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-rose-600 text-white shrink-0 mt-0.5 sm:mt-0">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 font-semibold">
                      Prefer Watching?
                    </span>
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white mt-0.5">
                      {relatedVideosList[0]?.title}
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                      Watch Mansoor Sarookh&apos;s full video explanation on YouTube.
                    </p>
                  </div>
                </div>

                <Link
                  to={`/videos/${relatedVideosList[0]?.slug}`}
                  className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-rose-600 hover:bg-rose-500 text-white shadow-xs transition-colors whitespace-nowrap self-stretch sm:self-auto text-center"
                >
                  Watch Video Lecture
                </Link>
              </div>
            )}

            {/* Prev & Next Article Navigation */}
            <div className="my-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevArticle ? (
                <Link
                  to={`/articles/${prevArticle.slug}`}
                  className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-blue-500/80 transition-colors flex flex-col"
                >
                  <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1 mb-1">
                    <ArrowLeft className="w-3 h-3" /> Previous Article
                  </span>
                  <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 line-clamp-1">
                    {prevArticle.title}
                  </span>
                </Link>
              ) : <div />}

              {nextArticle ? (
                <Link
                  to={`/articles/${nextArticle.slug}`}
                  className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-blue-500/80 transition-colors flex flex-col sm:items-end text-left sm:text-right"
                >
                  <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1 mb-1 sm:justify-end">
                    Next Article <ArrowRight className="w-3 h-3" />
                  </span>
                  <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 line-clamp-1">
                    {nextArticle.title}
                  </span>
                </Link>
              ) : <div />}
            </div>
          </div>

          {/* Sticky Sidebar: Table of Contents + Ecosystem Context (Col 4) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            {/* Table of contents */}
            {article.tableOfContents && article.tableOfContents.length > 0 && (
              <TableOfContents items={article.tableOfContents} />
            )}

            {/* Connected Course Widget */}
            {relatedCoursesList.length > 0 && (
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 text-xs">
                <div className="flex items-center gap-1.5 font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  <GraduationCap className="w-4 h-4 text-indigo-500" />
                  <span>Related Course Playlist</span>
                </div>
                <h4 className="font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                  <Link to={`/courses/${relatedCoursesList[0]?.slug}`} className="hover:underline">
                    {relatedCoursesList[0]?.title}
                  </Link>
                </h4>
                <p className="text-neutral-500 dark:text-neutral-400 line-clamp-2 mb-3">
                  {relatedCoursesList[0]?.description}
                </p>
                <Link
                  to={`/courses/${relatedCoursesList[0]?.slug}`}
                  className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Explore Course Curriculum →
                </Link>
              </div>
            )}

            {/* Connected Project Widget */}
            {relatedProjectsList.length > 0 && (
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 text-xs">
                <div className="flex items-center gap-1.5 font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  <FolderGit2 className="w-4 h-4 text-amber-500" />
                  <span>Implemented in Project</span>
                </div>
                <h4 className="font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                  <Link to={`/projects/${relatedProjectsList[0]?.slug}`} className="hover:underline">
                    {relatedProjectsList[0]?.title}
                  </Link>
                </h4>
                <p className="text-neutral-500 dark:text-neutral-400 line-clamp-2 mb-3">
                  {relatedProjectsList[0]?.tagline}
                </p>
                <Link
                  to={`/projects/${relatedProjectsList[0]?.slug}`}
                  className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Case Study & Repo →
                </Link>
              </div>
            )}
          </aside>
        </div>

        {/* Related Articles Section */}
        {relatedArticlesList.length > 0 && (
          <section className="mt-16 pt-12 border-t border-neutral-200 dark:border-neutral-800">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
              Related Articles & Deep Dives
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticlesList.map((relArt) => (
                relArt && <ArticleCard key={relArt.id} article={relArt} variant="standard" />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}

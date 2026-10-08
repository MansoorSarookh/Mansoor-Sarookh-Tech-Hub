import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, GraduationCap, Compass, FileText, Code2, Share2 } from 'lucide-react';
import { resourcesData } from '../data/resources';
import { articlesData } from '../data/articles';
import { coursesData } from '../data/courses';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { RoadmapViewer } from '../components/resource/RoadmapViewer';
import { CodeBlock } from '../components/common/CodeBlock';
import { ShareButtons } from '../components/common/ShareButtons';
import { ArticleCard } from '../components/article/ArticleCard';
import { CourseCard } from '../components/course/CourseCard';

export function ResourceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const resource = resourcesData.find((r) => r.slug === slug);

  if (!resource) {
    return (
      <div className="py-20 max-w-xl mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
          Resource Not Found
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          The requested study resource could not be found.
        </p>
        <Link
          to="/resources"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to all resources
        </Link>
      </div>
    );
  }

  const relatedArticles = (resource.relatedArticles || [])
    .map((artSlug) => articlesData.find((a) => a.slug === artSlug))
    .filter(Boolean);

  const relatedCourses = (resource.relatedCourses || [])
    .map((crsSlug) => coursesData.find((c) => c.slug === crsSlug))
    .filter(Boolean);

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Resources', href: '/resources' },
          { label: resource.title },
        ]}
        className="mb-8"
      />

      {/* Resource Header */}
      <div className="max-w-4xl mb-10">
        {/* Zero-Pill Unboxed Metadata */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-2">
          <span className="uppercase text-blue-600 dark:text-blue-400 font-semibold">{resource.type}</span>
          <span aria-hidden="true">·</span>
          <span>{resource.topic}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight mb-3">
          {resource.title}
        </h1>

        <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          {resource.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-200/80 dark:border-neutral-800 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span>Tags:</span>
            <span>{resource.tags.join(' · ')}</span>
          </div>
          <ShareButtons title={resource.title} />
        </div>
      </div>

      {/* If Roadmap: Interactive Step Viewer */}
      {resource.roadmapSteps && (
        <RoadmapViewer steps={resource.roadmapSteps} />
      )}

      {/* If Code Snippet: CodeBlock Component with Copy Control */}
      {resource.codeSnippet && (
        <div className="my-8 max-w-4xl">
          <CodeBlock
            code={resource.codeSnippet.code}
            language={resource.codeSnippet.language}
            title={`${resource.title} — Verified Snippet`}
          />
        </div>
      )}

      {/* If Content Text: Render Markdown Elements */}
      {resource.content && (
        <div className="my-10 max-w-4xl p-6 sm:p-8 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-800 dark:text-neutral-200 text-sm sm:text-base leading-relaxed whitespace-pre-line">
            {resource.content}
          </div>
        </div>
      )}

      {/* Connected Learning Graph */}
      {(relatedArticles.length > 0 || relatedCourses.length > 0) && (
        <section className="mt-16 pt-12 border-t border-neutral-200 dark:border-neutral-800">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
              Connected Curriculum
            </span>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mt-1">
              Related Articles & Courses
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((art) => (
              art && <ArticleCard key={art.id} article={art} variant="standard" />
            ))}
            {relatedCourses.map((crs) => (
              crs && <CourseCard key={crs.id} course={crs} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

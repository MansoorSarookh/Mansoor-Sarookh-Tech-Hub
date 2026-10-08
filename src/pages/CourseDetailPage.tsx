import { useParams, Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, ExternalLink, CheckCircle2, BookOpen, FolderGit2 } from 'lucide-react';
import { coursesData } from '../data/courses';
import { articlesData } from '../data/articles';
import { projectsData } from '../data/projects';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { YouTubePlaylistEmbed } from '../components/common/YouTubePlaylistEmbed';
import { LectureList } from '../components/course/LectureList';
import { ArticleCard } from '../components/article/ArticleCard';
import { ProjectCard } from '../components/project/ProjectCard';

export function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="py-20 max-w-xl mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
          Course Not Found
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          The requested course is currently unavailable or may have been reorganized.
        </p>
        <Link
          to="/courses"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to all courses
        </Link>
      </div>
    );
  }

  const relatedArticles = (course.relatedArticles || [])
    .map((artSlug) => articlesData.find((a) => a.slug === artSlug))
    .filter(Boolean);

  const relatedProjects = (course.relatedProjects || [])
    .map((prjSlug) => projectsData.find((p) => p.slug === prjSlug))
    .filter(Boolean);

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Courses', href: '/courses' },
          { label: course.title },
        ]}
        className="mb-8"
      />

      {/* Course Hero Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14 pb-12 border-b border-neutral-200/80 dark:border-neutral-800">
        <div className="lg:col-span-7">
          {/* Zero-Pill Unboxed Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-medium mb-3">
            <span className="text-rose-600 dark:text-rose-400 font-semibold">{course.category}</span>
            <span aria-hidden="true">·</span>
            <span>{course.difficulty}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{course.lectureCount} Lectures</span>
            {course.totalDuration && (
              <>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 tabular-nums">
                  <Clock className="w-3.5 h-3.5" />
                  {course.totalDuration}
                </span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-[1.15] mb-4">
            {course.title}
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
            {course.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600 dark:text-neutral-400 mb-8">
            <div className="flex items-center gap-1.5 font-medium text-neutral-900 dark:text-neutral-100">
              <User className="w-4 h-4 text-neutral-400" />
              <span>Instructor: {course.instructor}</span>
            </div>
            <span aria-hidden="true">·</span>
            <span>Platform: YouTube</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://www.youtube.com/playlist?list=${course.playlistId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl bg-rose-600 hover:bg-rose-500 text-white shadow-xs transition-colors"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="#playlist-player"
              className="px-4 py-2.5 text-xs font-medium rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors"
            >
              Interactive In-Browser Player ↓
            </a>
          </div>
        </div>

        {/* Thumbnail Preview */}
        <div className="lg:col-span-5 aspect-16/10 rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800 shadow-md">
          <img
            src={course.thumbnail}
            alt={course.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Learning Outcomes Section */}
      {course.learningOutcomes && course.learningOutcomes.length > 0 && (
        <section className="mb-14 p-6 sm:p-8 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40">
          <h2 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            What You Will Learn in this Course
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {course.learningOutcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{outcome}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Embedded YouTube Playlist Section */}
      <section id="playlist-player" className="mb-14 scroll-mt-24">
        <div className="mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Interactive Streaming
          </span>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            Embedded Course Playlist
          </h2>
        </div>
        <YouTubePlaylistEmbed playlistId={course.playlistId} title={course.title} />
      </section>

      {/* Syllabus / Lecture List */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          Detailed Lecture Syllabus
        </h2>
        <LectureList lectures={course.lectures} />
      </section>

      {/* Connected Ecosystem: Related Articles & Projects */}
      {(relatedArticles.length > 0 || relatedProjects.length > 0) && (
        <section className="pt-12 border-t border-neutral-200 dark:border-neutral-800">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
              Deepen Your Comprehension
            </span>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-1">
              Connected Articles & Code Projects
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {relatedArticles.length > 0 && (
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  <span>Companion Articles & Reading</span>
                </h4>
                <div className="space-y-4">
                  {relatedArticles.map((art) => (
                    art && <ArticleCard key={art.id} article={art} variant="compact" />
                  ))}
                </div>
              </div>
            )}

            {relatedProjects.length > 0 && (
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                  <FolderGit2 className="w-4 h-4 text-amber-500" />
                  <span>Real-World Implementations</span>
                </h4>
                <div className="space-y-4">
                  {relatedProjects.map((prj) => (
                    prj && <ProjectCard key={prj.id} project={prj} featured={false} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

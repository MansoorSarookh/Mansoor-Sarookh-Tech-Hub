import { useParams, Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowLeft, CheckCircle2, Layers, BookOpen, Video } from 'lucide-react';
import { projectsData } from '../data/projects';
import { articlesData } from '../data/articles';
import { videosData } from '../data/videos';
import { coursesData } from '../data/courses';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ArticleCard } from '../components/article/ArticleCard';
import { VideoCard } from '../components/video/VideoCard';
import { CourseCard } from '../components/course/CourseCard';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-20 max-w-xl mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
          Project Not Found
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          The requested project record could not be found.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to projects
        </Link>
      </div>
    );
  }

  const relatedArticles = (project.relatedArticles || [])
    .map((artSlug) => articlesData.find((a) => a.slug === artSlug))
    .filter(Boolean);

  const relatedVideos = (project.relatedVideos || [])
    .map((vidSlug) => videosData.find((v) => v.slug === vidSlug))
    .filter(Boolean);

  const relatedCourses = (project.relatedCourses || [])
    .map((crsSlug) => coursesData.find((c) => c.slug === crsSlug))
    .filter(Boolean);

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Projects', href: '/projects' },
          { label: project.title },
        ]}
        className="mb-8"
      />

      {/* Project Hero Header */}
      <div className="max-w-4xl mb-12">
        <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold">
          Engineering Showcase & Case Study
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-[1.15] mt-1 mb-3">
          {project.title}
        </h1>
        <p className="text-lg sm:text-xl font-medium text-neutral-700 dark:text-neutral-300 mb-6">
          {project.tagline}
        </p>

        {/* Tech Stack Unboxed */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-8">
          <span className="text-neutral-400">Stack:</span>
          {project.technologies.map((tech, i) => (
            <span key={tech}>
              {tech}
              {i < project.technologies.length - 1 && <span className="ml-2 text-neutral-300 dark:text-neutral-700" aria-hidden="true">·</span>}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 shadow-xs transition-opacity"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 shadow-xs transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
          )}
        </div>
      </div>

      {/* Hero Image / Screenshot */}
      <div className="mb-14 rounded-2xl overflow-hidden aspect-16/9 bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800 shadow-md">
        <img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Problem & Solution Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
        <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40">
          <h2 className="text-base font-bold text-neutral-900 dark:text-white mb-3">
            The Problem Statement
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40">
          <h2 className="text-base font-bold text-neutral-900 dark:text-white mb-3">
            The Engineered Solution
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Key Architectural Features */}
      <div className="mb-14 p-6 sm:p-8 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
        <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-6">
          Key Capabilities & Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Deep Dive */}
      {project.architecture && (
        <div className="mb-16 p-6 sm:p-8 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/40">
          <div className="flex items-center gap-2 mb-3">
            <Layers className="w-4 h-4 text-blue-500" />
            <h2 className="text-base font-bold text-neutral-900 dark:text-white">
              System Architecture & Data Flow
            </h2>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-mono">
            {project.architecture}
          </p>
        </div>
      )}

      {/* Connected Learning Graph */}
      {(relatedArticles.length > 0 || relatedVideos.length > 0 || relatedCourses.length > 0) && (
        <section className="pt-12 border-t border-neutral-200 dark:border-neutral-800">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
              Interconnected Knowledge
            </span>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mt-1">
              How This Project Connects to Learning Material
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((art) => (
              art && (
                <div key={art.id}>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 mb-2">
                    <BookOpen className="w-3.5 h-3.5" /> Companion Article
                  </div>
                  <ArticleCard article={art} variant="standard" />
                </div>
              )
            ))}

            {relatedVideos.map((vid) => (
              vid && (
                <div key={vid.id}>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 mb-2">
                    <Video className="w-3.5 h-3.5" /> Video Walkthrough
                  </div>
                  <VideoCard video={vid} />
                </div>
              )
            ))}

            {relatedCourses.map((crs) => (
              crs && (
                <div key={crs.id}>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 mb-2">
                    <Layers className="w-3.5 h-3.5" /> Full Course Curriculum
                  </div>
                  <CourseCard course={crs} />
                </div>
              )
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  if (featured) {
    return (
      <article className="group rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 overflow-hidden shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 aspect-16/10 lg:aspect-auto overflow-hidden bg-neutral-950 relative">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6 sm:p-8 lg:w-1/2 flex flex-col justify-between">
          <div>
            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Featured Flagship Project
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
              <Link to={`/projects/${project.slug}`}>{project.title}</Link>
            </h3>

            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
              {project.tagline}
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Zero-Pill Tech Stack */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400 font-mono mb-6">
              {project.technologies.map((tech, i) => (
                <span key={tech}>
                  {tech}
                  {i < project.technologies.length - 1 && <span className="ml-2 text-neutral-300 dark:text-neutral-700" aria-hidden="true">·</span>}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" /> Repository
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                </a>
              )}
            </div>

            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 group-hover:underline"
            >
              Case Study <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 overflow-hidden shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 flex flex-col h-full">
      <div className="aspect-16/9 w-full overflow-hidden bg-neutral-900 relative">
        <img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-1">
            <Link to={`/projects/${project.slug}`}>{project.title}</Link>
          </h3>

          <p className="text-xs font-medium text-neutral-600 dark:text-neutral-300 mb-2">
            {project.tagline}
          </p>

          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Zero-Pill Tech Stack */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-neutral-500 dark:text-neutral-400 font-mono mb-4">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span key={tech}>
                {tech}
                {i < Math.min(project.technologies.length, 4) - 1 && (
                  <span className="ml-2 text-neutral-300 dark:text-neutral-700" aria-hidden="true">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                aria-label={`${project.title} GitHub repo`}
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                aria-label={`${project.title} Live demo`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400"
          >
            Explore <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

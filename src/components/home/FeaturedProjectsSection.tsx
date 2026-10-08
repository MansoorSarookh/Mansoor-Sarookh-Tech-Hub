import { Link } from 'react-router-dom';
import { ArrowRight, FolderGit2 } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { ProjectCard } from '../project/ProjectCard';

export function FeaturedProjectsSection() {
  const flagshipProject = projectsData.find((p) => p.slug === 'datapilot-ai') || projectsData[0];
  const otherProjects = projectsData.filter((p) => p.slug !== flagshipProject.slug);

  return (
    <section className="py-16 border-b border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <FolderGit2 className="w-4 h-4" />
              <span>Engineering & Practical Builds</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mt-1">
              Featured Software Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Explore all projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Flagship Large Bento Card */}
        <div className="mb-8">
          <ProjectCard project={flagshipProject} featured={true} />
        </div>

        {/* Supporting Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProjects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} featured={false} />
          ))}
        </div>
      </div>
    </section>
  );
}

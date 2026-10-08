import { useState, useMemo } from 'react';
import { Search, FolderGit2 } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from '../components/project/ProjectCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { EmptyState } from '../components/common/EmptyState';

export function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState('All');

  const technologies = ['All', 'Python', 'Streamlit', 'React 19', 'TypeScript', 'Go', 'Scikit-Learn', 'Docker'];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((prj) => {
      const matchTech =
        selectedTech === 'All' || prj.technologies.some((t) => t.toLowerCase() === selectedTech.toLowerCase());
      const matchQuery =
        searchQuery.trim() === '' ||
        prj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prj.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchTech && matchQuery;
    });
  }, [selectedTech, searchQuery]);

  const flagshipProject = projectsData.find((p) => p.featured);

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Projects' }]} className="mb-6" />

      {/* Header */}
      <div className="max-w-3xl mb-10">
        <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold">
          Software Portfolio & Engineering Lab
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white mt-1 mb-3">
          Practical Projects & System Experiments
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Open-source software prototypes, machine learning platforms, and systems experiments engineered by Mansoor Sarookh. Each project features problem-solution breakdowns, architecture notes, and GitHub source code.
        </p>
      </div>

      {/* Flagship Highlight (when no search active) */}
      {flagshipProject && !searchQuery && selectedTech === 'All' && (
        <div className="mb-12">
          <ProjectCard project={flagshipProject} featured={true} />
        </div>
      )}

      {/* Filter and Search Controls */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by name or technology..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Technology Segmented Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {technologies.map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => setSelectedTech(tech)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  selectedTech.toLowerCase() === tech.toLowerCase()
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60'
              }`}
            >
              {tech}
            </button>
          ))}
          </div>
        </div>
      </div>

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={false} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No projects match your filter"
          description="Try selecting 'All' or clearing your search query."
          actionText="Reset filters"
          actionHref="/projects"
          icon={<FolderGit2 className="w-6 h-6" />}
        />
      )}
    </div>
  );
}

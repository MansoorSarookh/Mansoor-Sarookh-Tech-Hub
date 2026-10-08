import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Compass, Tag, ArrowRight } from 'lucide-react';

interface LearnMegaMenuProps {
  onClose: () => void;
}

export function LearnMegaMenu({ onClose }: LearnMegaMenuProps) {
  return (
    <div
      className="absolute top-full left-0 right-0 z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Content */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
              <BookOpen className="w-3.5 h-3.5 text-blue-500" />
              <span>Written Content</span>
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/articles"
                  onClick={onClose}
                  className="group block"
                >
                  <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    All Articles & Tutorials
                  </span>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5">
                    Step-by-step technical guides & explanations
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to="/articles?category=Deep+Dives"
                  onClick={onClose}
                  className="group block"
                >
                  <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Technical Deep Dives
                  </span>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5">
                    Internal mechanics, concurrency, zero-trust
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to="/articles?category=Concepts"
                  onClick={onClose}
                  className="group block"
                >
                  <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Architectural Concepts
                  </span>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5">
                    Clean code, design patterns, mental models
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Video Learning */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
              <span>Video Learning</span>
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/courses"
                  onClick={onClose}
                  className="group block"
                >
                  <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Structured YouTube Courses
                  </span>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5">
                    InfoSec, Software Engineering, Parallel Systems
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to="/videos"
                  onClick={onClose}
                  className="group block"
                >
                  <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Individual Video Lectures
                  </span>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5">
                    Focused topic breakdowns with code walkthroughs
                  </p>
                </Link>
              </li>
              <li>
                <a
                  href="https://youtube.com/@MansoorSarookh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors flex items-center gap-1">
                    YouTube Channel Playlists <ArrowRight className="w-3 h-3" />
                  </span>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5">
                    Official channel video catalog
                  </p>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Study & Roadmaps */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
              <Compass className="w-3.5 h-3.5 text-emerald-500" />
              <span>Study Materials</span>
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/resources"
                  onClick={onClose}
                  className="group block"
                >
                  <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Learning Roadmaps
                  </span>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5">
                    Guided progression steps from scratch to pro
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  onClick={onClose}
                  className="group block"
                >
                  <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Cheat Sheets & Notes
                  </span>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5">
                    High-density reference cards for quick revision
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  onClick={onClose}
                  className="group block"
                >
                  <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Production Code Snippets
                  </span>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5">
                    Copy-paste verified architectural patterns
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Topics Directory */}
          <div className="bg-neutral-50/80 dark:bg-neutral-800/40 p-4 rounded-xl border border-neutral-100 dark:border-neutral-800">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
              <div className="flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-amber-500" />
                <span>Major Topics</span>
              </div>
              <Link to="/topics" onClick={onClose} className="text-blue-600 dark:text-blue-400 font-semibold normal-case text-xs hover:underline">
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-2 text-xs">
              <Link
                to="/topics/computer-science"
                onClick={onClose}
                className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Computer Science
              </Link>
              <Link
                to="/topics/web-development"
                onClick={onClose}
                className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Web Development
              </Link>
              <Link
                to="/topics/cybersecurity"
                onClick={onClose}
                className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Cybersecurity
              </Link>
              <Link
                to="/topics/software-engineering"
                onClick={onClose}
                className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Software Engineering
              </Link>
              <Link
                to="/topics/parallel-distributed-computing"
                onClick={onClose}
                className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Parallel & Distributed Systems
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronDown, BookOpen, GraduationCap, FolderGit2, FileText, User, Send, Search } from 'lucide-react';
import { siteConfig } from '../../config/site';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export function MobileNav({ isOpen, onClose, onOpenSearch }: MobileNavProps) {
  const [learnExpanded, setLearnExpanded] = useState(false);
  const location = useLocation();

  if (!isOpen) return null;

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white dark:bg-neutral-950 border-l border-neutral-200 dark:border-neutral-800 p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-200">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-neutral-200 dark:border-neutral-800">
            <div>
              <span className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                {siteConfig.brand.name}
              </span>
              <span className="block text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                {siteConfig.brand.platform}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Search Action */}
          <div className="mt-4">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenSearch();
              }}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4 text-neutral-400" />
                <span>Search everything...</span>
              </span>
              <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 space-y-1 text-sm font-medium">
            <Link
              to="/"
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                isActive('/')
                  ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Home
            </Link>

            {/* Learn Submenu */}
            <div>
              <button
                type="button"
                onClick={() => setLearnExpanded(!learnExpanded)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <span className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  <span>Learn Hub</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    learnExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {learnExpanded && (
                <div className="pl-7 pr-2 py-1 space-y-1 text-xs font-normal border-l border-neutral-200 dark:border-neutral-800 ml-5 my-1">
                  <Link
                    to="/articles"
                    onClick={onClose}
                    className="block py-1.5 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Articles & Tutorials
                  </Link>
                  <Link
                    to="/courses"
                    onClick={onClose}
                    className="block py-1.5 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Video Courses & Playlists
                  </Link>
                  <Link
                    to="/videos"
                    onClick={onClose}
                    className="block py-1.5 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Video Lectures Library
                  </Link>
                  <Link
                    to="/topics"
                    onClick={onClose}
                    className="block py-1.5 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Explore Topics Directory
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/courses"
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                isActive('/courses')
                  ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-indigo-500" />
              <span>Courses</span>
            </Link>

            <Link
              to="/projects"
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                isActive('/projects')
                  ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <FolderGit2 className="w-4 h-4 text-amber-500" />
              <span>Projects</span>
            </Link>

            <Link
              to="/resources"
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                isActive('/resources')
                  ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4 text-emerald-500" />
              <span>Resources & Roadmaps</span>
            </Link>

            <Link
              to="/about"
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                isActive('/about')
                  ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <User className="w-4 h-4 text-neutral-500" />
              <span>About Mansoor</span>
            </Link>
          </nav>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-3">
          <Link
            to="/connect"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Connect With Me</span>
          </Link>
          <div className="text-center text-[11px] text-neutral-400">
            Learn · Build · Share Technology
          </div>
        </div>
      </div>
    </div>
  );
}

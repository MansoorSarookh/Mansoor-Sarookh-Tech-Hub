import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, ChevronDown } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { ThemeToggle } from '../common/ThemeToggle';
import { SearchModal } from '../common/SearchModal';
import { LearnMegaMenu } from '../navigation/LearnMegaMenu';
import { MobileNav } from '../navigation/MobileNav';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [learnMenuOpen, setLearnMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setLearnMenuOpen(false);
    setMobileNavOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-xs'
            : 'bg-white/60 dark:bg-neutral-950/60 backdrop-blur-xs border-b border-neutral-200/40 dark:border-neutral-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Single text element according to Top Bar Contract) */}
          <Link
            to="/"
            className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0"
          >
            {siteConfig.brand.name}
          </Link>

          {/* Zone 2: 4–6 Clean Nav Links with hover underline */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            <Link
              to="/"
              className={`hover:text-neutral-900 dark:hover:text-white transition-colors ${
                isActive('/') && location.pathname === '/' ? 'text-neutral-900 dark:text-white font-semibold' : ''
              }`}
            >
              Home
            </Link>

            {/* Learn dropdown trigger */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLearnMenuOpen(!learnMenuOpen)}
                onMouseEnter={() => setLearnMenuOpen(true)}
                className={`flex items-center gap-1 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer ${
                  isActive('/articles') || isActive('/topics') || isActive('/videos')
                    ? 'text-neutral-900 dark:text-white font-semibold'
                    : ''
                }`}
                aria-expanded={learnMenuOpen}
              >
                <span>Learn</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-150 ${
                    learnMenuOpen ? 'rotate-180 text-blue-500' : ''
                  }`}
                />
              </button>
            </div>

            <Link
              to="/courses"
              className={`hover:text-neutral-900 dark:hover:text-white transition-colors ${
                isActive('/courses') ? 'text-neutral-900 dark:text-white font-semibold' : ''
              }`}
            >
              Courses
            </Link>

            <Link
              to="/projects"
              className={`hover:text-neutral-900 dark:hover:text-white transition-colors ${
                isActive('/projects') ? 'text-neutral-900 dark:text-white font-semibold' : ''
              }`}
            >
              Projects
            </Link>

            <Link
              to="/resources"
              className={`hover:text-neutral-900 dark:hover:text-white transition-colors ${
                isActive('/resources') ? 'text-neutral-900 dark:text-white font-semibold' : ''
              }`}
            >
              Resources
            </Link>

            <Link
              to="/about"
              className={`hover:text-neutral-900 dark:hover:text-white transition-colors ${
                isActive('/about') ? 'text-neutral-900 dark:text-white font-semibold' : ''
              }`}
            >
              About
            </Link>
          </nav>

          {/* Zone 3: 1–2 Primary Actions + Utilities */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Icon Trigger */}
            <button
              type="button"
              onClick={() => setSearchModalOpen(true)}
              className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors"
              aria-label="Search content (Press Cmd+K or Ctrl+K)"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Connect Primary Action Button */}
            <Link
              to="/connect"
              className="hidden sm:inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-xs transition-colors whitespace-nowrap"
            >
              Connect
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              className="lg:hidden p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        {learnMenuOpen && <LearnMegaMenu onClose={() => setLearnMenuOpen(false)} />}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />

      {/* Mobile Drawer Navigation */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        onOpenSearch={() => setSearchModalOpen(true)}
      />
    </>
  );
}

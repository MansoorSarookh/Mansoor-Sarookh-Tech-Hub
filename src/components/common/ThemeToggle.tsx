import { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle display theme"
        aria-expanded={isOpen}
        className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600"
      >
        {resolvedTheme === 'dark' ? (
          <Moon className="w-4 h-4 text-neutral-200" />
        ) : (
          <Sun className="w-4 h-4 text-neutral-700" />
        )}
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-36 origin-top-right rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100"
        >
          <button
            role="menuitem"
            onClick={() => {
              setTheme('light');
              setIsOpen(false);
            }}
            className={`w-full flex items-center gap-2.5 px-3 py-1.5 text-xs text-left transition-colors ${
              theme === 'light'
                ? 'text-blue-600 dark:text-blue-400 font-medium bg-neutral-50 dark:bg-neutral-800/60'
                : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/50'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Light</span>
          </button>

          <button
            role="menuitem"
            onClick={() => {
              setTheme('dark');
              setIsOpen(false);
            }}
            className={`w-full flex items-center gap-2.5 px-3 py-1.5 text-xs text-left transition-colors ${
              theme === 'dark'
                ? 'text-blue-600 dark:text-blue-400 font-medium bg-neutral-50 dark:bg-neutral-800/60'
                : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/50'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            <span>Dark</span>
          </button>

          <button
            role="menuitem"
            onClick={() => {
              setTheme('system');
              setIsOpen(false);
            }}
            className={`w-full flex items-center gap-2.5 px-3 py-1.5 text-xs text-left transition-colors ${
              theme === 'system'
                ? 'text-blue-600 dark:text-blue-400 font-medium bg-neutral-50 dark:bg-neutral-800/60'
                : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/50'
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>System</span>
          </button>
        </div>
      )}
    </div>
  );
}

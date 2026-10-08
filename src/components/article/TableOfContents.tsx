import { useEffect, useState } from 'react';
import { AlignLeft } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items?: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (!items || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0% -60% 0%' }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <nav className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 text-xs">
      <div className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-neutral-100 mb-3 pb-2 border-b border-neutral-200/60 dark:border-neutral-800/60">
        <AlignLeft className="w-4 h-4 text-neutral-500" />
        <span>On this page</span>
      </div>
      <ul className="space-y-2">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li
              key={item.id}
              style={{ paddingLeft: item.level === 3 ? '0.75rem' : '0' }}
            >
              <a
                href={`#${item.id}`}
                className={`block transition-colors leading-relaxed ${
                  isActive
                    ? 'font-medium text-blue-600 dark:text-blue-400'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                }`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

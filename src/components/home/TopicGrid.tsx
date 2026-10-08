import { Link } from 'react-router-dom';
import {
  Binary,
  Globe,
  BrainCircuit,
  BarChart3,
  Layers,
  Code,
  ShieldCheck,
  Cpu,
  MessageSquareText,
  Briefcase,
  ArrowRight,
} from 'lucide-react';
import { topicsData } from '../../data/topics';

export function TopicGrid() {
  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Binary':
        return <Binary className="w-5 h-5" />;
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Code':
        return <Code className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'MessageSquareText':
        return <MessageSquareText className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-16 border-b border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Taxonomy & Curriculum
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mt-1">
              Explore by Core Discipline
            </h2>
          </div>
          <Link
            to="/topics"
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 shrink-0"
          >
            <span>View all disciplines</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {topicsData.map((topic) => (
            <Link
              key={topic.id}
              to={`/topics/${topic.slug}`}
              className="group p-5 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50/50 dark:hover:bg-neutral-800/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:scale-105 transition-all">
                  {getTopicIcon(topic.iconName)}
                </div>

                <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5">
                  {topic.title}
                </h3>

                <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                  {topic.description}
                </p>
              </div>

              {/* Zero-Pill Unboxed Content Count */}
              <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span className="tabular-nums">
                  {(topic.articleCount || 0) + (topic.courseCount || 0)} resources
                </span>
                <span className="text-neutral-300 dark:text-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

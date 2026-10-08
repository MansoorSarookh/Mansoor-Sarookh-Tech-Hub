import { useState } from 'react';
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
  Search,
} from 'lucide-react';
import { topicsData } from '../data/topics';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export function TopicsPage() {
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredTopics = topicsData.filter(
    (top) =>
      top.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      top.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Topics' }]} className="mb-6" />

      {/* Header */}
      <div className="max-w-3xl mb-10">
        <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
          Curriculum Taxonomy
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white mt-1 mb-3">
          Explore by Topic & Specialization
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Navigate the entire Mansoor Sarookh Tech Hub knowledge base through core computer science and engineering disciplines. Each topic aggregates articles, courses, videos, and projects.
        </p>
      </div>

      {/* Search Input */}
      <div className="mb-8 max-w-md">
        <div className="relative">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search disciplines..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTopics.map((topic) => (
          <Link
            key={topic.id}
            to={`/topics/${topic.slug}`}
            className="group p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50/50 dark:hover:bg-neutral-800/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:scale-105 transition-all">
                  {getTopicIcon(topic.iconName)}
                </div>
                {/* Zero-Pill Unboxed Category Group */}
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  {topic.categoryGroup}
                </span>
              </div>

              <h2 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                {topic.title}
              </h2>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed mb-6">
                {topic.description}
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs">
              <span className="text-neutral-500 font-mono tabular-nums">
                {(topic.articleCount || 0) + (topic.courseCount || 0)} resources available
              </span>
              <span className="font-semibold text-blue-600 dark:text-blue-400 group-hover:underline flex items-center gap-1">
                Explore Topic <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

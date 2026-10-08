import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, FolderGit2, Sparkles, Youtube, Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '../config/site';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export function AboutPage() {
  const { author, socials } = siteConfig;

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'About' }]} className="mb-6" />

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 pb-12 border-b border-neutral-200/80 dark:border-neutral-800">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineer · Educator · Builder</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-[1.15] mb-4">
            Hi, I&apos;m Mansoor Sarookh.
          </h1>

          <p className="text-lg sm:text-xl font-medium text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
            I teach computer science, engineer distributed software systems, and build educational tools designed to help developers master modern technology.
          </p>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
            Mansoor Sarookh Tech Hub was built out of a personal frustration with fragmented, surface-level developer tutorials. I believe true mastery happens at the intersection of rigorous first principles and hands-on production code.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/connect"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-xs transition-colors"
            >
              <span>Connect With Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/projects"
              className="px-4 py-2.5 text-xs font-medium rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors"
            >
              View My Projects
            </Link>
          </div>
        </div>

        {/* Author Portrait */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative w-64 aspect-square rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border-2 border-neutral-200/80 dark:border-neutral-700 shadow-xl">
            <img
              src={author.avatar}
              alt={author.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Philosophy Split Section: Learn -> Build -> Share */}
      <section className="mb-16">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
            Guiding Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mt-1">
            The Three Pillars of Tech Hub
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2">
              01. Learn Deeply
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Skip the cargo-culting. Understand why things work: memory layouts, algorithmic bounds, cryptographic ciphers, and browser reconciliation lifecycles.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2">
              02. Build Relentlessly
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Theory without implementation is quickly forgotten. Every course concept is validated through end-to-end applications, ML platforms, and open-source systems.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40">
            <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2">
              03. Share Generously
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Knowledge compounds when freely distributed. I publish complete lecture courses on YouTube, open-access articles, and printable cheat sheets for students everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Approach & Areas of Focus */}
      <section className="mb-16 p-6 sm:p-10 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">
              Teaching Approach
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              {author.teachingApproach}
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Whether explaining zero-trust authentication or consensus protocols in distributed computing, I start from the underlying problem rather than the syntax sugar.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">
              Core Technical Interests
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
              <div className="p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700/60">
                <span className="font-semibold block mb-0.5">Distributed Computing</span>
                <span className="text-neutral-500 text-[11px]">Consensus, Raft, Fault Tolerance</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700/60">
                <span className="font-semibold block mb-0.5">Information Security</span>
                <span className="text-neutral-500 text-[11px]">Cryptography, Zero-Trust, WebAuthn</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700/60">
                <span className="font-semibold block mb-0.5">Web Architecture</span>
                <span className="text-neutral-500 text-[11px]">React 19, TypeScript, Performance</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700/60">
                <span className="font-semibold block mb-0.5">Automated ML Workflows</span>
                <span className="text-neutral-500 text-[11px]">Python, Scikit-Learn, Streamlit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social and Platforms Quick Bar */}
      <section className="text-center max-w-xl mx-auto">
        <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2">
          Connect Across Platforms
        </h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
          Find my official video lectures, source repositories, and professional updates.
        </p>

        <div className="flex items-center justify-center gap-4 text-neutral-600 dark:text-neutral-400">
          <a
            href={socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:text-rose-600 hover:border-rose-400 transition-colors"
            aria-label="YouTube Channel"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:text-blue-600 hover:border-blue-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={socials.email}
            className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:text-blue-600 hover:border-blue-400 transition-colors"
            aria-label="Email Mansoor"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}

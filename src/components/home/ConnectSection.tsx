import { Youtube, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { siteConfig } from '../../config/site';

export function ConnectSection() {
  const platforms = [
    {
      name: 'YouTube',
      handle: '@MansoorSarookh',
      description: 'Structured video courses, playlists, and code walkthroughs',
      url: siteConfig.socials.youtube,
      icon: <Youtube className="w-5 h-5 text-rose-500" />,
      actionText: 'Subscribe on YouTube',
    },
    {
      name: 'GitHub',
      handle: 'mansoorsarookh',
      description: 'Open source repositories, prototypes, and study code',
      url: siteConfig.socials.github,
      icon: <Github className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      actionText: 'Explore Repositories',
    },
    {
      name: 'LinkedIn',
      handle: 'in/mansoorsarookh',
      description: 'Professional updates, tech leadership thoughts, and career connections',
      url: siteConfig.socials.linkedin,
      icon: <Linkedin className="w-5 h-5 text-blue-600" />,
      actionText: 'Connect on LinkedIn',
    },
    {
      name: 'Email Contact',
      handle: siteConfig.author.email,
      description: 'Direct inquiry for collaborations, speaking, and academic inquiries',
      url: siteConfig.socials.email,
      icon: <Mail className="w-5 h-5 text-emerald-500" />,
      actionText: 'Send Email',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
            Connect & Collaborate
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mt-1 mb-3">
            Join the Learning Ecosystem
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Follow along across video, code, and professional platforms, or reach out directly for technical collaboration and questions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target={p.name === 'Email Contact' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50/50 dark:hover:bg-neutral-800/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {p.icon}
                </div>
                <h3 className="text-base font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {p.name}
                </h3>
                <span className="text-xs font-mono text-neutral-400 block mb-2">{p.handle}</span>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                  {p.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-neutral-700 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                <span>{p.actionText}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

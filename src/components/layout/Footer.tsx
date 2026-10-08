import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Github, Linkedin, Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/site';

export function Footer() {
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!subscribedEmail || !subscribedEmail.includes('@')) return;
    setIsSubscribed(true);
    setSubscribedEmail('');
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Newsletter Readiness Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-md">
            <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
              Stay in the Technical Loop
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              Occasional technical articles, course announcements, and computer science resources by Mansoor. Zero spam.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {isSubscribed ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-4 py-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Thank you! You are subscribed to Mansoor&apos;s updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full">
                <input
                  type="email"
                  value={subscribedEmail}
                  onChange={(e) => setSubscribedEmail(e.target.value)}
                  placeholder="name@domain.com"
                  required
                  className="px-3.5 py-2 text-xs rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600 min-w-[240px]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Multi-column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12 border-b border-neutral-100 dark:border-neutral-900">
          {/* Brand Info */}
          <div className="col-span-2">
            <Link to="/" className="text-lg font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
              {siteConfig.brand.name}
            </Link>
            <p className="text-xs text-neutral-500 font-mono mt-0.5 uppercase tracking-wider">
              {siteConfig.brand.platform} · {siteConfig.brand.tagline}
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-3 max-w-sm leading-relaxed">
              {siteConfig.brand.description}
            </p>

            <div className="flex items-center gap-3 mt-5 text-neutral-500 dark:text-neutral-400">
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:text-rose-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:text-blue-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.email}
                className="p-1.5 rounded-lg hover:text-blue-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Email Mansoor"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Explore */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-600 dark:text-neutral-400">
              {siteConfig.footerLinks.explore.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Topics */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-4">
              Topics
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-600 dark:text-neutral-400">
              {siteConfig.footerLinks.topics.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-600 dark:text-neutral-400">
              {siteConfig.footerLinks.connect.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.href} className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 dark:text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Mansoor Sarookh. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span>Learn</span>
            <span aria-hidden="true">·</span>
            <span>Build</span>
            <span aria-hidden="true">·</span>
            <span>Share Technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState, FormEvent } from 'react';
import { Youtube, Github, Linkedin, Mail, ExternalLink, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/site';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export function ConnectPage() {
  const { socials, author } = siteConfig;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Pre-populate user's mail client or display confirmation
    const mailto = `mailto:${author.email}?subject=${encodeURIComponent(
      formData.subject || 'Inquiry from Tech Hub'
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  const platforms = [
    {
      name: 'YouTube Channel',
      handle: '@MansoorSarookh',
      description: 'Educational video playlists, course lectures, and visual computer science breakdowns.',
      url: socials.youtube,
      icon: <Youtube className="w-5 h-5 text-rose-500" />,
      actionText: 'Subscribe on YouTube',
    },
    {
      name: 'GitHub',
      handle: 'mansoorsarookh',
      description: 'Open source codebase, algorithms implementations, DataPilot AI, and course repos.',
      url: socials.github,
      icon: <Github className="w-5 h-5 text-neutral-900 dark:text-white" />,
      actionText: 'Follow on GitHub',
    },
    {
      name: 'LinkedIn',
      handle: 'in/mansoorsarookh',
      description: 'Professional engineering discussions, tech industry commentary, and networking.',
      url: socials.linkedin,
      icon: <Linkedin className="w-5 h-5 text-blue-600" />,
      actionText: 'Connect on LinkedIn',
    },
    {
      name: 'Kaggle',
      handle: 'mansoorsarookh',
      description: 'Data science experiments, exploratory analysis notebooks, and ML model tournaments.',
      url: socials.kaggle,
      icon: <span className="font-bold text-sky-500 font-mono text-base">k</span>,
      actionText: 'View Kaggle Notebooks',
    },
    {
      name: 'Instagram',
      handle: '@mansoorsarookh',
      description: 'Behind-the-scenes engineering desk setup, daily learnings, and tech tips.',
      url: socials.instagram,
      icon: <span className="font-bold text-pink-500 text-sm">IG</span>,
      actionText: 'Follow on Instagram',
    },
    {
      name: 'Facebook',
      handle: 'mansoorsarookh',
      description: 'Community tech updates, student discussions, and platform announcements.',
      url: socials.facebook,
      icon: <span className="font-bold text-blue-500 text-sm">fb</span>,
      actionText: 'Follow on Facebook',
    },
  ];

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Connect' }]} className="mb-6" />

      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
          Official Channels & Contact
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight mt-1 mb-4">
          Connect with Mansoor Sarookh
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Whether you have a technical question on one of my courses, want to discuss software engineering, or explore an educational collaboration, all verified platforms are listed below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        {/* Left Column: Official Social Platforms (Col 7) */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-base font-bold text-neutral-900 dark:text-white mb-4">
            Official Online Destinations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50/50 dark:hover:bg-neutral-800/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                      {p.icon}
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-blue-600 transition-colors" />
                  </div>

                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {p.name}
                  </h3>
                  <span className="text-xs font-mono text-neutral-400 block mb-2">{p.handle}</span>

                  <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                    {p.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                  {p.actionText} →
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Direct Message / Email Form (Col 5) */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/40">
          <div className="flex items-center gap-2 mb-2">
            <Mail className="w-5 h-5 text-blue-600" />
            <h2 className="text-base font-bold text-neutral-900 dark:text-white">
              Direct Email Inquiry
            </h2>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
            Send a note directly to Mansoor at <span className="font-mono text-neutral-700 dark:text-neutral-300">{author.email}</span>.
          </p>

          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-center">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
              <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-100 mb-1">
                Message Dispatched
              </h4>
              <p className="text-xs text-emerald-700 dark:text-emerald-300">
                Your email client was opened. You can also email directly anytime at {author.email}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Question on Information Security lecture"
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Mansoor, I was reading your article on..."
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message via Email</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

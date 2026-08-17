import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, Github, Linkedin, Mail, Code2, Server, Database, Sparkles, Terminal as TerminalIcon } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();

  const techBadges = [
    { name: 'React.js', color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20' },
    { name: 'Vue.js', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
    { name: 'Node.js', color: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20' },
    { name: 'Express.js', color: 'bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/20' },
    { name: 'NestJS', color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20' },
    { name: 'MySQL', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden bg-grid-pattern">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Backend Developer @ ANT Tech</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {t('hero.greeting')}
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {t('hero.name')}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
                {t('hero.role')}
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {t('hero.bio')}
            </p>

            {/* Tech Badges */}
            <div className="pt-2">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Core Stack Highlights
              </span>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-md border text-xs font-medium ${badge.color} transition-all hover:scale-105`}
                  >
                    {badge.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons & Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all hover:-translate-y-0.5"
              >
                <span>{t('hero.viewProjects')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium text-sm border border-slate-200 dark:border-slate-700 transition-all hover:-translate-y-0.5"
              >
                {t('hero.contactMe')}
              </button>

              {/* Social Icons */}
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800">
                <a
                  href="https://github.com/ChamNol09"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('hero.github')}
                  className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/chamnol-mao-458285335/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('hero.linkedin')}
                  className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="mailto:maochamnol37@gmail.com"
                  aria-label={t('hero.email')}
                  className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Abstract Code Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-cyan-500/30 opacity-40 blur-xl"></div>
              
              <div className="relative rounded-3xl bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-3xl border border-white/20 dark:border-slate-800/80 border-t-white/40 shadow-[0_16px_48px_0_rgba(0,0,0,0.4)] overflow-hidden font-mono text-xs">
                
                {/* Liquid Glass Terminal Header */}
                <div className="px-4 py-3 bg-slate-950/60 backdrop-blur-xl border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-sans">
                    <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t('hero.terminalHeader')}</span>
                  </div>
                  <div className="w-12"></div>
                </div>

                {/* Code Snippet Content */}
                <div className="p-5 space-y-3 text-slate-300 leading-relaxed overflow-x-auto">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-400">developer</span>{' '}
                    <span className="text-slate-400">=</span>{' '}
                    <span className="text-purple-400">&#123;</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-400">'Mao Chamnol'</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">role:</span>{' '}
                    <span className="text-emerald-400">'Junior Full-Stack Developer'</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">education:</span>{' '}
                    <span className="text-emerald-400">'BELTEI International University (Yr 4)'</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">currentCompany:</span>{' '}
                    <span className="text-emerald-400">'ANT Technology Training Center'</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">skills:</span>{' '}
                    <span className="text-purple-400">[</span>
                  </div>

                  <div className="pl-8 text-amber-300">
                    'Vue.js', 'React.js', 'Node.js', 'Express.js', 'NestJS', 'MySQL', 'Prisma'
                  </div>

                  <div className="pl-4">
                    <span className="text-purple-400">]</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">passionateAbout:</span>{' '}
                    <span className="text-emerald-400">'REST APIs & Scalable Web Apps'</span>
                  </div>

                  <div>
                    <span className="text-purple-400">&#125;</span>;
                  </div>

                  <div className="pt-2 flex items-center gap-2 text-slate-500 border-t border-slate-800/80">
                    <span className="text-emerald-500 font-bold">$</span>
                    <span className="text-slate-300">npm run build:future</span>
                    <span className="w-2 h-4 bg-emerald-400 inline-block animate-pulse"></span>
                  </div>
                </div>

                {/* Footer status bar */}
                <div className="px-4 py-2 bg-slate-950/90 text-[10px] text-slate-500 flex justify-between items-center font-sans border-t border-slate-800">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    STATUS: READY_FOR_OPPORTUNITIES
                  </span>
                  <span>UTF-8</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

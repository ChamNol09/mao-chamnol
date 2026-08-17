import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { projectsData } from '../../data/projects';
import { ExternalLink, Github, CheckCircle, Sparkles, Building2, BookOpen, FileText, QrCode } from 'lucide-react';

export const Projects = () => {
  const { t } = useLanguage();

  const getProjectIcon = (key) => {
    switch (key) {
      case 'pteasYerng': return Building2;
      case 'vicheaLearn': return BookOpen;
      case 'devTechJournal': return FileText;
      default: return Sparkles;
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('projects.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {t('projects.subtitle')}
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Projects Showcase Stack */}
        <div className="space-y-10">
          {projectsData.map((project) => {
            const projectInfo = t(`projects.items.${project.key}`);
            const Icon = getProjectIcon(project.key);
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                className={`rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border transition-all duration-300 overflow-hidden shadow-[0_12px_40px_0_rgba(0,0,0,0.12)] dark:shadow-[0_12px_40px_0_rgba(0,0,0,0.5)] border-t-white/90 dark:border-t-white/20 ${
                  isFeatured 
                    ? 'border-emerald-500/50 dark:border-emerald-500/40 ring-1 ring-emerald-500/30' 
                    : 'border-white/60 dark:border-slate-800/80'
                }`}
              >
                <div className={`grid grid-cols-1 ${isFeatured ? 'lg:grid-cols-12' : 'lg:grid-cols-12'} gap-8 p-6 sm:p-8 lg:p-10 items-center`}>
                  
                  {/* Left Column: Interactive UI Visual Mockup */}
                  <div className={`${isFeatured ? 'lg:col-span-6' : 'lg:col-span-5'} order-1 ${isFeatured ? 'lg:order-1' : ''}`}>
                    <div className="relative group overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 p-4 font-sans shadow-inner">
                      
                      {/* Top Bar Mockup */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                          <span className="ml-2 font-mono text-[11px] text-slate-500">app.{project.id}.com</span>
                        </div>
                        {project.key === 'pteasYerng' && (
                          <div className="flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px] font-bold">
                            <QrCode className="w-3 h-3" />
                            <span>KHQR READY</span>
                          </div>
                        )}
                      </div>

                      {/* Mockup Dashboard Content */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-bold text-white text-sm">{projectInfo.title}</div>
                              <div className="text-[11px] text-slate-400">{projectInfo.category}</div>
                            </div>
                          </div>
                          <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold">
                            REST API Connected
                          </span>
                        </div>

                        {/* Feature Preview Grid */}
                        <div className="grid grid-cols-2 gap-2 text-[11px]">
                          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-1">
                            <span className="text-slate-500 block text-[10px]">AUTH & ROLES</span>
                            <span className="text-slate-200 font-medium block truncate">JWT Auth Enabled</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-1">
                            <span className="text-slate-500 block text-[10px]">DATABASE</span>
                            <span className="text-slate-200 font-medium block truncate">MySQL + Prisma ORM</span>
                          </div>
                        </div>

                        {/* Additional visual element for featured */}
                        {isFeatured && (
                          <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-300">
                            <span>KHQR Payment Gateway Integrated</span>
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* Right Column: Details & Tech Badges */}
                  <div className={`${isFeatured ? 'lg:col-span-6' : 'lg:col-span-7'} order-2 space-y-5 text-left`}>
                    
                    {/* Badge */}
                    <div className="flex items-center gap-2">
                      {isFeatured && (
                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-extrabold flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                          {t('projects.featuredBadge')}
                        </span>
                      )}
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        {projectInfo.category}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                        {projectInfo.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mt-2">
                        {projectInfo.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                        {t('projects.keyFeatures')}:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        {projectInfo.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-emerald-500/20 transition-all hover:-translate-y-0.5"
                      >
                        <span>{t('projects.liveDemo')}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm border border-slate-200 dark:border-slate-700 flex items-center gap-2 transition-all hover:-translate-y-0.5"
                      >
                        <Github className="w-4 h-4" />
                        <span>{t('projects.githubRepo')}</span>
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Briefcase, Calendar, Building2, CheckCircle2, ChevronRight } from 'lucide-react';

export const Experience = () => {
  const { t } = useLanguage();
  const roles = t('experience.roles');

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('experience.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {t('experience.subtitle')}
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Center/Left Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2"></div>

          <div className="space-y-12">
            {Array.isArray(roles) && roles.map((role, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx} 
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border-4 border-emerald-500 shadow-md flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 px-0 sm:px-8 w-full">
                    <div className="rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-800/80 border-t-white/90 dark:border-t-white/20 p-6 sm:p-8 shadow-[0_8px_30px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_30px_0_rgba(0,0,0,0.5)] hover:border-emerald-500/40 transition-all text-left space-y-4">
                      
                      {/* Header */}
                      <div className="space-y-1 border-b border-slate-100 dark:border-slate-800 pb-4">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {role.period}
                          </span>
                          <span className="text-xs font-semibold text-slate-400">
                            {role.type}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 dark:text-white pt-1">
                          {role.title}
                        </h3>

                        <div className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                          <Building2 className="w-4 h-4" />
                          <span>{role.company}</span>
                        </div>
                      </div>

                      {/* Responsibilities List */}
                      <div className="space-y-2 pt-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                          Key Responsibilities:
                        </span>
                        <ul className="space-y-2">
                          {role.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                              <ChevronRight className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

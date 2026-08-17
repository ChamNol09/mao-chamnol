import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { GraduationCap, Briefcase, Code, CheckCircle2, User } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('about.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {t('about.subtitle')}
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Professional Photo / Developer Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-blue-500/20 blur-xl"></div>
              
              <div className="relative rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-800/80 border-t-white/90 dark:border-t-white/20 shadow-[0_12px_36px_0_rgba(0,0,0,0.12)] dark:shadow-[0_12px_36px_0_rgba(0,0,0,0.5)] overflow-hidden p-6 sm:p-8 text-center space-y-6">
                
                {/* Avatar / Profile Graphic */}
                <div className="relative w-40 h-40 mx-auto rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden relative">
                    <img 
                      src="/avatar.jpg" 
                      alt="Mao Chamnol" 
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 flex items-center justify-center shadow-md">
                    <CheckCircle2 className="w-4.5 h-4.5 text-white" />
                  </div>
                </div>

                {/* Profile Meta Info */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Mao Chamnol
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm">
                    Junior Full-Stack Developer
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    BELTEI Int. University & ANT Tech
                  </p>
                </div>

                {/* Quick Profile Badges */}
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex flex-wrap justify-center gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 font-medium flex items-center gap-1 backdrop-blur-md">
                    <Briefcase className="w-3.5 h-3.5 text-emerald-500" />
                    Backend Dev
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 font-medium flex items-center gap-1 backdrop-blur-md">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
                    Year 4 Student
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 font-medium flex items-center gap-1 backdrop-blur-md">
                    <Code className="w-3.5 h-3.5 text-indigo-500" />
                    REST APIs
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Bio Details & Statistics */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>{t('about.para1')}</p>
              <p>{t('about.para2')}</p>
              <p>{t('about.para3')}</p>
              <p className="p-4 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-slate-800 dark:text-slate-200 font-medium backdrop-blur-md">
                {t('about.para4')}
              </p>
            </div>

            {/* Statistics Cards */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Stat Card 1 */}
              <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-800/80 border-t-white/90 dark:border-t-white/20 shadow-md hover:border-emerald-500/40 transition-all text-center sm:text-left">
                <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                  3+
                </div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mt-1">
                  {t('about.stats.projects')}
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-800/80 border-t-white/90 dark:border-t-white/20 shadow-md hover:border-emerald-500/40 transition-all text-center sm:text-left">
                <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                  2+
                </div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mt-1">
                  {t('about.stats.learning')}
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-800/80 border-t-white/90 dark:border-t-white/20 shadow-md hover:border-emerald-500/40 transition-all text-center sm:text-left">
                <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                  2
                </div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mt-1">
                  {t('about.stats.roles')}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

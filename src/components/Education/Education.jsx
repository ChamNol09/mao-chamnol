import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { GraduationCap, Calendar, BookCheck, School, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const Education = () => {
  const { t } = useLanguage();
  const topics = t('training.topics');

  return (
    <section id="education" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('education.title')} & {t('training.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {t('education.subtitle')}
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          
          {/* Card 1: Formal University Education */}
          <div className="rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-800/80 border-t-white/90 dark:border-t-white/20 p-8 sm:p-10 shadow-[0_12px_40px_0_rgba(0,0,0,0.12)] dark:shadow-[0_12px_40px_0_rgba(0,0,0,0.5)] hover:border-emerald-500/40 transition-all text-left relative overflow-hidden">
            
            {/* Background Icon Watermark */}
            <GraduationCap className="absolute -right-8 -bottom-8 w-56 h-56 text-slate-100 dark:text-slate-800/40 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {t('education.period')}
                </span>
                <span className="px-3 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold">
                  {t('education.status')}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {t('education.degree')}
                </h3>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-lg mt-1">
                  <School className="w-5 h-5" />
                  <span>{t('education.institution')}</span>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                {t('education.description')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <BookCheck className="w-4 h-4 text-emerald-500" />
                  <span>Software Architecture & Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookCheck className="w-4 h-4 text-emerald-500" />
                  <span>Web & Mobile Technologies</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookCheck className="w-4 h-4 text-emerald-500" />
                  <span>Relational Database Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookCheck className="w-4 h-4 text-emerald-500" />
                  <span>Object-Oriented Development</span>
                </div>
              </div>

            </div>

          </div>

          {/* Card 2: Scholarship & Practical Training Card */}
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white p-8 sm:p-10 shadow-2xl border border-slate-800 relative overflow-hidden">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                    Scholarship Award
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {t('training.institution')}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {t('training.period')}
                </span>
                <div className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-extrabold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Vue.js & Node.js Specialization</span>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="mt-6 space-y-6 text-left">
              <div>
                <h4 className="text-2xl font-bold text-slate-100">
                  {t('training.program')}
                </h4>
                <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                  {t('training.description')}
                </p>
              </div>

              {/* Covered Topics Grid */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  {t('training.topicsTitle')}
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {Array.isArray(topics) && topics.map((topic, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs sm:text-sm text-slate-200 font-medium hover:border-amber-500/40 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

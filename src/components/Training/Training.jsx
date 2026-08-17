import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Award, Sparkles, CheckCircle2, Layers, Cpu } from 'lucide-react';

export const Training = () => {
  const { t } = useLanguage();
  const topics = t('training.topics');

  return (
    <section id="training" className="py-24 relative overflow-hidden">
      
      {/* Background glow styling */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('training.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {t('training.subtitle')}
          </p>
          <div className="w-12 h-1 bg-amber-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Visually Distinct Scholarship Card */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white p-8 sm:p-12 shadow-2xl border border-slate-800 relative overflow-hidden">
            
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

              <div className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-extrabold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Vue.js & Node.js Specialization</span>
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

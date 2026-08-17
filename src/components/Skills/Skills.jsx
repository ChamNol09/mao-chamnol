import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { skillsData } from '../../data/skills';
import { TechLogo } from './TechLogos';

export const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('skills.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {t('skills.subtitle')}
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, idx) => (
            <div 
              key={idx}
              className="rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-800/80 border-t-white/90 dark:border-t-white/20 p-6 sm:p-8 shadow-[0_10px_30px_0_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_0_rgba(0,0,0,0.5)] transition-all space-y-6"
            >
              <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800/80 pb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {t(`skills.categories.${category.categoryKey}`)}
                </h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-400 backdrop-blur-md">
                  {category.skills.length} Technologies
                </span>
              </div>

              {/* Progress Bars Stack */}
              <div className="space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    
                    {/* Skill Info Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className={`p-1.5 rounded-lg ${skill.bg} flex items-center justify-center`}>
                          <TechLogo name={skill.name} className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-extrabold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                        {skill.percentage}%
                      </span>
                    </div>

                    {/* Animated Progress Bar Track */}
                    <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800/80 overflow-hidden p-0.5 border border-slate-200/40 dark:border-slate-800">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

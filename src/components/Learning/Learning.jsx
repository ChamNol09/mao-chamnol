import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  FileCode2, Boxes, Network, ShieldCheck, LayoutGrid, 
  Container, CloudUpload, Cpu, CheckSquare 
} from 'lucide-react';

const learningIcons = [
  FileCode2,
  Boxes,
  Network,
  ShieldCheck,
  LayoutGrid,
  Container,
  CloudUpload,
  Cpu,
  CheckSquare
];

export const Learning = () => {
  const { t } = useLanguage();
  const items = t('learning.items');

  return (
    <section id="learning" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('learning.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {t('learning.subtitle')}
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Compact Modern Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {Array.isArray(items) && items.map((item, idx) => {
            const IconComponent = learningIcons[idx % learningIcons.length];
            
            return (
              <div
                key={idx}
                className="group p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-800/80 border-t-white/90 dark:border-t-white/20 shadow-md hover:border-emerald-500/50 dark:hover:border-emerald-500/40 hover:shadow-lg transition-all flex items-center gap-3.5 text-left"
              >
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base block">
                    {item}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Active Continuous Growth
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

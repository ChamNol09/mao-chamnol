import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Github, Linkedin, Mail, Send, Heart, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 py-16 bg-slate-950 text-slate-300 border-t border-slate-800/80 overflow-hidden">
      
      {/* Specular Liquid Glass Top Glow Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Glass Card Container */}
        <div className="rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-slate-800/80 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800/80 text-center lg:text-left">
            
            {/* Brand & Monogram Logo */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={scrollToTop}
                className="w-12 h-12 rounded-2xl overflow-hidden border border-emerald-500/50 bg-slate-950 shadow-lg hover:scale-105 transition-transform"
                title="Scroll to top"
              >
                <img src="/logo.jpg" alt="MC Logo" className="w-full h-full object-cover" />
              </button>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Mao Chamnol
                </h3>
                <p className="text-xs font-semibold text-emerald-400 mt-0.5">
                  Junior Full-Stack Developer
                </p>
              </div>
            </div>

            {/* Quick Links Structured List */}
            <div className="space-y-2 text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 text-center lg:text-left">
                Navigation
              </h4>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-2 text-xs font-medium">
                {[
                  { id: 'home', label: t('nav.home') },
                  { id: 'about', label: t('nav.about') },
                  { id: 'skills', label: t('nav.skills') },
                  { id: 'projects', label: t('nav.projects') },
                  { id: 'experience', label: t('nav.experience') },
                  { id: 'education', label: t('nav.education') },
                  { id: 'learning', label: t('nav.learning') },
                  { id: 'contact', label: t('nav.contact') }
                ].map(item => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="hover:text-emerald-400 transition-colors flex items-center gap-2 py-1 text-slate-300 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 group-hover:bg-emerald-400 transition-colors"></span>
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media Glass Buttons */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com/ChamNol09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800/80 hover:bg-emerald-500/20 border border-slate-700/60 text-slate-300 hover:text-emerald-400 transition-all shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/chamnol-mao-458285335/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800/80 hover:bg-emerald-500/20 border border-slate-700/60 text-slate-300 hover:text-emerald-400 transition-all shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://web.telegram.org/a/#1641253610"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800/80 hover:bg-emerald-500/20 border border-slate-700/60 text-slate-300 hover:text-emerald-400 transition-all shadow-sm"
                aria-label="Telegram Direct"
              >
                <Send className="w-4 h-4" />
              </a>

              <a
                href="mailto:maochamnol37@gmail.com"
                className="p-3 rounded-xl bg-slate-800/80 hover:bg-emerald-500/20 border border-slate-700/60 text-slate-300 hover:text-emerald-400 transition-all shadow-sm"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Bottom Row & Scroll To Top */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
            <p>© {new Date().getFullYear()} Mao Chamnol. All rights reserved.</p>
            
            <div className="flex items-center gap-4">
              {/* <p className="flex items-center gap-1.5 text-slate-400">
                Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" /> using React.js & Tailwind CSS
              </p> */}
              
              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-all flex items-center gap-1"
                title="Scroll to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold">TOP</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

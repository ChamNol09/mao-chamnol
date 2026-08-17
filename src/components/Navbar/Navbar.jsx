import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { Sun, Moon, Menu, X, Globe, Terminal, Sparkles } from 'lucide-react';
import { MCLogo } from './MCLogo';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'education', label: t('nav.education') },
    { id: 'learning', label: t('nav.learning') },
    { id: 'contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-3 inset-x-3 sm:inset-x-6 max-w-7xl mx-auto z-50 transition-all duration-300">
      
      {/* Liquid Glass Floating Capsule Container */}
      <div className={`w-full rounded-2xl sm:rounded-full px-4 py-2.5 sm:px-6 sm:py-3 transition-all duration-300 backdrop-blur-3xl backdrop-saturate-200 relative overflow-hidden border border-white/60 dark:border-slate-700/60 border-t-white/90 dark:border-t-white/30 ${
        scrolled
          ? 'bg-gradient-to-b from-white/80 via-white/50 to-white/75 dark:from-slate-900/85 dark:via-slate-950/70 dark:to-slate-900/80 shadow-[0_12px_40px_0_rgba(0,0,0,0.15)] dark:shadow-[0_12px_40px_0_rgba(0,0,0,0.6)] ring-1 ring-white/40 dark:ring-white/10'
          : 'bg-gradient-to-b from-white/65 via-white/35 to-white/55 dark:from-slate-900/75 dark:via-slate-950/55 dark:to-slate-900/70 shadow-lg ring-1 ring-white/20 dark:ring-white/5'
      }`}>
        {/* Liquid Glass Specular Shine Overlay */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 dark:via-emerald-400/40 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-b from-white/20 dark:from-white/10 to-transparent rounded-full blur-sm pointer-events-none"></div>
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Liquid Glass Pill */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 group text-left focus:outline-none"
            aria-label="Mao Chamnol Portfolio Home"
          >
            <MCLogo className="w-9 h-9" />
            <div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                {t('nav.brand')}
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </span>
              <span className="block text-[10px] font-semibold text-slate-500 dark:text-slate-400 -mt-1">
                Full-Stack Dev
              </span>
            </div>
          </button>

          {/* Desktop Navigation Liquid Glass Items */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/40 dark:bg-slate-900/60 border border-white/70 dark:border-slate-800/80 backdrop-blur-xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)] dark:shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-300 relative ${
                    isActive
                      ? 'text-emerald-700 dark:text-emerald-300 font-bold bg-gradient-to-b from-white/95 to-slate-100/90 dark:from-emerald-950/90 dark:to-slate-900/90 shadow-md border border-emerald-500/40 border-t-white/80 dark:border-t-emerald-400/40'
                      : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-white/50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Liquid Glass Control Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            
            {/* Language Switcher Liquid Glass Pill */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-b from-white/70 to-white/40 dark:from-slate-800/70 dark:to-slate-900/70 border border-white/80 dark:border-slate-700/60 border-t-white/90 dark:border-t-white/20 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-xl transition-all shadow-sm"
              title={t('nav.toggleLanguage')}
              aria-label={t('nav.toggleLanguage')}
            >
              <Globe className="w-3.5 h-3.5 text-emerald-500" />
              <span>{language === 'en' ? 'EN' : 'ខ្មែរ'}</span>
              <span className="text-slate-300 dark:text-slate-600">|</span>
              <span className="text-slate-400 dark:text-slate-500 font-normal">{language === 'en' ? 'ខ្មែរ' : 'EN'}</span>
            </button>

            {/* Theme Toggle Liquid Glass Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gradient-to-b from-white/70 to-white/40 dark:from-slate-800/70 dark:to-slate-900/70 border border-white/80 dark:border-slate-700/60 border-t-white/90 dark:border-t-white/20 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-xl transition-all shadow-sm"
              title={t('nav.toggleTheme')}
              aria-label={t('nav.toggleTheme')}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

          </div>

          {/* Mobile menu glass button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-full text-xs font-bold border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
            >
              {language === 'en' ? 'ខ្មែរ' : 'EN'}
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200"
              aria-label="Theme toggle"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* iOS Glass Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 rounded-3xl bg-white/85 dark:bg-slate-950/85 backdrop-blur-2xl border border-white/60 dark:border-slate-800/80 shadow-2xl p-4 animate-slide-up">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 font-bold border border-emerald-500/20'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

    </header>
  );
};

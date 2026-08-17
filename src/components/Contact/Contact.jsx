import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.errors.name');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = t('contact.form.errors.email');
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = t('contact.form.errors.message');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);

      const subject = `Portfolio Contact Inquiry from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

      // Open Gmail Compose in a new browser window/tab
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=maochamnol37@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, '_blank');

      // Fallback mailto trigger for default mail clients
      window.location.href = `mailto:maochamnol37@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }, 800);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('contact.subtitle')}
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Contact Cards & Links */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-emerald-500" />
              <span>Contact Channels</span>
            </h3>

            {/* Email */}
            <a
              href="mailto:maochamnol37@gmail.com"
              className="group p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-800/80 border-t-white/90 dark:border-t-white/20 shadow-md hover:border-emerald-500/40 transition-all flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  {t('contact.info.email')}
                </span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-500 transition-colors">
                  maochamnol37@gmail.com
                </span>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ChamNol09"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-800/80 border-t-white/90 dark:border-t-white/20 shadow-md hover:border-emerald-500/40 transition-all flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-500/10 text-slate-800 dark:text-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  {t('contact.info.github')}
                </span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-500 transition-colors">
                  github.com/ChamNol09
                </span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/chamnol-mao-458285335/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-800/80 border-t-white/90 dark:border-t-white/20 shadow-md hover:border-emerald-500/40 transition-all flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  {t('contact.info.linkedin')}
                </span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-500 transition-colors truncate block max-w-[200px] sm:max-w-none">
                  linkedin.com/in/chamnol-mao
                </span>
              </div>
            </a>

            {/* Telegram */}
            <a
              href="https://web.telegram.org/a/#1641253610"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-800/80 border-t-white/90 dark:border-t-white/20 shadow-md hover:border-emerald-500/40 transition-all flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  {t('contact.info.telegram')}
                </span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-500 transition-colors">
                  Telegram Direct Chat
                </span>
              </div>
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-800/80 border-t-white/90 dark:border-t-white/20 p-8 sm:p-10 shadow-[0_12px_40px_0_rgba(0,0,0,0.12)] dark:shadow-[0_12px_40px_0_rgba(0,0,0,0.5)] text-left">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {t('contact.form.successTitle')}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto">
                    {t('contact.form.successDesc')}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm mt-4 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.form.namePlaceholder')}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white text-sm focus:outline-none transition-colors ${
                        errors.name 
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' 
                          : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-rose-500 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.form.emailPlaceholder')}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white text-sm focus:outline-none transition-colors ${
                        errors.email 
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' 
                          : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-rose-500 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.form.messagePlaceholder')}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white text-sm focus:outline-none transition-colors ${
                        errors.message 
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' 
                          : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <span className="text-rose-500 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:shadow-emerald-500/30 disabled:opacity-70"
                  >
                    {loading ? (
                      <span>{t('contact.form.sending')}</span>
                    ) : (
                      <>
                        <span>{t('contact.form.submit')}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

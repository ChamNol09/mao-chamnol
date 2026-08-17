import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Experience } from './components/Experience/Experience';
import { Education } from './components/Education/Education';
import { Learning } from './components/Learning/Learning';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { ParticleBackground } from './components/Background/ParticleBackground';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-slate-800 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden">
          <ParticleBackground />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Learning />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

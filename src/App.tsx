import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { BackgroundGrid } from './components/BackgroundGrid';

import { LanguageProvider } from './components/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <main className="bg-black min-h-screen text-white selection:bg-blue-500/30 font-sans relative">
        <BackgroundGrid />
        
        <div className="relative z-10">
          <Navbar />
          <Hero />
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <Projects />
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <Skills />
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <Contact />
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          ::-webkit-scrollbar { width: 5px; }
          ::-webkit-scrollbar-track { background: #000; }
          ::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
          ::-webkit-scrollbar-thumb:hover { background: #3b82f6; }
        `}} />
      </main>
    </LanguageProvider>
  );
}

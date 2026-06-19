import React from 'react';
import { Navbar } from './app/components/Navbar';
import { Hero } from './app/components/Hero';
import { Projects } from './app/components/Projects';
import { Skills } from './app/components/Skills';
import { Contact } from './app/components/Contact';
import { BackgroundGrid } from './app/components/BackgroundGrid';
import { LanguageProvider } from './app/components/LanguageContext';

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

        <style dangerouslySetInnerHTML={{
          __html: `
          ::-webkit-scrollbar { width: 5px; }
          ::-webkit-scrollbar-track { background: #000; }
          ::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
          ::-webkit-scrollbar-thumb:hover { background: #3b82f6; }
        `}} />
      </main>
    </LanguageProvider>
  );
}

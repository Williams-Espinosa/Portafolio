import { LanguageProvider } from './components/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Architectures } from './components/Architectures';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { BackgroundGrid } from './components/BackgroundGrid';

export default function App() {
  return (
    <LanguageProvider>
      <main className="min-h-screen text-white relative">
        <BackgroundGrid />

        <div className="relative z-10">
          <Navbar />
          <Hero />

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <About />

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Skills />

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Architectures />

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Education />

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Projects />

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Contact />
        </div>
      </main>
    </LanguageProvider>
  );
}

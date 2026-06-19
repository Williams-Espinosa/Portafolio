import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menuItems = [
    { name: lang === 'ES' ? 'INICIO' : 'HOME', href: '#inicio' },
    { name: lang === 'ES' ? 'QUIÉN SOY' : 'ABOUT', href: '#sobre-mi' },
    { name: lang === 'ES' ? 'SKILLS' : 'SKILLS', href: '#tecnologias' },
    { name: lang === 'ES' ? 'CURRICULUM' : 'RESUME', href: '#educacion' },
    { name: lang === 'ES' ? 'PORTAFOLIO' : 'PORTFOLIO', href: '#proyectos' },
    { name: lang === 'ES' ? 'CONTACTO' : 'CONTACT', href: '#contacto' },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] max-w-[1400px] rounded-2xl ${scrolled ? 'py-2.5 shadow-2xl' : 'py-3'
          }`}
        style={{
          backgroundColor: 'rgba(10, 10, 10, 0.85)',
          backdropFilter: 'blur(14px)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="flex justify-between items-center px-5 md:px-6 gap-3 md:gap-4">

          <motion.a
            href="#inicio"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 shrink-0"
          >
            <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-br from-[#4f8eff] to-[#00d4ff] shrink-0">
              <div
                className="w-full h-full rounded-full overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: '#1a1a1a' }}
              >

                <img src="/Portafolio/public/img/logo.png" alt="WE" className="w-full h-full object-cover" />
              </div>
            </div>

            <span className="text-white font-black tracking-[0.1em] text-xs whitespace-nowrap hidden 2xl:block">
              WILLIAMS ESPINOSA
            </span>
          </motion.a>

          <div className="hidden xl:flex items-center gap-5 flex-1 justify-center">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[10px] font-bold tracking-[0.15em] text-gray-400 hover:text-[#4f8eff] transition-colors relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4f8eff] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <div className="hidden md:flex items-center gap-1">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/Williams-Espinosa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#4f8eff] hover:bg-white/5 transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/in/williams-espinosa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#4f8eff] hover:bg-white/5 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </motion.a>
            </div>

            <div className="hidden md:block w-px h-6 bg-white/10" />

            <button
              onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
              className="text-xs font-black tracking-widest px-3.5 py-1.5 rounded-full border border-[#4f8eff]/40 text-[#4f8eff] hover:bg-[#4f8eff]/10 hover:border-[#4f8eff] transition-all"
              aria-label="Cambiar idioma"
            >
              {lang}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden w-9 h-9 rounded-lg flex items-center justify-center text-white hover:bg-white/5 transition-colors"
              aria-label="Menú"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-[1400px] xl:hidden"
          >
            <div
              className="rounded-2xl p-6 flex flex-col gap-3 border border-white/5 shadow-2xl"
              style={{ backgroundColor: 'rgba(20, 20, 20, 0.95)', backdropFilter: 'blur(14px)' }}
            >
              <div className="pb-3 border-b border-white/5 mb-2">
                <p className="text-white font-black tracking-[0.1em] text-sm">WILLIAMS ESPINOSA</p>
                <p className="text-gray-500 text-xs mt-1">
                  {lang === 'ES' ? 'Ingeniero en TI · FullStack' : 'IT Engineer · FullStack'}
                </p>
              </div>

              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold tracking-widest text-white hover:text-[#4f8eff] transition-colors py-2"
                >
                  {item.name}
                </a>
              ))}

              <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                <a
                  href="https://github.com/Williams-Espinosa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#4f8eff] bg-white/5 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/williams-espinosa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#4f8eff] bg-white/5 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

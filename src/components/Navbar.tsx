import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu, Github, Linkedin, Mail } from 'lucide-react';

import { useLanguage } from './LanguageContext';

import avatarLogo from "figma:asset/f2a63192e7f2c6648ad7b2bab0f91ece6c2cdfd5.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const menuItems = [
    { name: t('nav.inicio'), href: '#inicio' },
    { name: t('nav.proyectos'), href: '#proyectos' },
    { name: t('nav.stack'), href: '#tecnologias' },
    { name: t('nav.sobre_mi'), href: '#contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <img 
              src={avatarLogo} 
              alt="Williams Espinosa Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white font-black tracking-widest text-lg uppercase hidden sm:block">Williams Espinosa</span>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-[10px] font-black tracking-[0.2em] text-gray-400 hover:text-blue-400 transition-colors py-2 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href="https://github.com/Williams-Espinosa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/williams-espinosa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
            
            <div className="h-4 w-[1px] bg-white/10 mx-1" />
            
            <button 
              onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
              className="text-[10px] font-black tracking-widest text-blue-400 hover:text-white transition-colors flex items-center gap-1 bg-blue-400/10 px-2 py-1 rounded-md border border-blue-400/20"
            >
              {lang}
            </button>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 bg-zinc-900 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl"
          >
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white font-bold text-sm tracking-widest"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

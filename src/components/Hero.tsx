import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Terminal, Code, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import profileImg from "figma:asset/22b058c5975ea6b404594f24752706d00edfd67d.png";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-blue-500" />
              <span className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase">{t('hero.role')}</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter">
              <span className="text-4xl md:text-6xl block mb-4 opacity-90">{t('hero.greeting')}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 block">
                {t('hero.firstName')}
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed font-light">
              {t('hero.description')}
            </p>
          </motion.div>
        </div>

        {/* Right Content - Profile Frame */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            className="relative"
          >
            {/* Boxy Border Decorations */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-blue-500 z-10" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-purple-500 z-10" />
            
            <div className="aspect-square bg-zinc-900 rounded-lg overflow-hidden border border-white/10 relative group">
              <ImageWithFallback 
                src={profileImg}
                alt="Williams Espinosa"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[10px] font-mono text-blue-400 mb-1">{t('stack.hud.data_file')}</p>
                <p className="text-white text-xs font-bold italic">{t('stack.hud.quote')}</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

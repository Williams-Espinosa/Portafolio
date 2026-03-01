import React from 'react';
import { motion } from 'motion/react';
import { 
  Layout, 
  Server, 
  Database, 
  Smartphone, 
  Settings, 
  Palette, 
  Terminal, 
  Cpu, 
  Cloud,
  ChevronRight,
  Activity,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';

const techGroups = [
  {
    title: "01.FRONTEND",
    icon: <Layout className="text-orange-500" />,
    techs: [
      { name: "HTML5", brand: "#E34F26" },
      { name: "CSS3", brand: "#1572B6" },
      { name: "JavaScript", brand: "#F7DF1E" }
    ],
    className: "md:col-span-2 md:row-span-1",
    status: "OPTIMIZED"
  },
  {
    title: "02.BACKEND",
    icon: <Server className="text-green-500" />,
    techs: [
      { name: "NodeJS", brand: "#6DA55F" },
      { name: "Express.js", brand: "#FFFFFF" },
      { name: "Java", brand: "#ED8B00" },
      { name: "Python", brand: "#3776AB" },
      { name: "Kotlin", brand: "#7F52FF" }
    ],
    className: "md:col-span-2 md:row-span-2",
    status: "SCALABLE"
  },
  {
    title: "03.MOBILE",
    icon: <Smartphone className="text-purple-500" />,
    techs: [
      { name: "Kotlin", brand: "#7F52FF" }
    ],
    className: "md:col-span-1 md:row-span-1",
    status: "STABLE"
  },
  {
    title: "04.DATA STORAGE",
    icon: <Database className="text-blue-500" />,
    techs: [
      { name: "PostgreSQL", brand: "#316192" },
      { name: "MySQL", brand: "#4479A1" },
      { name: "MongoDB", brand: "#4EA94B" }
    ],
    className: "md:col-span-1 md:row-span-1",
    status: "PERSISTENT"
  },
  {
    title: "05.CLOUD & SERVERS",
    icon: <Cloud className="text-cyan-500" />,
    techs: [
      { name: "AWS", brand: "#FF9900" },
      { name: "Nginx", brand: "#009639" },
      { name: "Apache", brand: "#D22128" }
    ],
    className: "md:col-span-2 md:row-span-1",
    status: "DEPLOYED"
  },
  {
    title: "06.DESIGN",
    icon: <Palette className="text-pink-500" />,
    techs: [
      { name: "Figma", brand: "#F24E1E" },
      { name: "LaTeX", brand: "#47A141" },
      { name: "PlantUML", brand: "#FFFFFF" },
      { name: "Canva", brand: "#00C4CC" }
    ],
    className: "md:col-span-1 md:row-span-1",
    status: "CREATIVE"
  },
  {
    title: "07.DEV OPS",
    icon: <Settings className="text-zinc-400" />,
    techs: [
      { name: "Git", brand: "#F05033" },
      { name: "GitHub", brand: "#FFFFFF" },
      { name: "Postman", brand: "#FF6C37" },
      { name: "Jira", brand: "#0A0FFF" }
    ],
    className: "md:col-span-3 md:row-span-1",
    status: "SYNCED"
  }
];

import { useLanguage } from './LanguageContext';

export const Skills = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="tecnologias" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section with Technical HUD feel */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20"
            >
              <Activity size={14} className="text-blue-400 animate-pulse" />
              <span className="text-[10px] font-mono text-blue-400 tracking-[0.3em] uppercase">
                {lang === 'ES' ? 'System Core Scan: Activo' : 'System Core Scan: Active'}
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
              {t('stack.title').split(' ')[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">
                {t('stack.title').split(' ').slice(1).join(' ')}
              </span>
            </h2>
          </div>
          <div className="hidden md:block p-6 bg-zinc-900/50 border border-white/5 rounded-2xl backdrop-blur-xl max-w-sm">
            <p className="text-xs font-mono text-gray-500 leading-relaxed">
              {lang === 'ES' ? (
                <>
                  &gt; Cargando módulos de ingeniería... <br />
                  &gt; Entornos de ejecución validados. <br />
                  &gt; Arquitectura establecida.
                </>
              ) : (
                <>
                  &gt; Loading engineering modules... <br />
                  &gt; Runtime environments validated. <br />
                  &gt; Architecture established.
                </>
              )}
            </p>
            <div className="mt-4 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-blue-500" 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 2 }}
              />
            </div>
          </div>
        </div>

        {/* Cyber Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {techGroups.map((group, gIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: gIdx * 0.05 }}
              whileHover={{ y: -5 }}
              className={`group relative bg-zinc-900/40 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-8 overflow-hidden transition-all duration-500 hover:border-blue-500/30 ${group.className}`}
            >
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/10 transition-colors" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-800/80 rounded-2xl flex items-center justify-center text-white border border-white/5 group-hover:border-blue-500/50 transition-colors">
                      {group.icon}
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-white tracking-[0.2em]">{group.title}</h3>
                      <p className="text-[9px] font-mono text-gray-600 mt-1 uppercase tracking-widest">{group.status} V2</p>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                    <Zap size={14} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.techs.map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-black/40 border border-white/5 rounded-xl flex items-center gap-3 group/item hover:border-blue-500/20 transition-all cursor-crosshair"
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full" 
                        style={{ backgroundColor: tech.brand, boxShadow: `0 0 10px ${tech.brand}` }}
                      />
                      <span className="text-[11px] font-bold text-gray-300 group-hover/item:text-white transition-colors uppercase">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Progress Bar / Hud Detail at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-800/50">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '40%' }}
                  className="h-full bg-blue-500/30"
                />
              </div>

              {/* Technical Corners */}
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/10 group-hover:border-blue-500/30" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-white/10 group-hover:border-blue-500/30" />
            </motion.div>
          ))}

          {/* GitHub Activity / Terminal Unit */}
          <motion.a 
            href="https://github.com/Williams-Espinosa"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 md:row-span-1 bg-zinc-900/40 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between group overflow-hidden relative cursor-pointer hover:border-blue-500/30 transition-all duration-300"
          >
            {/* Background pattern resembling a calendar/contribution graph */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="grid grid-cols-7 gap-1 p-4 h-full">
                {Array.from({ length: 49 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="aspect-square rounded-[2px]" 
                    style={{ 
                      backgroundColor: i % 7 === 0 ? '#3b82f6' : (i % 3 === 0 ? '#1d4ed8' : '#27272a') 
                    }} 
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black mb-4 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </div>
              <h3 className="text-xl font-black text-white leading-tight uppercase whitespace-pre-line">
                {t('stack.github_card.title')}
              </h3>
            </div>
            
            <div className="relative z-10 flex items-center gap-2 text-white/80 font-mono text-[10px] tracking-widest uppercase mt-4">
              <Globe size={12} /> {t('stack.github_card.user')}
            </div>

            {/* Technical Corners */}
            <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/10 group-hover:border-blue-500/30" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-white/10 group-hover:border-blue-500/30" />
          </motion.a>
        </div>


      </div>
    </section>
  );
};

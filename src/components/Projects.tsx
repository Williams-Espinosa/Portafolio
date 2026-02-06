import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: "01",
    title: "NEURAL CORE",
    tag: "AI DASHBOARD",
    image: "https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29yayUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzcwMzMxMzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stack: ["PYTHON", "REACT", "PYTORCH"],
    repoUrl: "https://github.com/Williams-Espinosa"
  },
  {
    id: "02",
    title: "QUANTUM UI",
    tag: "WEB EXPERIENCE",
    image: "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHAlMjBpbnRlcmZhY2UlMjBkYXJrJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MDMzMTMyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stack: ["NEXTJS", "THREEJS", "GSAP"],
    repoUrl: "https://github.com/Williams-Espinosa"
  },
  {
    id: "03",
    title: "BIO SYNC",
    tag: "MOBILE HEALTH",
    image: "https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzcwMjUyMzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stack: ["FLUTTER", "FIREBASE", "IOT"],
    repoUrl: "https://github.com/Williams-Espinosa"
  },
];

import { useLanguage } from './LanguageContext';

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-blue-500 font-mono text-sm tracking-[0.5em] mb-4 uppercase underline underline-offset-8">{t('projects.title').split(' ')[0]}</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">{t('projects.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Card Container with Grid Background internal */}
              <div className="bg-zinc-900 border border-white/5 p-4 rounded-3xl group-hover:border-blue-500/50 transition-all duration-500 overflow-hidden relative">
                {/* ID Background Decoration */}
                <span className="absolute -top-4 -right-2 text-9xl font-black text-white/[0.03] pointer-events-none select-none">
                  {project.id}
                </span>

                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
                  <ImageWithFallback 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-blue-500 tracking-widest">{project.tag}</span>
                    <div className="flex gap-2">
                      {project.stack.map(s => (
                        <span key={s} className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-blue-500 transition-colors" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-white group-hover:translate-x-2 transition-transform">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="text-[9px] font-bold px-2 py-1 bg-white/5 text-gray-400 rounded border border-white/5 uppercase tracking-tighter">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

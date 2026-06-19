import { useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Code2, Star, ArrowLeft, ExternalLink, Github, ChevronRight, Check } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import type { Project } from './Projects';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { lang } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const features = lang === 'ES' ? project.features : project.featuresEN;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', duration: 0.4 }}
        className="rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto border-r-2 border-[#4f8eff] relative"
        style={{ backgroundColor: '#252525' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-5 border-b border-white/5 backdrop-blur-xl" style={{ backgroundColor: 'rgba(37, 37, 37, 0.9)' }}>
          <div className="flex items-center gap-2 text-sm">
            <button onClick={onClose} className="text-[#4f8eff] font-bold flex items-center gap-1 hover:underline">
              <ArrowLeft size={16} />
              {lang === 'ES' ? 'Volver' : 'Back'}
            </button>
            <span className="text-gray-500">{lang === 'ES' ? 'Portafolio' : 'Portfolio'}</span>
            <ChevronRight size={14} className="text-gray-500" />
            <span className="text-[#4f8eff] font-bold">{project.title}</span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] flex items-center justify-center text-white transition-colors"
            aria-label="Cerrar"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-2">{project.title}</h2>
              <div className="w-16 h-1 bg-[#4f8eff] mb-6 rounded-full" />

              <p className="text-gray-300 leading-relaxed mb-8">
                {lang === 'ES' ? project.fullDescription : project.fullDescriptionEN}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="rounded-2xl p-5 border-2 border-[#4f8eff]/30 hover:border-[#4f8eff] transition-colors" style={{ backgroundColor: '#1a1a1a' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 className="w-5 h-5 text-[#4f8eff]" />
                  </div>
                  <p className="text-3xl font-black text-white">{project.stack.length}</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">
                    {lang === 'ES' ? 'Tecnologías' : 'Technologies'}
                  </p>
                </div>

                <div className="rounded-2xl p-5 border-2 border-[#4f8eff]/30 hover:border-[#4f8eff] transition-colors" style={{ backgroundColor: '#1a1a1a' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-[#4f8eff]" />
                  </div>
                  <p className="text-3xl font-black text-white">{project.features.length}</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">Features</p>
                </div>
              </div>

              <div className="flex gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-[#4f8eff] text-black font-black text-sm flex items-center justify-center gap-2 hover:bg-[#4f8eff] transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-[#1a1a1a] border border-white/10 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#2a2a2a] transition-colors"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>

            <div>
              <div
                className={`aspect-video rounded-2xl flex items-center justify-center relative overflow-hidden bg-gradient-to-br ${project.thumbnail.gradient || ''} border border-white/5`}
                style={{ backgroundColor: project.thumbnail.bg || '#252525' }}
              >
                {project.thumbnail.src ? (
                  <img
                    src={project.thumbnail.src}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}
                    />
                    <span className="text-[150px] filter drop-shadow-2xl">{project.thumbnail.emoji}</span>
                  </>
                )}

                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white">
                  1 / 1
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-[#4f8eff]" />
              {lang === 'ES' ? 'Tecnologías Utilizadas' : 'Technologies Used'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-xs font-bold bg-[#1a1a1a] text-[#4f8eff] border border-[#4f8eff]/30 hover:bg-[#4f8eff] hover:text-black transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-[#4f8eff]" />
              {lang === 'ES' ? 'Características Principales' : 'Main Features'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#1a1a1a] border border-white/5"
                >
                  <div className="w-5 h-5 rounded-full bg-[#4f8eff]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#4f8eff]" strokeWidth={3} />
                  </div>
                  <p className="text-sm text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ArrowRight, Globe, Smartphone, Award, Trophy } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { ProjectModal } from './ProjectModal';

export interface Project {
  id: string;
  title: string;
  description: string;
  descriptionEN: string;
  fullDescription: string;
  fullDescriptionEN: string;
  thumbnail: { bg?: string; emoji?: string; gradient?: string; src?: string };
  stack: string[];
  features: string[];
  featuresEN: string[];
  badge?: { label: string; labelEN: string; type: 'success' | 'warning' | 'info' | 'gold' };
  repoUrl: string;
  demoUrl?: string;
  type: 'web' | 'android';
}

const projects: Project[] = [
  {
    id: 'web-01',
    title: 'SalubTech',
    description: 'Plataforma segura para gestión de archivos gubernamentales con análisis avanzado.',
    descriptionEN: 'Secure platform for governmental file management with advanced analytics.',
    fullDescription: 'Plataforma de gestión de archivos gubernamentales con arquitectura MVC. Responsable de la capa de seguridad de la API (Express) con implementación de JWT y separación estricta de roles. Diseñada para garantizar integridad, confidencialidad y trazabilidad de documentos sensibles.',
    fullDescriptionEN: 'Government file management platform with MVC architecture. Responsible for Express API security layer with JWT and strict role separation. Designed to ensure document integrity, confidentiality and traceability.',
    thumbnail: { bg: '#0f766e', emoji: '🏛️', gradient: 'from-teal-700 to-emerald-900' },
    stack: ['Express', 'PostgreSQL', 'JWT', 'Node.js', 'Arquitectura MVC'],
    features: [
      'Arquitectura MVC con capas bien definidas',
      'Capa de seguridad API en Express con JWT',
      'Separación estricta de roles y permisos',
      'Trazabilidad completa de documentos',
      'Cifrado de archivos sensibles',
    ],
    featuresEN: [
      'MVC architecture with clear layers',
      'Express API security layer with JWT',
      'Strict role and permission separation',
      'Complete document traceability',
      'Sensitive file encryption',
    ],
    repoUrl: 'https://github.com/Williams-Espinosa',
    demoUrl: '#',
    type: 'web',
  },
  {
    id: 'web-02',
    title: 'Fiscal Tech',
    description: 'Plataforma descentralizada de juegos, torneos y streaming en Blockchain.',
    descriptionEN: 'Decentralized gaming, tournaments and streaming platform on Blockchain.',
    fullDescription: 'Plataforma descentralizada construida sobre Blockchain Vara que integra juegos, sistema de torneos competitivos y funcionalidad de streaming. Premiada nacional e internacionalmente por su innovación tecnológica y propuesta de valor en el ecosistema Web3.',
    fullDescriptionEN: 'Decentralized platform built on Vara Blockchain integrating games, competitive tournaments and streaming. Nationally and internationally awarded for tech innovation in Web3.',
    thumbnail: { bg: '#581c87', emoji: '🎮', gradient: 'from-purple-700 to-pink-900' },
    stack: ['Java', 'Postman', 'JWT', 'Javalin', 'Mysql'],
    features: [
      'Plataforma descentralizada en Blockchain Vara',
      'Sistema de torneos competitivos',
      'Streaming integrado en tiempo real',
      'Smart contracts en Java',
      'Marketplace de NFTs gaming',
    ],
    featuresEN: [
      'Decentralized platform on Vara Blockchain',
      'Competitive tournament system',
      'Real-time integrated streaming',
      'Java smart contracts',
      'Gaming NFT marketplace',
    ],
    repoUrl: 'https://github.com/Williams-Espinosa',
    demoUrl: '#',
    type: 'web',
  },
  {
    id: 'android-01',
    title: 'LABKEEP',
    description: 'App nativa Android para dividir gastos en grupo con arquitectura limpia.',
    descriptionEN: 'Native Android app to split group expenses with clean architecture.',
    fullDescription: 'Aplicación nativa Android para gestionar y dividir gastos en grupos (viajes, roomies, eventos). Construida con Kotlin, Jetpack Compose y arquitectura MVVM + Clean Architecture. Inyección de dependencias con Dagger Hilt y persistencia con Room.',
    fullDescriptionEN: 'Native Android app to manage and split group expenses. Built with Kotlin, Jetpack Compose and MVVM + Clean Architecture. Dagger Hilt DI and Room persistence.',
    thumbnail: { bg: '#1e3a8a', emoji: '💸', gradient: 'from-blue-700 to-indigo-900' },
    stack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Dagger Hilt', 'Room'],
    features: [
      'Gestión de gastos por grupos',
      'División equitativa o personalizada',
      'Historial completo de transacciones',
      'Modo offline con Room DB',
      'Compartir resúmenes por enlace',
    ],
    featuresEN: [
      'Group expense management',
      'Equal or custom split',
      'Complete transaction history',
      'Offline mode with Room DB',
      'Share summaries via link',
    ],
    repoUrl: 'https://github.com/Williams-Espinosa',
    type: 'android',
  },
  {
    id: 'android-02',
    title: 'SARC',
    description: 'Backend en Go para gestión de restaurante con WebSockets en tiempo real.',
    descriptionEN: 'Go backend for restaurant management with real-time WebSockets.',
    fullDescription: 'Backend robusto para gestión de restaurante con notificaciones en tiempo real entre meseros y cocineros vía WebSocket. Arquitectura organizada por features (user, product, order) con capas domain/app/infra. CRUD completo, filtros avanzados y roles diferenciados chef/waiter.',
    fullDescriptionEN: 'Robust restaurant backend with real-time notifications between waiters and cooks via WebSocket. Feature-based architecture (user, product, order) with domain/app/infra layers. Full CRUD, advanced filters and chef/waiter roles.',
    thumbnail: { bg: '#365314', emoji: '🍳', gradient: 'from-lime-700 to-green-900' },
    stack: ['Go', 'Gin', 'PostgreSQL', 'Gorilla WebSocket', 'Google Wire', 'REST API', 'Docker'],
    features: [
      'Arquitectura por features con capas domain/app/infra',
      'Inyección de dependencias con Google Wire',
      'WebSockets para comunicación en tiempo real',
      'CRUD completo de usuarios, productos y órdenes',
      'Roles diferenciados chef/waiter',
    ],
    featuresEN: [
      'Feature-based architecture with domain/app/infra',
      'Dependency injection with Google Wire',
      'WebSockets for real-time communication',
      'Full CRUD for users, products and orders',
      'Differentiated chef/waiter roles',
    ],
    repoUrl: 'https://github.com/Williams-Espinosa',
    type: 'android',
  },
];

const badgeStyles = {
  success: { bg: '#4f8eff', text: '#000' },
  warning: { bg: '#fb923c', text: '#000' },
  info: { bg: '#00d4ff', text: '#000' },
  gold: { bg: '#fbbf24', text: '#000' },
};

export const Projects = () => {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<'web' | 'android'>('web');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const currentProjects = projects.filter(p => p.type === activeTab);

  const gridClass =
    activeTab === 'android'
      ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 max-w-6xl mx-auto'
      : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';

  const thumbAspectClass = activeTab === 'android' ? 'aspect-[3/4]' : 'aspect-video';

  const emojiSizeClass = activeTab === 'android' ? 'text-5xl' : 'text-7xl';

  const cardBodyPadding = activeTab === 'android' ? 'p-4' : 'p-6';

  const titleSizeClass = activeTab === 'android' ? 'text-base' : 'text-xl';

  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-white mb-4 text-center"
        >
          {lang === 'ES' ? 'Portafolio' : 'Portfolio'}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="w-20 h-1 bg-[#4f8eff] mx-auto mb-4 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          {lang === 'ES'
            ? 'Una colección de proyectos que demuestran mi pasión por construir soluciones tecnológicas innovadoras.'
            : 'A collection of projects that showcase my passion for building innovative tech solutions.'}
        </motion.p>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-2xl p-2 border border-white/5" style={{ backgroundColor: '#252525' }}>
            <button
              onClick={() => setActiveTab('web')}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${activeTab === 'web'
                ? 'bg-[#4f8eff] text-black shadow-lg'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              <Globe size={16} />
              {lang === 'ES' ? 'Apps Web' : 'Web Apps'}
            </button>
            <button
              onClick={() => setActiveTab('android')}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${activeTab === 'android'
                ? 'bg-[#4f8eff] text-black shadow-lg'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              <Smartphone size={16} />
              {lang === 'ES' ? 'Apps Android' : 'Android Apps'}
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={gridClass}
          >
            {currentProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                className="rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-[#4f8eff]/30 transition-colors group flex flex-col"
                style={{ backgroundColor: '#252525' }}
                onClick={() => setSelectedProject(project)}
              >
                <div
                  className={`${thumbAspectClass} relative flex items-center justify-center bg-gradient-to-br ${project.thumbnail.gradient || ''} overflow-hidden`}
                  style={{ backgroundColor: project.thumbnail.bg || '#252525' }}
                >
                  {project.thumbnail.src ? (
                    <img
                      src={project.thumbnail.src}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <>
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                          backgroundSize: '20px 20px',
                        }}
                      />
                      <span className={`${emojiSizeClass} filter drop-shadow-lg group-hover:scale-110 transition-transform relative z-10`}>
                        {project.thumbnail.emoji}
                      </span>
                    </>
                  )}

                  {activeTab === 'android' && (
                    <div className="absolute inset-4 rounded-xl border-2 border-white/15 pointer-events-none z-20" />
                  )}

                  {project.badge && (
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 text-[9px] font-black rounded-full uppercase tracking-wider flex items-center gap-1 z-20"
                      style={{
                        backgroundColor: badgeStyles[project.badge.type].bg,
                        color: badgeStyles[project.badge.type].text,
                      }}
                    >
                      {project.badge.type === 'gold' && <Trophy className="w-3 h-3" />}
                      {project.badge.type === 'info' && <Award className="w-3 h-3" />}
                      {lang === 'ES' ? project.badge.label : project.badge.labelEN}
                    </span>
                  )}
                </div>

                <div className={`${cardBodyPadding} flex flex-col flex-1`}>
                  <h3 className={`${titleSizeClass} font-black text-white mb-2`}>{project.title}</h3>

                  <p
                    className={`text-xs text-gray-400 leading-relaxed line-clamp-2 mb-3 ${activeTab === 'android' ? 'min-h-0' : 'text-sm mb-4 min-h-[40px]'
                      }`}
                  >
                    {lang === 'ES' ? project.description : project.descriptionEN}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.slice(0, activeTab === 'android' ? 2 : 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#1a1a1a] text-[#4f8eff] border border-[#4f8eff]/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > (activeTab === 'android' ? 2 : 4) && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#1a1a1a] text-gray-400">
                        +{project.stack.length - (activeTab === 'android' ? 2 : 4)}
                      </span>
                    )}
                  </div>

                  <div className={`flex gap-2 mt-auto ${activeTab === 'android' ? 'flex-col' : ''}`}>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 py-2 rounded-lg bg-[#1a1a1a] border border-white/10 text-gray-300 text-[11px] font-bold flex items-center justify-center gap-1.5 hover:bg-[#2a2a2a] hover:text-white transition-colors"
                    >
                      <Github size={12} />
                      GitHub
                    </a>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="flex-1 py-2 rounded-lg bg-[#4f8eff] text-black text-[11px] font-black flex items-center justify-center gap-1.5 hover:bg-[#3b7aef] transition-colors"
                    >
                      {lang === 'ES' ? 'Detalles' : 'Details'}
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

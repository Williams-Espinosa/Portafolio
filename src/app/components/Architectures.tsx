import { motion } from 'motion/react';
import { Target, Hexagon, Triangle, Share2, Box, Shapes } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const Architectures = () => {
  const { lang } = useLanguage();

  const architectures = [
    {
      title: 'Arquitectura limpia',
      titleEN: 'Clean Architecture',
      description: 'Separación de responsabilidades en capas para lograr un código independiente, testeable y muy mantenible.',
      descriptionEN: 'Separation of concerns in layers to achieve independent, testable and highly maintainable code.',
      icon: Target,
    },
    {
      title: 'Hexagonal / Puertos y adaptadores',
      titleEN: 'Hexagonal / Ports and Adapters',
      description: 'Aislamiento de la lógica de negocio central de las bases de datos y frameworks mediante puertos e implementaciones externas.',
      descriptionEN: 'Isolation of core business logic from databases and frameworks via ports and external implementations.',
      icon: Hexagon,
    },
    {
      title: 'Modelo Vista Controlador (MVC)',
      titleEN: 'Model View Controller (MVC)',
      description: 'Estructuración clásica separando la interfaz de usuario, la lógica de datos y el flujo de control para facilitar el desarrollo.',
      descriptionEN: 'Classic structuring separating user interface, data logic and control flow to facilitate development.',
      icon: Triangle,
    },
    {
      title: 'Event Driven',
      titleEN: 'Event Driven',
      description: 'Arquitectura dirigida por eventos enfocada en el bajo acoplamiento y flujos asíncronos para sistemas altamente reactivos.',
      descriptionEN: 'Event-driven architecture focused on low coupling and asynchronous flows for highly reactive systems.',
      icon: Share2,
    },
    {
      title: 'Modelo Vista ViewModel (MVVM)',
      titleEN: 'Model View ViewModel (MVVM)',
      description: 'Desacoplamiento especializado en desarrollo Front-End (ej. con Android/Jetpack) que facilita el enlace bidireccional de datos.',
      descriptionEN: 'Specialized decoupling in Front-End development (e.g. with Android/Jetpack) facilitating two-way data binding.',
      icon: Box,
    },
    {
      title: 'Patrones de diseño',
      titleEN: 'Design Patterns',
      description: 'Aplicación de patrones creacionales, estructurales y de comportamiento (Singleton, Observer, Factory, etc) para resolver problemas comunes.',
      descriptionEN: 'Application of creational, structural and behavioral patterns (Singleton, Observer, Factory, etc) to solve common problems.',
      icon: Shapes,
    },
  ];

  return (
    <section id="arquitecturas" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-2 h-2 rounded-full bg-[#4f8eff]" />
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight"
          >
            {lang === 'ES' ? 'Patrones & Arquitecturas' : 'Patterns & Architectures'}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {architectures.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#151515] flex flex-col sm:flex-row gap-6 hover:border-[#4f8eff]/30 transition-colors group"
            >
              <div className="shrink-0">
                <div className="w-14 h-14 flex items-center justify-center border border-white/10 rounded-lg group-hover:border-[#4f8eff]/50 transition-colors bg-[#111]">
                  <item.icon className="w-6 h-6 text-[#4f8eff]" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{lang === 'ES' ? item.title : item.titleEN}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {lang === 'ES' ? item.description : item.descriptionEN}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

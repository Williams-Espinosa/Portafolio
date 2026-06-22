import { motion } from 'motion/react';
import {
  Users, Zap, Crown, MessageSquare,
  Brain, RefreshCw, GraduationCap, Heart,
  Download
} from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface PersonalDataItem {
  label: string;
  labelEN: string;
  value: string;
  link?: string;
}

const personalData: PersonalDataItem[] = [
  { label: 'Email', labelEN: 'Email', value: 'w.espinosa.it@gmail.com', link: 'mailto:w.espinosa.it@gmail.com' },
  { label: 'Teléfono', labelEN: 'Phone', value: '(+52) 966 664 29 31' },
  { label: 'Dirección', labelEN: 'Location', value: 'Tuxtla Gutiérrez, Chiapas, MX' },
  { label: 'Idiomas', labelEN: 'Languages', value: 'Español (nativo), Inglés (A2+)' },
];

const softSkills = [
  { icon: Users, label: 'Trabajo en equipo', labelEN: 'Teamwork' },
  { icon: Zap, label: 'Aprendizaje rápido', labelEN: 'Fast Learning' },
  { icon: Crown, label: 'Liderazgo', labelEN: 'Leadership' },
  { icon: MessageSquare, label: 'Comunicación', labelEN: 'Communication' },
  { icon: Brain, label: 'Pensamiento lógico', labelEN: 'Logical Thinking' },
  { icon: RefreshCw, label: 'Adaptable', labelEN: 'Adaptable' },
  { icon: GraduationCap, label: 'Autodidacta', labelEN: 'Self-taught' },
  { icon: Heart, label: 'Empatía', labelEN: 'Empathy' },
];


export const About = () => {
  const { lang } = useLanguage();

  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-white mb-4 text-center"
        >
          {lang === 'ES' ? 'Quien soy' : 'About Me'}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="w-20 h-1 bg-[#4f8eff] mx-auto mb-12 rounded-full"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-16"
        >
          <p className="text-base md:text-lg text-gray-300 leading-relaxed text-left">
            <span className="text-[#4f8eff] font-bold">
              {lang === 'ES'
                ? '¡Hola! Mi nombre es Williams Espinosa.'
                : 'Hi! My name is Williams Espinosa.'}
            </span>{' '}
            {lang === 'ES'
              ? 'Estudiante de Ingeniería en Tecnologías de la Información e Innovación Digital en la Universidad Politécnica de Chiapas. Apasionado por el desarrollo Full Stack y aplicaciones móviles Android, iniciando mi camino a DevOps e iniciándome en el mundo de la ciberseguridad. Me motiva crear soluciones tecnológicas innovadoras, robustas y seguras, aplicando pensamiento analítico y aprendizaje continuo.'
              : 'IT and Digital Innovation Engineering student at Polytechnic University of Chiapas. Passionate about Full Stack development and Android mobile apps, starting my path in DevOps and starting my journey in cybersecurity. Driven by creating innovative, robust and secure tech solutions through analytical thinking and continuous learning.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-black text-white mb-6">
              {lang === 'ES' ? 'Datos personales' : 'Personal Info'}
            </h3>

            <div className="space-y-3">
              {personalData.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="grid grid-cols-[140px_1fr] gap-4 items-baseline"
                >
                  <p className="text-sm font-bold text-[#4f8eff]">
                    {lang === 'ES' ? item.label : item.labelEN}:
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#4f8eff] underline hover:text-white transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-white">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-black text-white mb-6">
              {lang === 'ES' ? 'Habilidades Blandas' : 'Soft Skills'}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {softSkills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0, transition: { delay: idx * 0.05, duration: 0.4 } }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center py-6 px-2 bg-[#2a2d32] hover:bg-[#4f8eff] hover:-translate-y-1 transition-all duration-300 rounded-2xl cursor-pointer"
                  >
                    <Icon size={36} className="text-white mb-4" />
                    <p className="text-xs font-bold text-white text-center uppercase tracking-wider">
                      {lang === 'ES' ? skill.label : skill.labelEN}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.a
            href={lang === 'ES' ? '/cv/CV_Williams_Espinosa_ES.pdf' : '/cv/CV_Williams_Espinosa_IN.pdf'}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-md border border-white/80 text-white font-bold text-sm tracking-wider uppercase flex items-center gap-3 hover:bg-white hover:text-black transition-colors"
          >
            <span>{lang === 'ES' ? 'Descargar CV' : 'Download CV'}</span>
            <Download size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
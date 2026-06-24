import { motion } from 'motion/react';
import {
  GraduationCap, Briefcase, Calendar, Award
} from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface TimelineItem {
  title: string;
  titleEN: string;
  place: string;
  placeEN: string;
  periodo: string;
  periodEn: string;
  description: string;
  descriptionEN: string;
}

const certifications: TimelineItem[] = [
  {
    title: 'AWS Academy Cloud Foundations',
    titleEN: 'AWS Academy Cloud Foundations',
    place: 'Amazon Web Services',
    placeEN: 'Amazon Web Services',
    periodo: '2025',
    periodEn: '2025',
    description: 'Fundamentos de la nube',
    descriptionEN: 'Cloud Foundations',
  },
  {
    title: 'Python Essentials 1 & 2',
    titleEN: 'Python Essentials 1 & 2',
    place: 'Cisco Networking Academy',
    placeEN: 'Cisco Networking Academy',
    periodo: '2026',
    periodEn: '2026',
    description: 'Certificaciones de programación en Python, niveles 1 y 2.',
    descriptionEN: 'Python programming certifications, levels 1 and 2.',
  },
  {
    title: 'Curso profesional de React',
    titleEN: 'Professional React Course',
    place: 'Código Facilito',
    placeEN: 'Easy Code',
    periodo: '2026',
    periodEn: '2026',
    description: 'Participación y completado.',
    descriptionEN: 'Participation and completion.',
  },
  {
    title: 'Curso de Java Profesional',
    titleEN: 'Professional Java Course',
    place: 'Código Facilito',
    placeEN: 'Easy Code',
    periodo: '2025',
    periodEn: '2025',
    description: 'Participación y completado.',
    descriptionEN: 'Participation and completion.',
  },
  {
    title: 'Curso de Introducción a DevOps',
    titleEN: 'Introduction to DevOps Course',
    place: 'Código Facilito',
    placeEN: 'Easy Code',
    periodo: '2026',
    periodEn: '2026',
    description: 'Bases y Conceptos. Participación y completado.',
    descriptionEN: 'Basics and Concepts. Participation and completion.',
  },
];

const education: TimelineItem[] = [
  {
    title: 'Ingeniería en Tecnologías de la Información e innovación Digital',
    titleEN: 'IT and Digital Innovation Engineering',
    place: 'Universidad Politécnica de Chiapas',
    placeEN: 'Polytechnic University of Chiapas',
    periodo: '2024 - Actualmente',
    periodEn: '2024 - Currently',
    description: 'Licenciatura con graduación esperada en abril 2028. Enfoque en desarrollo Full-Stack, DevOps y seguridad de aplicaciones. Dominio de arquitecturas limpias, hexagonales y patrones de diseño.',
    descriptionEN: 'Bachelor\'s degree expected April 2028. Focus on full-stack development, DevOps, and application security. Proficiency in clean architectures, hexagonal architecture, and design patterns.',
  },
  {
    title: 'Fisicos Matemáticos',
    titleEN: 'Physics and Mathematics',
    place: 'Preparatoria Jorge H. Bedwell',
    placeEN: 'Jorge H. Bedwell High School',
    periodo: '2021 - 2024',
    periodEn: '2021 - 2024',
    description: 'Formación integral en fisicos matemáticos, desarrollando habilidades de pensamiento crítico y comunicación efectiva. Con materias avanzadas en matemáticas, física y programación, preparando para estudios superiores en ingeniería y ciencias aplicadas.',
    descriptionEN: 'Comprehensive education in physics and mathematics, developing critical thinking and effective communication skills.',
  },
];

const experience: TimelineItem[] = [
  {
    title: 'Desarrollador Android',
    titleEN: 'Android Developer',
    place: 'Proyectos Académicos Mathstack',
    placeEN: 'Academic Projects Mathstack',
    periodo: 'MAYO - Actualidad 2026',
    periodEn: 'MAY - present 2026',
    description: 'Desarrollo de aplicacion Android, con android nativo con Kotlin y Jetpack Compose, para reforzar el aprendizaje de matemáticas. Arquitectura Limpia, y MVVM.',
    descriptionEN: 'Android application development with Kotlin and Jetpack Compose. Clean architecture and MVVM for enhancing math learning.',
  },
  {
    title: 'Desarrollador Android',
    titleEN: 'Android Developer',
    place: 'Proyectos Académicos LABKEEP',
    placeEN: 'Academic Projects LABKEEP',
    periodo: 'ABRIL 2025',
    periodEn: 'APRIL 2025',
    description: 'Desarrollo de aplicacion Android nativa con Kotlin y Jetpack Compose. Arquitectura MVVM, integración con APIs REST para la gestión de laboratorios de prestamos de quipos y materiales.',
    descriptionEN: 'Native Android apps with Kotlin and Jetpack Compose. MVVM architecture, REST API integration and store publishing.',
  },
  {
    title: 'Desarrollador Android',
    titleEN: 'Android Developer',
    place: 'Proyectos Académicos SARC',
    placeEN: 'Academic Projects SARC',
    periodo: 'MARZO - ABRIL 2026',
    periodEn: 'MARCH - APRIL 2026',
    description: 'Construcción de aplicaciones Android nativas con Kotlin y Jetpack Compose. Arquitectura MVVM, integración con APIs REST y publicación en stores.',
    descriptionEN: 'Native Android apps with Kotlin and Jetpack Compose. MVVM architecture, REST API integration and store publishing.',
  },
  {
    title: 'Desarrollador Frontend',
    titleEN: 'Frontend Developer',
    place: 'Proyectos Académico SalubTech',
    placeEN: 'Academic Projects SalubTech',
    periodo: ' Enero - Abril 2026',
    periodEn: ' January - April 2026',
    description: 'Desarrollo de aplicacion web con React, TypeScript y TailwindCSS. Integración con APIs REST y despliegue en Vercel.',
    descriptionEN: 'Web application development with React, TypeScript and TailwindCSS. Integration with REST APIs and deployment on Vercel.',
  },
  {
    title: 'Desarrollador Backend',
    titleEN: 'Back-End Developer',
    place: 'Proyectos Académico SalubTech',
    placeEN: 'Academic Projects SalubTech',
    periodo: ' Enero - Abril 2026',
    periodEn: ' January - April 2026',
    description: 'Desarrollo de Integración con APIs REST y despliegue en servidores AWS. Usando JavaScript, Node y Express, con bases de datos relacionales. Autenticación JWT.',
    descriptionEN: 'Backend development with JavaScript, Express, Node.js, MySQL and JWT authentication.',
  },
  {
    title: 'Desarrollador Backend',
    titleEN: 'Back-End Developer',
    place: 'Proyectos Académicos FiscalTech',
    placeEN: 'Academic Projects FiscalTech',
    periodo: 'SEPTIEMBRE - DICIEMBRE 2025',
    periodEn: 'SEPTEMBER - DECEMBER 2025',
    description: 'Desarrollo de APIs RESTful, diseño de bases de datos relacionales y arquitectura backend. Trabajo con Java, Javalin, MySQL y autenticación JWT.',
    descriptionEN: 'Development of RESTful APIs, design of relational databases and backend architecture. Experience with Java, Javalin, MySQL and JWT authentication.',
  },
];




export const Education = () => {
  const { lang } = useLanguage();

  return (
    <section id="educacion" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-white mb-4 text-center"
        >
          Curriculum
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="w-20 h-1 bg-[#4f8eff] mx-auto mb-16 rounded-full"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-3xl font-black text-white mb-8 text-center flex items-center justify-center gap-3">
                <GraduationCap className="w-7 h-7 text-[#4f8eff]" />
                {lang === 'ES' ? 'Educación' : 'Education'}
              </h3>
              <div className="space-y-6">
                {education.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-2xl p-6 border border-white/5 hover:border-[#4f8eff]/30 transition-colors"
                    style={{ backgroundColor: '#252525' }}
                  >
                    <h4 className="text-base font-black text-white mb-1">
                      {lang === 'ES' ? item.title : item.titleEN}
                    </h4>
                    <p className="text-lg font-bold text-[#4f8eff] mb-2">{item.place}</p>
                    <p className="text-xs font-bold text-[#4f8eff] uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {lang === 'ES' ? item.periodo : item.periodEn}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {lang === 'ES' ? item.description : item.descriptionEN}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-black text-white mb-8 text-center flex items-center justify-center gap-3">
                <Award className="w-7 h-7 text-[#4f8eff]" />
                {lang === 'ES' ? 'Certificaciones' : 'Certifications'}
              </h3>
              <div className="space-y-6">
                {certifications.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-2xl p-6 border border-white/5 hover:border-[#4f8eff]/30 transition-colors"
                    style={{ backgroundColor: '#252525' }}
                  >
                    <h4 className="text-base font-black text-white mb-1">
                      {lang === 'ES' ? item.title : item.titleEN}
                    </h4>
                    <p className="text-lg font-bold text-[#4f8eff] mb-2">{item.place}</p>
                    <p className="text-xs font-bold text-[#4f8eff] uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {lang === 'ES' ? item.periodo : item.periodEn}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {lang === 'ES' ? item.description : item.descriptionEN}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-black text-white mb-8 text-center flex items-center justify-center gap-3">
              <Briefcase className="w-7 h-7 text-[#4f8eff]" />
              {lang === 'ES' ? 'Experiencia' : 'Experience'}
            </h3>
            <div className="space-y-6">
              {experience.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl p-6 border border-white/5 hover:border-[#4f8eff]/30 transition-colors"
                  style={{ backgroundColor: '#252525' }}
                >
                  <h4 className="text-base font-black text-white mb-1">
                    {lang === 'ES' ? item.title : item.titleEN}
                  </h4>
                  <p className="text-lg font-bold text-[#4f8eff] mb-2">{item.place}</p>
                  <p className="text-xs font-bold text-[#4f8eff] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {lang === 'ES' ? item.periodo : item.periodEn}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {lang === 'ES' ? item.description : item.descriptionEN}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
    description: 'Formación integral en fisicos matemáticos, desarrollando habilidades de pensamiento crítico y comunicación efectiva. Con materias en matemáticas, física, electronica, y programación, preparando para estudios superiores en ingeniería y ciencias aplicadas.',
    descriptionEN: 'Comprehensive education in physics, chemistry, and mathematics, developing critical thinking and effective communication skills.',
  },
];
const experience: TimelineItem[] = [
  {
    title: 'Desarrollador Full-Stack',
    titleEN: 'Full-Stack Developer',
    place: 'Proyecto Académico VulnScope',
    placeEN: 'Academic Project VulnScope',
    periodo: 'Julio 2026',
    periodEn: 'July 2026',
    description:
      'Desarrollo de una aplicación web para el análisis de vulnerabilidades utilizando Next.js, React, TypeScript, Node.js y Tailwind CSS. Implementación de una arquitectura orientada a servicios (SOA), desarrollo de APIs REST, integración con la NVD API para el análisis de vulnerabilidades y diseño de la lógica de negocio.',
    descriptionEN:
      'Developed a web application for vulnerability analysis using Next.js, React, TypeScript, Node.js, and Tailwind CSS. Implemented a Service-Oriented Architecture (SOA), developed REST APIs, integrated the NVD API for vulnerability analysis, and designed the application business logic.',
  },
  {
    title: 'Desarrollador Full-Stack',
    titleEN: 'Full-Stack Developer',
    place: 'Proyecto Académico MathStack',
    placeEN: 'Academic Project MathStack',
    periodo: 'Mayo - Julio 2026',
    periodEn: 'May - July 2026',
    description:
      'Desarrollo de una Progressive Web Application (PWA) para reforzar el aprendizaje de matemáticas utilizando React, TypeScript, Kotlin, Ktor y PostgreSQL. Implementación de Arquitectura Limpia, MVVM y Arquitectura Hexagonal, desarrollo de APIs REST, autenticación JWT, diseño de bases de datos relacionales e integración con Docker.',
    descriptionEN:
      'Developed a Progressive Web Application (PWA) for mathematics learning using React, TypeScript, Kotlin, Ktor, and PostgreSQL. Implemented Clean Architecture, MVVM, and Hexagonal Architecture, developed REST APIs, JWT authentication, relational database design, and Docker containerization.',
  },
  {
  title: 'Desarrollador Full-Stack',
  titleEN: 'Full-Stack Developer',
  place: 'Proyecto Académico LABKEEP',
  placeEN: 'Academic Project LABKEEP',
  periodo: 'Abril 2025',
  periodEn: 'April 2025',
  description:
    'Desarrollo de una aplicación Android nativa con Kotlin y Jetpack Compose para la gestión de préstamos de laboratorios, equipos y materiales. Desarrollo del backend con Java, Javalin y MySQL, implementación de APIs REST, arquitectura MVVM, integración entre cliente y servidor, y despliegue del backend en AWS.',
  descriptionEN:
    'Developed a native Android application with Kotlin and Jetpack Compose for laboratory equipment and material management. Built the backend using Java, Javalin, and MySQL, implemented REST APIs, integrated the mobile application with backend services, and deployed the backend on AWS.',
},
  {
    title: 'Desarrollador Android',
    titleEN: 'Android Developer',
    place: 'Proyecto Académico SARC',
    placeEN: 'Academic Project SARC',
    periodo: 'Marzo - Abril 2026',
    periodEn: 'March - April 2026',
    description:
      'Desarrollo de una aplicación Android nativa con Kotlin y Jetpack Compose. Implementación de la arquitectura MVVM, integración con APIs REST y almacenamiento local mediante Room para el reporte ciudadano.',
    descriptionEN:
      'Developed a native Android application with Kotlin and Jetpack Compose. Implemented MVVM architecture, REST API integration, and local data persistence using Room for a citizen reporting platform.',
  },
  {
    title: 'Desarrollador Full-Stack',
    titleEN: 'Full-Stack Developer',
    place: 'Proyecto Académico SalubTech',
    placeEN: 'Academic Project SalubTech',
    periodo: 'Enero - Abril 2026',
    periodEn: 'January - April 2026',
    description:
      'Desarrollo de una aplicación web utilizando React, TypeScript, Node.js, Express y MySQL. Implementación de APIs REST, autenticación JWT, despliegue del frontend en Vercel y servicios backend en AWS.',
    descriptionEN:
      'Developed a web application using React, TypeScript, Node.js, Express, and MySQL. Implemented REST APIs, JWT authentication, deployed the frontend on Vercel, and backend services on AWS.',
  },
  {
    title: 'Desarrollador Backend',
    titleEN: 'Backend Developer',
    place: 'Proyecto Académico FiscalTech',
    placeEN: 'Academic Project FiscalTech',
    periodo: 'Septiembre - Diciembre 2025',
    periodEn: 'September - December 2025',
    description:
      'Desarrollo de APIs RESTful y arquitectura backend utilizando Java, Javalin y MySQL. Diseño de bases de datos relacionales, autenticación JWT e implementación de buenas prácticas, y servicio backend en AWS.',
    descriptionEN:
      'Developed RESTful APIs and backend architecture using Java, Javalin, and MySQL. Designed relational databases, implemented JWT authentication, and followed backend best practices, and deployed backend services on AWS.',
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

import { motion } from 'motion/react';
import { Code2, Server, Smartphone, Database, Cloud, Wrench } from 'lucide-react';
import { useLanguage } from './LanguageContext';


type TechLevel = 'Avanzado' | 'Intermedio' | 'Básico';

interface Tech {
  name: string;
  iconUrl?: string;
  iconBg?: string;
  fallback?: string;
  level?: TechLevel;
}

const getLevelStyles = (level?: TechLevel) => {
  switch (level) {
    case 'Avanzado':
      return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
    case 'Intermedio':
      return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    case 'Básico':
      return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
    default:
      return 'hidden';
  }
};

const getLevelText = (level: TechLevel, lang: string) => {
  if (lang === 'ES') return level;
  switch (level) {
    case 'Avanzado': return 'Advanced';
    case 'Intermedio': return 'Intermediate';
    case 'Básico': return 'Basic';
    default: return '';
  }
};

const techCategories: { title: string; titleEN: string; icon: React.ReactNode; techs: Tech[] }[] = [
  {
    title: 'Lenguajes',
    titleEN: 'Languages',
    icon: <Code2 className="w-5 h-5" />,
    techs: [
      { name: 'JavaScript', level: 'Básico', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', level: 'Básico', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Java', level: 'Avanzado', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Kotlin', level: 'Intermedio', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
      { name: 'Python', level: 'Intermedio', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Go', level: 'Básico', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
    ],
  },
  {
    title: 'Frameworks',
    titleEN: 'Frameworks',
    icon: <Server className="w-5 h-5" />,
    techs: [
      { name: 'Node.js', level: 'Intermedio', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', level: 'Intermedio', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'React', level: 'Básico', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Spring Boot', level: 'Básico', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'FastAPI', level: 'Básico', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'Django', level: 'Básico', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    ],
  },
  {
    title: 'Móvil (Android)',
    titleEN: 'Mobile (Android)',
    icon: <Smartphone className="w-5 h-5" />,
    techs: [
      { name: 'Jetpack Compose', level: 'Intermedio', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
      { name: 'Android Studio', level: 'Avanzado', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
    ],
  },
  {
    title: 'Bases de Datos',
    titleEN: 'Databases',
    icon: <Database className="w-5 h-5" />,
    techs: [
      { name: 'PostgreSQL', level: 'Intermedio', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'mysql', level: 'Intermedio', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'SQLite', level: 'Básico', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
      { name: 'supabase', level: 'Básico', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    titleEN: 'DevOps & Cloud',
    icon: <Cloud className="w-5 h-5" />,
    techs: [
      { name: 'AWS', level: 'Básico', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
      { name: 'Docker', level: 'Básico', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Nginx', level: 'Básico', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
      { name: 'Git', level: 'Intermedio', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', level: 'Intermedio', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Linux', level: 'Intermedio', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    ],
  },
  {
    title: 'Herramientas',
    titleEN: 'Tools',
    icon: <Wrench className="w-5 h-5" />,
    techs: [
      { name: 'VS Code', level: 'Avanzado', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Postman', level: 'Avanzado', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'Figma', level: 'Intermedio', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Swagger', level: 'Intermedio', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg' },
      { name: 'Jira', level: 'Básico', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
      { name: 'Latex', level: 'Intermedio', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg' },
    ],
  },
];

export const Skills = () => {
  const { lang } = useLanguage();

  return (
    <section id="tecnologias" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-white mb-4 text-center"
        >
          Tech Stack
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
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          {lang === 'ES'
            ? 'Tecnologías y herramientas que utilizo para crear soluciones robustas y escalables.'
            : 'Technologies and tools I use to build robust, scalable solutions.'}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-2xl p-6 border border-white/5 hover:border-[#4f8eff]/30 transition-colors"
              style={{ backgroundColor: '#252525' }}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="text-[#4f8eff]">{category.icon}</div>
                <h3 className="text-lg font-black text-white">
                  {lang === 'ES' ? category.title : category.titleEN}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.techs.map((tech, techIdx) => {
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (idx * 0.05) + (techIdx * 0.03) }}
                      whileHover={{ scale: 1.03 }}
                      className="p-3 rounded-xl bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors flex items-center gap-2"
                    >
                      {tech.iconUrl && (
                        <img
                          src={tech.iconUrl}
                          alt={tech.name}
                          className="w-7 h-7 shrink-0"
                          loading="lazy"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-white truncate">{tech.name}</p>
                        {tech.level && (
                          <span
                            className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full mt-1 border ${getLevelStyles(tech.level)}`}
                          >
                            {getLevelText(tech.level, lang)}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

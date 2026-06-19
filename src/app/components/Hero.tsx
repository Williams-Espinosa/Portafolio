import { motion } from 'motion/react';
import { Instagram, Github, Linkedin } from 'lucide-react';
import { SiTiktok } from '@icons-pack/react-simple-icons';
import { useLanguage } from './LanguageContext';

export const Hero = () => {
  const { lang } = useLanguage();

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-6 py-32 relative overflow-hidden"
    >
      {
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(/img/FondoNav.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      }

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0c12]/40 via-transparent to-[#0a0c12]/70" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-sm rounded-3xl p-10 shadow-2xl border border-white/5"
        style={{ backgroundColor: 'rgba(37, 37, 37, 0.92)', backdropFilter: 'blur(8px)' }}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#4f8eff]/20 to-[#00d4ff]/15 rounded-3xl blur-2xl" />

        <div className="relative mx-auto w-56 h-56 mb-8">
          <div className="absolute inset-0 rounded-full p-[4px] bg-gradient-to-br from-[#4f8eff] to-[#00d4ff]">
            <div
              className="w-full h-full rounded-full overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: '#1a1a1a' }}
            >
              <img src="/img/foto.png" alt="Williams Espinosa" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-center text-white mb-4 tracking-tight">
          Williams Espinosa
        </h1>

        <p className="text-center text-gray-300 text-sm mb-8 leading-relaxed px-2">
          {lang === 'ES' ? (
            <>
              Ingeniero en TI - Full Stack,
              <br />
              Android & DevOps
            </>
          ) : (
            <>
              IT Engineer - Full Stack,
              <br />
              Android & DevOps
            </>
          )}
        </p>

        <div className="flex justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.tiktok.com/@w.espinosa.it"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border-2 border-white/30 text-white flex items-center justify-center hover:border-[#4f8eff] hover:text-[#4f8eff] transition-colors"
            aria-label="TikTok"
          >
            <SiTiktok size={18} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/w.espinosa.it"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border-2 border-white/30 text-white flex items-center justify-center hover:border-[#4f8eff] hover:text-[#4f8eff] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Williams-Espinosa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border-2 border-white/30 text-white flex items-center justify-center hover:border-[#4f8eff] hover:text-[#4f8eff] transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/williams-espinosa/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border-2 border-white/30 text-white flex items-center justify-center hover:border-[#4f8eff] hover:text-[#4f8eff] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

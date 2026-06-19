import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Tag, Send, Github, Linkedin, ArrowUp, Instagram } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const Contact = () => {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setSent(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-white mb-4 text-center"
        >
          {lang === 'ES' ? 'Contacto' : 'Contact'}
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
            ? '¿Tienes un proyecto en mente o quieres colaborar? ¡Me encantaría escucharte!'
            : 'Have a project in mind or want to collaborate? I would love to hear from you!'}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              href="https://wa.me/5219991289926"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#252525] hover:bg-[#4f8eff] text-gray-400 hover:text-black flex items-center justify-center transition-colors"
              aria-label="Whatsapp"
            >
              <MessageSquare size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              href="https://www.linkedin.com/in/williams-espinosa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#252525] hover:bg-[#4f8eff] text-gray-400 hover:text-black flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              href="mailto:w.espinosa.it@gmail.com"
              className="w-12 h-12 rounded-full bg-[#252525] hover:bg-[#4f8eff] text-gray-400 hover:text-black flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center mt-16">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full bg-[#4f8eff] text-black flex items-center justify-center shadow-lg shadow-[#4f8eff]/20 hover:bg-[#4f8eff]/80 transition-colors"
          aria-label="Volver arriba"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>

      <div className="mt-24 pt-8 border-t border-white/5 flex flex-col xl:flex-row items-center justify-between gap-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center xl:items-start">
          <div className="flex items-center gap-1">
            <span className="text-[#4f8eff] text-2xl font-black">{'//'}</span>
            <span className="text-white text-2xl font-bold tracking-tight">WILLIAMS-ESPINOSA</span>
          </div>
          <span className="text-gray-400 text-xs mt-1 font-mono tracking-wide">
            FullStack - Android Developer - DevOps
          </span>
        </div>

        <div className="text-gray-500 text-xs text-center">
          © 2026 WILLIAMS-ESPINOSA. {lang === 'ES' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-white text-sm font-medium">{lang === 'ES' ? 'Sígueme' : 'Follow me'}</span>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/williams-espinosa/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/Williams-Espinosa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MessageCircle, MousePointer2 } from 'lucide-react';

import { useLanguage } from './LanguageContext';

const WhatsAppIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z" />
  </svg>
);

export const Contact = () => {
  const { lang, t } = useLanguage();
  const links = t('contact.links');

  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden p-8 md:p-16">
          
          <div className="space-y-12">
            <div className="text-center">
              <p className="text-blue-500 font-mono text-xs tracking-[0.5em] mb-4">{t('stack.hud.establish')}</p>
              <h2 className="text-5xl md:text-6xl font-black text-white leading-none uppercase">
                {lang === 'ES' ? 'VAMOS A CONECTAR' : "LET'S CONNECT"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Mail />, label: 'EMAIL SRV', val: links.email, link: `mailto:${links.email}`, color: 'group-hover:bg-blue-600' },
                { icon: <Linkedin />, label: 'LINKED IN', val: 'williams-espinosa', link: links.linkedin, color: 'group-hover:bg-[#0077B5]' },
                { icon: <Github />, label: 'GIT HUB', val: 'Williams-Espinosa', link: links.github, color: 'group-hover:bg-[#24292e]' },
                { icon: <WhatsAppIcon />, label: 'WHATS APP', val: '9601152138', link: links.whatsapp, color: 'group-hover:bg-[#25D366]' },
              ].map((item, i) => (
                <a 
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group p-4 bg-black/40 rounded-3xl border border-white/5 hover:border-blue-500/50 transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-gray-400 ${item.color} group-hover:text-white transition-all shadow-lg shadow-transparent`}>
                    {item.icon}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-mono text-gray-600 tracking-widest uppercase">{item.label}</p>
                    <p className="text-base font-bold text-white truncate">{item.val}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8 flex items-center justify-center gap-4 text-gray-600 font-mono text-xs italic">
              <MousePointer2 size={14} /> 
              {t('stack.hud.system_ready')}
            </div>
          </div>

        </div>

        <div className="mt-12 text-center space-y-2">
          <div className="text-[9px] font-mono text-gray-800 tracking-[0.3em] uppercase">
            {t('stack.hud.copyright')}
          </div>
        </div>
      </div>
    </section>
  );
};

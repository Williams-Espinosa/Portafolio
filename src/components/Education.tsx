import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    degree: "Ingeniería en TI e Innovación Digital",
    school: "Universidad de Innovación Tecnológica",
    period: "2022 - Presente",
    description: "Enfoque en arquitectura de software distribuido, inteligencia artificial aplicada y metodologías ágiles de innovación.",
    current: true
  },
  {
    degree: "Especialización en Desarrollo Cloud",
    school: "Tech Academy Online",
    period: "2023",
    description: "Certificación avanzada en despliegue de microservicios y gestión de infraestructura como código (IaC).",
    current: false
  }
];

export const Education = () => {
  return (
    <section id="educacion" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Trayectoria Académica
          </motion.h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative bg-zinc-900/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all group"
            >
              {item.current && (
                <div className="absolute -top-3 right-8 bg-blue-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  Cursando Actualmente
                </div>
              )}
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                  <GraduationCap size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{item.degree}</h3>
                    <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                      <Calendar size={14} />
                      {item.period}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-blue-400 font-bold mb-4 text-sm">
                    <Award size={16} />
                    {item.school}
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

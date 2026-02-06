import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ES' | 'EN';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => any;
}

const translations = {
  ES: {
    nav: {
      inicio: 'INICIO',
      proyectos: 'PROYECTOS',
      stack: 'STACK',
      sobre_mi: 'SOBRE MÍ'
    },
    hero: {
      role: 'ESTUDIANTE DE INGENIERÍA TI & INNOVACIÓN DIGITAL',
      greeting: 'Hola, soy',
      firstName: 'Williams',
      lastName: 'Espinosa',
      description: 'Actualmente curso la carrera de Ingeniería en Tecnología de la Información e innovación digital en la Universidad Politécnica de Chiapas, donde desarrollo proyectos académicos enfocados en la creación de software. Mi experiencia incluye el uso de lenguajes como Java y JavaScript, diseño de bases de datos relacionales e introducción al desarrollo backend y APIs. Además, he adquirido conocimientos en el uso de Amazon Web Services (AWS) gracias a una certificación emitida por mi universidad.',
      cta: 'Ver Proyectos'
    },
    projects: {
      title: 'PROYECTOS SELECCIONADOS',
      subtitle: 'EXPLORA MIS ÚLTIMOS TRABAJOS Y EXPERIMENTOS TÉCNICOS',
      view_code: 'Ver Código',
      live_demo: 'Demo en Vivo'
    },
    stack: {
      title: 'STACK TECNOLÓGICO',
      subtitle: 'TECNOLOGÍAS Y HERRAMIENTAS QUE UTILIZO PARA DAR VIDA A TUS IDEAS',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Databases & Cloud',
        mobile: 'Mobile',
        design: 'Design & Documentation',
        devops: 'DevOps & Tools'
      },
      security_card: {
        title: 'SEGURIDAD E\nINNOVACIÓN',
        sync: 'SINCRO GLOBAL LISTA'
      },
      github_card: {
        title: 'VER REPOSITORIO\nEN GITHUB',
        user: '@Williams-Espinosa'
      },
      hud: {
        establish: 'ESTABLECER CONEXIÓN',
        user_id: 'ID USUARIO',
        comm_channel: 'CANAL COMUNICACIÓN',
        payload_msg: 'MENSAJE PAYLOAD',
        system_ready: 'SISTEMA LISTO PARA RECIBIR ENTRADA',
        transmit: 'TRANSMITIR DATOS',
        build_info: 'Versión v.2.0.26 // Portafolio de Ingeniería // Conexión Segura Establecida',
        copyright: '© 2026 WILLIAMS-ESPINOSA // TODOS LOS DERECHOS RESERVADOS',
        data_file: 'IW DEV',
        quote: '"Crea el presente, codifica el futuro."'
      }
    },
    contact: {
      title: '¿LISTO PARA INNOVAR?',
      subtitle: 'ESTOY DISPONIBLE PARA NUEVOS PROYECTOS Y COLLABORACIONES',
      form: {
        name: 'Tu Nombre',
        email: 'Tu Email',
        message: 'Tu Mensaje',
        send: 'Enviar Mensaje'
      },
      links: {
        github: 'https://github.com/Williams-Espinosa',
        linkedin: 'https://www.linkedin.com/in/williams-espinosa/',
        email: 'w.espinosa.it@gmail.com',
        whatsapp: 'https://wa.me/529601152138'
      }
    }
  },
  EN: {
    nav: {
      inicio: 'HOME',
      proyectos: 'PROJECTS',
      stack: 'STACK',
      sobre_mi: 'ABOUT ME'
    },
    hero: {
      role: 'IT ENGINEERING & DIGITAL INNOVATION STUDENT',
      greeting: "Hi, I'm",
      firstName: 'Williams',
      lastName: 'Espinosa',
      description: 'I am currently studying IT Engineering and Digital Innovation at the Polytechnic University of Chiapas, where I develop academic projects focused on software creation. My experience includes languages such as Java and JavaScript, relational database design, and an introduction to backend development and APIs. Additionally, I have gained knowledge in Amazon Web Services (AWS) thanks to a certification issued by my university.',
      cta: 'View Projects'
    },
    projects: {
      title: 'SELECTED PROJECTS',
      subtitle: 'EXPLORE MY LATEST WORKS AND TECHNICAL EXPERIMENTS',
      view_code: 'View Code',
      live_demo: 'Live Demo'
    },
    stack: {
      title: 'TECH STACK',
      subtitle: 'TECHNOLOGIES AND TOOLS I USE TO BRING YOUR IDEAS TO LIFE',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Databases & Cloud',
        mobile: 'Mobile',
        design: 'Design & Documentation',
        devops: 'DevOps & Tools'
      },
      security_card: {
        title: 'SECURITY &\nINNOVATION',
        sync: 'GLOBAL SYNC READY'
      },
      github_card: {
        title: 'VIEW REPOSITORY\nON GITHUB',
        user: '@Williams-Espinosa'
      },
      hud: {
        establish: 'ESTABLISH CONNECTION',
        user_id: 'USER ID',
        comm_channel: 'COMM CHANNEL',
        payload_msg: 'PAYLOAD MSG',
        system_ready: 'SYSTEM READY TO RECEIVE INPUT',
        transmit: 'TRANSMIT DATA',
        build_info: 'Build v.2.0.26 // Engineering Portfolio // Secure Connection Established',
        copyright: '© 2026 WILLIAMS-ESPINOSA // ALL RIGHTS RESERVED',
        data_file: 'IW DEV',
        quote: '"Create the present, code the future."'
      }
    },
    contact: {
      title: 'READY TO INNOVATE?',
      subtitle: 'I AM AVAILABLE FOR NEW PROJECTS AND COLLABORATIONS',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send Message'
      },
      links: {
        github: 'https://github.com/Williams-Espinosa',
        linkedin: 'https://www.linkedin.com/in/williams-espinosa/',
        email: 'w.espinosa.it@gmail.com',
        whatsapp: 'https://wa.me/529601152138'
      }
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>('ES');

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = translations[lang];
    
    for (const key of keys) {
      if (current[key] === undefined) return path;
      current = current[key];
    }
    
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

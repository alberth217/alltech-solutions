import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Smartphone, Server, Database,
  Settings, Workflow, Users, CheckCircle2,
  Mail, Calendar, ArrowRight, Globe
} from 'lucide-react';

const translations = {
  es: {
    navServices: "Servicios",
    navAbout: "Nosotros",
    navStack: "Stack",
    navContact: "Contacto",
    heroSubtitle: "Construyendo el Futuro de la Infraestructura Digital",
    heroTitle: ["Creamos ", "Cualquier Sistema Web", " a tu Medida."],
    heroDesc: "Desde arquitecturas web complejas hasta aplicaciones móviles y flujos automatizados, AllTech Solutions es tu socio estratégico en excelencia tecnológica.",
    heroBtnStart: "Iniciar Proyecto",
    heroBtnExplore: "Nuestros Servicios",
    servicesTitle: "Nuestra Experiencia",
    services: [
      {
        icon: <Smartphone className="w-8 h-8 text-neon-blue" />,
        title: "Desarrollo Web y Móvil",
        desc: "Aplicaciones personalizadas a las necesidades de tu negocio, construidas con frameworks modernos para un rendimiento óptimo."
      },
      {
        icon: <Code2 className="w-8 h-8 text-neon-purple" />,
        title: "Arquitectura de Software",
        desc: "Diseños de sistemas escalables, resilientes y mantenibles que crecen con tu empresa."
      },
      {
        icon: <Server className="w-8 h-8 text-neon-green" />,
        title: "Servidores y Despliegue",
        desc: "Experiencia en Docker, Kubernetes e infraestructura en la nube para despliegues robustos."
      },
      {
        icon: <Settings className="w-8 h-8 text-neon-blue" />,
        title: "Sistemas ERP (Odoo)",
        desc: "Implementación y personalización de soluciones ERP integrales especializadas en Odoo."
      },
      {
        icon: <Database className="w-8 h-8 text-neon-purple" />,
        title: "Administración de Base de Datos",
        desc: "Gestión, optimización y escalado de motores de bases de datos SQL y NoSQL."
      },
      {
        icon: <Workflow className="w-8 h-8 text-neon-green" />,
        title: "Automatización de Flujos (n8n)",
        desc: "Optimización de procesos de negocio con potentes flujos de trabajo automatizados usando n8n."
      }
    ],
    aboutTitle: ["Equipo Sólido, ", "Soluciones Escalables."],
    aboutDesc1: "En AllTech Solutions, somos un equipo de especialistas con la agilidad y capacidad para escalar operaciones según las demandas del proyecto.",
    aboutDesc2: ["Juntos, sumamos ", "más de 13 años de experiencia acumulada", " en el sector tecnológico, ofreciendo soluciones integrales que impulsan el éxito empresarial."],
    aboutPoints: ["Metodologías ágiles", "Estándares de código de alta calidad", "Integración y entrega continua", "Enfoque a largo plazo"],
    aboutYears: "Años de Experiencia",
    stackTitle: "Stack Tecnológico",
    contactTitle: ["Construyamos Algo ", "Increíble"],
    contactDesc: "¿Listo para transformar tus ideas en realidad? Conéctate con nosotros a través de cualquiera de los canales a continuación.",
    contactBtnSchedule: "Agendar Reunión",
    contactBtnEmail: "Enviar Correo",
    footerRights: "Todos los derechos reservados."
  },
  en: {
    navServices: "Services",
    navAbout: "About",
    navStack: "Tech Stack",
    navContact: "Contact",
    heroSubtitle: "Building the Future of Digital Infrastructure",
    heroTitle: ["We Create ", "Any Web System", " Tailored to You."],
    heroDesc: "From complex web architectures to mobile apps and automated workflows, AllTech Solutions is your strategic partner in technological excellence.",
    heroBtnStart: "Start a Project",
    heroBtnExplore: "Explore Services",
    servicesTitle: "Our Expertise",
    services: [
      {
        icon: <Smartphone className="w-8 h-8 text-neon-blue" />,
        title: "Web & Mobile App Development",
        desc: "Custom applications tailored to your business needs, built with modern frameworks for optimal performance."
      },
      {
        icon: <Code2 className="w-8 h-8 text-neon-purple" />,
        title: "Software Architecture Design",
        desc: "Scalable, resilient, and maintainable system designs that grow seamlessly with your enterprise."
      },
      {
        icon: <Server className="w-8 h-8 text-neon-green" />,
        title: "Servers & Deployment",
        desc: "Expertise in Docker, Kubernetes, and cloud infrastructure for robust deployments."
      },
      {
        icon: <Settings className="w-8 h-8 text-neon-blue" />,
        title: "ERP Systems (Odoo)",
        desc: "Implementation and customization of comprehensive ERP solutions specializing in Odoo."
      },
      {
        icon: <Database className="w-8 h-8 text-neon-purple" />,
        title: "Database Administration",
        desc: "Management, optimization, and scaling of SQL and NoSQL database engines."
      },
      {
        icon: <Workflow className="w-8 h-8 text-neon-green" />,
        title: "Workflow Automation (n8n)",
        desc: "Streamlining business processes with powerful automated workflows using n8n."
      }
    ],
    aboutTitle: ["Solid Team, ", "Scalable Solutions."],
    aboutDesc1: "At AllTech Solutions, we are a cohesive core team of 3 specialists with the agility and capability to scale operations based on project demands.",
    aboutDesc2: ["Together, we bring ", "over 13 years of accumulated experience", " in the tech sector, delivering comprehensive, end-to-end solutions that drive business success."],
    aboutPoints: ['Agile methodologies', 'High-quality code standards', 'Continuous integration & delivery', 'Long-term partnership focus'],
    aboutYears: "Years Experience",
    stackTitle: "Technology Stack",
    contactTitle: ["Let's Build Something ", "Great"],
    contactDesc: "Ready to transform your ideas into reality? Connect with us through any of the channels below.",
    contactBtnSchedule: "Schedule a Meeting",
    contactBtnEmail: "Send an Email",
    footerRights: "All rights reserved."
  }
};

const techStack = [
  "Python", "Django", "Node.js", "React", "Tailwind CSS", "Odoo", "Docker", "Kubernetes", "n8n", "SQL", "NoSQL"
];

function App() {
  const [lang, setLang] = useState('es');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-dark-base font-sans selection:bg-neon-blue selection:text-black">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-panel border-b-0 rounded-none border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white tracking-tighter">
                All<span className="text-neon-blue">Tech</span> Solutions
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-baseline space-x-8">
                <a href="#services" className="hover:text-neon-blue transition-colors duration-300">{t.navServices}</a>
                <a href="#about" className="hover:text-neon-purple transition-colors duration-300">{t.navAbout}</a>
                <a href="#stack" className="hover:text-neon-green transition-colors duration-300">{t.navStack}</a>
                <a href="#contact" className="hover:text-neon-blue transition-colors duration-300">{t.navContact}</a>
              </div>

              {/* Language Switcher */}
              <div className="flex items-center gap-2 border-l border-gray-700 pl-6">
                <Globe className="w-4 h-4 text-gray-400" />
                <button
                  onClick={() => setLang('es')}
                  className={`text-sm font-medium transition-colors ${lang === 'es' ? 'text-neon-blue' : 'text-gray-500 hover:text-white'}`}
                >
                  ES
                </button>
                <span className="text-gray-700">|</span>
                <button
                  onClick={() => setLang('en')}
                  className={`text-sm font-medium transition-colors ${lang === 'en' ? 'text-neon-blue' : 'text-gray-500 hover:text-white'}`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-neon-blue text-sm font-medium">
            {t.heroSubtitle}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            {t.heroTitle[0]}<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">{t.heroTitle[1]}</span><br />
            {t.heroTitle[2]}
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            {t.heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="px-8 py-4 rounded-lg bg-neon-blue text-black font-semibold hover:bg-white hover:text-black transition-all duration-300 box-glow-blue flex items-center justify-center gap-2">
              {t.heroBtnStart} <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="px-8 py-4 rounded-lg border border-gray-700 hover:border-gray-500 text-white font-medium transition-all duration-300 bg-dark-surface">
              {t.heroBtnExplore}
            </a>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-dark-surface border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.servicesTitle}</h2>
            <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 hover:border-neon-blue/50 transition-all duration-300 group"
              >
                <div className="mb-4 p-3 rounded-lg bg-dark-base inline-block group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.aboutTitle[0]}<br /><span className="text-neon-purple">{t.aboutTitle[1]}</span></h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {t.aboutDesc1}
                </p>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {t.aboutDesc2[0]}<strong className="text-white">{t.aboutDesc2[1]}</strong>{t.aboutDesc2[2]}
                </p>
                <ul className="space-y-4">
                  {t.aboutPoints.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-400">
                      <CheckCircle2 className="w-5 h-5 text-neon-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative">
              <div 
                className="glass-panel p-8 aspect-square flex items-center justify-center relative overflow-hidden group bg-cover bg-center"
                style={{ backgroundImage: "url('/años_experiencia/anios_experiencia.jpg')" }}
              >
                <div className="absolute inset-0 bg-dark-base/40 group-hover:bg-dark-base/20 transition-colors duration-700 backdrop-blur-[1px]"></div>
                
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                   <div className="text-7xl md:text-8xl font-bold text-white mb-3 text-glow-blue drop-shadow-[0_0_20px_rgba(0,240,255,0.9)]">13+</div>
                   <div className="text-sm md:text-base tracking-[0.3em] text-gray-300 font-mono uppercase font-semibold">
                     {t.aboutYears}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="py-20 bg-dark-surface border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">{t.stackTitle}</h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 rounded-full border border-gray-700 bg-dark-base text-gray-300 font-mono hover:border-neon-green hover:text-neon-green hover:shadow-[0_0_15px_rgba(0,255,102,0.2)] transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">{t.contactTitle[0]}<span className="text-neon-blue">{t.contactTitle[1]}</span></h2>
          <p className="text-xl text-gray-400 mb-12">
            {t.contactDesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a href="https://calendly.com/alltechsolutions123/30min" target="_blank" rel="noopener noreferrer" className="glass-panel p-6 flex items-center justify-center gap-4 hover:border-neon-purple hover:bg-neon-purple/5 transition-all duration-300">
              <Calendar className="w-6 h-6 text-neon-purple" />
              <span className="text-lg font-medium text-white">{t.contactBtnSchedule}</span>
            </a>
            <a href="mailto:alltechsolutions123@gmail.com" className="glass-panel p-6 flex items-center justify-center gap-4 hover:border-neon-blue hover:bg-neon-blue/5 transition-all duration-300">
              <Mail className="w-6 h-6 text-neon-blue" />
              <span className="text-lg font-medium text-white">{t.contactBtnEmail}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/584241252582"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 z-50"
        title="Contact us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-gray-800 text-center">
        <p className="text-gray-500">© {new Date().getFullYear()} AllTech Solutions. {t.footerRights}</p>
      </footer>
    </div>
  );
}

export default App;

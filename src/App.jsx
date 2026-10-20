import React, { useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import {
  Code2, Smartphone, Server, Database,
  Settings, Workflow, CheckCircle2,
  Mail, Calendar, ArrowRight, ArrowUpRight, Globe, Menu, X
} from 'lucide-react';

const translations = {
  es: {
    navServices: "Servicios",
    navAbout: "Nosotros",
    navStack: "Stack",
    navContact: "Contacto",
    navCta: "Iniciar Proyecto",
    navOpenMenu: "Abrir menú",
    navCloseMenu: "Cerrar menú",
    skipToContent: "Saltar al contenido",
    heroSubtitle: "Construyendo el Futuro de la Infraestructura Digital",
    heroTitle: ["Creamos ", "Cualquier Sistema Web", " a tu Medida."],
    heroDesc: "Desde arquitecturas web complejas hasta aplicaciones móviles y flujos automatizados, AllTech Solutions es tu socio estratégico en excelencia tecnológica.",
    heroBtnStart: "Iniciar Proyecto",
    heroBtnExplore: "Nuestros Servicios",
    heroProof: ["13+ años de experiencia", "Especialistas en Odoo y n8n", "Del diseño al despliegue"],
    servicesEyebrow: "Servicios",
    servicesTitle: "Nuestra Experiencia",
    servicesDesc: "Cubrimos todo el ciclo de vida de tu producto digital: estrategia, desarrollo, infraestructura y automatización.",
    services: [
      {
        icon: Smartphone,
        title: "Desarrollo Web y Móvil",
        desc: "Aplicaciones personalizadas a las necesidades de tu negocio, construidas con frameworks modernos para un rendimiento óptimo."
      },
      {
        icon: Code2,
        title: "Arquitectura de Software",
        desc: "Diseños de sistemas escalables, resilientes y mantenibles que crecen con tu empresa."
      },
      {
        icon: Server,
        title: "Servidores y Despliegue",
        desc: "Experiencia en Docker, Kubernetes e infraestructura en la nube para despliegues robustos."
      },
      {
        icon: Settings,
        title: "Sistemas ERP (Odoo)",
        desc: "Implementación y personalización de soluciones ERP integrales especializadas en Odoo."
      },
      {
        icon: Database,
        title: "Administración de Base de Datos",
        desc: "Gestión, optimización y escalado de motores de bases de datos SQL y NoSQL."
      },
      {
        icon: Workflow,
        title: "Automatización de Flujos (n8n)",
        desc: "Optimización de procesos de negocio con potentes flujos de trabajo automatizados usando n8n."
      }
    ],
    aboutEyebrow: "Nosotros",
    aboutTitle: ["Equipo Sólido, ", "Soluciones Escalables."],
    aboutDesc1: "En AllTech Solutions, somos un equipo de especialistas con la agilidad y capacidad para escalar operaciones según las demandas del proyecto.",
    aboutDesc2: ["Juntos, sumamos ", "más de 13 años de experiencia acumulada", " en el sector tecnológico, ofreciendo soluciones integrales que impulsan el éxito empresarial."],
    aboutPoints: ["Metodologías ágiles", "Estándares de código de alta calidad", "Integración y entrega continua", "Enfoque a largo plazo"],
    aboutYears: "Años de Experiencia",
    stackEyebrow: "Tecnología",
    stackTitle: "Stack Tecnológico",
    contactEyebrow: "Contacto",
    contactTitle: ["Construyamos Algo ", "Increíble"],
    contactDesc: "¿Listo para transformar tus ideas en realidad? Conéctate con nosotros a través de cualquiera de los canales a continuación.",
    contactBtnSchedule: "Agendar Reunión",
    contactScheduleHint: "Videollamada de 30 minutos",
    contactBtnEmail: "Enviar Correo",
    whatsappLabel: "Escríbenos por WhatsApp",
    footerRights: "Todos los derechos reservados."
  },
  en: {
    navServices: "Services",
    navAbout: "About",
    navStack: "Tech Stack",
    navContact: "Contact",
    navCta: "Start a Project",
    navOpenMenu: "Open menu",
    navCloseMenu: "Close menu",
    skipToContent: "Skip to content",
    heroSubtitle: "Building the Future of Digital Infrastructure",
    heroTitle: ["We Create ", "Any Web System", " Tailored to You."],
    heroDesc: "From complex web architectures to mobile apps and automated workflows, AllTech Solutions is your strategic partner in technological excellence.",
    heroBtnStart: "Start a Project",
    heroBtnExplore: "Explore Services",
    heroProof: ["13+ years of experience", "Odoo & n8n specialists", "From design to deployment"],
    servicesEyebrow: "Services",
    servicesTitle: "Our Expertise",
    servicesDesc: "We cover the full lifecycle of your digital product: strategy, development, infrastructure and automation.",
    services: [
      {
        icon: Smartphone,
        title: "Web & Mobile App Development",
        desc: "Custom applications tailored to your business needs, built with modern frameworks for optimal performance."
      },
      {
        icon: Code2,
        title: "Software Architecture Design",
        desc: "Scalable, resilient, and maintainable system designs that grow seamlessly with your enterprise."
      },
      {
        icon: Server,
        title: "Servers & Deployment",
        desc: "Expertise in Docker, Kubernetes, and cloud infrastructure for robust deployments."
      },
      {
        icon: Settings,
        title: "ERP Systems (Odoo)",
        desc: "Implementation and customization of comprehensive ERP solutions specializing in Odoo."
      },
      {
        icon: Database,
        title: "Database Administration",
        desc: "Management, optimization, and scaling of SQL and NoSQL database engines."
      },
      {
        icon: Workflow,
        title: "Workflow Automation (n8n)",
        desc: "Streamlining business processes with powerful automated workflows using n8n."
      }
    ],
    aboutEyebrow: "About",
    aboutTitle: ["Solid Team, ", "Scalable Solutions."],
    aboutDesc1: "At AllTech Solutions, we are a cohesive core team of 3 specialists with the agility and capability to scale operations based on project demands.",
    aboutDesc2: ["Together, we bring ", "over 13 years of accumulated experience", " in the tech sector, delivering comprehensive, end-to-end solutions that drive business success."],
    aboutPoints: ['Agile methodologies', 'High-quality code standards', 'Continuous integration & delivery', 'Long-term partnership focus'],
    aboutYears: "Years Experience",
    stackEyebrow: "Technology",
    stackTitle: "Technology Stack",
    contactEyebrow: "Contact",
    contactTitle: ["Let's Build Something ", "Great"],
    contactDesc: "Ready to transform your ideas into reality? Connect with us through any of the channels below.",
    contactBtnSchedule: "Schedule a Meeting",
    contactScheduleHint: "30-minute video call",
    contactBtnEmail: "Send an Email",
    whatsappLabel: "Message us on WhatsApp",
    footerRights: "All rights reserved."
  }
};

const techStack = [
  "Python", "Django", "Node.js", "React", "Tailwind CSS", "Odoo", "Docker", "Kubernetes", "n8n", "SQL", "NoSQL"
];

const CONTACT_EMAIL = "alltechsolutions123@gmail.com";
const CURRENT_YEAR = new Date().getFullYear();

// Shared motion tokens: one easing curve, short offsets, reveal once on scroll.
const ease = [0.22, 1, 0.36, 1];
const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } }
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};
const inView = { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "-80px" } };
const tap = { scale: 0.98 };

function SectionHeader({ eyebrow, title, desc }) {
  return (
    <motion.div variants={stagger} {...inView} className="max-w-2xl mx-auto text-center mb-16">
      <motion.p variants={reveal} className="eyebrow mb-4">{eyebrow}</motion.p>
      <motion.h2 variants={reveal} className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight text-balance">
        {title}
      </motion.h2>
      {desc && (
        <motion.p variants={reveal} className="mt-5 text-lg text-gray-300 leading-relaxed text-pretty">
          {desc}
        </motion.p>
      )}
    </motion.div>
  );
}

function LanguageSwitcher({ lang, setLang, id, size = "sm" }) {
  const height = size === "lg" ? "h-11 px-4" : "h-8 px-3";
  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1" role="group" aria-label="Language">
      <Globe className="w-4 h-4 text-gray-400 mx-1.5" aria-hidden="true" />
      {['es', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`relative ${height} rounded-full text-sm font-semibold transition-colors duration-200 ${lang === code ? 'text-black' : 'text-gray-300 hover:text-white'}`}
        >
          {lang === code && (
            <motion.span
              layoutId={`lang-pill-${id}`}
              className="absolute inset-0 rounded-full bg-neon-blue"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
          <span className="relative">{code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}

function App() {
  const [lang, setLang] = useState('es');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  const changeLang = (code) => {
    setLang(code);
    document.documentElement.lang = code;
  };

  const navLinks = [
    { href: "#services", label: t.navServices },
    { href: "#about", label: t.navAbout },
    { href: "#stack", label: t.navStack },
    { href: "#contact", label: t.navContact },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-dark-base font-sans selection:bg-neon-blue selection:text-black">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-neon-blue focus:px-4 focus:py-2 focus:text-black focus:font-semibold">
          {t.skipToContent}
        </a>

        {/* Navigation */}
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-dark-base/75 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              <a href="#top" className="font-display text-xl md:text-2xl font-bold text-white tracking-tight">
                All<span className="text-neon-blue">Tech</span> Solutions
              </a>

              <div className="hidden md:flex items-center gap-8">
                <ul className="flex items-center gap-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="nav-link px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <LanguageSwitcher lang={lang} setLang={changeLang} id="desktop" />
                <motion.a
                  href="#contact"
                  whileHover={{ y: -1 }}
                  whileTap={tap}
                  className="inline-flex h-10 items-center gap-2 rounded-full bg-neon-blue px-5 text-sm font-semibold text-black hover:bg-white transition-colors duration-200"
                >
                  {t.navCta}
                </motion.a>
              </div>

              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? t.navCloseMenu : t.navOpenMenu}
                className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
              >
                {menuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease } }}
                exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
                className="md:hidden border-t border-white/10 bg-dark-base/95 backdrop-blur-md"
              >
                <ul className="px-4 py-4 space-y-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex h-12 items-center rounded-lg px-3 text-base font-medium text-gray-200 hover:bg-white/5 hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between gap-4 border-t border-white/10 px-4 py-4">
                  <LanguageSwitcher lang={lang} setLang={changeLang} id="mobile" size="lg" />
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex h-11 items-center rounded-full bg-neon-blue px-5 text-sm font-semibold text-black"
                  >
                    {t.navCta}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <main id="main">
          {/* Hero Section */}
          <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
            <div className="hero-backdrop" aria-hidden="true" />
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
            >
              <motion.p
                variants={reveal}
                className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-neon-blue text-sm font-medium"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-neon-blue" aria-hidden="true" />
                {t.heroSubtitle}
              </motion.p>
              <motion.h1
                variants={reveal}
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.05] text-balance"
              >
                {t.heroTitle[0]}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">{t.heroTitle[1]}</span>
                {t.heroTitle[2]}
              </motion.h1>
              <motion.p variants={reveal} className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed text-pretty">
                {t.heroDesc}
              </motion.p>
              <motion.div variants={reveal} className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                <motion.a
                  href="#contact"
                  whileHover={{ y: -2 }}
                  whileTap={tap}
                  className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-neon-blue px-8 text-base font-semibold text-black box-glow-blue hover:bg-white transition-colors duration-200"
                >
                  {t.heroBtnStart}
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </motion.a>
                <motion.a
                  href="#services"
                  whileHover={{ y: -2 }}
                  whileTap={tap}
                  className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-base font-medium text-white hover:border-white/40 hover:bg-white/10 transition-colors duration-200"
                >
                  {t.heroBtnExplore}
                </motion.a>
              </motion.div>
              <motion.ul variants={reveal} className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
                {t.heroProof.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neon-blue" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          </section>

          {/* Services Section */}
          <section id="services" className="scroll-mt-20 py-24 md:py-32 bg-dark-surface border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader eyebrow={t.servicesEyebrow} title={t.servicesTitle} desc={t.servicesDesc} />

              <motion.div variants={stagger} {...inView} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {t.services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.article
                      key={service.title}
                      variants={reveal}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="group relative rounded-2xl border border-white/10 bg-dark-base/60 p-8 transition-colors duration-300 hover:border-neon-blue/40 hover:bg-dark-base"
                    >
                      <div className="flex items-start justify-between mb-8">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neon-blue/10 text-neon-blue ring-1 ring-neon-blue/20 transition-colors duration-300 group-hover:bg-neon-blue group-hover:text-black">
                          <Icon className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <span className="font-mono text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300" aria-hidden="true">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-white mb-3">{service.title}</h3>
                      <p className="text-base text-gray-300 leading-relaxed">{service.desc}</p>
                    </motion.article>
                  );
                })}
              </motion.div>
            </div>
          </section>

          {/* About Us Section */}
          <section id="about" className="scroll-mt-20 py-24 md:py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] max-w-full bg-neon-purple/5 rounded-full blur-3xl -z-10" aria-hidden="true"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 items-center gap-16">
                <motion.div variants={stagger} {...inView}>
                  <motion.p variants={reveal} className="eyebrow mb-4">{t.aboutEyebrow}</motion.p>
                  <motion.h2 variants={reveal} className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8 text-balance">
                    {t.aboutTitle[0]}<br /><span className="text-neon-blue">{t.aboutTitle[1]}</span>
                  </motion.h2>
                  <motion.p variants={reveal} className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {t.aboutDesc1}
                  </motion.p>
                  <motion.p variants={reveal} className="text-gray-300 text-lg mb-10 leading-relaxed">
                    {t.aboutDesc2[0]}<strong className="text-white font-semibold">{t.aboutDesc2[1]}</strong>{t.aboutDesc2[2]}
                  </motion.p>
                  <motion.ul variants={reveal} className="grid sm:grid-cols-2 gap-4">
                    {t.aboutPoints.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-gray-200">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-neon-green" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </motion.ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease }}
                  className="group relative aspect-square overflow-hidden rounded-3xl border border-white/10"
                >
                  <img
                    src="/años_experiencia/anios_experiencia.jpg"
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-dark-base/50 to-dark-base/20" aria-hidden="true"></div>
                  <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                    <div className="font-display text-8xl md:text-9xl font-bold text-white text-glow-blue">13+</div>
                    <div className="mt-3 text-sm md:text-base tracking-[0.3em] text-gray-200 font-mono uppercase font-semibold">
                      {t.aboutYears}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section id="stack" className="scroll-mt-20 py-24 md:py-32 bg-dark-surface border-y border-white/5">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader eyebrow={t.stackEyebrow} title={t.stackTitle} />

              <motion.ul variants={stagger} {...inView} className="flex flex-wrap justify-center gap-3 md:gap-4">
                {techStack.map((tech) => (
                  <motion.li
                    key={tech}
                    variants={reveal}
                    className="px-5 py-2.5 rounded-full border border-white/10 bg-dark-base text-gray-200 font-mono text-sm md:text-base"
                  >
                    {tech}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-20 py-24 md:py-32 relative overflow-hidden">
            <div className="hero-backdrop opacity-60" aria-hidden="true" />
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div variants={stagger} {...inView}>
                <motion.p variants={reveal} className="eyebrow mb-4">{t.contactEyebrow}</motion.p>
                <motion.h2 variants={reveal} className="font-display text-4xl md:text-6xl font-semibold text-white tracking-tight text-balance">
                  {t.contactTitle[0]}<span className="text-neon-blue">{t.contactTitle[1]}</span>
                </motion.h2>
                <motion.p variants={reveal} className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-pretty">
                  {t.contactDesc}
                </motion.p>

                <motion.div variants={reveal} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
                  <motion.a
                    href="https://calendly.com/alltechsolutions123/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={tap}
                    className="group flex items-center gap-4 rounded-2xl bg-neon-blue p-6 text-black box-glow-blue hover:bg-white transition-colors duration-200"
                  >
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-black/10">
                      <Calendar className="w-6 h-6" aria-hidden="true" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-lg font-semibold">{t.contactBtnSchedule}</span>
                      <span className="block text-sm text-black/70">{t.contactScheduleHint}</span>
                    </span>
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${CONTACT_EMAIL}`}
                    whileHover={{ y: -3 }}
                    whileTap={tap}
                    className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 text-white hover:border-white/40 hover:bg-white/10 transition-colors duration-200"
                  >
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neon-blue/10 text-neon-blue">
                      <Mail className="w-6 h-6" aria-hidden="true" />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-lg font-semibold">{t.contactBtnEmail}</span>
                      <span className="block truncate text-sm text-gray-400">{CONTACT_EMAIL}</span>
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Floating WhatsApp Button */}
        <motion.a
          href="https://wa.me/584241252582"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.whatsappLabel}
          title={t.whatsappLabel}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 1, duration: 0.4, ease } }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] z-40"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </motion.a>

        {/* Footer */}
        <footer className="py-10 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© {CURRENT_YEAR} AllTech Solutions. {t.footerRights}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors duration-200">{CONTACT_EMAIL}</a>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}

export default App;

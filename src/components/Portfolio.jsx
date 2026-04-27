import React, { useState } from "react"; // ⬅️ AJOUT de useState pour la gestion du formulaire
import { motion } from "framer-motion";
// Import des nouvelles icônes nécessaires pour la timeline
import { Github, Linkedin, Phone, Mail, Download, Zap, Terminal, Code, Factory, Layers, Clock, Sparkles } from "lucide-react";

// Variantes d'animation pour une meilleure réutilisation
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// DONNÉES EXTRAITES DU CV
const skills = [
  { name: "Laravel / PHP", level: 97, icon: <Code size={18} /> },
  { name: "Vue.js & Inertia", level: 92, icon: <Layers size={18} /> },
  { name: "C# / JavaScript / react / Flutter", level: 90, icon: <Code size={18} /> },
  { name: "Apriso (Delmia MES)", level: 95, icon: <Factory size={18} /> },
  { name: "SQL & Data Modeling", level: 90, icon: <Code size={18} /> },
  { name: "Node.js / APIs", level: 88, icon: <Terminal size={18} /> },
  { name: "DevOps & Docker", level: 82, icon: <Zap size={18} /> },
  { name: "Python", level: 80, icon: <Zap size={18} /> },
];

const methodologyStacks = [
    {
        title: "Architecture & Consulting",
        icon: <Zap size={20} className="text-red-400" />,
        items: ["Architecture DDD (Domain-Driven Design), Clean Code", "Modélisation BPMN (Analyse processus métier)", "Gestion des exigences technico-fonctionnelles"]
    },
    {
        title: "DevOps & Qualité",
        icon: <Terminal size={20} className="text-sky-400" />,
        items: ["CI/CD avec GitHub/GitLab Actions, Déploiement automatisé", "Tests unitaires, d'intégration & E2E", "Administration réseaux et systèmes informatiques"]
    },
    {
        title: "MES & Intégration Industrielle",
        icon: <Factory size={20} className="text-emerald-400" />,
        items: ["Expertise Apriso (Dassault Systèmes)", "Analyse de processus de production numériques", "Intégration ERP (SAP) et outils shopfloor"]
    }
];

const experienceTimeline = [
 {
    period: "Janvier 2026",
    title: "Administrateur réseaux informatiques",
    company: "Brinure",
    description: "Administration, supervision et maintenance des infrastructures réseaux. Configuration et gestion des équipements réseau (routeurs, switches, firewalls) et support aux utilisateurs. Mise en place de solutions de connectivité fiables, sécurisation des accès et résolution des incidents afin d’assurer la continuité de service et la performance du réseau.",
    tags: ["Cisco", "Winbox", "Réseaux", "Routing", "Switching", "Firewall", "Support IT"]
},
    {
        period: "Depuis juillet 2024",
        title: "Consultant Manufacturing MES",
        company: "Brinure",
        description: "Support MES (Apriso - Dassault Systèmes) sur la Tierce Maintenance Applicative (TMA) pour Safran Aerosystems sur le projet SAO. Analyse, déploiement et optimisation des processus de production numériques. Collaboration avec les équipes techniques et métiers pour garantir la performance des systèmes.",
        tags: ["Apriso", "MES", "Analyse Processus", "Brinure"]
    },
    {
        //period: "Projet Clé",
        title: "Lead Développeur - SmartCareCenter",
        company: "Brinure",
        description: "Direction du projet de la conception à la version 1 et à la documentation technico-fonctionnelle. Supervision du développement Full-Stack, conception/administration BDD et intégration des modules.",
        tags: ["Laravel", "Vue.js", "Lead Technique", "SQL", "Documentation"]
    },
    {
    period: "Mars 2024",
    title: "Analyste & Concepteur — FocusFlow AI",
    company: "Projet Personnel / R&D",
    description: "Conception intégrale d'un assistant de productivité 'Offline-First'. Architecture d'un moteur de planification intelligente exploitant Groq pour l'automatisation des tâches et la capture contextuelle vocale.",
    tags: ["Next.js", "Capacitor", "GROQ", "Zustand", "UX/UI"]
},
    {
        period: "2021 - 2024",
        title: "Développeur Full-Stack / Téléconseiller",
        company: "VIPP INTERSTIS BENIN",
        description: "Développement et maintenance d'applications internes (Dialler Catarina, ERP de gestion Wipp). Gestion de bases de données, correction de bugs et ajout de fonctionnalités.",
        tags: ["PHP", "ERP", "Maintenance", "Bases de Données"]
    },
    {
        period: "2016 - 2019",
        title: "Technicien Réseaux",
        company: "ONG Rescue & Hope",
        description: "Planification, câblage et maintenance des réseaux informatiques. Gestion du matériel et assistance technique aux utilisateurs.",
        tags: ["Réseaux", "Maintenance", "IT Support"]
    },
];
// --- FIN DES DONNÉES ---

// Composant Portfolio
export default function OswaldPortfolio() {
  
  const projects = [
    {
  title: "SmartCareCenter — Système de Gestion Hospitalière",
  desc: "Solution métier complète orchestrant la gestion des dossiers patients, le planning médical complexe et le suivi statistique. Architecture robuste conçue pour optimiser les flux administratifs critiques.",
  tags: ["Laravel 11", "Vue.js 3", "Inertia", "PostgreSQL", "Architecture SaaS"],
  //icon: "🏥",
  github: null, // Propriétaire
    link: "#contact" // Redirige vers contact
},
{
  title: "FocusFlow — Assistant de Productivité IA",
  desc: "Application mobile hybride utilisant l'IA pour le Smart Scheduling et la capture vocale contextuelle. Architecture 'Offline-First' garantissant performance et confidentialité des données utilisateur.",
  tags: ["Next.js 14", "Capacitor", "Groq", "Zustand", "Tailwind"],
  //icon: <Sparkles className="text-purple-400" />, // Utilise l'icône Sparkles pour l'effet "IA"
  isHighlight: true, // Pour activer le style spécial (bordure émeraude)
  github: "https://github.com/Oswald-LEXPERT",
  link: "#contact"
},
    {
      title: "SmartMonitoring — Supervision mini-centrales solaires",
      desc: "Système d'acquisition CSV capteurs, analyse temps réel, alerting et historisation. Infrastructure Big Data légère pour 100+ sites.",
      tags: ["API", "Scheduler", "Reporting", "IoT"],
      //icon: "💡",
      github: "https://smart-monitoring-iot.vercel.app/",
      link: "#contact"
    },
    {
      title: "Apriso Integrations — MES Customization",
      desc: "Conception de workflows Apriso complexes, intégration bidirectionnelle ERP (SAP) & outils shopfloor. Optimisation des temps de cycle.",
      tags: ["Apriso", "Integration", "MES", "Manufacturing"],
      //icon: "⚙️",
      github: null, // Propriétaire
    link: "#contact" // Redirige vers contact
    },
  ];

  // 🆕 CORRECTION : Ajout de l'état pour la gestion du menu mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // 🚀 LOGIQUE DE GESTION DU FORMULAIRE FORMULAIRE
    const [status, setStatus] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending'); 

        const form = e.target;
        const data = new FormData(form);
        const object = {};
        data.forEach((value, key) => {
            object[key] = value;
        });
        const json = JSON.stringify(object);

        // ⚠️ ID Formspree basé sur l'URL fournie : https://formspree.io/f/mkgkekdg
        const formspreeUrl = "https://formspree.io/f/mkgkekdg"; 

        try {
            const response = await fetch(formspreeUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: json,
            });

            if (response.ok) {
                setStatus('success'); 
                form.reset(); 
            } else {
                setStatus('error'); 
                console.error('Erreur lors de l\'envoi:', response.statusText);
            }
        } catch (error) {
            setStatus('error');
            console.error('Erreur réseau:', error);
        }
    };


  return (
    <div className="min-h-screen w-screen bg-slate-950 text-slate-100 antialiased overflow-x-hidden">
      
      {/* HEADER AMÉLIORÉ */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/80 border-b border-emerald-400/20">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center shadow-2xl shadow-emerald-500/30"> 
              <span className="font-extrabold text-lg text-slate-900">OA</span>
            </div>
            <div>
              <div className="text-lg font-semibold text-white">Oswald ADINAVO</div>
              <div className="text-xs text-slate-400">Consultant Manufacturing MES (Apriso) | Développeur Full-Stack </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#experience" className="text-sm font-medium hover:text-emerald-400 transition">Parcours</a>
            <a href="#skills" className="text-sm font-medium hover:text-emerald-400 transition">Expertise</a>
            <a href="#projects" className="text-sm font-medium hover:text-emerald-400 transition">Projets</a>
            <a href="#contact" className="text-sm font-medium hover:text-emerald-400 transition">Contact</a>
            <a 
                href="/CV_Oswald_Adinavo_2026_Pro.pdf" 
                download="CV_Oswald_Adinavo_2026_Pro.pdf" // ⬅️ Attribut 'download' conservé pour le téléchargement
                className="ml-4 inline-flex items-center gap-2 rounded-full px-4 py-2 bg-emerald-500/90 text-slate-900 font-semibold shadow-xl hover:bg-emerald-400 transition transform hover:scale-105"
            >
              <Download size={18} /> <span className="text-sm">Télécharger CV</span>
            </a>
          </div>
        </nav>
      </header>

      {/* mobile CV button placed before hero (visible on mobile only) */}
{!mobileMenuOpen && (
<div className="md:hidden flex justify-center py-3 bg-slate-900/60 border-b border-white/5">
<a href="/CV_Oswald_Adinavo_2026_Pro.pdf" download="CV_Oswald_Adinavo_2026_Pro.pdf" className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-emerald-500/90 text-slate-900 font-semibold shadow-md">
<Download size={16} /> Voir le CV
</a>
</div>
)}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* HERO - AFFINÉ */}
        <section className="relative overflow-hidden pt-10 pb-20">
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="w-96 h-96 rounded-full bg-emerald-500/10 absolute -top-10 -left-10 blur-[100px]" />
                <div className="w-96 h-96 rounded-full bg-sky-500/10 absolute -bottom-10 -right-10 blur-[100px]" />
            </div>

            <motion.div 
                className="relative z-10 grid lg:grid-cols-12 gap-10 items-center"
                initial="hidden"
                animate="show"
                variants={containerVariants}
            >
                <div className="lg:col-span-7">
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">
                        Oswald ADINAVO
                    </motion.h1>
                    <motion.p variants={itemVariants} className="mt-4 text-2xl text-slate-300 max-w-xl font-light">
                        Consultant Manufacturing & Développeur Full-Stack
                    </motion.p>
                    <motion.p variants={itemVariants} className="mt-4 text-lg text-slate-400 max-w-xl">
                        Spécialisé dans le MES (Apriso – Dassault Systèmes), j’accompagne la transformation digitale des environnements industriels en concevant des solutions fiables, adaptées aux réalités du terrain. Mon approche allie collaboration, pragmatisme et performance, pour transformer les exigences opérationnelles en outils concrets et efficaces.
                    </motion.p>

                    <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
                        <a href="#contact" className="rounded-full px-6 py-3 bg-emerald-500 text-slate-900 font-bold shadow-md shadow-emerald-500/40 hover:scale-[1.03] transition transform duration-300">Démarrer une collaboration</a>
                        <a href="#experience" className="rounded-full px-6 py-3 border border-white/20 text-slate-200 font-medium hover:bg-white/10 transition">Mon parcours</a>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-8 flex gap-6 items-center text-slate-400">
                        <a href="https://github.com/Oswald-LEXPERT" target="_blank" aria-label="GitHub" className="hover:text-emerald-400 transition"><Github size={24} /></a>
                        <a href="https://www.linkedin.com/in/oswald-adinavo-07a8172b9/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbceDRefKT2irLJSeFFzC4w%3D%3D" target="_blank" aria-label="LinkedIn" className="hover:text-emerald-400 transition"><Linkedin size={24} /></a>
                        <a href="mailto:oswald.adinavo@gmail.com" aria-label="Email" className="hover:text-emerald-400 transition"><Mail size={24} /></a>
                    </motion.div>
                </div>
                
                {/* Bloc de droite (image/mission) */}
                <motion.div variants={itemVariants} className="lg:col-span-5 relative">
                    <div className="rounded-3xl bg-slate-800/60 p-6 backdrop-blur-md border border-emerald-400/20 shadow-2xl">
                           <div className="w-full h-full rounded-2xl border border-white/10 overflow-hidden shadow-xl">
                              <img 
                                 src="/images/ppp.png" 
                                 alt="Portrait professionnel d'Oswald ADINAVO" 
                                 className="w-full h-full object-cover" // Ajustement de la hauteur pour correspondre à l'ancienne structure
                               />
                           </div>
                         <div className="mt-5">
                             <div className="text-sm font-bold text-emerald-400">Mission & Vision</div>
                             <div className="text-slate-200 mt-2 leading-relaxed">Architecte de solutions numériques pour l'industrie, ma mission est de stabiliser et d'optimiser l'écosystème shopfloor. J'allie expertise technique et support opérationnel pour transformer les contraintes du terrain en leviers de performance, avec une obsession : la fiabilité des systèmes et l'expérience utilisateur.</div>
                         </div>
                    </div>
                </motion.div>

            </motion.div>
        </section>

        {/* NOUVELLE SECTION : PARCOURS PROFESSIONNEL (TIMELINE) */}
        <section id="experience" className="mt-20">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-4xl font-bold mb-10 border-b border-emerald-400/20 pb-4">Parcours Professionnel Détaillé</motion.h2>
            
            <div className="relative border-l border-emerald-500/50 space-y-10 pl-8">
                {experienceTimeline.map((exp, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        //viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 2.5 }}
                        className="relative"
                    >
                        <motion.div
                            
                            transition={{ type: "spring", stiffness: 400 }}
                            className="rounded-xl bg-slate-800/70 p-6 shadow-2xl hover:bg-slate-800 transition cursor-pointer"
                        >
                            <div className="text-xs font-semibold uppercase text-emerald-400 tracking-wider mb-2">{exp.period}</div>
                            <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                            <div className="text-md font-medium text-sky-300">{exp.company}</div>
                            <p className="mt-3 text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {exp.tags.map((t) => (
                                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/10 text-slate-300 font-medium">{t}</span>
                                ))}
                            </div>
                        </motion.div>
                        {/* Point de la timeline */}
                        <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg border-4 border-slate-950">
                            <Clock size={16} className="text-slate-900" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* SKILLS AMÉLIORÉES (avec Stacks) */}
        <section id="skills" className="mt-20">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-4xl font-bold mb-10 border-b border-emerald-400/20 pb-4">Expertise Technique Détaillée</motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
                
                {/* 1. Barres de Compétences */}
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="md:col-span-2 space-y-5">
                    <h3 className="text-xl font-semibold text-emerald-400">Langages & Frameworks Clés</h3>
                    {skills.map((s, index) => (
                        <motion.div key={s.name} variants={itemVariants} className="bg-slate-800/70 rounded-xl p-5 shadow-lg border border-white/5 hover:border-emerald-400/40 transition duration-500">
                            <div className="flex justify-between items-center">
                                <div className="text-lg font-medium flex items-center gap-3">{s.icon} {s.name}</div>
                                <div className="text-sm text-emerald-400 font-bold">{s.level}%</div>
                            </div>
                            <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 1.5, delay: index * 0.1 }} className="h-full rounded-full bg-gradient-to-r from-sky-400 to-emerald-400" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* 2. Stacks de Méthodologie (Plus structuré) */}
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="space-y-6 self-start">
                    <h3 className="text-xl font-semibold text-emerald-400">Méthodes & Outils</h3>
                    {methodologyStacks.map((stack, index) => (
                        <motion.div key={stack.title} variants={itemVariants} className="rounded-xl bg-slate-800/70 p-5 border border-white/10 shadow-lg hover:shadow-emerald-500/10 transition">
                            <div className="flex items-center gap-3 mb-3">
                                {stack.icon}
                                <div className="font-bold text-white">{stack.title}</div>
                            </div>
                            <ul className="text-sm text-slate-400 space-y-1 list-disc pl-5">
                                {stack.items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

        {/* PROJECTS (Reste la même structure) */}
        <section id="projects" className="mt-20">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-4xl font-bold mb-10 border-b border-emerald-400/20 pb-4">Projets Clés</motion.h2>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="grid md:grid-cols-3 gap-8">
            {projects.map((p, index) => (
              <motion.article 
                key={p.title} 
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)" }} 
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-2xl bg-slate-800/70 p-6 border border-white/5 hover:border-emerald-400/40 shadow-xl cursor-pointer"
              >
                <div className="text-4xl mb-4">{p.icon}</div>
                <div className="text-xl font-bold text-white">{p.title}</div>
                <div className="mt-3 text-sm text-slate-400">{p.desc}</div>
                
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 font-medium">{t}</span>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-3">
  {/* Message discret pour les projets d'entreprise sans GitHub */}
  {!p.github && (
    <div className="text-[10px] text-slate-500 italic flex items-center gap-1">
      <Zap size={10} className="text-slate-600" /> Projet Entreprise (Code Propriétaire)
    </div>
  )}

  <div className="flex items-center justify-between">
    <a 
      className="text-sm font-semibold underline text-emerald-400/90 hover:text-emerald-400 transition" 
      href={p.github || p.link || "#contact"}
      target={(p.github?.startsWith('http') || p.link?.startsWith('http')) ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      {p.github ? "Voir le projet" : "En savoir plus"}
    </a>
    
    <a 
      href="#contact" 
      className="text-sm rounded-full px-4 py-1.5 bg-sky-500/90 text-slate-900 font-semibold hover:bg-sky-400 transition"
    >
      Contact
    </a>
  </div>
</div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* CONTACT (MISE À JOUR FORMULAIRE) */}
        <section id="contact" className="mt-24 mb-20 grid md:grid-cols-2 gap-10">
          
          <motion.div 
  initial={{ opacity: 0, x: -50 }} 
  whileInView={{ opacity: 1, x: 0 }} 
  viewport={{ once: true }} 
  transition={{ duration: 0.8 }} 
  className="rounded-2xl bg-slate-800/70 p-8 border border-emerald-400/20 shadow-2xl"
>
  <h3 className="text-3xl font-bold text-emerald-400">Connectons-nous</h3>
  <p className="mt-3 text-lg text-slate-300">Vous avez un défi MES, un projet d'intégration ou vous recherchez une expertise Full-Stack industrielle ? Échangeons.</p>

  <div className="mt-6 space-y-4 text-slate-200">
    {/* Email cliquable */}
    <a href="mailto:oswald.adinavo@gmail.com" className="flex items-center gap-4 text-lg hover:text-sky-400 transition group">
      <Mail size={20} className="text-sky-400 group-hover:scale-110 transition" /> 
      oswald.adinavo@gmail.com
    </a>

    {/* Téléphones cliquables */}
    <div className="flex flex-col gap-3">
      <a href="tel:+2290165040451" className="flex items-center gap-4 text-lg hover:text-emerald-400 transition group">
        <Phone size={20} className="text-sky-400 group-hover:scale-110 transition" /> 
        (+229) 01 65 04 04 51
      </a>
      <a href="tel:+2290197378470" className="flex items-center gap-4 text-lg ml-[36px] hover:text-emerald-400 transition group">
        (+229) 01 97 37 84 70
      </a>
    </div>

    {/* GitHub cliquable */}
    <a 
      href="https://github.com/Oswald-LEXPERT" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-4 text-lg hover:text-sky-400 transition group"
    >
      <Github size={20} className="text-sky-400 group-hover:scale-110 transition" /> 
      github.com/Oswald-LEXPERT
    </a>
  </div>

  <div className="mt-8">
    <a href="mailto:oswald.adinavo@gmail.com" className="inline-flex items-center gap-3 rounded-full px-6 py-3 bg-emerald-500 text-slate-900 font-bold shadow-xl hover:bg-emerald-400 transition">
      <Mail size={20} /> Envoyer un email
    </a>
  </div>
</motion.div>

          {/* FORMULAIRE CORRIGÉ POUR ENVOI JSON */}
          <motion.form
            onSubmit={handleSubmit} // ⬅️ Utilisation du gestionnaire de soumission React
            // REMOVED action="url" et method="POST"
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="rounded-2xl bg-slate-800/70 p-8 border border-white/5 shadow-2xl"
          >
            <h3 className="text-3xl font-bold text-white">Un message rapide</h3>
            <div className="mt-5 grid gap-4">
                {/* ⬅️ Ajout de l'attribut 'name' et gestion de l'état */}
              <input name="name" className="rounded-lg bg-white/10 border border-white/10 p-3 text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-emerald-400 outline-none transition" placeholder="Nom Complet" required disabled={status === 'sending'} />
              <input type="email" name="email" className="rounded-lg bg-white/10 border border-white/10 p-3 text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-emerald-400 outline-none transition" placeholder="Email Professionnel" required disabled={status === 'sending'} />
              <textarea name="message" className="rounded-lg bg-white/10 border border-white/10 p-3 text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-emerald-400 outline-none transition" rows={4} placeholder="Votre message..." required disabled={status === 'sending'} />

                {/* Affichage du statut */}
                {status === 'success' && <p className="text-emerald-400 font-semibold">Message envoyé avec succès ! Je vous répondrai rapidement.</p>}
                {status === 'error' && <p className="text-red-400 font-semibold">Une erreur est survenue lors de l'envoi. Veuillez réessayer ou utiliser l'email direct.</p>}

              <div className="flex justify-end">
                <button 
                    type="submit" 
                    className="rounded-full px-6 py-3 bg-sky-500 text-slate-900 font-bold hover:bg-sky-400 transition"
                    disabled={status === 'sending'}
                >
                    {status === 'sending' ? 'Envoi...' : 'Envoyer le message'}
                </button>
              </div>
            </div>
          </motion.form>
        </section>

        <footer className="text-center text-sm text-slate-500 py-10 border-t border-white/10 mt-10">
          <p>© {new Date().getFullYear()} Oswald ADINAVO — Développeur & Consultant MES. </p>
        </footer>
      </main>
    </div>
  );
}
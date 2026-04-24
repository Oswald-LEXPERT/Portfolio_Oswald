import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Github, Linkedin, Mail, Download, Zap, Terminal, 
  Code, Factory, Layers, Clock, Smartphone, Brain, Sparkles, ExternalLink 
} from "lucide-react";

// --- CONFIGURATION DES ANIMATIONS ---
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- DONNÉES ---
const skills = [
  { name: "IA & LLM (Gemini/GPT)", level: 85, icon: <Brain size={18} className="text-purple-400" /> },
  { name: "Laravel / PHP", level: 97, icon: <Code size={18} className="text-orange-400" /> },
  { name: "Vue.js & Inertia", level: 92, icon: <Layers size={18} className="text-sky-400" /> },
  { name: "Apriso (Delmia MES)", level: 95, icon: <Factory size={18} className="text-pink-400" /> },
  { name: "C# / React / Flutter", level: 90, icon: <Code size={18} className="text-sky-400" /> },
  { name: "SQL & Data Modeling", level: 90, icon: <Terminal size={18} /> },
  { name: "Node.js / APIs / Python", level: 88, icon: <Terminal size={18} /> },
  { name: "DevOps & Docker", level: 82, icon: <Zap size={18} className="text-yellow-400" /> },
];

const experienceTimeline = [
    {
        period: "Mars 2026 - Projet Phare",
        title: "Concepteur & Dev Lead — FocusFlow AI",
        company: "Projet Indépendant / R&D",
        description: "Développement d'un assistant de productivité mobile hybride piloté par l'IA. Implémentation du Smart Scheduling via Groq et architecture Offline-First sécurisée.",
        tags: ["Next.js", "Capacitor", "Grok AI", "Zustand"]
    },
    {
        period: "Depuis juillet 2024",
        title: "Consultant Manufacturing MES",
        company: "Brinure",
        description: "Support MES (Apriso) pour clients industriels (Safran Aero Système / TMA Safran Aero Système). Analyse et optimisation des processus shopfloor.",
        tags: ["Apriso", "MES", "SAP Integration"]
    },
    {
        period: "Projet Clé",
        title: "Lead Développeur - SmartCareCenter",
        company: "Brinure",
        description: "Supervision du développement Full-Stack et documentation technico-fonctionnelle complète.",
        tags: ["Laravel", "Vue.js", "SQL", "Lead Technique"]
    },
    {
        period: "2021 - 2024",
        title: "Développeur Full-Stack",
        company: "VIPP INTERSTIS BENIN",
        description: "Maintenance d'ERP internes et gestion de bases de données critiques.",
        tags: ["PHP", "ERP", "Maintenance"]
    }
];

export default function OswaldPortfolio() {
  const [status, setStatus] = useState('');
  
  const projects = [
    {
      title: "FocusFlow — Assistant IA Mobile",
      desc: "App mobile hybride éliminant la fatigue décisionnelle grâce au Smart Scheduling et à la capture vocale intelligente via Groq AI.",
      tags: ["Groq AI", "Capacitor", "Next.js", "Offline-First"],
      isHighlight: true,
      github: "https://github.com/Oswald-LEXPERT/focus-flow"
    },
    {
      title: "SmartCareCenter — Gestion Hospitalière",
      desc: "Plateforme SaaS complète pour la gestion administrative et médicale des patients (Laravel + Vue).",
      tags: ["Laravel", "Inertia", "SQL"],
    },
    {
      title: "SmartMonitoring — Solaire IoT",
      desc: "Supervision temps réel de 100+ mini-centrales solaires avec alerting automatique.",
      tags: ["API", "IoT", "Big Data"],
      demo: "https://smart-monitoring-iot.vercel.app/" // TON LIEN ICI
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.target);
    const object = Object.fromEntries(data.entries());
    try {
      const response = await fetch("https://formspree.io/f/mkgkekdg", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(object),
      });
      if (response.ok) { setStatus('success'); e.target.reset(); } 
      else { setStatus('error'); }
    } catch { setStatus('error'); }
  };

  return (
    <div className="min-h-screen w-screen bg-slate-950 text-slate-100 antialiased overflow-x-hidden selection:bg-emerald-500/30">
      
      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/80 border-b border-emerald-400/20">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-slate-900 shadow-lg shadow-emerald-500/20">OA</div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold tracking-tight">Oswald ADINAVO</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest">Analyste Programmeur Développeur</div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#experience" className="hover:text-emerald-400 transition">Parcours</a>
            <a href="#projects" className="hover:text-emerald-400 transition">Projets</a>
            <a href="#contact" className="hidden sm:block hover:text-emerald-400 transition">Contact</a>
            <a href="/CV_Oswald_Adinavo_2025.pdf" download className="bg-emerald-500 px-4 py-2 rounded-full text-slate-900 hover:bg-emerald-400 transition flex items-center gap-2 text-xs font-bold">
              <Download size={14} /> CV
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        
        {/* HERO */}
        <section className="py-20 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="show" variants={containerVariants}>
            <motion.div variants={itemVariants} className="inline-block px-3 py-1 rounded-full border border-emerald-500/30 text-emerald-400 text-[10px] font-bold mb-4 uppercase tracking-wider">
              Disponible pour de nouveaux défis IA & MES
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-500 leading-tight">
              Concevoir le futur de l'Industrie.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
              Analyste Programmeur spécialisé dans l'intégration de solutions MES (Apriso) et le développement d'applications Full-Stack augmentées par l'IA.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#projects" className="bg-white text-slate-950 px-8 py-3 rounded-xl font-bold hover:bg-emerald-400 transition shadow-xl">Voir mes projets</a>
              <div className="flex gap-4 items-center px-4 border-l border-slate-800 ml-4">
                <a href="https://github.com/Oswald-LEXPERT" target="_blank" className="text-slate-400 hover:text-white transition"><Github /></a>
                <a href="https://linkedin.com/in/oswald-adinavo-07a8172b9/" target="_blank" className="text-slate-400 hover:text-white transition"><Linkedin /></a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale:1}} className="relative">
             <div className="absolute inset-0 bg-emerald-500/20 blur-[120px] rounded-full" />
             <img src="/images/ppp.png" alt="Oswald" className="relative z-10 w-80 h-80 lg:w-[450px] lg:h-[450px] object-cover rounded-3xl grayscale hover:grayscale-0 transition duration-500 border border-white/10 mx-auto shadow-2xl" />
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 uppercase tracking-tighter">
            <span className="w-12 h-[1px] bg-emerald-500" /> Projets Sélectionnés
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className={`p-8 rounded-3xl border ${p.isHighlight ? 'border-emerald-500/50 bg-emerald-500/5 shadow-lg shadow-emerald-500/5' : 'border-white/10 bg-slate-900/50'} flex flex-col justify-between`}
              >
                <div>
                  <div className="text-4xl mb-6">{p.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 italic leading-tight">{p.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tags.map(t => <span key={t} className="text-[9px] font-bold px-2 py-1 rounded-md bg-white/5 text-slate-300 uppercase tracking-widest">{t}</span>)}
                  </div>
                </div>
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                  {p.github ? (
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-emerald-400 font-bold text-xs hover:text-emerald-300 transition"
                    >
                      <Github size={16} /> Code Source
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 text-slate-500 text-[10px] italic font-medium uppercase tracking-tighter">
                      <Zap size={12} className="text-slate-600" /> 
                      Propriétaire
                    </div>
                  )}
                  
                  {p.demo ? (
                    <a 
                      href={p.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="Voir la démo live"
                      className="p-2.5 rounded-full bg-emerald-500 text-slate-900 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
                    >
                      <ExternalLink size={18}/>
                    </a>
                  ) : (
                    <a 
                      href="#contact" 
                      title="Demander plus d'infos"
                      className="p-2.5 rounded-full bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all"
                    >
                      <ExternalLink size={18}/>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS & TIMELINE */}
        <section className="py-20 grid lg:grid-cols-2 gap-20">
          <div id="skills">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-emerald-400 italic">
               <Terminal size={20}/> Stack Technique
            </h3>
            <div className="space-y-6">
              {skills.map(s => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-2 font-medium">
                    <span className="flex items-center gap-2">{s.icon} {s.name}</span>
                    <span className="text-slate-500">{s.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                    <motion.div initial={{width:0}} whileInView={{width:`${s.level}%`}} className="h-full bg-emerald-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="experience">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-sky-400 italic">
               <Clock size={20}/> Chronologie
            </h3>
            <div className="border-l-2 border-slate-900 ml-4 space-y-12">
              {experienceTimeline.map((exp, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-emerald-500" />
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{exp.period}</span>
                  <h4 className="text-lg font-bold text-white mt-1 italic">{exp.title}</h4>
                  <p className="text-sky-400 text-sm mb-2 font-medium">{exp.company}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 italic tracking-tight">Prêt à collaborer ?</h2>
            <p className="text-slate-400 mb-12">Je suis ouvert aux opportunités en Manufacturing IT (MES) et au développement d'applications Full-Stack innovantes.</p>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name" placeholder="Nom" required className="bg-slate-900 border border-white/10 rounded-xl p-4 focus:border-emerald-500 outline-none transition text-sm" />
                <input name="email" type="email" placeholder="Email" required className="bg-slate-900 border border-white/10 rounded-xl p-4 focus:border-emerald-500 outline-none transition text-sm" />
              </div>
              <textarea name="message" placeholder="Votre message..." rows={5} required className="bg-slate-900 border border-white/10 rounded-xl p-4 focus:border-emerald-500 outline-none transition text-sm" />
              <button disabled={status==='sending'} className="bg-emerald-500 text-slate-950 font-black py-4 rounded-xl hover:bg-emerald-400 transition uppercase tracking-widest text-xs">
                {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
              {status === 'success' && <p className="text-emerald-400 text-sm mt-2 font-medium">Message reçu ! Je vous recontacte très vite.</p>}
            </form>
          </div>
        </section>

        <footer className="py-10 text-center text-slate-600 text-xs border-t border-white/5 mt-20">
          <p>© {new Date().getFullYear()} — Oswald ADINAVO. Code Clean, Pensée Agile.</p>
        </footer>
      </main>
    </div>
  );
}
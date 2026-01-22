import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Code, Database, Brain, Layers, Zap, Lock, Eye, Book, GitBranch, FlaskConical, Terminal, ShieldCheck } from 'lucide-react';
import { projects } from '../data/projects';

export const Home: React.FC = () => {
  // 0: Prototypes (Left), 1: Home (Center), 2: Development (Right)
  const [activeSlide, setActiveSlide] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const featuredProjects = projects.slice(0, 3);

  // Helper to change slide
  const goToSlide = (index: number) => {
    setActiveSlide(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-hidden w-full bg-slate-50">
      
      {/* Navigation Indicators (Fixed Bottom) */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex space-x-4 bg-slate-900/90 backdrop-blur-md p-2 rounded-full border border-slate-700 shadow-2xl">
        <button 
          onClick={() => goToSlide(0)} 
          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${activeSlide === 0 ? 'bg-primary-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
        >
          <FlaskConical size={14} />
          <span className="hidden sm:inline">LABS</span>
        </button>
        <button 
          onClick={() => goToSlide(1)} 
          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${activeSlide === 1 ? 'bg-white text-slate-900 shadow-lg' : 'text-slate-400 hover:text-white'}`}
        >
          <Layers size={14} />
          <span className="hidden sm:inline">CORE</span>
        </button>
        <button 
          onClick={() => goToSlide(2)} 
          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${activeSlide === 2 ? 'bg-purple-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
        >
          <GitBranch size={14} />
          <span className="hidden sm:inline">FORGE</span>
        </button>
      </div>

      {/* Main Sliding Container */}
      <div 
        className="flex transition-transform duration-700 ease-in-out w-[300vw]"
        style={{ transform: `translateX(-${activeSlide * 100}vw)` }}
      >
        
        {/* --- PAGE 1: PROTOTYPES (LEFT) --- */}
        <div className="w-[100vw] min-h-screen bg-slate-950 text-white overflow-y-auto pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex items-center justify-between mb-12 border-b border-slate-800 pb-8">
              <div>
                <div className="inline-flex items-center space-x-2 text-primary-400 font-mono text-xs mb-2">
                  <span className="animate-pulse">●</span>
                  <span>AMBIENTE SPERIMENTALE</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight">H-AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-400">LABS</span></h2>
              </div>
              <button onClick={() => goToSlide(1)} className="group flex items-center text-slate-400 hover:text-white transition-colors text-sm">
                Torna alla Home <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* PROTOTYPE 1: GEM (Prompt Engineer) */}
              <div className="relative group rounded-2xl bg-slate-900 border border-slate-800 p-8 hover:border-blue-500/50 transition-all duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-50">
                  <div className="w-24 h-24 bg-blue-500/10 blur-3xl rounded-full"></div>
                </div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-slate-800 rounded-lg text-blue-400 border border-slate-700 shadow-inner">
                    <Terminal size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-mono">GEM</h3>
                    <p className="text-xs text-blue-400 uppercase tracking-wider font-semibold">Advanced Prompt Architect</p>
                  </div>
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                  Un motore di meta-prompting che ingloba dinamicamente le migliori metodologie di "Chain-of-Thought" e le librerie di istruzioni open-source più avanzate (es. Fabric, AutoGPT). GEM non si limita a interrogare il modello, ma struttura un'architettura logica ottimizzata per task complessi.
                </p>
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-white uppercase mb-2">Applicazioni Aziendali:</h4>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li className="flex items-start"><span className="text-blue-500 mr-2">▹</span> Standardizzazione della Code Review automatizzata.</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2">▹</span> Generazione di documentazione tecnica priva di ambiguità.</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2">▹</span> Ottimizzazione dei costi API tramite token reduction intelligente.</li>
                  </ul>
                </div>
                <button className="w-full py-3 rounded-lg border border-slate-700 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all text-slate-300 font-medium text-sm flex justify-center items-center group-hover:shadow-lg hover:shadow-blue-500/20">
                  Deploy Prompt Engine <Zap size={14} className="ml-2" />
                </button>
              </div>

              {/* PROTOTYPE 2: ETHICAL PROMPT (H-AI Context) */}
              <div className="relative group rounded-2xl bg-slate-900 border border-slate-800 p-8 hover:border-emerald-500/50 transition-all duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-50">
                  <div className="w-24 h-24 bg-emerald-500/10 blur-3xl rounded-full"></div>
                </div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-slate-800 rounded-lg text-emerald-400 border border-slate-700 shadow-inner">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-mono">Ethical Prompt</h3>
                    <p className="text-xs text-emerald-400 uppercase tracking-wider font-semibold">H-AI Context Injection</p>
                  </div>
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                  Un sistema di "Context Injection" che allega il manifesto del libro <em>H-AI</em> come layer cognitivo obbligatorio. Questo prototipo forza l'AI a valutare ogni risposta attraverso la lente dell'agenzia umana, garantendo uno sviluppo etico e consapevole.
                </p>
                <div className="mb-6 bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <h4 className="text-xs font-bold text-white uppercase mb-2 flex items-center">
                    <Book size={12} className="mr-2" /> Impatto del Contesto H-AI:
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-2">
                    <strong className="text-emerald-400">In Azienda:</strong> Previene la "deresponsabilizzazione algoritmica", assicurando che l'AI rimanga uno strumento di supporto e non un decisore opaco.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-emerald-400">Vita Quotidiana:</strong> Combatte l'atrofia cognitiva, stimolando l'utente a mantenere il pensiero critico attivo durante l'interazione con la macchina.
                  </p>
                </div>
                <button className="w-full py-3 rounded-lg border border-slate-700 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-all text-slate-300 font-medium text-sm flex justify-center items-center group-hover:shadow-lg hover:shadow-emerald-500/20">
                  Genera con Etica H-AI <Lock size={14} className="ml-2" />
                </button>
              </div>

            </div>
          </div>
        </div>


        {/* --- PAGE 2: HOME (CENTER) --- */}
        <div className="w-[100vw] min-h-screen">
          <div className="space-y-20 pb-20">
            {/* Hero Section */}
            <section className="relative bg-slate-900 text-white overflow-hidden min-h-[80vh] flex items-center justify-center">
              {/* Parallax Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10 transition-transform duration-75 ease-out will-change-transform"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
                  transform: `translateY(${scrollY * 0.5}px)`
                }}
              ></div>
              
              {/* Side Nav Triggers (Desktop) */}
              <div 
                onClick={() => goToSlide(0)} 
                className="absolute left-0 top-0 bottom-0 w-24 hover:bg-gradient-to-r from-slate-800/50 to-transparent cursor-pointer hidden lg:flex items-center justify-start pl-4 group transition-all z-20"
              >
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center text-slate-400">
                  <ArrowLeft size={32} />
                  <span className="text-xs font-mono mt-2 tracking-widest uppercase rotate-90 origin-center translate-y-8">Labs</span>
                </div>
              </div>
              <div 
                onClick={() => goToSlide(2)} 
                className="absolute right-0 top-0 bottom-0 w-24 hover:bg-gradient-to-l from-slate-800/50 to-transparent cursor-pointer hidden lg:flex items-center justify-end pr-4 group transition-all z-20"
              >
                 <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center text-slate-400">
                  <ArrowRight size={32} />
                  <span className="text-xs font-mono mt-2 tracking-widest uppercase -rotate-90 origin-center translate-y-8">Forge</span>
                </div>
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className={`transition-all duration-1000 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-900/30 border border-primary-700/50 text-primary-300 text-xs font-semibold tracking-wide uppercase mb-8 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                    <span>System v2.0 Live</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-8">
                    Human Actions <br/>
                    <span className="text-slate-500">with</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Artificial Intelligence</span>
                  </h1>
                </div>
                
                <div className={`transition-all duration-1000 delay-300 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <p className="text-xl md:text-2xl text-slate-300 font-light mb-10 leading-relaxed max-w-2xl mx-auto">
                    "Non dobbiamo temere le macchine che pensano. <br/>
                    <span className="text-white font-medium">Dobbiamo temere di smettere di pensare con loro.</span>"
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/projects" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-slate-900 bg-white hover:bg-slate-200 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      Esplora Archivio <ArrowRight size={18} className="ml-2" />
                    </Link>
                    <button 
                      onClick={() => goToSlide(0)}
                      className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-base font-medium rounded-full text-white hover:bg-slate-800 transition-all"
                    >
                      Vedi Prototipi <FlaskConical size={18} className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Projects Preview */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-end mb-12">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Ingegneria Applicata</h2>
                  <p className="mt-2 text-slate-600">Sistemi reali che implementano la filosofia H-AI.</p>
                </div>
                <Link to="/projects" className="hidden md:flex items-center text-primary-600 font-medium hover:text-primary-700">
                  Archivio Completo <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {featuredProjects.map(project => (
                  <Link key={project.id} to={`/project/${project.id}`} className="group block bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-primary-500/50 hover:shadow-lg transition-all duration-300">
                    <div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center text-slate-300">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">{project.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 line-clamp-3">{project.problem_human}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>


        {/* --- PAGE 3: DEVELOPMENT / FORGE (RIGHT) --- */}
        <div className="w-[100vw] min-h-screen bg-slate-100 text-slate-900 overflow-y-auto pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex items-center justify-between mb-12 border-b border-slate-200 pb-8">
              <button onClick={() => goToSlide(1)} className="group flex items-center text-slate-500 hover:text-slate-900 transition-colors text-sm">
                 <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Torna alla Home
              </button>
              <div className="text-right">
                <div className="inline-flex items-center space-x-2 text-purple-600 font-mono text-xs mb-2">
                  <span>ROADMAP 2026</span>
                  <span className="animate-pulse">●</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">H-AI <span className="text-transparent bg-clip-text bg-gradient-to-l from-purple-600 to-indigo-600">FORGE</span></h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Neural City Interface", status: "Concept", desc: "Un layer civico per tradurre i dati urbani complessi in narrazioni accessibili per i cittadini.", icon: Database },
                { title: "Bio-Ethical Firewall", status: "Alpha", desc: "Sistema di filtraggio hardware per impedire l'esecuzione di prompt non etici a livello di server locale.", icon: Lock },
                { title: "Symbiotic IDE", status: "Planning", desc: "Ambiente di sviluppo che traccia lo stato di 'flow' del programmatore e adatta i suggerimenti AI per non interromperlo.", icon: Code },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl border border-dashed border-slate-300 opacity-75 hover:opacity-100 hover:border-purple-400 transition-all cursor-not-allowed">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-slate-50 rounded-lg text-slate-500">
                      <item.icon size={24} />
                    </div>
                    <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-mono rounded uppercase">{item.status}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
              
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-8 rounded-xl text-white flex flex-col justify-center items-center text-center shadow-xl">
                <Eye size={48} className="mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-2">Vuoi contribuire?</h3>
                <p className="text-purple-100 text-sm mb-6">La forgia è aperta a nuove visioni.</p>
                <Link to="/contact" className="px-6 py-2 bg-white text-purple-700 rounded-full font-bold text-sm hover:bg-purple-50 transition-colors">
                  Proponi Concept
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
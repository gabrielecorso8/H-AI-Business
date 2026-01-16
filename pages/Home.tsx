import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Brain, Layers } from 'lucide-react';
import { projects } from '../data/projects';

export const Home: React.FC = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-900/30 border border-primary-700/50 text-primary-300 text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              <span>Edizione 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Human Actions <br/>
              <span className="text-slate-400">with</span> Artificial Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 leading-relaxed max-w-2xl">
              "Non dobbiamo temere le macchine che pensano. <br/>
              <span className="text-white font-medium">Dobbiamo temere di smettere di pensare con loro.</span>"
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-white hover:bg-slate-100 transition-all">
                Vedi le Azioni <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/approach" className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-base font-medium rounded-md text-white hover:bg-slate-800 transition-all">
                Leggi la Filosofia
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - Adapted from Book Chapters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Layers, title: "Vita Quotidiana", desc: "Non una visione futuristica, ma una guida per il qui e ora. Dalle email alle scelte importanti." },
            { icon: Brain, title: "Creatività Aumentata", desc: "L'AI non ruba la penna. Ti porge un altro foglio su cui scrivere." },
            { icon: Database, title: "Decisione Collettiva", desc: "Usare la tecnologia non per controllare, ma per liberare e semplificare la burocrazia." },
            { icon: Code, title: "Nuova Cittadinanza", desc: "Abitare lo spazio digitale con intenzione, non solo con consumo passivo." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-4">
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">H-AI Applicata</h2>
              <p className="mt-2 text-slate-600">Case study di alleanze tra intenzione umana ed efficienza della macchina.</p>
            </div>
            <Link to="/projects" className="hidden md:flex items-center text-primary-600 font-medium hover:text-primary-700">
              Vedi tutte le azioni <ArrowRight size={16} className="ml-1" />
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
                   <div className="absolute top-4 left-4">
                     <span className="inline-block px-2 py-1 text-xs font-semibold bg-white/90 text-slate-800 rounded shadow-sm border border-slate-200 backdrop-blur-sm">
                       {project.domain}
                     </span>
                   </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-3">{project.problem_human}</p>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>{project.stack.slice(0, 3).join(' • ')}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/projects" className="text-primary-600 font-medium">Vedi tutti i lavori &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Silent H-AI Statement / Quote from Book */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <blockquote className="text-2xl md:text-3xl font-serif italic text-slate-700 leading-relaxed">
          "Non è l'efficienza che deve guidarci, ma la <span className="text-slate-900 not-italic font-semibold bg-yellow-100 px-1">coscienza</span>.<br/>
          E nessuna intelligenza artificiale potrà mai sostituirla."
          <footer className="mt-4 text-sm font-sans not-italic text-slate-500">— Gabriele Corso, H-AI</footer>
        </blockquote>
      </section>
    </div>
  );
};
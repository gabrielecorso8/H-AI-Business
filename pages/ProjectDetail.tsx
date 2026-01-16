import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Cpu, User, Layers, Box, CheckCircle, BarChart } from 'lucide-react';
import { projects } from '../data/projects';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header with Background Image */}
      <div className="relative bg-slate-900 overflow-hidden pt-10 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/projects" className="inline-flex items-center text-sm text-slate-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Torna all'Archivio
          </Link>
          <div className="flex items-center space-x-3 mb-6">
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-sm border border-white/20">
              {project.domain}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-sm">
            {project.title}
          </h1>
          <p className="text-xl text-primary-200 font-medium max-w-3xl leading-relaxed">
            {project.tagline}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* The Human Context */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                <User className="mr-2 text-slate-400" /> Contesto Umano
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Il Problema</h3>
                  <p className="text-slate-800 leading-relaxed">{project.problem_human}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Il Limite Umano</h3>
                  <p className="text-slate-800 leading-relaxed italic border-l-2 border-red-200 pl-4">
                    "{project.limit_human}"
                  </p>
                </div>
              </div>
            </div>

            {/* The Alliance (H-AI Core) */}
            <div className="bg-slate-900 text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-primary-600 rounded-full opacity-10 blur-3xl"></div>
              <h2 className="text-lg font-bold text-white mb-6 flex items-center relative z-10">
                <Layers className="mr-2 text-primary-400" /> L'Alleanza H-AI
              </h2>
              <p className="text-slate-400 text-sm mb-6 relative z-10">
                Come questo sistema mette in pratica la filosofia di "Human Actions with Artificial Intelligence".
              </p>
              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                <div>
                  <h3 className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-3">Ruolo Intelligenza Artificiale</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{project.ai_role}</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-green-400 uppercase tracking-widest mb-3">Ruolo Intenzione Umana</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{project.human_role}</p>
                </div>
              </div>
            </div>

            {/* Technical Solution */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                <Cpu className="mr-2 text-slate-400" /> Architettura Tecnica
              </h2>
              <div className="space-y-6">
                <div>
                   <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Soluzione</h3>
                   <p className="text-slate-800">{project.solution_technical}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm text-slate-700 border border-slate-200">
                   {project.architecture}
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Funzionalità Chiave</h3>
                    <ul className="space-y-2">
                      {project.features.map((f, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-700">
                          <CheckCircle size={14} className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Metriche Attese</h3>
                     <div className="flex items-center text-sm font-medium text-slate-900">
                        <BarChart size={16} className="mr-2 text-primary-600" />
                        {project.metrics_expected}
                     </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 sticky top-24">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 flex items-center">
                <Box size={16} className="mr-2" /> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-md border border-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
              
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 mt-8">Deliverables</h3>
              <ul className="space-y-2 mb-6">
                {project.deliverables.map((d, i) => (
                  <li key={i} className="text-sm text-slate-600 border-l-2 border-slate-200 pl-3">
                    {d}
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 mt-8">Estensioni Possibili</h3>
              <ul className="space-y-2">
                 {project.possible_extensions.map((e, i) => (
                  <li key={i} className="text-sm text-slate-500 italic">
                    • {e}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link to="/contact" className="block w-full py-3 bg-slate-900 text-white text-center rounded-lg font-medium hover:bg-slate-800 transition-colors">
                  Discuti un progetto simile
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
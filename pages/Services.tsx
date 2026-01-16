import React from 'react';
import { Database, Brain, Workflow, Terminal } from 'lucide-react';
import { Service } from '../types';

export const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 's1',
      title: 'Architettura Sistemi AI',
      icon: 'brain',
      description_tech: 'Design e implementazione di pipeline LLM scalabili, sistemi RAG e fine-tuning di modelli custom usando Python, PyTorch e Vector DB.',
      description_human: 'Progettare ecosistemi intelligenti che rispettano la cultura organizzativa e migliorano le capacità decisionali senza creare dipendenza.'
    },
    {
      id: 's2',
      title: 'Ingegneria Full-Stack',
      icon: 'terminal',
      description_tech: 'Sviluppo di applicazioni web end-to-end usando React, TypeScript, Node.js e infrastrutture cloud moderne (AWS/GCP).',
      description_human: 'Costruire interfacce affidabili, accessibili e trasparenti che danno agli utenti il controllo sui complessi algoritmi sottostanti.'
    },
    {
      id: 's3',
      title: 'Strategia Dati & Operations',
      icon: 'database',
      description_tech: 'Pipeline ETL, data warehousing, ottimizzazione SQL ed elaborazione dati non strutturati (MongoDB/Postgres).',
      description_human: 'Trasformare informazioni caotiche in conoscenza strutturata, abilitando una visione chiara e riducendo il carico cognitivo per i team.'
    },
    {
      id: 's4',
      title: 'Workflow Automatizzati',
      icon: 'workflow',
      description_tech: 'Orchestrazione API, architettura event-driven e pipeline CI/CD per connettere strumenti disparati.',
      description_human: 'Rimuovere la fatica robotica dalle giornate lavorative umane affinché le persone possano concentrarsi su compiti creativi, strategici e interpersonali.'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'brain': return <Brain size={32} />;
      case 'terminal': return <Terminal size={32} />;
      case 'database': return <Database size={32} />;
      case 'workflow': return <Workflow size={32} />;
      default: return <Terminal size={32} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Capacità</h1>
        <p className="text-xl text-slate-600">Eccellenza Tecnica. Scopo Umano.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map(service => (
          <div key={service.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-slate-100 text-slate-900 rounded-lg">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-slate-300">
                   <span className="absolute -left-2 top-0 bg-white text-xs font-bold text-slate-400 px-1 -ml-2 -mt-3">TECH</span>
                   <p className="text-slate-600 font-mono text-sm leading-relaxed">
                     {service.description_tech}
                   </p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-primary-400">
                   <span className="absolute -left-2 top-0 bg-white text-xs font-bold text-primary-600 px-1 -ml-2 -mt-3">UMANO</span>
                   <p className="text-slate-800 text-base leading-relaxed font-medium">
                     {service.description_human}
                   </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
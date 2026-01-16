import React from 'react';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Inizia una Collaborazione</h1>
          <div className="bg-primary-50 border border-primary-100 p-8 rounded-2xl text-left">
            <p className="text-lg text-slate-800 font-medium leading-relaxed mb-4">
              "Ogni progetto è una collaborazione. Qui non si costruiscono sistemi che tolgono potere alle persone. Qui si costruiscono strumenti che lo restituiscono."
            </p>
            <p className="text-slate-600">
              Se stai cercando rigore tecnico combinato con questo standard etico, parliamone.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a href="#" className="flex flex-col items-center p-6 bg-white border border-slate-200 rounded-xl hover:border-slate-400 transition-colors">
            <Mail className="text-slate-900 mb-3" size={32} />
            <span className="text-sm font-medium text-slate-600">Scrivimi</span>
          </a>
          <a href="#" className="flex flex-col items-center p-6 bg-white border border-slate-200 rounded-xl hover:border-slate-400 transition-colors">
            <Linkedin className="text-blue-700 mb-3" size={32} />
            <span className="text-sm font-medium text-slate-600">LinkedIn</span>
          </a>
          <a href="#" className="flex flex-col items-center p-6 bg-white border border-slate-200 rounded-xl hover:border-slate-400 transition-colors">
            <Github className="text-slate-900 mb-3" size={32} />
            <span className="text-sm font-medium text-slate-600">GitHub</span>
          </a>
        </div>

        <form className="bg-white p-8 border border-slate-200 rounded-xl shadow-sm space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
              <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none" placeholder="Mario Rossi" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none" placeholder="mario@esempio.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Ambito del Progetto</label>
            <select className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none bg-white">
              <option>Sviluppo AI/ML</option>
              <option>Data Engineering</option>
              <option>Consulenza Strategica</option>
              <option>Altro</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Messaggio</label>
            <textarea rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none" placeholder="Parlami del problema che vuoi risolvere..."></textarea>
          </div>
          <button type="button" className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 transition-colors">
            <MessageSquare size={18} className="mr-2" /> Invia Messaggio
          </button>
        </form>
      </div>
    </div>
  );
};
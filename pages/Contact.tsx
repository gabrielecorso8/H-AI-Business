import React, { useState } from 'react';
import { Mail, Linkedin, MessageSquare, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'Sviluppo AI/ML',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Costruisce il link mailto con i dati del form
    const subject = `Richiesta Contatto H-AI: ${formData.scope}`;
    const body = `Nome: ${formData.name}\nEmail di contatto: ${formData.email}\n\nMessaggio:\n${formData.message}`;
    
    window.location.href = `mailto:gabrielecorso8@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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

        {/* Contact Links Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a 
            href="mailto:gabrielecorso8@gmail.com" 
            className="flex flex-col items-center p-6 bg-white border border-slate-200 rounded-xl hover:border-slate-400 hover:shadow-md transition-all group"
          >
            <div className="p-4 bg-slate-50 rounded-full mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
              <Mail className="mb-0" size={32} />
            </div>
            <span className="text-lg font-bold text-slate-900 mb-1">Email Diretta</span>
            <span className="text-sm font-medium text-slate-500">gabrielecorso8@gmail.com</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/gabriele-corso-8093871ab/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-md transition-all group"
          >
            <div className="p-4 bg-blue-50 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Linkedin className="mb-0 text-blue-700 group-hover:text-white" size={32} />
            </div>
            <span className="text-lg font-bold text-slate-900 mb-1">LinkedIn</span>
            <span className="text-sm font-medium text-slate-500">Connettiti al Profilo</span>
          </a>
        </div>

        {/* Functional Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 border border-slate-200 rounded-xl shadow-sm space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-slate-900"></div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-shadow" 
                placeholder="Mario Rossi" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-shadow" 
                placeholder="mario@esempio.com" 
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Ambito del Progetto</label>
            <select 
              name="scope"
              value={formData.scope}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none bg-white transition-shadow"
            >
              <option>Sviluppo AI/ML</option>
              <option>Data Engineering</option>
              <option>Consulenza Strategica</option>
              <option>Ricerca Etica</option>
              <option>Altro</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Messaggio</label>
            <textarea 
              name="message"
              required
              rows={4} 
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-shadow" 
              placeholder="Parlami del problema che vuoi risolvere..."
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <Send size={18} className="mr-2" /> Invia Messaggio
          </button>
          <p className="text-xs text-center text-slate-400 mt-2">
            Cliccando invia, si aprirà il tuo client di posta predefinito.
          </p>
        </form>
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Cpu, Heart, Activity } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Archivio Progetti', path: '/projects' },
    { name: 'Servizi', path: '/services' },
    { name: 'Contatti', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded-lg group-hover:bg-primary-600 transition-colors">
                  <Terminal size={20} />
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-900">
                  H-AI <span className="text-slate-400 font-light">Engineering</span>
                </span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-primary-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-4 w-px bg-slate-300 mx-2"></div>
              <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>SYSTEM: ONLINE</span>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-slate-50 text-primary-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Activity size={20} className="text-primary-500" />
                <span className="font-bold text-lg text-white">H-AI Labs</span>
              </div>
              <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
                Ingegneria sperimentale applicata all'etica umana.
                <br/>Sviluppato da Gabriele Corso.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Stack Sperimentale</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>GEM (Ethical Kernel)</li>
                <li>H-GPT (Action Engine)</li>
                <li>RAG Architetturale</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Filosofia</h3>
              <div className="flex items-start space-x-3 text-sm text-slate-400">
                <Cpu className="flex-shrink-0 mt-0.5 text-primary-500" size={16} />
                <span>La Tecnologia come Alleanza</span>
              </div>
              <div className="flex items-start space-x-3 text-sm text-slate-400 mt-2">
                <Heart className="flex-shrink-0 mt-0.5 text-primary-500" size={16} />
                <span>La Coscienza come Guida</span>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500 flex flex-col md:flex-row justify-between items-center">
            <span>&copy; {new Date().getFullYear()} H-AI Engineering.</span>
            <span className="mt-2 md:mt-0 italic font-mono text-xs">v2.0.1 [PROTOTYPE_MODE]</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
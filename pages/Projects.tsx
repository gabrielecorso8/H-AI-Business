import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Cpu, User } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectDomain } from '../types';

export const Projects: React.FC = () => {
  const [filterDomain, setFilterDomain] = useState<ProjectDomain | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const domains: (ProjectDomain | 'All')[] = ['All', 'AI/ML', 'NLP', 'API', 'Data', 'Systems', 'DevOps', 'Multimodal'];

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesDomain = filterDomain === 'All' || p.domain === filterDomain;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.solution_technical.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDomain && matchesSearch;
    });
  }, [filterDomain, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Archivio Ingegneristico</h1>
        <p className="text-slate-600 max-w-2xl">
          Una collezione di sistemi progettati dove l'architettura tecnica supporta specificamente l'agenzia umana.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
        <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          <Filter size={18} className="text-slate-400 mr-2 flex-shrink-0" />
          {domains.map(d => (
            <button
              key={d}
              onClick={() => setFilterDomain(d)}
              className={`px-3 py-1.5 text-sm rounded-md whitespace-nowrap transition-colors ${
                filterDomain === d 
                  ? 'bg-slate-900 text-white shadow-sm' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {d === 'All' ? 'Tutti' : d}
            </button>
          ))}
        </div>
        
        <div className="relative w-full md:w-64">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Cerca stack o problema..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map(p => (
          <Link key={p.id} to={`/project/${p.id}`} className="group flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row h-full">
              {/* Left Image Section */}
              <div className="md:w-48 h-48 md:h-auto relative flex-shrink-0 overflow-hidden bg-slate-100">
                <img 
                  src={p.imageUrl} 
                  alt={p.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-slate-900 group-hover:bg-primary-600 transition-colors z-10 md:block hidden"></div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block px-2 py-0.5 text-xs font-bold tracking-wide uppercase bg-slate-100 text-slate-600 rounded">
                      {p.domain}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">ID: {p.id}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-primary-700 font-medium mb-4">{p.tagline}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start text-sm text-slate-600">
                      <User size={16} className="mt-0.5 mr-2 text-slate-400 flex-shrink-0" />
                      <span className="line-clamp-2"><span className="font-semibold text-slate-700">Problema:</span> {p.problem_human}</span>
                    </div>
                    <div className="flex items-start text-sm text-slate-600">
                      <Cpu size={16} className="mt-0.5 mr-2 text-primary-500 flex-shrink-0" />
                      <span className="line-clamp-2"><span className="font-semibold text-slate-700">Soluzione:</span> {p.solution_technical}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.stack.slice(0, 4).map(tech => (
                    <span key={tech} className="px-2 py-1 bg-slate-50 text-slate-500 text-xs border border-slate-100 rounded">
                      {tech}
                    </span>
                  ))}
                  {p.stack.length > 4 && (
                    <span className="px-2 py-1 text-slate-400 text-xs">+ {p.stack.length - 4}</span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-slate-400">
          Nessun progetto trovato corrispondente ai criteri.
        </div>
      )}
    </div>
  );
};
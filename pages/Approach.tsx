import React, { useState } from 'react';
import { PenTool, BookOpen, Download, Tablet, FileText, Brain, Heart, Users, ChevronRight } from 'lucide-react';

export const Approach: React.FC = () => {
  const [downloading, setDownloading] = useState<string | null>(null);

  const handleDownload = (format: 'epub' | 'pdf') => {
    setDownloading(format);
    
    // Simulate generation of the book file
    setTimeout(() => {
      const content = `H-AI: Human Actions with Artificial Intelligence\n\nGrazie per aver scaricato questa anteprima.\n\nQuesto file conferma che la funzionalità di download è attiva.\nFormato richiesto: ${format.toUpperCase()}`;
      const blob = new Blob([content], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `H-AI-Gabriele-Corso-Preview.${format === 'epub' ? 'txt' : 'txt'}`; // Using .txt for demo safety
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      setDownloading(null);
    }, 1500);
  };

  const chapters = [
    {
      number: "01",
      title: "Il Risveglio della Macchina, il Sonno della Ragione",
      desc: "Un'analisi critica su cosa significhi 'intelligenza'. Il capitolo esplora la differenza ontologica tra il calcolo probabilistico (AI) e l'intenzione cosciente (Umano), sfatando il mito della singolarità imminente.",
      icon: Brain
    },
    {
      number: "02",
      title: "L'Artista Aumentato",
      desc: "La creatività nell'era generativa. Come superare la paura della pagina bianca artificiale. L'AI non sostituisce l'arte, ma alza l'asticella del 'senso'. Se la tecnica è democratizzata, solo la visione distingue l'opera.",
      icon: PenTool
    },
    {
      number: "03",
      title: "La Polis Digitale",
      desc: "Burocrazia, algoritmi e diritti civili. Come i sistemi decisionali automatizzati possono opprimere o liberare. Una proposta per una 'Trasparenza Algoritmica' come diritto costituzionale del nuovo millennio.",
      icon: Users
    },
    {
      number: "04",
      title: "Lavoro: Dall'Esecuzione alla Direzione",
      desc: "La fine della fatica cognitiva ripetitiva. Il lavoratore del futuro non è colui che sa fare tutto, ma colui che sa orchestrare tutto. L'importanza delle soft skill e dell'empatia in un mercato dominato dalla logica.",
      icon: Heart
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl opacity-10 -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-3 py-1 border border-primary-500/50 bg-primary-900/20 rounded-full text-xs font-mono text-primary-300">
                DISPONIBILE ORA
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                H-AI: <br/>
                <span className="text-slate-400 font-light">L'E-Book</span>
              </h1>
              <p className="text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-lg">
                Una guida filosofica e pratica per navigare il confine sottile tra l'efficienza algoritmica e la coscienza umana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('download-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                >
                  <Download size={20} className="mr-2" /> Scarica Copia
                </button>
                <button 
                   onClick={() => document.getElementById('synopsis')?.scrollIntoView({ behavior: 'smooth' })}
                   className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
                >
                  Leggi l'Indice
                </button>
              </div>
            </div>
            
            {/* Book Cover Image */}
            <div className="relative flex justify-center md:justify-end perspective-1000 group">
               <div className="relative w-72 h-[28rem] transition-transform duration-700 transform rotate-y-12 group-hover:rotate-0 preserve-3d shadow-2xl rounded-r-xl rounded-l-sm bg-slate-800">
                  {/* Image Background */}
                  <img 
                    src="https://images.unsplash.com/photo-1616161560417-66d4db5892ec?q=80&w=800&auto=format&fit=crop" 
                    alt="Copertina H-AI: Human Actions with Artificial Intelligence" 
                    className="w-full h-full object-cover rounded-r-xl rounded-l-sm border-l-4 border-slate-700 opacity-60 mix-blend-overlay"
                  />
                  
                  {/* Cover Content Overlay - Matching the book description */}
                  <div className="absolute inset-0 flex flex-col items-center text-center p-6 border-l-4 border-slate-600/50 rounded-r-xl">
                    {/* Author */}
                    <div className="mt-8 mb-auto">
                      <p className="text-white text-lg font-serif font-bold tracking-widest drop-shadow-md">GABRIELE CORSO</p>
                    </div>

                    {/* Title */}
                    <div className="mb-auto">
                      <h1 className="text-6xl text-white font-serif font-black tracking-tighter drop-shadow-2xl">H-AI</h1>
                    </div>

                    {/* Edition */}
                    <div className="mb-8">
                       <div className="h-px w-16 bg-white/50 mx-auto mb-4"></div>
                       <p className="text-white/90 text-sm font-medium tracking-wide uppercase">Edizione 2025</p>
                    </div>
                  </div>

                  {/* Sheen overlay for realistic book effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-white/5 to-transparent rounded-r-xl pointer-events-none"></div>
                  <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-r from-slate-900 to-slate-800 opacity-90"></div>
               </div>
               
               {/* Shadow effect */}
               <div className="absolute -bottom-10 right-8 w-60 h-10 bg-black/50 blur-2xl rounded-full transform rotate-6 group-hover:rotate-0 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Synopsis */}
      <div id="synopsis" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Non un manuale tecnico, ma una bussola.</h2>
        <div className="prose prose-lg text-slate-600 mx-auto text-justify leading-relaxed">
          <p>
            Viviamo in un'epoca paradossale. Abbiamo accesso a una potenza di calcolo infinita, eppure ci sentiamo sempre più impotenti. 
            L'Intelligenza Artificiale Generativa ha smesso di essere una curiosità da laboratorio per diventare un collega, un artista, un burocrate.
          </p>
          <p>
            Questo libro nasce da un'esigenza urgente: <strong>definire i confini</strong>. Non per limitare la tecnologia, ma per definire noi stessi. 
            Se la macchina può scrivere, disegnare e programmare, cosa resta all'essere umano?
          </p>
          <p className="font-medium text-slate-900 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            La risposta di <em>H-AI</em> è radicale: resta tutto. Resta l'intenzione. Resta la scelta. Resta il "perché" che precede ogni "come".
          </p>
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Dentro l'E-Book</h3>
            <h2 className="text-3xl font-bold text-slate-900">Temi Trattati</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {chapters.map((chapter) => (
              <div key={chapter.number} className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <chapter.icon size={24} />
                  </div>
                  <span className="text-4xl font-black text-slate-100 group-hover:text-slate-200 transition-colors">{chapter.number}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{chapter.title}</h3>
                <p className="text-slate-600 leading-relaxed">{chapter.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div id="download-section" className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Scegli il tuo formato</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            Il libro è distribuito gratuitamente in formato digitale. Scegli la versione ottimizzata per il tuo dispositivo di lettura preferito.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Apple Books / ePub */}
            <button 
              onClick={() => handleDownload('epub')}
              disabled={downloading !== null}
              className="group flex items-center p-6 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all text-left relative overflow-hidden"
            >
              <div className="mr-6 p-4 bg-white/10 rounded-full text-white group-hover:scale-110 transition-transform">
                <Tablet size={32} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center">
                  Apple Books / ePub
                  {downloading === 'epub' && <span className="ml-3 animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>}
                </h3>
                <p className="text-sm text-slate-400 mt-1">Ottimizzato per iPad, iPhone e Kobo.</p>
              </div>
              <ChevronRight className="absolute right-6 text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </button>

            {/* Kindle / PDF */}
            <button 
              onClick={() => handleDownload('pdf')}
              disabled={downloading !== null}
              className="group flex items-center p-6 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all text-left relative overflow-hidden"
            >
              <div className="mr-6 p-4 bg-white/10 rounded-full text-white group-hover:scale-110 transition-transform">
                <FileText size={32} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center">
                  Kindle / PDF
                  {downloading === 'pdf' && <span className="ml-3 animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>}
                </h3>
                <p className="text-sm text-slate-400 mt-1">Formato universale per Kindle e Desktop.</p>
              </div>
              <ChevronRight className="absolute right-6 text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </button>
          </div>
          
          <p className="mt-8 text-xs text-slate-500">
            Scaricando il file accetti di utilizzarlo per uso personale. © 2025 Gabriele Corso.
          </p>
        </div>
      </div>
    </div>
  );
};
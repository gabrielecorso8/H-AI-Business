import React from 'react';
import { ShieldCheck, Scale, Users, PenTool, BookOpen, AlertTriangle } from 'lucide-react';

export const Approach: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-3 py-1 border border-slate-700 rounded-full text-xs font-mono text-slate-400">MANIFESTO H-AI</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Il Rischio e la Scelta</h1>
          <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            "L'intelligenza non basta: serve intenzione."
          </p>
        </div>
      </div>

      {/* Intro from Book */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-100">
           <p className="text-lg text-slate-700 leading-relaxed italic text-center font-serif">
             "Viviamo in un'epoca in cui l'intelligenza artificiale ha smesso di appartenere al futuro: è presente, concreta, quotidiana. 
             La domanda cruciale non è cosa può fare lei, ma cosa possiamo fare noi, con lei."
           </p>
        </div>
      </div>

      {/* Book Themes Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* Creativity */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-6">
              <PenTool size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Creatività Aumentata</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Per lungo tempo, la creatività è stata percepita come l'ultimo territorio inviolabile dell'umano. Oggi, l'AI genera immagini, testi e musica. Significa forse la fine dell'arte?
            </p>
            <p className="text-slate-800 font-medium border-l-4 border-purple-200 pl-4 italic">
              "L'AI non ruba la penna. Ti porge un altro foglio."
            </p>
            <p className="text-slate-600 leading-relaxed mt-6">
              Ci costringe a scrivere meglio. Non a delegare la nostra voce, ma ad affilarla. Scrivere con l'AI è un atto intimo di scelta su ciò che conta davvero.
            </p>
          </div>
          <div className="order-1 md:order-2 bg-slate-100 rounded-2xl h-64 md:h-96 w-full relative overflow-hidden">
             <img src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=1000&auto=format&fit=crop" className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500" alt="Creativity" />
          </div>
        </div>

        {/* Politics & Bureaucracy */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-100 rounded-2xl h-64 md:h-96 w-full relative overflow-hidden">
             <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1000&auto=format&fit=crop" className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500" alt="Bureaucracy" />
          </div>
          <div>
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6">
              <Scale size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Decisione Collettiva</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              La burocrazia non è lenta per caso; è lenta per design. Nel vuoto dell'inefficienza, i diritti si smarriscono. L'AI offre un'opportunità non solo per la velocità, ma per la trasparenza.
            </p>
            <p className="text-slate-800 font-medium border-l-4 border-blue-200 pl-4 italic">
              "Non dobbiamo usare la tecnologia per controllare, ma per liberare."
            </p>
            <p className="text-slate-600 leading-relaxed mt-6">
              Immaginiamo una cittadinanza dove ogni persona riceve spiegazioni chiare e personalizzate delle leggi. Una democrazia dove la comprensione è un diritto, non un privilegio di pochi.
            </p>
          </div>
        </div>

        {/* Education & Work */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-6">
              <BookOpen size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Educazione e Lavoro</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Stiamo insegnando per un mondo che è già cambiato. L'alfabetizzazione oggi non è solo leggere e scrivere; è orientarsi nella complessità.
            </p>
            <p className="text-slate-800 font-medium border-l-4 border-green-200 pl-4 italic">
              "Imparare a convivere con le macchine, senza smettere di essere umani."
            </p>
            <p className="text-slate-600 leading-relaxed mt-6">
              L'insegnante diventa guida di coscienza, non solo distributore di nozioni. Non dobbiamo temere che l'AI ci tolga il lavoro; dobbiamo temere di diventare robotici nel nostro lavoro.
            </p>
          </div>
          <div className="order-1 md:order-2 bg-slate-100 rounded-2xl h-64 md:h-96 w-full relative overflow-hidden">
             <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop" className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500" alt="Education" />
          </div>
        </div>

        {/* The Choice */}
        <div className="bg-slate-50 p-8 md:p-12 rounded-2xl text-center">
          <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600 mx-auto mb-6">
            <AlertTriangle size={24} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Il Paradosso della Scelta</h3>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed mb-8">
            "Il pericolo più grande non è che le macchine ci dominino, ma che noi rinunciamo alla scelta. <br/>
            Non è la macchina a dover diventare cosciente. Siamo noi a dover restare svegli."
          </p>
          <div className="inline-block bg-white px-6 py-4 rounded-lg border border-slate-200 shadow-sm">
            <p className="font-mono text-sm text-slate-500">TRATTO DAL LIBRO</p>
            <p className="font-bold text-slate-900">H-AI: Human Actions with Artificial Intelligence (2025)</p>
          </div>
        </div>

      </div>
    </div>
  );
};
# H-AI Platform: Ingegneria AI Umano-Centrica

> **"Non dobbiamo temere le macchine che pensano. Dobbiamo temere di smettere di pensare con loro."**

## 🎯 Visione del Progetto

**H-AI (Human Actions with Artificial Intelligence)** è una piattaforma vetrina professionale progettata per dimostrare come l'ingegneria del software e l'Intelligenza Artificiale possano essere orchestrate per amplificare, e non sostituire, l'agire umano.

Basata sul libro e sulla filosofia di **Gabriele Corso (2025)**, questa applicazione non è solo un portfolio, ma una dichiarazione di intenti. Ogni case study presentato è analizzato attraverso una **doppia lente**:
1.  **Lente Tecnica:** Architetture RAG, Pipeline NLP, Computer Vision e Sistemi Distribuiti.
2.  **Lente Umana:** Il ruolo dell'intenzione, il superamento dei limiti cognitivi e l'impatto etico.

## 🛠 Stack Tecnologico

La piattaforma è costruita seguendo principi di modernità, leggerezza e performance, utilizzando un approccio **No-Build / ESM** per la massima portabilità e trasparenza del codice.

*   **Core:** React 19 (via ESM imports)
*   **Linguaggio:** TypeScript (Static Typing per robustezza architetturale)
*   **Routing:** React Router v7
*   **Styling:** Tailwind CSS (Utility-first framework)
*   **Iconography:** Lucide React
*   **Performance:** Lazy loading delle immagini e ottimizzazione dei render.

## 📂 Struttura del Progetto

L'architettura della codebase riflette la pulizia concettuale del progetto:

```
/
├── components/      # Componenti UI riutilizzabili (Layout, Navigazione)
├── data/            # Layer dei dati (Definizione dei Progetti, Mock DB)
├── pages/           # Viste principali (Home, Progetti, Dettaglio, Filosofia)
├── types.ts         # Definizioni di tipo TypeScript (Domain Driven Design)
├── index.html       # Entry point e configurazione Import Map
└── index.tsx        # Bootstrapping dell'applicazione React
```

## 🚀 Case Study in Vetrina

La piattaforma esplora 11 scenari ingegneristici complessi, tra cui:

*   **Searchify:** Ricerca Semantica per Knowledge Base (RAG Pipeline).
*   **MuseumLangID:** OCR Archivistico & Identificazione Lingua per i Beni Culturali.
*   **Syncease:** Orchestrazione di sistemi distribuiti (Event-driven architecture).
*   **Finance Multimodal:** Analisi finanziaria tramite Vision-Language Models.
*   **Sentiment CI/CD:** Integrazione DevOps con analisi del sentiment NLP.

Ogni progetto include dettagli su:
*   *Stack Tecnologico*
*   *Architettura dei Dati*
*   *Problema Umano vs Soluzione AI*
*   *Metriche di Successo*

## 🌐 Filosofia H-AI

Il cuore dell'applicazione risiede nella sezione **"Il Libro"**, dove vengono esplorati i quattro pilastri della nuova cittadinanza digitale:
1.  **Creatività Aumentata**
2.  **Decisione Collettiva**
3.  **Educazione e Lavoro**
4.  **Il Paradosso della Scelta**

## 📦 Installazione e Sviluppo

Poiché il progetto utilizza moduli ES6 nativi e import maps (via `esm.sh`), non richiede complessi step di build (Webpack/Vite) per essere eseguito in ambienti moderni, ma per lo sviluppo locale si consiglia un server statico.

1.  Clona il repository.
2.  Assicurati di avere un ambiente che supporti TypeScript o esegui tramite un bundler standard se desideri espandere il progetto.
3.  Apri `index.html` tramite un server locale (es. Live Server per VS Code).

---

**© 2025 H-AI Engineering.**
*Ingegneria del Potenziale Umano.*

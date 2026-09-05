import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoTech2 from '../assets/Givenx-Tech 2.png';

// Import images from assets (matching the ones used in TechAuditPage for brand consistency)
import auditBg from '../assets/audit.jfif';
import devBg from '../assets/dev.jfif';
import probBg from '../assets/prob.jfif';
import strategieBg from '../assets/strategie.jfif';
import supportBg from '../assets/support.jfif';
import case1Img from '../assets/case1.jpg';
import case2Img from '../assets/case2.jpg';
import case3Img from '../assets/case3.jpg';
import phase1Img from '../assets/PHASE1.png';
import diagnosticImg from '../assets/Diagnostic.png';
import estimationImg from '../assets/estimation.jpg';
import pilotageImg from '../assets/Pilotage.png';

import PremiumServiceCTA from '../PremiumServiceCTA';
import ScrollToTop from '../ScrollToTop';
import './SoftwareEngineeringPage.css';

const SoftwareEngineeringPage = () => {
  const [pipelineState, setPipelineState] = useState('idle');
  const [selectedFile, setSelectedFile] = useState('App.tsx');
  const [terminalLogs, setTerminalLogs] = useState([
    'system: initialising build runner...',
    'system: loading project configuration...',
    'ready to run build.'
  ]);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Scroll triggered animations setup
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in-view');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Trigger interactive build simulation
  const runBuildSimulation = () => {
    if (pipelineState !== 'idle') return;
    
    setPipelineState('running');
    setTerminalLogs([
      'git: pull origin main... [done]',
      'npm: run build --production'
    ]);

    const steps = [
      { delay: 800, log: 'vite: bundling source code...' },
      { delay: 1600, log: 'eslint: lint check passed (0 warnings)' },
      { delay: 2400, log: 'vitest: running 64 test suites...' },
      { delay: 3000, log: '✔ 142 unit tests passed (100% coverage)' },
      { delay: 3800, log: 'vercel: uploading build artifacts...' },
      { delay: 4600, log: '✔ deployment successful! Live at https://givenx.tech' }
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setTerminalLogs(prev => [...prev, step.log]);
        if (index === steps.length - 1) {
          setPipelineState('success');
        }
      }, step.delay);
    });
  };

  const resetBuildSimulation = () => {
    setPipelineState('idle');
    setTerminalLogs([
      'system: build runner reset.',
      'ready to run build.'
    ]);
  };

  // Mock code matching files
  const fileCodes = {
    'App.tsx': `import React from 'react';
import { Hero, BentoGrid, Timeline } from './components';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero 
        title="Ingénierie Logicielle sur mesure"
        subtitle="Conçue pour durer." 
      />
      <BentoGrid section="Bénéfices clés" />
      <Timeline title="Notre approche agile" />
    </div>
  );
}`,
    'api.ts': `import axios from 'axios';

export const fetchProjectDetails = async (id: string) => {
  try {
    const response = await axios.get(\`/api/v1/projects/\${id}\`);
    return response.data;
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
};`,
    'docker-compose.yml': `version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
  db:
    image: postgres:15-alpine
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  pgdata:`
  };

  return (
    <div className="soft-eng-page-wrapper">
      
      {/* Top Navbar */}
      <nav className="soft-eng-nav">
        <Link to="/" className="soft-eng-nav-logo">
          <img src={logoTech2} alt="GivenX Tech Logo" />
        </Link>
        <div className="soft-eng-nav-links">
          <Link to="/" className="nav-back-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Accueil
          </Link>
          <Link to="/contact" className="btn-contact-soft">
            Discuter de votre projet
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="soft-eng-hero">
        <div className="hero-content animate-on-scroll">
          <span className="hero-badge">INGÉNIERIE LOGICIELLE SUR MESURE</span>
          <h1 className="hero-title">
            Applications web, mobiles et SaaS <span className="gradient-text-yellow">conçues pour durer.</span>
          </h1>
          <p className="hero-subtitle">
            Vous avez une idée produit, un MVP à livrer ou une plateforme à faire évoluer ? Nous concevons et développons des applications web, mobiles et SaaS qui combinent performance, qualité de code et expérience utilisateur soignée.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="cta-button primary-cta">Discuter de votre projet</Link>
            <a href="#offre" className="cta-button secondary-cta">Voir nos autres services</a>
          </div>
        </div>

        {/* Visual: Interactive Code & Pipeline editor */}
        <div className="hero-visual animate-on-scroll delay-200">
          <div className="ide-container">
            {/* Header bar */}
            <div className="ide-header">
              <div className="ide-dots">
                <span className="ide-dot red"></span>
                <span className="ide-dot yellow"></span>
                <span className="ide-dot green"></span>
              </div>
              <div className="ide-title">GivnexTech IDE — src/pages/{selectedFile}</div>
              <div className="ide-status-badge">
                <span className={`status-led ${pipelineState}`}></span>
                {pipelineState === 'idle' && 'Idle'}
                {pipelineState === 'running' && 'Running build...'}
                {pipelineState === 'success' && 'Production Live'}
              </div>
            </div>

            {/* Main IDE area */}
            <div className="ide-body">
              {/* Explorer Sidebar */}
              <div className="ide-sidebar">
                <div className="sidebar-section">WORKSPACE</div>
                <div className="sidebar-tree">
                  <div className="tree-node folder">📁 src</div>
                  <div className={`tree-node file ${selectedFile === 'App.tsx' ? 'active' : ''}`} onClick={() => setSelectedFile('App.tsx')}>
                    ⚛️ App.tsx
                  </div>
                  <div className={`tree-node file ${selectedFile === 'api.ts' ? 'active' : ''}`} onClick={() => setSelectedFile('api.ts')}>
                    ⚡ api.ts
                  </div>
                  <div className="tree-node folder">📁 infra</div>
                  <div className={`tree-node file ${selectedFile === 'docker-compose.yml' ? 'active' : ''}`} onClick={() => setSelectedFile('docker-compose.yml')}>
                    🐳 docker-compose.yml
                  </div>
                </div>
              </div>

              {/* Editor Workspace */}
              <div className="ide-editor">
                <pre className="code-pre">
                  <code>
                    {fileCodes[selectedFile].split('\n').map((line, idx) => (
                      <div key={idx} className="code-line-row">
                        <span className="line-num">{idx + 1}</span>
                        <span className="line-content">{line}</span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>

            {/* Terminal Drawer */}
            <div className="ide-terminal">
              <div className="terminal-header">
                <span>Console Logs</span>
                <div className="terminal-actions">
                  {pipelineState === 'idle' ? (
                    <button className="terminal-btn run-btn" onClick={runBuildSimulation}>
                      ▶ Run Build
                    </button>
                  ) : (
                    <button className="terminal-btn reset-btn" onClick={resetBuildSimulation}>
                      ↺ Reset
                    </button>
                  )}
                </div>
              </div>
              <div className="terminal-body">
                {terminalLogs.map((log, index) => (
                  <div key={index} className="terminal-log-line">
                    <span className="terminal-prompt">&gt;</span> {log}
                  </div>
                ))}
                {pipelineState === 'running' && (
                  <div className="terminal-log-line loading-dots">
                    <span>●</span><span>●</span><span>●</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Offer Section - New: Horizontal numbered feature list */}
      <section className="soft-eng-section" id="offre">
        <div className="section-header animate-on-scroll">
          <span className="section-label">CE QUE NOUS FAISONS</span>
          <h2 className="section-title">Notre offre</h2>
          <p className="section-desc">
            Nous prenons en charge la conception et le développement de vos produits numériques, du prototype à la mise en production.
          </p>
        </div>

        <div className="offer-feature-list">
          <div className="offer-feature-item animate-on-scroll">
            <div className="offer-feature-num">01</div>
            <div className="offer-feature-divider"></div>
            <div className="offer-feature-icon yellow-glow">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <div className="offer-feature-body">
              <h3>Applications web modernes</h3>
              <p>Interfaces web réactives, ultra-rapides et robustes bâties avec les frameworks leaders : React, Next.js et TanStack.</p>
            </div>
            <div className="offer-feature-tag">React · Next.js · TanStack</div>
          </div>

          <div className="offer-feature-item animate-on-scroll delay-100">
            <div className="offer-feature-num">02</div>
            <div className="offer-feature-divider"></div>
            <div className="offer-feature-icon orange-glow">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </div>
            <div className="offer-feature-body">
              <h3>Applications mobiles iOS & Android</h3>
              <p>Développement d'applications mobiles natives et cross-plateformes fluides pour offrir la meilleure expérience utilisateur nomade.</p>
            </div>
            <div className="offer-feature-tag">React Native · Flutter</div>
          </div>

          <div className="offer-feature-item animate-on-scroll delay-200">
            <div className="offer-feature-num">03</div>
            <div className="offer-feature-divider"></div>
            <div className="offer-feature-icon yellow-glow">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="offer-feature-body">
              <h3>Plateformes SaaS multi-tenant</h3>
              <p>Architecture logicielle isolée, sécurisée et scalable permettant de mutualiser vos ressources tout en protégeant les données clients.</p>
            </div>
            <div className="offer-feature-tag">Multi-tenant · Sécurisé · Scalable</div>
          </div>

          <div className="offer-feature-item animate-on-scroll delay-300">
            <div className="offer-feature-num">04</div>
            <div className="offer-feature-divider"></div>
            <div className="offer-feature-icon orange-glow">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            </div>
            <div className="offer-feature-body">
              <h3>API & Microservices</h3>
              <p>Conception d'APIs REST ou GraphQL documentées et de backends robustes orchestrés de façon modulaire et résiliente.</p>
            </div>
            <div className="offer-feature-tag">REST · GraphQL · Modulaire</div>
          </div>

          <div className="offer-feature-item animate-on-scroll delay-400">
            <div className="offer-feature-num">05</div>
            <div className="offer-feature-divider"></div>
            <div className="offer-feature-icon yellow-glow">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path>
              </svg>
            </div>
            <div className="offer-feature-body">
              <h3>Refonte de produits existants</h3>
              <p>Modernisation progressive de vos anciennes bases de code (legacy systems) sans interruption de service pour vos utilisateurs.</p>
            </div>
            <div className="offer-feature-tag">Legacy · Migration · Zéro downtime</div>
          </div>
        </div>
      </section>

      {/* Benefits Bento Section */}
      <section className="soft-eng-section bg-darker">
        <div className="section-header animate-on-scroll">
          <span className="section-label">BÉNÉFICES CLÉS</span>
          <h2 className="section-title">Pourquoi GivnexTech</h2>
          <p className="section-desc">
            Bâtir des solutions fiables et performantes implique de concilier vitesse de livraison et excellence technique.
          </p>
        </div>

        <div className="benefits-layout bento-grid-layout">
          {/* Card 1: Wide (Gold/Yellow) */}
          <div className="benefit-card animate-on-scroll bento-wide bento-yellow">
            <div className="bento-content">
              <div className="benefit-num">01</div>
              <h4>Un time-to-market raccourci grâce à nos accélérateurs</h4>
              <p>Accélérez le lancement de vos applications grâce à nos briques pré-construites, notre expertise DevOps et nos accélérateurs de développement.</p>
            </div>
            <div className="bento-illustration rocket-illustration">
              <div className="speed-meter-box">
                <div className="speed-track">
                  <div className="speed-bar" style={{ width: '85%' }}></div>
                </div>
                <div className="speed-value">🚀 Time-to-market : -35%</div>
              </div>
            </div>
          </div>

          {/* Card 2: Normal (Orange) */}
          <div className="benefit-card animate-on-scroll delay-100 bento-normal bento-orange">
            <div className="bento-content">
              <div className="benefit-num">02</div>
              <h4>Du code propre, testé et documenté</h4>
              <p>Pas de compromis sur la qualité. Chaque livraison inclut tests automatisés, typage robuste et documentation claire.</p>
            </div>
            <div className="bento-illustration test-illustration">
              <div className="test-badge-glass">
                <div className="test-header">🧪 SUITE DE TESTS</div>
                <div className="test-item-row"><span className="check-mark">✓</span> Unit tests : 100%</div>
                <div className="test-item-row"><span className="check-mark">✓</span> Coverage : 98.2%</div>
              </div>
            </div>
          </div>

          {/* Card 3: Normal (Gold/Yellow) */}
          <div className="benefit-card animate-on-scroll delay-200 bento-normal bento-yellow">
            <div className="bento-content">
              <div className="benefit-num">03</div>
              <h4>Une expérience utilisateur soignée et accessible</h4>
              <p>Des interfaces intuitives, esthétiques et entièrement accessibles (WCAG) pour maximiser l'engagement de vos utilisateurs.</p>
            </div>
            <div className="bento-illustration accessibility-illustration">
              <div className="accessibility-panel">
                <div className="badge-acc-check">♿ UX/UI A++</div>
                <div className="dot-radar-ring"></div>
              </div>
            </div>
          </div>

          {/* Card 4: Wide (Orange) */}
          <div className="benefit-card animate-on-scroll delay-300 bento-wide bento-orange">
            <div className="bento-content">
              <div className="benefit-num">04</div>
              <h4>Une architecture évolutive prête pour la scale</h4>
              <p>Des fondations pensées pour encaisser la charge : bases de données optimisées, hébergement cloud managé et structures microservices.</p>
            </div>
            <div className="bento-illustration scale-illustration">
              <div className="scale-chart">
                <div className="scale-bar" style={{ height: '30%' }}></div>
                <div className="scale-bar" style={{ height: '60%' }}></div>
                <div className="scale-bar pulse" style={{ height: '90%' }}></div>
                <span className="scale-caption">Load capacity auto-scale</span>
              </div>
            </div>
          </div>

          {/* Card 5: Full Width (Gold/Yellow) */}
          <div className="benefit-card animate-on-scroll delay-400 bento-full bento-yellow">
            <div className="bento-content-split">
              <div className="bento-text">
                <div className="benefit-num">05</div>
                <h4>Une équipe pluridisciplinaire (produit, design, dev)</h4>
                <p>Bénéficiez d'une synergie unique. Chefs de produit, designers UX/UI et ingénieurs travaillent de concert sur votre produit numérique.</p>
              </div>
              <div className="bento-illustration team-illustration">
                <div className="team-avatars-grid">
                  <div className="avatar-chip">🎨 Product Design</div>
                  <div className="avatar-chip">⚙️ Backend Dev</div>
                  <div className="avatar-chip">📊 Product Mgr</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section - New: Horizontal step tracker */}
      <section className="soft-eng-section">
        <div className="section-header animate-on-scroll">
          <span className="section-label">NOTRE APPROCHE</span>
          <h2 className="section-title">Notre approche</h2>
          <p className="section-desc">
            Nous combinons la rigueur de l'ingénierie et l'agilité produit pour des livraisons rapides et sans mauvaise surprise.
          </p>
        </div>

        <div className="approach-steps-wrapper">
          {/* Connector line */}
          <div className="approach-connector-line"></div>

          <div className="approach-step animate-on-scroll">
            <div className="approach-step-circle">
              <div className="approach-step-inner">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
            <div className="approach-step-card">
              <div className="approach-step-num">01</div>
              <h3>Cadrage produit</h3>
              <p>Définition du périmètre, des personas et des indicateurs de succès.</p>
              <div className="approach-step-pills">
                <span>Personas</span><span>KPIs</span><span>Scope</span>
              </div>
            </div>
          </div>

          <div className="approach-step animate-on-scroll delay-100">
            <div className="approach-step-circle orange">
              <div className="approach-step-inner">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
            </div>
            <div className="approach-step-card">
              <div className="approach-step-num orange">02</div>
              <h3>Conception</h3>
              <p>Maquettes, architecture technique et plan de livraison itératif.</p>
              <div className="approach-step-pills">
                <span>UX/UI</span><span>Architecture</span><span>Roadmap</span>
              </div>
            </div>
          </div>

          <div className="approach-step animate-on-scroll delay-200">
            <div className="approach-step-circle">
              <div className="approach-step-inner">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
            </div>
            <div className="approach-step-card">
              <div className="approach-step-num">03</div>
              <h3>Développement agile</h3>
              <p>Sprints courts, démonstrations régulières et feedback continu.</p>
              <div className="approach-step-pills">
                <span>Sprints</span><span>CI/CD</span><span>Tests</span>
              </div>
            </div>
          </div>

          <div className="approach-step animate-on-scroll delay-300">
            <div className="approach-step-circle orange">
              <div className="approach-step-inner">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
            </div>
            <div className="approach-step-card">
              <div className="approach-step-num orange">04</div>
              <h3>Mise en production</h3>
              <p>Déploiement, monitoring et transfert de compétences.</p>
              <div className="approach-step-pills">
                <span>Deploy</span><span>Monitoring</span><span>Formation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section - New: Spotlight horizontal layout */}
      <section className="soft-eng-section bg-darker">
        <div className="section-header animate-on-scroll">
          <span className="section-label">CAS D'USAGE</span>
          <h2 className="section-title">Sur le terrain</h2>
          <p className="section-desc">
            Découvrez comment nous aidons nos clients à concrétiser et moderniser leurs ambitions numériques.
          </p>
        </div>

        <div className="spotlight-cases-wrapper">
          {/* Large spotlight card */}
          <div className="spotlight-card-main animate-on-scroll">
            <div className="spotlight-img-wrap">
              <img src={case1Img} alt="MVP startup" />
              <div className="spotlight-img-overlay"></div>
            </div>
            <div className="spotlight-card-meta">
              <span className="spotlight-cat">MVP Startup</span>
              <h3>SaaS B2B lancé en 12 semaines</h3>
              <p>De l'idée au produit fonctionnel en un temps record — architecture scalable, design soigné, pipeline CI/CD complet et prêt pour les premiers clients.</p>
              <div className="spotlight-stats">
                <div className="spotlight-stat">
                  <span className="stat-value">12</span>
                  <span className="stat-label">semaines</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-value">3x</span>
                  <span className="stat-label">plus rapide</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-value">100%</span>
                  <span className="stat-label">couverture tests</span>
                </div>
              </div>
            </div>
          </div>

          {/* Two stacked smaller cards */}
          <div className="spotlight-cards-stack">
            <div className="spotlight-card-small animate-on-scroll delay-150">
              <div className="spotlight-small-img">
                <img src={case2Img} alt="App mobile retail" />
                <div className="spotlight-img-overlay"></div>
              </div>
              <div className="spotlight-small-meta">
                <span className="spotlight-cat orange">App Mobile Retail</span>
                <h4>Fidélité multi-enseignes</h4>
                <p>Application de fidélité cross-plateforme avec backoffice temps réel et gestion multi-enseignes unifiée.</p>
              </div>
            </div>

            <div className="spotlight-card-small animate-on-scroll delay-300">
              <div className="spotlight-small-img">
                <img src={case3Img} alt="Refonte legacy" />
                <div className="spotlight-img-overlay"></div>
              </div>
              <div className="spotlight-small-meta">
                <span className="spotlight-cat">Refonte Legacy</span>
                <h4>Migration sans downtime</h4>
                <p>Modernisation complète d'une application métier de 10 ans, sans aucune interruption de service pour les utilisateurs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section — premium */}
      <PremiumServiceCTA
        title="Développons votre prochain produit digital ensemble."
        subtitle="Nos experts analysent vos besoins et conçoivent des applications robustes alignées sur vos enjeux business. Réponse sous 24h."
      />

      {/* Footer Copy */}
      <footer className="soft-eng-footer">
        <p>© {new Date().getFullYear()} GivenX Group. Tous droits réservés.</p>
      </footer>
      <ScrollToTop />
    </div>
  );
};

export default SoftwareEngineeringPage;

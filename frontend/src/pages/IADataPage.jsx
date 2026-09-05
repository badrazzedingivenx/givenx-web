import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoTech2 from '../assets/Givenx-Tech 2.png';
import PremiumServiceCTA from '../PremiumServiceCTA';
import ScrollToTop from '../ScrollToTop';
import './IADataPage.css';

const offerItems = [
  { icon: '⬡', label: 'Data engineering et plateformes data modernes' },
  { icon: '◈', label: 'Machine learning et modèles prédictifs' },
  { icon: '✦', label: 'IA générative et copilotes métiers (RAG, agents)' },
  { icon: '◎', label: 'Tableaux de bord et analytics avancés' },
  { icon: '◇', label: 'Gouvernance et qualité de la donnée' },
];

const benefits = [
  { num: '01', title: 'Des décisions appuyées sur des données fiables', pulse: '98%' },
  { num: '02', title: 'Une automatisation de tâches cognitives complexes', pulse: '3×' },
  { num: '03', title: 'Une expérience client personnalisée à grande échelle', pulse: '1:1' },
  { num: '04', title: 'Une mise en production rapide grâce à nos accélérateurs', pulse: '6 sem.' },
  { num: '05', title: 'Un cadre éthique et conforme (RGPD, AI Act)', pulse: '100%' },
];

const methodologySteps = [
  { phase: '1', badge: "Cadrage cas d'usage", title: 'Identification des use cases à fort ROI et faisabilité.' },
  { phase: '2', badge: 'Preuve de valeur', title: 'POC rapide pour valider la qualité des résultats.' },
  { phase: '3', badge: 'Industrialisation', title: 'MLOps, intégration produit et passage à l\'échelle.' },
  { phase: '4', badge: 'Adoption', title: 'Formation des utilisateurs et amélioration continue.' },
];

const useCases = [
  {
    title: 'Copilote support',
    desc: 'Assistant IA branché à votre base de connaissance pour répondre aux clients.',
    tag: 'RAG',
    gradient: 'grad-blue',
  },
  {
    title: 'Scoring prédictif',
    desc: 'Modèle de churn pour prioriser les actions de rétention.',
    tag: 'ML',
    gradient: 'grad-sky',
  },
  {
    title: 'Plateforme analytics',
    desc: 'Data lakehouse unifié pour finance, marketing et opérations.',
    tag: 'DATA',
    gradient: 'grad-indigo',
  },
];

const streamWords = ['données', 'prédictions', 'insights', 'modèles', 'décisions'];

const IADataPage = () => {
  const [activeNode, setActiveNode] = useState(0);
  const [streamIndex, setStreamIndex] = useState(0);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const nodeTimer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % offerItems.length);
    }, 3500);
    return () => clearInterval(nodeTimer);
  }, []);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setStreamIndex((prev) => (prev + 1) % streamWords.length);
    }, 2400);
    return () => clearInterval(wordTimer);
  }, []);

  useEffect(() => {
    const target = streamWords[streamIndex];
    let i = 0;
    setTypedText('');
    const typeTimer = setInterval(() => {
      i += 1;
      setTypedText(target.slice(0, i));
      if (i >= target.length) clearInterval(typeTimer);
    }, 80);
    return () => clearInterval(typeTimer);
  }, [streamIndex]);

  return (
    <div className="iad-page">
      <div className="iad-aurora" aria-hidden="true" />
      <div className="iad-noise" aria-hidden="true" />

      <nav className="iad-nav fade-up">
        <Link to="/" className="iad-logo">
          <img src={logoTech2} alt="GivenX Tech" />
        </Link>
        <div className="iad-nav-actions">
          <Link to="/" className="iad-back">Accueil</Link>
          <Link to="/contact" className="iad-nav-btn">Discuter de votre projet</Link>
        </div>
      </nav>

      {/* Hero — neural cosmos */}
      <header className="iad-hero">
        <div className="iad-hero-visual fade-up" aria-hidden="true">
          <svg className="iad-neural-svg" viewBox="0 0 500 500">
            <defs>
              <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1AD8E8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </radialGradient>
            </defs>
            {[
              [250, 250], [120, 150], [380, 130], [400, 320], [100, 350], [250, 80], [250, 420],
            ].map(([cx, cy], i) => (
              <g key={`${cx}-${cy}`}>
                {i > 0 && (
                  <line
                    x1="250" y1="250" x2={cx} y2={cy}
                    className={`iad-synapse ${activeNode === i - 1 || (i === 1 && activeNode === 0) ? 'active' : ''}`}
                  />
                )}
                <circle cx={cx} cy={cy} r={i === 0 ? 18 : 10} className={`iad-node ${i === 0 ? 'core' : ''} ${activeNode === (i === 0 ? 0 : i - 1) ? 'lit' : ''}`} />
              </g>
            ))}
          </svg>
          <div className="iad-orbit-particles">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="iad-particle" style={{ '--p-i': i }} />
            ))}
          </div>
        </div>

        <div className="iad-hero-content fade-up" style={{ transitionDelay: '120ms' }}>
          <span className="iad-chip">IA & SOLUTIONS DATA</span>
          <h1 className="iad-title">
            Transformez vos
            <span className="iad-title-stream">
              {typedText}
              <span className="iad-cursor">|</span>
            </span>
            en décisions intelligentes.
          </h1>
          <p className="iad-lead">
            Vos données dorment dans des silos et l&apos;IA reste un sujet d&apos;expérimentation ? Nous construisons des solutions data et IA concrètes, mesurables et intégrées à vos processus métiers.
          </p>
          <div className="iad-hero-cta">
            <Link to="/contact" className="iad-btn-fill">Discuter de votre projet</Link>
            <Link to="/#services" className="iad-btn-line">Voir nos autres services</Link>
          </div>
        </div>
      </header>

      {/* Offer — brain map */}
      <section className="iad-section iad-offer" id="offre">
        <div className="iad-head fade-up">
          <span className="iad-label">Notre offre</span>
          <h2>Ce que nous faisons</h2>
          <p>Nous couvrons toute la chaîne, de la collecte de la donnée à la mise en production de modèles d&apos;IA.</p>
        </div>

        <div className="iad-brain-map fade-up">
          <div className="iad-brain-core">
            <span>IA</span>
            <div className="iad-core-ring r1" />
            <div className="iad-core-ring r2" />
          </div>
          {offerItems.map((item, i) => (
            <div
              key={item.label}
              className={`iad-brain-node n${i + 1} ${activeNode === i ? 'active' : ''}`}
              style={{ '--n-i': i }}
              onMouseEnter={() => setActiveNode(i)}
            >
              <span className="iad-node-icon">{item.icon}</span>
              <span className="iad-node-label">{item.label}</span>
              <span className="iad-node-check">✓</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits — spectrum cards */}
      <section className="iad-section iad-benefits">
        <div className="iad-head fade-up">
          <span className="iad-label">Pourquoi GivnexTech</span>
          <h2>Bénéfices clés</h2>
        </div>

        <div className="iad-spectrum">
          {benefits.map((b, i) => (
            <article
              key={b.num}
              className="iad-spectrum-card fade-up"
              style={{ transitionDelay: `${i * 80}ms`, '--card-hue': `${195 + i * 12}` }}
            >
              <div className="iad-spectrum-top">
                <span className="iad-spectrum-num">{b.num}</span>
                <span className="iad-spectrum-pulse">{b.pulse}</span>
              </div>
              <p>{b.title}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Methodology — ascending arc */}
      <section className="iad-section iad-method">
        <div className="iad-head fade-up">
          <span className="iad-label">Méthodologie</span>
          <h2>Notre approche</h2>
        </div>

        <div className="iad-arc-track fade-up">
          <div className="iad-arc-line" />
          {methodologySteps.map((step, i) => (
            <div className="iad-arc-step" key={step.phase} style={{ '--arc-i': i }}>
              <div className="iad-arc-dot">{step.phase}</div>
              <div className="iad-arc-card">
                <span className="iad-arc-badge">{step.badge}</span>
                <p>{step.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="iad-section iad-cases">
        <div className="iad-head fade-up">
          <span className="iad-label">Sur le terrain</span>
          <h2>Cas d&apos;usage</h2>
        </div>

        <div className="iad-cases-row">
          {useCases.map((uc, i) => (
            <article
              key={uc.title}
              className={`iad-case-glass ${uc.gradient} fade-up`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="iad-case-tag">{uc.tag}</span>
              <h3>{uc.title}</h3>
              <p>{uc.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA — AI chat */}
      <PremiumServiceCTA 
        title="Prêt à exploiter le plein potentiel de l'IA ?" 
        subtitle="Parlez de vos enjeux Data & IA avec nos experts. Nous revenons vers vous sous 24 h avec une première lecture concrète." 
      />

      <footer className="iad-footer">
        <p>© {new Date().getFullYear()} GivenX Group. Tous droits réservés.</p>
      </footer>
      <ScrollToTop />
    </div>
  );
};

export default IADataPage;

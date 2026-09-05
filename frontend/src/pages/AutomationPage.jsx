import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoTech2 from '../assets/Givenx-Tech 2.png';
import heroImg from '../assets/collaboration.jpg';
import integrationCaseImg from '../assets/CRM.png';
import devCaseImg from '../assets/donboarding-RH.png';
import workflowCaseImg from '../assets/ITSM.png';
import PremiumServiceCTA from '../PremiumServiceCTA';
import ScrollToTop from '../ScrollToTop';
import './AutomationPage.css';

const offerItems = [
  { tag: 'SaaS', title: "Intégration de SaaS et d'ERP", desc: 'Connexion transparente entre vos outils (CRM, facturation, RH, support) pour une donnée unifiée.' },
  { tag: 'FLOW', title: 'Automatisation de workflows', desc: 'Scénarios complexes via n8n, Zapier, Make, ou développement custom.' },
  { tag: 'API', title: 'Connecteurs API & Sync', desc: "Interfaces de programmation et synchronisation de données en temps réel." },
  { tag: 'RPA', title: 'RPA', desc: 'Automatisation des processus métier répétitifs et à faible valeur ajoutée.' },
  { tag: 'iPaaS', title: "iPaaS d'entreprise", desc: "Plateformes d'intégration pour centraliser et gérer tous vos flux de données." },
];

const benefits = [
  { num: '01', title: "Jusqu'à 70 % de temps gagné", desc: 'Libérez vos collaborateurs des saisies chronophages.', metric: '-70%', label: 'Temps manuel' },
  { num: '02', title: 'Donnée synchronisée partout', desc: "Fini les silos — l'information est à jour en temps réel.", metric: '24/7', label: 'Sync live' },
  { num: '03', title: 'Erreurs de saisie réduites', desc: "Exactitude garantie, risques humains éliminés.", metric: '-95%', label: 'Erreurs' },
  { num: '04', title: 'Équipes à haute valeur', desc: "Focus sur l'innovation, la stratégie et l'expérience client.", metric: '3×', label: 'Productivité' },
  { num: '05', title: 'ROI en quelques mois', desc: 'Gains mesurables dès les premières semaines.', metric: '+340%', label: 'ROI' },
];

const methodologySteps = [
  { phase: '01', badge: 'Cartographie', title: "Inventaire de l'existant", desc: 'Analyse de vos processus, outils et flux. Identification des pertes de temps.' },
  { phase: '02', badge: 'Priorisation', title: 'Sélection à fort impact', desc: 'Classement par complexité et ROI. On commence par les Quick Wins.' },
  { phase: '03', badge: 'Mise en œuvre', title: 'Développement et tests', desc: 'Connecteurs, workflows et tests rigoureux avant bascule en production.' },
  { phase: '04', badge: 'Run', title: 'Monitoring et maintenance', desc: "Surveillance continue et extension du périmètre d'automatisation." },
];

const useCases = [
  { img: integrationCaseImg, badge: 'CRM → Finance', title: 'Synchro CRM / Facturation', desc: "Devis et factures créés automatiquement dès qu'une opportunité est gagnée." },
  { img: devCaseImg, badge: 'RH → IT', title: 'Onboarding RH', desc: 'Provisioning des comptes et envoi des documents dès la signature.' },
  { img: workflowCaseImg, badge: 'Support → ITSM', title: 'Support client', desc: "Triage IA, routage agent et création d'incidents synchronisée." },
];

const flowLogs = [
  { status: 'OK', msg: 'CRM → ERP — 1 247 records synced' },
  { status: 'RUN', msg: 'Webhook Stripe → Facturation' },
  { status: 'OK', msg: 'n8n workflow #42 completed' },
];

const AutomationPage = () => {
  const [activeOffer, setActiveOffer] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activePhase, setActivePhase] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

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
    document.querySelectorAll('.atm-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveOffer((p) => (p + 1) % offerItems.length), 3500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveBenefit((p) => (p + 1) % benefits.length), 4500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setLogIndex((p) => (p + 1) % flowLogs.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="atm-page">
      <div className="atm-bg-grid" aria-hidden="true" />

      <nav className="atm-nav atm-reveal">
        <Link to="/" className="atm-logo">
          <img src={logoTech2} alt="GivenX Tech" />
        </Link>
        <div className="atm-nav-end">
          <Link to="/" className="atm-back">← Accueil</Link>
          <Link to="/contact" className="atm-nav-cta">Demander une démo</Link>
        </div>
      </nav>

      {/* Hero — 1 image + widget pro */}
      <header className="atm-hero">
        <div className="atm-hero-copy atm-reveal">
          <span className="atm-eyebrow">Automatisation & Intégration</span>
          <h1 className="atm-hero-title">
            Connectez vos systèmes,
            <span className="atm-accent"> libérez vos équipes.</span>
          </h1>
          <p className="atm-hero-lead">
            Vos outils ne se parlent pas et vos équipes perdent du temps sur des tâches manuelles ? Nous connectons vos systèmes et automatisons vos workflows.
          </p>
          <div className="atm-hero-actions">
            <Link to="/contact" className="atm-btn-primary">Discuter de votre projet</Link>
            <a href="#offre" className="atm-btn-outline">Découvrir l&apos;offre</a>
          </div>
          <div className="atm-hero-kpis">
            <div className="atm-kpi"><strong>70%</strong><span>Temps gagné</span></div>
            <div className="atm-kpi-sep" />
            <div className="atm-kpi"><strong>24h</strong><span>Première réponse</span></div>
            <div className="atm-kpi-sep" />
            <div className="atm-kpi"><strong>5+</strong><span>Outils connectés</span></div>
          </div>
        </div>

        <div className="atm-hero-visual atm-reveal">
          <div className="atm-hero-img-wrap">
            <img src={heroImg} alt="Équipes en collaboration" />
            <div className="atm-hero-img-fade" />
          </div>
          <div className="atm-flow-widget">
            <div className="atm-widget-header">
              <span className="atm-widget-dot" />
              Workflow live
            </div>
            <div className="atm-widget-nodes">
              <span>CRM</span>
              <span className="atm-widget-arrow">→</span>
              <span className="atm-widget-hub">HUB</span>
              <span className="atm-widget-arrow">→</span>
              <span>ERP</span>
            </div>
            <div className="atm-widget-logs">
              {flowLogs.map((log, i) => (
                <div key={log.msg} className={`atm-log-line ${i === logIndex ? 'active' : ''}`}>
                  <span className={`atm-log-status s-${log.status.toLowerCase()}`}>[{log.status}]</span>
                  {log.msg}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Tools strip — no images */}
      <div className="atm-tools atm-reveal">
        {['n8n', 'Zapier', 'Make', 'API REST', 'Webhooks', 'iPaaS', 'RPA'].map((t) => (
          <span key={t} className="atm-tool-chip">{t}</span>
        ))}
      </div>

      {/* Offer — layers (fix grille) */}
      <section className="atm-section atm-offer" id="offre">
        <div className="atm-section-head atm-reveal">
          <span className="atm-eyebrow">Notre offre</span>
          <h2>Ce que nous faisons</h2>
          <p>Nous identifions les processus à fort potentiel d&apos;automatisation et les industrialisons avec les bons outils.</p>
        </div>

        <div className="atm-offer-layout atm-reveal">
          <div className="atm-layers">
            {offerItems.map((item, i) => (
              <div
                key={item.title}
                className={`atm-layer ${activeOffer === i ? 'active' : ''}`}
                style={{ '--layer-depth': i }}
                onMouseEnter={() => setActiveOffer(i)}
                onFocus={() => setActiveOffer(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveOffer(i); }}
              >
                <div className="atm-layer-bar">
                  <span className="atm-layer-num">L{i + 1}</span>
                  <div className="atm-layer-fill" />
                </div>
                <div className="atm-layer-content">
                  <span className="atm-layer-check">✓</span>
                  <div>
                    <span className="atm-layer-tag">{item.tag}</span>
                    <span className="atm-layer-title">{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="atm-layer-detail">
            <span className="atm-layer-detail-tag">{offerItems[activeOffer].tag}</span>
            <h3>{offerItems[activeOffer].title}</h3>
            <p>{offerItems[activeOffer].desc}</p>
          </div>
        </div>
      </section>

      {/* Benefits — bento métriques */}
      <section className="atm-section atm-benefits">
        <div className="atm-section-head atm-reveal">
          <span className="atm-eyebrow">Pourquoi GivnexTech</span>
          <h2>Bénéfices mesurables</h2>
          <p>Des résultats concrets pour vos équipes et votre rentabilité.</p>
        </div>

        <div className="atm-bento atm-reveal">
          {benefits.map((b, i) => (
            <button
              key={b.num}
              type="button"
              className={`atm-bento-card ${activeBenefit === i ? 'active' : ''} ${i === 4 ? 'wide' : ''}`}
              onClick={() => setActiveBenefit(i)}
            >
              <span className="atm-bento-num">{b.num}</span>
              <span className="atm-bento-metric">{b.metric}</span>
              <strong>{b.title}</strong>
              <p>{b.desc}</p>
              <span className="atm-bento-label">{b.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Methodology — pipeline vertical */}
      <section className="atm-section atm-method">
        <div className="atm-section-head atm-reveal">
          <span className="atm-eyebrow">Méthodologie</span>
          <h2>Notre approche en 4 étapes</h2>
        </div>

        <div className="atm-pipeline atm-reveal">
          {methodologySteps.map((step, i) => (
            <div
              key={step.phase}
              className={`atm-pipe-step ${activePhase === i ? 'active' : ''} ${activePhase > i ? 'done' : ''}`}
              onMouseEnter={() => setActivePhase(i)}
              onFocus={() => setActivePhase(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActivePhase(i); }}
            >
              <div className="atm-pipe-track">
                <span className="atm-pipe-dot">{step.phase}</span>
                {i < methodologySteps.length - 1 && <span className="atm-pipe-line" />}
              </div>
              <div className="atm-pipe-body">
                <span className="atm-pipe-badge">{step.badge}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases — seule section visuelle riche */}
      <section className="atm-section atm-cases">
        <div className="atm-section-head atm-reveal">
          <span className="atm-eyebrow">Cas d&apos;usage</span>
          <h2>Sur le terrain</h2>
          <p>Des processus concrets que nous automatisons au quotidien.</p>
        </div>

        <div className="atm-cases-grid">
          {useCases.map((uc, i) => (
            <article key={uc.title} className="atm-case-card atm-reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="atm-case-img">
                <img src={uc.img} alt={uc.title} />
                <div className="atm-case-overlay" />
              </div>
              <div className="atm-case-body">
                <span className="atm-case-badge">{uc.badge}</span>
                <h3>{uc.title}</h3>
                <p>{uc.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA — pro, sans image */}
      <PremiumServiceCTA
        title="Transformez vos processus manuels en workflows fluides."
        subtitle="Nous revenons vers vous sous 24 h avec une première lecture concrète de votre potentiel d'automatisation."
      />

      <footer className="atm-footer">
        <p>© {new Date().getFullYear()} GivenX Group. Tous droits réservés.</p>
      </footer>
      <ScrollToTop />
    </div>
  );
};

export default AutomationPage;
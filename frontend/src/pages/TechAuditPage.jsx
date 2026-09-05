import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoTech2 from '../assets/Givenx-Tech 2.png';
import auditBg from '../assets/audit.jfif';
import devBg from '../assets/dev.jfif';
import probBg from '../assets/prob.jfif';
import strategieBg from '../assets/strategie.jfif';
import supportBg from '../assets/support.jfif';
import auditCaseImg from '../assets/Scale-up SaaS.jpg';
import legacyCaseImg from '../assets/ETI-PME.png';
import estimationCaseImg from '../assets/Direction Métier.png';
import phase1Img from '../assets/PHASE1.png';
import diagnosticImg from '../assets/Diagnostic.png';
import estimationImg from '../assets/estimation.jpg';
import pilotageImg from '../assets/Pilotage.png';
import PremiumServiceCTA from '../PremiumServiceCTA';
import ScrollToTop from '../ScrollToTop';
import './TechAuditPage.css';

const offerItems = [
  { img: auditBg, tag: 'INFRA', title: "Audit d'infrastructure", desc: "Analyse complète de votre architecture cloud, on-premise ou hybride pour optimiser les performances et maîtriser les coûts." },
  { img: devBg, tag: 'CODE', title: 'Revue de code & architecture', desc: "Évaluation de la qualité de vos bases de code et choix d'architecture logicielle pour assurer scalabilité, sécurité et maintenabilité." },
  { img: probBg, tag: 'DETTE', title: 'Évaluation de la dette technique', desc: 'Cartographie et chiffrage des risques technologiques pour éviter les pannes imprévues et libérer la productivité de vos développeurs.' },
  { img: strategieBg, tag: 'ROADMAP', title: 'Feuille de route à 6/12/24 mois', desc: 'Planification stratégique chiffrée, priorisée et réaliste alignant les projets techniques sur vos objectifs commerciaux majeurs.' },
  { img: supportBg, tag: 'CTO', title: 'Accompagnement CTO à temps partagé', desc: "Disposez de l'expertise d'un directeur technique chevronné sur une base flexible pour valider vos choix et guider vos équipes." },
];

const benefits = [
  { num: '01', title: 'Vision Objective & Indépendante', desc: 'Un regard externe neutre sur vos technologies et pratiques, sans influence interne ni biais partisan.', metric: '360°', label: 'Couverture' },
  { num: '02', title: 'Investissements Priorisés', desc: 'Éliminez le gaspillage technologique et investissez dans les projets qui créent le plus de valeur métier.', metric: '80%', label: 'ROI cible' },
  { num: '03', title: 'Réduction des Incidents', desc: "Anticipez les pannes système et sécurisez vos applications avant qu'elles n'affectent vos clients.", metric: '-65%', label: 'Incidents' },
  { num: '04', title: 'Alignement Tech-Business', desc: 'Assurez-vous que chaque ligne de code et chaque serveur servent vos objectifs de croissance.', metric: 'Sync', label: 'Tech ↔ Métier' },
  { num: '05', title: 'Décisions Stratégiques Rapides', desc: 'Gagnez en réactivité grâce à des rapports clairs, compréhensibles par les équipes techniques et la direction.', metric: '5j', label: 'Livraison' },
];

const methodologySteps = [
  { phase: '01', badge: 'Découverte', title: 'Découverte & Immersion', desc: 'Entretiens clés avec vos équipes, collecte des métriques système et revue des accès à vos environnements.', img: phase1Img },
  { phase: '02', badge: 'Diagnostic', title: 'Diagnostic Approfondi', desc: "Analyse technique détaillée, étude de la qualité d'architecture, identification des goulets d'étranglement.", img: diagnosticImg },
  { phase: '03', badge: 'Roadmap', title: 'Feuille de Route Chiffrée', desc: 'Élaboration de préconisations priorisées, estimations budgétaires et planification calendaire.', img: estimationImg },
  { phase: '04', badge: 'Pilotage', title: 'Pilotage & Accompagnement', desc: "Points de suivi réguliers, support à l'exécution et coaching technique pour assurer le succès de la transition.", img: pilotageImg },
];

const useCases = [
  { img: auditCaseImg, badge: 'Scale-up SaaS', title: 'Audit pré-levée de fonds', desc: "Évaluation de la scalabilité de l'infrastructure logicielle et de la sécurité des données avant due diligence." },
  { img: legacyCaseImg, badge: 'ETI / PME', title: 'Modernisation de SI Legacy', desc: "Analyse d'architectures vieillissantes et définition d'une trajectoire réaliste de transition cloud." },
  { img: estimationCaseImg, badge: 'Direction Métier', title: 'Second avis stratégique', desc: 'Expertise neutre et contradictoire sur un projet de refonte majeur proposé par un prestataire externe.' },
];

const scanLogs = [
  { status: 'OK', msg: 'Architecture cloud — analysée' },
  { status: 'WARN', msg: 'Dette technique — niveau moyen' },
  { status: 'OK', msg: 'Sécurité applicative — conforme' },
  { status: 'INFO', msg: 'Roadmap Q1-Q4 — en cours' },
  { status: 'OK', msg: 'Scalabilité DB — validée' },
];

const morphWords = ['diagnostic', 'stratégie', 'roadmap', 'architecture', 'pilotage'];

const TechAuditPage = () => {
  const [scanAngle, setScanAngle] = useState(0);
  const [activeOffer, setActiveOffer] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activePhase, setActivePhase] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [scoreVisible, setScoreVisible] = useState(false);

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

    document.querySelectorAll('.ta-reveal').forEach((el) => observer.observe(el));

    const ctaSection = document.querySelector('.ta-score-ring');
    if (ctaSection) {
      const scoreObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setScoreVisible(true);
          scoreObserver.disconnect();
        }
      }, { threshold: 0.3 });
      scoreObserver.observe(ctaSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scanTimer = setInterval(() => setScanAngle((p) => (p + 2) % 360), 40);
    return () => clearInterval(scanTimer);
  }, []);

  useEffect(() => {
    const offerTimer = setInterval(() => setActiveOffer((p) => (p + 1) % offerItems.length), 4000);
    return () => clearInterval(offerTimer);
  }, []);

  useEffect(() => {
    const benefitTimer = setInterval(() => setActiveBenefit((p) => (p + 1) % benefits.length), 4500);
    return () => clearInterval(benefitTimer);
  }, []);

  useEffect(() => {
    const logTimer = setInterval(() => setLogIndex((p) => (p + 1) % scanLogs.length), 2800);
    return () => clearInterval(logTimer);
  }, []);

  useEffect(() => {
    const wordTimer = setInterval(() => setWordIndex((p) => (p + 1) % morphWords.length), 2600);
    return () => clearInterval(wordTimer);
  }, []);

  useEffect(() => {
    const target = morphWords[wordIndex];
    let i = 0;
    setTypedText('');
    const typeTimer = setInterval(() => {
      i += 1;
      setTypedText(target.slice(0, i));
      if (i >= target.length) clearInterval(typeTimer);
    }, 70);
    return () => clearInterval(typeTimer);
  }, [wordIndex]);

  return (
    <div className="ta-page">
      <div className="ta-blueprint-bg" aria-hidden="true" />
      <div className="ta-grain" aria-hidden="true" />
      <div className="ta-orb ta-orb-blue" aria-hidden="true" />
      <div className="ta-orb ta-orb-purple" aria-hidden="true" />

      <nav className="ta-nav ta-reveal">
        <Link to="/" className="ta-logo">
          <img src={logoTech2} alt="GivenX Tech" />
        </Link>
        <div className="ta-nav-end">
          <Link to="/" className="ta-back">← Accueil</Link>
          <Link to="/contact" className="ta-nav-cta">Demander un audit</Link>
        </div>
      </nav>

      {/* Hero — contenu isolé pour éviter les sauts de layout */}
      <header className="ta-hero-shell">
        <div className="ta-hero">
          <div className="ta-hero-visual ta-reveal">
            <div className="ta-scanner">
              <div className="ta-scanner-ring sr1" />
              <div className="ta-scanner-ring sr2" />
              <div className="ta-scanner-ring sr3" />
              <div className="ta-scanner-beam" style={{ transform: `rotate(${scanAngle}deg)` }} />

              <svg className="ta-blueprint-svg" viewBox="0 0 300 300" aria-hidden="true">
                <rect x="60" y="80" width="80" height="60" rx="4" className="bp-box" />
                <rect x="160" y="80" width="80" height="60" rx="4" className="bp-box" />
                <rect x="110" y="170" width="80" height="50" rx="4" className="bp-box bp-core" />
                <line x1="100" y1="110" x2="160" y2="110" className="bp-line" />
                <line x1="200" y1="110" x2="240" y2="110" className="bp-line" />
                <line x1="140" y1="140" x2="150" y2="170" className="bp-line" />
                <line x1="200" y1="140" x2="150" y2="170" className="bp-line" />
                <circle cx="150" cy="195" r="6" className="bp-node" />
                <circle cx="100" cy="110" r="4" className="bp-dot" />
                <circle cx="200" cy="110" r="4" className="bp-dot warn" />
                <circle cx="150" cy="195" r="4" className="bp-dot" />
              </svg>

              <div className="ta-scanner-hub">
                <span className="ta-hub-score">87</span>
                <span className="ta-hub-label">Health</span>
              </div>
            </div>

            <div className="ta-log-feed">
              {scanLogs.map((log, i) => (
                <div key={log.msg} className={`ta-log-row ${i === logIndex ? 'active' : ''} status-${log.status.toLowerCase()}`}>
                  <span className="ta-log-tag">[{log.status}]</span>
                  {log.msg}
                </div>
              ))}
            </div>
          </div>

          <div className="ta-hero-copy ta-reveal" style={{ transitionDelay: '120ms' }}>
            <div className="ta-hero-tag">
              <span className="ta-tag-pulse" />
              CONSEIL STRATÉGIQUE & DIAGNOSTIC
            </div>
            <div className="ta-title-block">
              <h1 className="ta-title">
                Vos systèmes ralentissent vos équipes ?
                <br />
                Optimisez votre{' '}
                <span className="ta-morph-wrap">
                  <span className="ta-morph">
                    {typedText}
                    <span className="ta-cursor">|</span>
                  </span>
                  <span className="ta-morph-ghost" aria-hidden="true">architecture</span>
                </span>
              </h1>
            </div>
            <p className="ta-lead">
              GivnexTech analyse votre existant, identifie les goulots d&apos;étranglement et vous remet une feuille de route claire, priorisée et chiffrée.
            </p>
            <div className="ta-hero-btns">
              <Link to="/contact" className="ta-btn-solid">Planifier un diagnostic</Link>
              <a href="#offre" className="ta-btn-ghost">Découvrir l&apos;offre</a>
            </div>
            <div className="ta-hero-stats">
              <div className="ta-stat"><strong>5j</strong><span>Livraison audit</span></div>
              <div className="ta-stat-div" />
              <div className="ta-stat"><strong>100%</strong><span>Confidentiel</span></div>
              <div className="ta-stat-div" />
              <div className="ta-stat"><strong>24h</strong><span>Première réponse</span></div>
            </div>
          </div>
        </div>
      </header>

      {/* Offer — spotlight carousel */}
      <section className="ta-section ta-offer" id="offre">
        <div className="ta-head ta-reveal">
          <span className="ta-eyebrow">Ce que nous faisons</span>
          <h2>Notre offre d&apos;accompagnement</h2>
          <p>Nous évaluons votre infrastructure, vos applications et vos pratiques d&apos;ingénierie pour vous livrer un diagnostic précis et un plan d&apos;action concret.</p>
        </div>

        <div className="ta-offer-stage ta-reveal">
          <div className="ta-offer-visual">
            {offerItems.map((item, i) => (
              <div key={item.title} className={`ta-offer-img ${activeOffer === i ? 'active' : ''}`}>
                <img src={item.img} alt={item.title} />
                <div className="ta-offer-img-overlay" />
              </div>
            ))}
            <div className="ta-offer-frame" />
          </div>

          <div className="ta-offer-panel">
            {offerItems.map((item, i) => (
              <button
                key={item.title}
                type="button"
                className={`ta-offer-tab ${activeOffer === i ? 'active' : ''}`}
                onClick={() => setActiveOffer(i)}
              >
                <span className="ta-offer-tag">{item.tag}</span>
                <span className="ta-offer-tab-title">{item.title}</span>
                <span className="ta-offer-tab-bar" />
              </button>
            ))}
            <div className="ta-offer-detail">
              <h3>{offerItems[activeOffer].title}</h3>
              <p>{offerItems[activeOffer].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits — diagnostic dashboard */}
      <section className="ta-section ta-benefits">
        <div className="ta-benefits-layout">
          <div className="ta-head ta-reveal">
            <span className="ta-eyebrow">Pourquoi Givnex</span>
            <h2>Les bénéfices clés pour votre SI</h2>
            <p>Ne pilotez plus à l&apos;aveugle. Prenez des décisions fondées sur des analyses objectives et chiffrées.</p>
          </div>

          <div className="ta-dash-panel ta-reveal">
            <div className="ta-dash-header">
              <span>IMPACT SCORE</span>
              <span className="ta-dash-score">{72 + activeBenefit * 5}/100</span>
            </div>
            <div className="ta-dash-meter">
              <div className="ta-dash-fill" style={{ width: `${72 + activeBenefit * 5}%` }} />
            </div>
            <div className="ta-dash-active">
              <span className="ta-dash-metric">{benefits[activeBenefit].metric}</span>
              <div>
                <span className="ta-dash-metric-label">{benefits[activeBenefit].label}</span>
                <p>{benefits[activeBenefit].title}</p>
              </div>
            </div>
          </div>

          <div className="ta-benefit-tabs ta-reveal">
            {benefits.map((b, i) => (
              <button
                key={b.num}
                type="button"
                className={`ta-benefit-tab ${activeBenefit === i ? 'active' : ''}`}
                onClick={() => setActiveBenefit(i)}
              >
                <span className="ta-ben-num">{b.num}</span>
                <span className="ta-ben-title">{b.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology — phase track */}
      <section className="ta-section ta-method">
        <div className="ta-head ta-reveal">
          <span className="ta-eyebrow">Notre approche</span>
          <h2>Une méthodologie structurée</h2>
          <p>Un processus en 4 étapes pour aller de l&apos;état des lieux au plan d&apos;action opérationnel.</p>
        </div>

        <div className="ta-phase-track ta-reveal">
          <div className="ta-phase-line">
            <div className="ta-phase-progress" style={{ width: `${(activePhase / (methodologySteps.length - 1)) * 100}%` }} />
          </div>
          {methodologySteps.map((step, i) => (
            <button
              key={step.phase}
              type="button"
              className={`ta-phase-node ${activePhase === i ? 'active' : ''} ${activePhase > i ? 'done' : ''}`}
              onClick={() => setActivePhase(i)}
            >
              <span className="ta-phase-num">{step.phase}</span>
              <span className="ta-phase-badge">{step.badge}</span>
            </button>
          ))}
        </div>

        <div className="ta-phase-showcase ta-reveal">
          <div className="ta-phase-media">
            <img src={methodologySteps[activePhase].img} alt={methodologySteps[activePhase].title} />
            <div className="ta-phase-media-glow" />
          </div>
          <div className="ta-phase-content">
            <span className="ta-phase-label">Phase {methodologySteps[activePhase].phase}</span>
            <h3>{methodologySteps[activePhase].title}</h3>
            <p>{methodologySteps[activePhase].desc}</p>
            <div className="ta-phase-nav">
              <button type="button" className="ta-phase-arrow" disabled={activePhase === 0} onClick={() => setActivePhase((p) => p - 1)}>←</button>
              <span>{activePhase + 1} / {methodologySteps.length}</span>
              <button type="button" className="ta-phase-arrow" disabled={activePhase === methodologySteps.length - 1} onClick={() => setActivePhase((p) => p + 1)}>→</button>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases — tilt cards */}
      <section className="ta-section ta-cases">
        <div className="ta-head ta-reveal">
          <span className="ta-eyebrow">Sur le terrain</span>
          <h2>Nos cas d&apos;usage types</h2>
          <p>Des exemples d&apos;interventions fréquentes menées par nos experts-auditeurs.</p>
        </div>

        <div className="ta-cases-grid">
          {useCases.map((uc, i) => (
            <article key={uc.title} className="ta-case-card ta-reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="ta-case-img">
                <img src={uc.img} alt={uc.title} />
              </div>
              <div className="ta-case-body">
                <span className="ta-case-badge">{uc.badge}</span>
                <h3>{uc.title}</h3>
                <p>{uc.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA — premium */}
      <PremiumServiceCTA
        title="Transformez vos freins techniques en avantage compétitif."
        subtitle="Nos experts auditent votre SI de fond en comble et vous remettent un plan d'action chiffré, priorisé et actionnable sous 5 jours."
      />

      <footer className="ta-footer">
        <p>© {new Date().getFullYear()} GivenX Group. Tous droits réservés.</p>
      </footer>
      <ScrollToTop />
    </div>
  );
};

export default TechAuditPage;
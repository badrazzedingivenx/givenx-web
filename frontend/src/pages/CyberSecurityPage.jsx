import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoTech2 from '../assets/Givenx-Tech 2.png';
import PremiumServiceCTA from '../PremiumServiceCTA';
import ScrollToTop from '../ScrollToTop';
import './CyberSecurityPage.css';

const offerItems = [
  "Tests d'intrusion applicatifs et infrastructure",
  'Audit de sécurité du cloud et du code',
  'Mise en conformité ISO 27001, SOC 2, RGPD',
  'Durcissement des systèmes et SecOps',
  'Plan de réponse à incident et gestion de crise',
];

const benefits = [
  { num: '01', title: "Une réduction concrète de votre surface d'attaque", level: 'LOW' },
  { num: '02', title: 'Une visibilité claire sur vos risques cyber', level: 'MAP' },
  { num: '03', title: 'Un cadre de conformité aligné aux standards du marché', level: 'SOC2' },
  { num: '04', title: 'Une montée en compétence de vos équipes IT', level: '+80%' },
  { num: '05', title: 'Une confiance renforcée auprès de vos clients et partenaires', level: 'TRUST' },
];

const methodologySteps = [
  { phase: '1', badge: 'État des lieux', title: 'Cartographie des actifs, des risques et du niveau de maturité.' },
  { phase: '2', badge: 'Audit & pentest', title: 'Tests offensifs et revue technique des systèmes critiques.' },
  { phase: '3', badge: 'Remédiation', title: "Plan d'action priorisé et accompagnement à la correction." },
  { phase: '4', badge: 'Suivi continu', title: 'Veille, monitoring et exercices réguliers.' },
];

const useCases = [
  {
    title: 'Audit avant certification',
    desc: 'Préparation à la certification ISO 27001 en moins de 9 mois.',
    badge: 'ISO 27001',
    severity: 'info',
  },
  {
    title: 'Pentest applicatif',
    desc: "Test d'intrusion complet d'une plateforme SaaS avant son lancement.",
    badge: 'PENTEST',
    severity: 'warn',
  },
  {
    title: 'Réponse à incident',
    desc: "Gestion d'une intrusion et reconstruction d'un environnement sain.",
    badge: 'IR',
    severity: 'alert',
  },
];

const scanAlerts = [
  { status: 'OK', msg: 'Firewall rules — hardened' },
  { status: 'OK', msg: 'TLS certificates — valid' },
  { status: 'WARN', msg: '2 endpoints — patch pending' },
  { status: 'OK', msg: 'RGPD controls — compliant' },
];

const CyberSecurityPage = () => {
  const [scanAngle, setScanAngle] = useState(0);
  const [activeLayer, setActiveLayer] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [alertIndex, setAlertIndex] = useState(0);

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

    document.querySelectorAll('.cys-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scanTimer = setInterval(() => {
      setScanAngle((prev) => (prev + 3) % 360);
    }, 50);
    return () => clearInterval(scanTimer);
  }, []);

  useEffect(() => {
    const layerTimer = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % offerItems.length);
    }, 3200);
    return () => clearInterval(layerTimer);
  }, []);

  useEffect(() => {
    const benefitTimer = setInterval(() => {
      setActiveBenefit((prev) => (prev + 1) % benefits.length);
    }, 4000);
    return () => clearInterval(benefitTimer);
  }, []);

  useEffect(() => {
    const alertTimer = setInterval(() => {
      setAlertIndex((prev) => (prev + 1) % scanAlerts.length);
    }, 2500);
    return () => clearInterval(alertTimer);
  }, []);

  return (
    <div className="cys-page">
      <div className="cys-hex-bg" aria-hidden="true" />
      <div className="cys-vignette" aria-hidden="true" />

      <nav className="cys-nav cys-reveal">
        <Link to="/" className="cys-logo">
          <img src={logoTech2} alt="GivenX Tech" />
        </Link>
        <div className="cys-nav-end">
          <Link to="/" className="cys-back">← Accueil</Link>
          <Link to="/contact" className="cys-nav-cta">Discuter de votre projet</Link>
        </div>
      </nav>

      {/* Hero — fortress radar */}
      <header className="cys-hero">
        <div className="cys-hero-visual cys-reveal">
          <div className="cys-radar">
            <div className="cys-radar-ring r1" />
            <div className="cys-radar-ring r2" />
            <div className="cys-radar-ring r3" />
            <div className="cys-radar-sweep" style={{ transform: `rotate(${scanAngle}deg)` }} />
            <div className="cys-shield">
              <svg viewBox="0 0 80 96" fill="none">
                <path
                  d="M40 4L8 18v28c0 22 14 42 32 46 18-4 32-24 32-46V18L40 4z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="rgba(26,216,232,0.06)"
                />
                <path d="M28 48l8 8 16-16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="cys-blip b1" />
            <div className="cys-blip b2" />
            <div className="cys-blip b3" />
          </div>

          <div className="cys-alert-feed">
            {scanAlerts.map((a, i) => (
              <div key={a.msg} className={`cys-alert-row ${i === alertIndex ? 'active' : ''} status-${a.status.toLowerCase()}`}>
                <span className="cys-alert-status">[{a.status}]</span>
                {a.msg}
              </div>
            ))}
          </div>
        </div>

        <div className="cys-hero-text cys-reveal" style={{ transitionDelay: '100ms' }}>
          <div className="cys-secure-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            CYBERSÉCURITÉ & AUDIT
          </div>
          <h1 className="cys-title">
            Protégez vos <span className="cys-highlight">données</span>,
            <br />
            sécurisez votre <span className="cys-highlight-alt">activité</span>.
          </h1>
          <p className="cys-lead">
            Les cybermenaces évoluent plus vite que jamais et la conformité devient incontournable. Nous évaluons votre posture de sécurité, comblons les failles et vous aidons à atteindre vos objectifs de conformité (ISO 27001, SOC 2, RGPD).
          </p>
          <div className="cys-hero-btns">
            <Link to="/contact" className="cys-btn-solid">Discuter de votre projet</Link>
            <Link to="/#services" className="cys-btn-outline">Voir nos autres services</Link>
          </div>

          <div className="cys-certs">
            {['ISO 27001', 'SOC 2', 'RGPD'].map((cert) => (
              <span key={cert} className="cys-cert-badge">{cert}</span>
            ))}
          </div>
        </div>
      </header>

      {/* Offer — defense layers */}
      <section className="cys-section cys-offer" id="offre">
        <div className="cys-head cys-reveal">
          <span className="cys-eyebrow">Notre offre</span>
          <h2>Ce que nous faisons</h2>
          <p>Nous combinons audit offensif, durcissement et accompagnement à la conformité pour renforcer votre sécurité globale.</p>
        </div>

        <div className="cys-layers cys-reveal">
          {offerItems.map((item, i) => (
            <div
              key={item}
              className={`cys-layer ${activeLayer === i ? 'active' : ''}`}
              style={{ '--layer-depth': i }}
              onMouseEnter={() => setActiveLayer(i)}
            >
              <div className="cys-layer-bar">
                <span className="cys-layer-num">L{i + 1}</span>
                <div className="cys-layer-fill" />
              </div>
              <div className="cys-layer-content">
                <span className="cys-check">✓</span>
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits — risk dashboard */}
      <section className="cys-section cys-benefits">
        <div className="cys-benefits-grid">
          <div className="cys-head cys-reveal">
            <span className="cys-eyebrow">Pourquoi GivnexTech</span>
            <h2>Bénéfices clés</h2>
          </div>

          <div className="cys-risk-panel cys-reveal">
            <div className="cys-risk-header">
              <span>POSTURE SCORE</span>
              <span className="cys-risk-score">{85 + activeBenefit * 2}/100</span>
            </div>
            <div className="cys-risk-meter">
              <div className="cys-risk-fill" style={{ width: `${85 + activeBenefit * 2}%` }} />
            </div>
            <div className="cys-risk-active">
              <span className="cys-risk-level">{benefits[activeBenefit].level}</span>
              <p>{benefits[activeBenefit].title}</p>
            </div>
          </div>

          <div className="cys-benefit-list cys-reveal">
            {benefits.map((b, i) => (
              <button
                key={b.num}
                type="button"
                className={`cys-benefit-item ${activeBenefit === i ? 'active' : ''}`}
                onClick={() => setActiveBenefit(i)}
              >
                <span className="cys-ben-num">{b.num}</span>
                <span className="cys-ben-text">{b.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology — fortified gates */}
      <section className="cys-section cys-method">
        <div className="cys-head cys-reveal">
          <span className="cys-eyebrow">Méthodologie</span>
          <h2>Notre approche</h2>
        </div>

        <div className="cys-gates cys-reveal">
          {methodologySteps.map((step, i) => (
            <div className="cys-gate" key={step.phase} style={{ '--gate-i': i }}>
              <div className="cys-gate-arch">
                <span className="cys-gate-num">{step.phase}</span>
              </div>
              <div className="cys-gate-body">
                <span className="cys-gate-badge">{step.badge}</span>
                <p>{step.title}</p>
              </div>
              {i < methodologySteps.length - 1 && <div className="cys-gate-wall" />}
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="cys-section cys-cases">
        <div className="cys-head cys-reveal">
          <span className="cys-eyebrow">Sur le terrain</span>
          <h2>Cas d&apos;usage</h2>
        </div>

        <div className="cys-cases-grid">
          {useCases.map((uc, i) => (
            <article
              key={uc.title}
              className={`cys-case severity-${uc.severity} cys-reveal`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="cys-case-top">
                <span className="cys-case-badge">{uc.badge}</span>
                <span className={`cys-severity-dot ${uc.severity}`} />
              </div>
              <h3>{uc.title}</h3>
              <p>{uc.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA — encrypted channel */}
      <PremiumServiceCTA 
        title="Prêt à sécuriser votre entreprise ?" 
        subtitle="Parlons de vos enjeux. Nous revenons vers vous sous 24 h avec une première lecture concrète." 
      />

      <footer className="cys-footer">
        <p>© {new Date().getFullYear()} GivenX Group. Tous droits réservés.</p>
      </footer>
      <ScrollToTop />
    </div>
  );
};

export default CyberSecurityPage;

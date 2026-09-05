import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoTech2 from '../assets/Givenx-Tech 2.png';
import PremiumServiceCTA from '../PremiumServiceCTA';
import ScrollToTop from '../ScrollToTop';
import './CloudDevOpsPage.css';

const offerItems = [
  { tag: 'MULTI-CLOUD', label: 'Architecture cloud AWS, GCP et Azure' },
  { tag: 'K8S', label: 'Conteneurs et orchestration (Docker, Kubernetes)' },
  { tag: 'CI/CD', label: 'Pipelines CI/CD et déploiement continu' },
  { tag: 'IaC', label: 'Infrastructure-as-Code (Terraform, Pulumi)' },
  { tag: 'OBS', label: 'Observabilité, monitoring et FinOps' },
];

const benefits = [
  { num: '01', title: 'Des déploiements plusieurs fois par jour, en toute sécurité', metric: '12× / jour' },
  { num: '02', title: 'Une disponibilité élevée et une résilience accrue', metric: '99.9%' },
  { num: '03', title: 'Une maîtrise des coûts cloud grâce au FinOps', metric: '-40%' },
  { num: '04', title: 'Une équipe développeur plus autonome et productive', metric: '+60%' },
  { num: '05', title: 'Une conformité et une sécurité intégrées dès le départ', metric: 'SOC2' },
];

const methodologySteps = [
  { phase: '01', badge: 'Évaluation', title: 'Audit de votre stack actuelle et de votre maturité DevOps.' },
  { phase: '02', badge: 'Architecture cible', title: "Design d'une plateforme cloud adaptée à vos besoins." },
  { phase: '03', badge: 'Industrialisation', title: 'Mise en place des pipelines, du monitoring et de la sécurité.' },
  { phase: '04', badge: 'Transfert', title: 'Formation de vos équipes et passage en run.' },
];

const useCases = [
  {
    title: 'Migration cloud',
    desc: "Bascule d'un SI on-premise vers AWS avec downtime maîtrisé.",
    stat: '0 downtime',
    accent: 'cyan',
  },
  {
    title: 'Plateforme Kubernetes',
    desc: "Mise en place d'un socle K8s mutualisé pour 20+ équipes produit.",
    stat: '20+ teams',
    accent: 'blue',
  },
  {
    title: 'FinOps',
    desc: 'Réduction de 40 % des coûts cloud sans dégradation de performance.',
    stat: '-40% cost',
    accent: 'amber',
  },
];

const deployLogs = [
  '$ terraform plan -out=prod.tfplan',
  '✔ 47 resources to add, 0 to change',
  '$ kubectl apply -f k8s/production/',
  'deployment.apps/api rolled out successfully',
  '✔ health check passed — all pods running',
  '→ production live in 4m 12s',
];

const CloudDevOpsPage = () => {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [pipelineStep, setPipelineStep] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-in-view');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const logTimer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % deployLogs.length);
    }, 2800);
    return () => clearInterval(logTimer);
  }, []);

  useEffect(() => {
    const pipeTimer = setInterval(() => {
      setPipelineStep((prev) => (prev + 1) % 5);
    }, 2200);
    return () => clearInterval(pipeTimer);
  }, []);

  useEffect(() => {
    const benefitTimer = setInterval(() => {
      setActiveBenefit((prev) => (prev + 1) % benefits.length);
    }, 4000);
    return () => clearInterval(benefitTimer);
  }, []);

  return (
    <div className="cdx-page">
      <div className="cdx-grid-bg" aria-hidden="true" />
      <div className="cdx-scanline" aria-hidden="true" />

      <nav className="cdx-nav reveal">
        <Link to="/" className="cdx-logo">
          <img src={logoTech2} alt="GivenX Tech" />
        </Link>
        <div className="cdx-nav-right">
          <Link to="/" className="cdx-back">← Accueil</Link>
          <Link to="/contact" className="cdx-nav-cta">Discuter de votre projet</Link>
        </div>
      </nav>

      {/* Hero — mission control */}
      <header className="cdx-hero">
        <div className="cdx-hero-left reveal">
          <div className="cdx-status-bar">
            <span className="cdx-pulse-dot" />
            <span className="cdx-mono">SYS.STATUS: OPERATIONAL</span>
            <span className="cdx-mono cdx-dim">CLOUD & DEVOPS</span>
          </div>

          <h1 className="cdx-hero-title">
            <span className="cdx-line">Déployez</span>
            <span className="cdx-line cdx-accent">vite,</span>
            <span className="cdx-line">scalez</span>
            <span className="cdx-line cdx-outline">sereinement.</span>
          </h1>

          <p className="cdx-hero-desc">
            Mises en production lentes, coûts cloud qui s&apos;envolent ou pannes répétées ? Nous mettons en place les fondations cloud et les pratiques DevOps qui rendent vos livraisons rapides, fiables et maîtrisées.
          </p>

          <div className="cdx-hero-btns">
            <Link to="/contact" className="cdx-btn-primary">Discuter de votre projet</Link>
            <Link to="/#services" className="cdx-btn-ghost">Voir nos autres services</Link>
          </div>

          <div className="cdx-metrics-strip">
            <div className="cdx-metric">
              <span className="cdx-metric-val">4m</span>
              <span className="cdx-metric-lbl">deploy avg.</span>
            </div>
            <div className="cdx-metric">
              <span className="cdx-metric-val">99.9%</span>
              <span className="cdx-metric-lbl">uptime SLA</span>
            </div>
            <div className="cdx-metric">
              <span className="cdx-metric-val">-40%</span>
              <span className="cdx-metric-lbl">cloud costs</span>
            </div>
          </div>
        </div>

        <div className="cdx-hero-right reveal" style={{ transitionDelay: '150ms' }}>
          <div className="cdx-console">
            <div className="cdx-console-bar">
              <span className="cdx-dot red" />
              <span className="cdx-dot amber" />
              <span className="cdx-dot green" />
              <span className="cdx-console-title">givnextech-deploy — production</span>
            </div>
            <div className="cdx-console-body">
              <div className="cdx-pipeline-track">
                {['Build', 'Test', 'Scan', 'Deploy', 'Live'].map((step, i) => (
                  <div key={step} className={`cdx-pipe-step ${i <= pipelineStep ? 'done' : ''} ${i === pipelineStep ? 'active' : ''}`}>
                    <div className="cdx-pipe-node">{i + 1}</div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <div className="cdx-log-window">
                {deployLogs.map((log, i) => (
                  <div key={log} className={`cdx-log-line ${i === logIndex ? 'highlight' : ''} ${i < logIndex ? 'faded' : ''}`}>
                    <span className="cdx-log-prompt">{i === logIndex ? '▶' : ' '}</span>
                    {log}
                  </div>
                ))}
              </div>

              <div className="cdx-gauges">
                <div className="cdx-gauge">
                  <svg viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="32" className="cdx-gauge-bg" />
                    <circle cx="40" cy="40" r="32" className="cdx-gauge-fill cpu" style={{ strokeDashoffset: 80 }} />
                  </svg>
                  <span>CPU 24%</span>
                </div>
                <div className="cdx-gauge">
                  <svg viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="32" className="cdx-gauge-bg" />
                    <circle cx="40" cy="40" r="32" className="cdx-gauge-fill mem" style={{ strokeDashoffset: 120 }} />
                  </svg>
                  <span>MEM 62%</span>
                </div>
                <div className="cdx-gauge">
                  <svg viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="32" className="cdx-gauge-bg" />
                    <circle cx="40" cy="40" r="32" className="cdx-gauge-fill cost" style={{ strokeDashoffset: 50 }} />
                  </svg>
                  <span>COST ↓40%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cdx-orbit-ring" aria-hidden="true">
            <div className="cdx-orbit-item o1">AWS</div>
            <div className="cdx-orbit-item o2">GCP</div>
            <div className="cdx-orbit-item o3">Azure</div>
            <div className="cdx-orbit-item o4">K8s</div>
          </div>
        </div>
      </header>

      {/* Offer — stack layers */}
      <section className="cdx-section cdx-offer" id="offre">
        <div className="cdx-section-head reveal">
          <span className="cdx-eyebrow">// NOTRE OFFRE</span>
          <h2>Ce que nous faisons</h2>
          <p>Nous concevons, déployons et exploitons vos infrastructures cloud avec une approche infrastructure-as-code.</p>
        </div>

        <div className="cdx-stack">
          {offerItems.map((item, i) => (
            <div
              className="cdx-stack-layer reveal"
              key={item.label}
              style={{ transitionDelay: `${i * 100}ms`, '--layer-i': i }}
            >
              <span className="cdx-stack-tag">{item.tag}</span>
              <span className="cdx-stack-label">{item.label}</span>
              <span className="cdx-stack-check">✓</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits — interactive rail */}
      <section className="cdx-section cdx-benefits">
        <div className="cdx-benefits-layout">
          <div className="cdx-section-head reveal">
            <span className="cdx-eyebrow">// POURQUOI GIVNEXTECH</span>
            <h2>Bénéfices clés</h2>
          </div>

          <div className="cdx-benefit-rail reveal">
            <div className="cdx-rail-line" />
            {benefits.map((b, i) => (
              <button
                key={b.num}
                type="button"
                className={`cdx-rail-item ${activeBenefit === i ? 'active' : ''}`}
                onClick={() => setActiveBenefit(i)}
              >
                <span className="cdx-rail-num">{b.num}</span>
                <span className="cdx-rail-text">{b.title}</span>
              </button>
            ))}
          </div>

          <div className="cdx-benefit-spotlight reveal">
            <div className="cdx-spotlight-metric">{benefits[activeBenefit].metric}</div>
            <p className="cdx-spotlight-text">{benefits[activeBenefit].title}</p>
            <div className="cdx-spotlight-bar">
              <div className="cdx-spotlight-fill" style={{ width: `${((activeBenefit + 1) / benefits.length) * 100}%` }} />
            </div>
          </div>
        </div>
      </section>

      {/* Methodology — horizontal pipeline */}
      <section className="cdx-section cdx-method">
        <div className="cdx-section-head reveal">
          <span className="cdx-eyebrow">// MÉTHODOLOGIE</span>
          <h2>Notre approche</h2>
        </div>

        <div className="cdx-method-pipeline reveal">
          {methodologySteps.map((step, i) => (
            <div className="cdx-method-step" key={step.phase} style={{ '--step-i': i }}>
              <div className="cdx-method-node">
                <span>{step.phase}</span>
              </div>
              <div className="cdx-method-card">
                <span className="cdx-method-badge">{step.badge}</span>
                <p>{step.title}</p>
              </div>
              {i < methodologySteps.length - 1 && <div className="cdx-method-connector" />}
            </div>
          ))}
        </div>
      </section>

      {/* Use cases — tilt cards */}
      <section className="cdx-section cdx-cases">
        <div className="cdx-section-head reveal">
          <span className="cdx-eyebrow">// SUR LE TERRAIN</span>
          <h2>Cas d&apos;usage</h2>
        </div>

        <div className="cdx-cases-grid">
          {useCases.map((uc, i) => (
            <article
              className={`cdx-case-card accent-${uc.accent} reveal`}
              key={uc.title}
              style={{ transitionDelay: `${i * 120}ms`, '--card-tilt': `${(i - 1) * 3}deg` }}
            >
              <span className="cdx-case-stat">{uc.stat}</span>
              <h3>{uc.title}</h3>
              <p>{uc.desc}</p>
              <div className="cdx-case-glow" />
            </article>
          ))}
        </div>
      </section>

      {/* CTA — terminal prompt */}
      <PremiumServiceCTA 
        title="Prêt à passer à l'action ?" 
        subtitle="Parlons de vos enjeux. Nous revenons vers vous sous 24 h avec une première lecture concrète." 
      />

      <footer className="cdx-footer">
        <p>© {new Date().getFullYear()} GivenX Group. Tous droits réservés.</p>
      </footer>
      <ScrollToTop />
    </div>
  );
};

export default CloudDevOpsPage;

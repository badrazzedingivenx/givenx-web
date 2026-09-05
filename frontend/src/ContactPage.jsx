import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoTech2 from './assets/Givenx-Tech 2.png';
import expertImg from './assets/jeune-hispanique.png';
import ASCIIText from './ASCIIText';
import SplashCursor from './SplashCursor';
import ScrollToTop from './ScrollToTop';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    sector: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Animation states
  const [isAiVisible, setIsAiVisible] = React.useState(false);
  const [isHeroVisible, setIsHeroVisible] = React.useState(false);
  const [isFormVisible, setIsFormVisible] = React.useState(false);

  // Refs for animation
  const aiRef = React.useRef(null);
  const heroRef = React.useRef(null);
  const formRef = React.useRef(null);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    const observerOptions = { threshold: 0.1 };

    const aiObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsAiVisible(true);
    }, observerOptions);

    const heroObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsHeroVisible(true);
    }, observerOptions);

    const formObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsFormVisible(true);
    }, observerOptions);

    if (aiRef.current) aiObserver.observe(aiRef.current);
    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (formRef.current) formObserver.observe(formRef.current);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (aiRef.current) aiObserver.unobserve(aiRef.current);
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      if (formRef.current) formObserver.unobserve(formRef.current);
    };
  }, []);

  const getAsciiFontSize = () => {
    if (windowWidth < 480) return 4;
    if (windowWidth < 768) return 6;
    return 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="contact-page-wrapper">
      {/* Mini Navbar */}
      <nav className="contact-nav">
        <Link to="/" className="contact-nav-logo">
          <img src={logoTech2} alt="GivenX" />
        </Link>
        <Link to="/" className="back-home-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Retour à l'accueil
        </Link>
      </nav>

      {/* AI Innovation Section moved to top */}
      <section className="ai-innovation-section" ref={aiRef}>
        <div className={`ai-content-wrapper ${isAiVisible ? 'anim-slide-up' : ''}`}>
          <div className="ai-image-container">
            <img src={expertImg} alt="GivenX Expert" className="ai-floating-img" />
            <div className="ai-glow-orb"></div>
          </div>
          <div className="ai-text-block">
            <span className="ai-label">Powered by Innovation</span>
            <h2 className={`${isAiVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.1s' }}>L'IA au service de votre <span className="gradient-text">Transformation</span></h2>
            <p className={`${isAiVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>Chez GivenX, nous fusionnons créativité humaine et intelligence artificielle pour bâtir des solutions qui redéfinissent les standards de votre industrie.</p>
            <div className={`ai-stats-mini ${isAiVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.3s' }}>
              <div className="mini-stat">
                <strong>99%</strong>
                <span>Précision</span>
              </div>
              <div className="mini-stat">
                <strong>2x</strong>
                <span>Vitesse de Dev</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-hero" ref={heroRef}>
        <div className="contact-hero-glow"></div>
        <h1 className={`contact-title ${isHeroVisible ? 'anim-slide-up' : ''}`}>Démarrons votre <span className="text-dim">Projet</span></h1>
        <p className={`contact-subtitle ${isHeroVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.1s' }}>Remplissez le formulaire ci-dessous et notre équipe vous contactera sous 24h.</p>
      </div>

      <main className="contact-main" ref={formRef}>
        <div className="contact-grid">
          {/* Left: Form */}
          <div className={`contact-form-container ${isFormVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.1s' }}>
            {isSuccess ? (
              <div className="contact-success-msg">
                <div className="success-icon-box">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1AD8E8" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h2>Message envoyé !</h2>
                <p>Merci pour votre confiance. Un expert GivenX vous recontactera très prochainement.</p>
                <Link to="/" className="btn-back-link">Retourner sur le site</Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="premium-contact-form">
                <div className="form-section">
                  <h3 className="section-title">Informations de contact</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Nom complet</label>
                      <input 
                         type="text" 
                         placeholder="Votre nom" 
                         required 
                         value={formData.name}
                         onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email professionnel</label>
                      <input 
                        type="email" 
                        placeholder="nom@entreprise.com" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="form-row" style={{marginTop: '1.5rem'}}>
                    <div className="form-group">
                      <label>Nom de la société</label>
                      <input 
                        type="text" 
                        placeholder="Nom de votre entreprise" 
                        required 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label>Secteur</label>
                      <input 
                        type="text" 
                        placeholder="Ex: E-commerce, Finance, etc." 
                        required 
                        value={formData.sector}
                        onChange={(e) => setFormData({...formData, sector: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section" style={{marginTop: '2rem'}}>
                  <div className="form-group">
                    <label>Votre Message</label>
                    <textarea 
                      placeholder="Décrivez votre projet ou vos besoins en quelques mots..." 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      style={{minHeight: '150px'}}
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                  {!isSubmitting && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>}
                </button>
              </form>
            )}
          </div>

          {/* Right: Info Panel */}
          <div className={`contact-info-panel ${isFormVisible ? 'anim-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="info-card">
              <h4>Pourquoi nous choisir ?</h4>
              <ul className="info-list">
                <li>
                  <span className="info-icon">⚡</span>
                  <div>
                    <strong>Rapidité</strong>
                    <p>Premier prototype sous 7 jours.</p>
                  </div>
                </li>
                <li>
                  <span className="info-icon">🛡️</span>
                  <div>
                    <strong>Sécurité</strong>
                    <p>Audit complet inclus.</p>
                  </div>
                </li>
                <li>
                  <span className="info-icon">💎</span>
                  <div>
                    <strong>Qualité</strong>
                    <p>Design pixel-perfect.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="contact-social-footer">
              <p>Rejoignez la révolution digitale.</p>
              <div className="social-links">
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
            
              </div>
            </div>

            {/* Availability */}
            <div className="availability-card">
              <div className="availability-badge">
                <span className="pulse-dot"></span>
                En ligne maintenant
              </div>
              <p>Équipe disponible du <strong>Lundi au Vendredi (9h - 18h)</strong>.</p><br></br>
              <a href="https://wa.me/212608692108?text=Bonjour%20GivenX%20Tech,%20je%20souhaite%20avoir%20plus%20d'informations%20sur%20vos%20services." target="_blank" rel="noreferrer" className="whatsapp-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp
              </a>
            </div>

            {/* Map */}
            <div className="map-container">
              <iframe 
                title="Technopark Casablanca"
                src="https://maps.google.com/maps?q=Technopark%20Casablanca&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      {/* ASCII Text Section */}
      <section className="ascii-section">
        <SplashCursor 
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={10}
          SHADING
          RAINBOW_MODE={false}
          COLOR="#1AD8E8"
        />
        <div className="ascii-wrapper">
          <ASCIIText
            text="GivenX Tech"
            enableWaves={true}
            asciiFontSize={getAsciiFontSize()}
          />
        </div>
      </section>

      {/* Slim Fixed Footer */}
      <footer className="slim-footer">
        <div className="slim-footer-content">
          <p>© {new Date().getFullYear()} GivenX Group. Tous droits reserves.</p>
          <div className="slim-footer-links">
            <Link to="/">Accueil</Link>
            <a href="mailto:contact@givenxtechnology.com">contact@givenxtechnology.com</a>
            <a href="tel:0608692108">0608692108</a>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
};

export default ContactPage;

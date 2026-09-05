import React from 'react';
import { Link } from 'react-router-dom';
import './PremiumServiceCTA.css';

const PremiumServiceCTA = ({ title = "Prêt à transformer votre entreprise ?", subtitle = "Contactez-nous aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons accélérer votre croissance." }) => {
  return (
    <section className="premium-srv-cta-wrapper">
      <div className="premium-srv-cta-card">
        {/* Animated background effects */}
        <div className="premium-srv-cta-blob blob-1"></div>
        <div className="premium-srv-cta-blob blob-2"></div>
        <div className="premium-srv-cta-grid"></div>
        <div className="premium-srv-cta-scanline"></div>

        <div className="premium-srv-cta-content">
          <div className="premium-srv-cta-badge">
            <span className="pulse-dot"></span>
            Disponibilité Immédiate
          </div>
          
          <h2>{title}</h2>
          <p>{subtitle}</p>
          
          <div className="premium-srv-cta-actions">
            <Link to="/contact" className="premium-srv-btn" onClick={() => window.scrollTo(0, 0)}>
              <span>Contacter GivnexTech</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
          
          <div className="premium-srv-features">
            <span>Audit gratuit</span>
            <span className="dot">•</span>
            <span>Réponse sous 24h</span>
            <span className="dot">•</span>
            <span>100% Confidentiel</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumServiceCTA;

import React from 'react';
import { useLocale } from '../context/LocaleContext';
import portfolioData from '../data/portfolio.json';
import { MessageSquare, ArrowRight } from 'lucide-react';
import profilePhoto from '../assets/profile.jpg';

export default function Hero() {
  const { t } = useLocale();

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>
              {t({
                en: '✨ Available for Architecture Consulting',
                pt: '✨ Disponível para Consultoria em Arquitetura'
              })}
            </span>
          </div>
          <h1 className="hero-title">
            {portfolioData.name}
          </h1>
          <h2 className="hero-subtitle">
            {t(portfolioData.title)}
          </h2>
          <p className="hero-desc">
            {t(portfolioData.heroIntro)}
          </p>
          <p className="hero-desc hero-desc-secondary">
            {t(portfolioData.heroDetails)}
          </p>
          <div className="hero-ctas">
            <a href="#cases" className="btn btn-primary">
              {t({ en: 'View Case Studies', pt: 'Ver Casos de Estudo' })}
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              {t({ en: 'Contact Me', pt: 'Entrar em Contato' })}
              <MessageSquare size={18} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-card">
            <div className="hero-photo-ring">
              <img
                src={profilePhoto}
                alt="Leonardo Anício"
                className="hero-photo-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

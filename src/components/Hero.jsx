import React from 'react';
import { useLocale } from '../context/LocaleContext';
import portfolioData from '../data/portfolio.json';
import { MessageSquare, ArrowRight } from 'lucide-react';

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
            {t(portfolioData.valueProposition)}
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
          <div className="topology-glow-card">
            {/* Animated system map reflecting Cloud, AI, Backend, and Product layers */}
            <svg viewBox="0 0 400 400" className="topology-svg" width="100%" height="100%">
              <defs>
                <linearGradient id="grad-node" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient id="grad-node-ai" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="grad-node-backend" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0d9488" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
                <linearGradient id="grad-node-product" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <circle cx="200" cy="200" r="86" fill="none" stroke="rgba(148, 163, 184, 0.16)" strokeWidth="1.5" strokeDasharray="4 10" />
              <circle cx="200" cy="200" r="142" fill="none" stroke="rgba(6, 182, 212, 0.08)" strokeWidth="1.5" />

              {/* Connections */}
              <line x1="200" y1="118" x2="292" y2="170" stroke="rgba(6, 182, 212, 0.35)" strokeWidth="2" strokeDasharray="6,6" />
              <line x1="200" y1="118" x2="108" y2="170" stroke="rgba(124, 58, 237, 0.35)" strokeWidth="2" strokeDasharray="6,6" />
              <line x1="200" y1="282" x2="108" y2="230" stroke="rgba(20, 184, 166, 0.35)" strokeWidth="2" />
              <line x1="200" y1="282" x2="292" y2="230" stroke="rgba(245, 158, 11, 0.35)" strokeWidth="2" />
              <line x1="108" y1="170" x2="292" y2="170" stroke="rgba(148, 163, 184, 0.16)" strokeWidth="1" />
              <line x1="108" y1="230" x2="292" y2="230" stroke="rgba(148, 163, 184, 0.12)" strokeWidth="1" />

              {/* Nodes */}
              <g className="topo-node node-1">
                <circle cx="200" cy="118" r="22" fill="url(#grad-node)" filter="url(#glow)" />
                <circle cx="200" cy="118" r="8" fill="#fff" />
                <text x="200" y="88" fill="#f8fafc" fontSize="11" fontWeight="600" textAnchor="middle">Cloud / FinOps</text>
                <text x="200" y="150" fill="#94a3b8" fontSize="9" textAnchor="middle">AWS Serverless</text>
              </g>

              <g className="topo-node node-2">
                <circle cx="108" cy="200" r="22" fill="url(#grad-node-ai)" filter="url(#glow)" />
                <circle cx="108" cy="200" r="8" fill="#fff" />
                <text x="108" y="172" fill="#f8fafc" fontSize="11" fontWeight="600" textAnchor="middle">AI Engineering</text>
                <text x="108" y="234" fill="#94a3b8" fontSize="9" textAnchor="middle">RAG / LangChain</text>
              </g>

              <g className="topo-node node-3">
                <circle cx="292" cy="200" r="22" fill="url(#grad-node-backend)" filter="url(#glow)" />
                <circle cx="292" cy="200" r="8" fill="#fff" />
                <text x="292" y="172" fill="#f8fafc" fontSize="11" fontWeight="600" textAnchor="middle">Backend Systems</text>
                <text x="292" y="234" fill="#94a3b8" fontSize="9" textAnchor="middle">Queues / PostgreSQL</text>
              </g>

              <g className="topo-node node-4">
                <circle cx="200" cy="282" r="26" fill="url(#grad-node-product)" filter="url(#glow)" />
                <circle cx="200" cy="282" r="10" fill="#fff" />
                <text x="200" y="322" fill="#f8fafc" fontSize="11" fontWeight="600" textAnchor="middle">Full-Stack Product</text>
                <text x="200" y="340" fill="#94a3b8" fontSize="9" textAnchor="middle">SaaS delivery / Internal tools</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

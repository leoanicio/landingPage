import React from 'react';
import { useLocale } from '../context/LocaleContext';
import caseStudiesData from '../data/caseStudies.json';
import { TrendingUp } from 'lucide-react';

export default function CaseStudies() {
  const { t, tList } = useLocale();

  const sortedCaseStudies = [...caseStudiesData].sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999));

  const renderDiagram = (type) => {
    if (type === 'legal-ai') {
      return (
        <svg viewBox="0 0 300 200" className="case-svg" width="100%" height="100%">
          <defs>
            <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <circle cx="40" cy="100" r="13" fill="url(#grad-blue)" />
          <text x="40" y="126" fill="#94a3b8" fontSize="9" textAnchor="middle">Input</text>

          <rect x="100" y="46" width="62" height="36" rx="8" fill="rgba(15, 23, 42, 0.8)" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="131" y="64" fill="#f8fafc" fontSize="9" fontWeight="bold" textAnchor="middle">O1 Visa</text>

          <rect x="100" y="118" width="62" height="36" rx="8" fill="rgba(15, 23, 42, 0.8)" stroke="#06b6d4" strokeWidth="1.5" />
          <text x="131" y="136" fill="#f8fafc" fontSize="9" fontWeight="bold" textAnchor="middle">RAG</text>

          <rect x="196" y="72" width="66" height="56" rx="8" fill="rgba(15, 23, 42, 0.8)" stroke="#0891b2" strokeWidth="1.5" />
          <text x="229" y="93" fill="#f8fafc" fontSize="9" fontWeight="bold" textAnchor="middle">Visual Flow</text>
          <text x="229" y="109" fill="#94a3b8" fontSize="8" textAnchor="middle">OCR Defense</text>

          <path d="M 53 100 L 100 64" stroke="#3b82f6" strokeWidth="1.5" />
          <path d="M 53 100 L 100 136" stroke="#06b6d4" strokeWidth="1.5" />
          <path d="M 162 64 L 196 96" stroke="#3b82f6" strokeWidth="1.5" />
          <path d="M 162 136 L 196 104" stroke="#06b6d4" strokeWidth="1.5" />
        </svg>
      );
    }

    if (type === 'blood-bank') {
      return (
        <svg viewBox="0 0 300 200" className="case-svg" width="100%" height="100%">
          <defs>
            <linearGradient id="grad-teal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0d9488" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
            <linearGradient id="grad-sky" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
          <circle cx="36" cy="64" r="10" fill="url(#grad-teal)" />
          <circle cx="36" cy="136" r="10" fill="url(#grad-sky)" />
          <text x="36" y="85" fill="#94a3b8" fontSize="8" textAnchor="middle">Batch</text>
          <text x="36" y="157" fill="#94a3b8" fontSize="8" textAnchor="middle">Campaign</text>

          <rect x="104" y="52" width="78" height="44" rx="8" fill="rgba(15, 23, 42, 0.8)" stroke="#14b8a6" strokeWidth="1.5" />
          <text x="143" y="71" fill="#f8fafc" fontSize="9" fontWeight="bold" textAnchor="middle">SQS / Lambda</text>
          <text x="143" y="84" fill="#94a3b8" fontSize="8" textAnchor="middle">Fan-out</text>

          <rect x="104" y="116" width="78" height="44" rx="8" fill="rgba(15, 23, 42, 0.8)" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="143" y="134" fill="#f8fafc" fontSize="9" fontWeight="bold" textAnchor="middle">Twilio / SES</text>
          <text x="143" y="148" fill="#94a3b8" fontSize="8" textAnchor="middle">Routing</text>

          <rect x="214" y="74" width="52" height="52" rx="8" fill="rgba(15, 23, 42, 0.8)" stroke="#0d9488" strokeWidth="1.5" />
          <text x="240" y="98" fill="#f8fafc" fontSize="9" fontWeight="bold" textAnchor="middle">HIS</text>
          <text x="240" y="112" fill="#94a3b8" fontSize="8" textAnchor="middle">FTP Sync</text>

          <path d="M 46 64 L 104 74" stroke="#14b8a6" strokeWidth="1.5" />
          <path d="M 46 136 L 104 138" stroke="#38bdf8" strokeWidth="1.5" />
          <path d="M 182 74 L 214 90" stroke="#14b8a6" strokeWidth="1.5" />
          <path d="M 182 138 L 214 100" stroke="#38bdf8" strokeWidth="1.5" />
        </svg>
      );
    }

    if (type === 'gov-tracking') {
      return (
        <svg viewBox="0 0 300 200" className="case-svg" width="100%" height="100%">
          <defs>
            <linearGradient id="grad-indigo" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4338ca" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <linearGradient id="grad-violet" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <rect x="28" y="70" width="54" height="60" rx="8" fill="rgba(15, 23, 42, 0.8)" stroke="#6366f1" strokeWidth="1.5" />
          <text x="55" y="94" fill="#f8fafc" fontSize="9" fontWeight="bold" textAnchor="middle">Static</text>
          <text x="55" y="108" fill="#6366f1" fontSize="8" textAnchor="middle">Routes</text>
          <text x="55" y="122" fill="#94a3b8" fontSize="8" textAnchor="middle">MVP</text>

          <rect x="116" y="52" width="70" height="96" rx="8" fill="rgba(15, 23, 42, 0.8)" stroke="#a855f7" strokeWidth="1.5" />
          <text x="151" y="76" fill="#f8fafc" fontSize="9" fontWeight="bold" textAnchor="middle">Serverless</text>
          <text x="151" y="90" fill="#a855f7" fontSize="8" textAnchor="middle">Integration</text>
          <text x="151" y="110" fill="#94a3b8" fontSize="8" textAnchor="middle">AWS Lambda</text>
          <text x="151" y="124" fill="#94a3b8" fontSize="8" textAnchor="middle">Real-time feed</text>

          <rect x="222" y="70" width="52" height="60" rx="8" fill="rgba(15, 23, 42, 0.8)" stroke="#4338ca" strokeWidth="1.5" />
          <text x="248" y="94" fill="#f8fafc" fontSize="9" fontWeight="bold" textAnchor="middle">4,000+</text>
          <text x="248" y="108" fill="#6366f1" fontSize="8" textAnchor="middle">Customers</text>
          <text x="248" y="122" fill="#94a3b8" fontSize="8" textAnchor="middle">Global SaaS</text>

          <path d="M 82 100 L 116 100" stroke="#6366f1" strokeWidth="1.5" />
          <path d="M 186 82 L 222 90" stroke="#a855f7" strokeWidth="1.5" />
          <path d="M 186 118 L 222 110" stroke="#4338ca" strokeWidth="1.5" />
        </svg>
      );
    }

    if (type === 'manufacturing') {
      return (
        <svg viewBox="0 0 300 200" className="case-svg" width="100%" height="100%">
          <defs>
            <linearGradient id="grad-amber" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
          </defs>
          <rect x="30" y="80" width="58" height="44" rx="8" fill="rgba(15, 23, 42, 0.8)" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="59" y="98" fill="#f8fafc" fontSize="9" fontWeight="bold" textAnchor="middle">Legacy</text>
          <text x="59" y="112" fill="#f59e0b" fontSize="8" textAnchor="middle">Simulator</text>

          <rect x="118" y="52" width="72" height="96" rx="8" fill="rgba(15, 23, 42, 0.8)" stroke="#ea580c" strokeWidth="1.5" />
          <text x="154" y="76" fill="#f8fafc" fontSize="9" fontWeight="bold" textAnchor="middle">Ops Nerve</text>
          <text x="154" y="90" fill="#ea580c" fontSize="8" textAnchor="middle">Center</text>
          <text x="154" y="110" fill="#94a3b8" fontSize="8" textAnchor="middle">Cross-team data</text>
          <text x="154" y="124" fill="#94a3b8" fontSize="8" textAnchor="middle">Failure prediction</text>

          <rect x="226" y="76" width="46" height="56" rx="8" fill="rgba(15, 23, 42, 0.8)" stroke="#b45309" strokeWidth="1.5" />
          <text x="249" y="99" fill="#f8fafc" fontSize="9" fontWeight="bold" textAnchor="middle">200+</text>
          <text x="249" y="113" fill="#f59e0b" fontSize="8" textAnchor="middle">Users</text>

          <path d="M 88 102 L 118 98" stroke="#f59e0b" strokeWidth="1.5" />
          <path d="M 190 82 L 226 98" stroke="#ea580c" strokeWidth="1.5" />
          <path d="M 190 118 L 226 106" stroke="#b45309" strokeWidth="1.5" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 300 200" className="case-svg" width="100%" height="100%">
        <defs>
          <linearGradient id="grad-teal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
        <circle cx="40" cy="100" r="10" fill="url(#grad-teal)" />
        <text x="40" y="124" fill="#94a3b8" fontSize="8" textAnchor="middle">Systems</text>

        <rect x="110" y="70" width="80" height="60" rx="10" fill="rgba(15, 23, 42, 0.8)" stroke="#14b8a6" strokeWidth="1.5" />
        <text x="150" y="95" fill="#f8fafc" fontSize="9" fontWeight="bold" textAnchor="middle">Case Study</text>
        <text x="150" y="112" fill="#94a3b8" fontSize="8" textAnchor="middle">Portfolio Detail</text>

        <rect x="230" y="70" width="50" height="60" rx="10" fill="rgba(20, 184, 166, 0.18)" stroke="#14b8a6" strokeWidth="1" />
        <line x1="235" y1="120" x2="250" y2="90" stroke="#14b8a6" strokeWidth="1.5" />
        <line x1="250" y1="90" x2="265" y2="110" stroke="#14b8a6" strokeWidth="1.5" />
        <line x1="265" y1="110" x2="275" y2="80" stroke="#14b8a6" strokeWidth="1.5" />
        <text x="255" y="145" fill="#94a3b8" fontSize="8" textAnchor="middle">Impact</text>

        <path d="M 50 100 L 110 100" stroke="rgba(20, 184, 166, 0.45)" strokeWidth="1.5" />
        <path d="M 190 100 L 230 100" stroke="#14b8a6" strokeWidth="1.5" />
      </svg>
    );
  };

  return (
    <section id="cases" className="cases-section">
      <div className="container">
        <h2 className="cases-title">
          {t({ en: 'Cloud Architecture Case Studies', pt: 'Casos de Estudo de Arquitetura Nuvem' })}
        </h2>
        <div className="cases-list">
          {sortedCaseStudies.map((study) => (
            <div key={study.id} className="case-card glass-card">
              <div className="case-info">
                <h3 className="case-heading">{t(study.title)}</h3>
                <p className="case-desc">{t(study.description)}</p>
                <div className="case-badges">
                  {study.techBadges.map((badge, bIdx) => (
                    <span key={bIdx} className="tech-badge">{badge}</span>
                  ))}
                </div>
                
                <div className="case-metrics-container">
                  <div className="metrics-title-row">
                    <TrendingUp size={16} className="metrics-icon" />
                    <h4>{t({ en: 'Business & Performance Metrics', pt: 'Métricas de Negócio & Performance' })}</h4>
                  </div>
                  <ul className="metrics-list">
                    {tList(study.metrics).map((metric, mIdx) => (
                      <li key={mIdx}>{metric}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="case-visual">
                <div className="case-diagram-wrapper">
                  {renderDiagram(study.diagramType)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

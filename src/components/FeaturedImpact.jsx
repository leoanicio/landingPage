import React from 'react';
import { useLocale } from '../context/LocaleContext';
import { TrendingUp, TimerReset, ShieldCheck, Gauge } from 'lucide-react';

export default function FeaturedImpact() {
  const { t } = useLocale();

  const impactCards = [
    {
      icon: <Gauge size={18} />,
      value: { en: '10x', pt: '10x' },
      label: { en: 'OCR cost reduction', pt: 'Redução de custo de OCR' },
      detail: {
        en: 'On documents with more than 1,000 pages.',
        pt: 'Em documentos com mais de 1.000 páginas.'
      }
    },
    {
      icon: <TimerReset size={18} />,
      value: { en: '1 day → 30 min', pt: '1 dia → 30 min' },
      label: { en: 'O1 visa processing', pt: 'Processamento de vistos O1' },
      detail: {
        en: 'From manual workflow to a faster SaaS flow.',
        pt: 'De fluxo manual para uma operação mais rápida.'
      }
    },
    {
      icon: <ShieldCheck size={18} />,
      value: { en: 'Days → 2h', pt: 'Dias → 2h' },
      label: { en: 'Legal defense drafting', pt: 'Elaboração de defesas legais' },
      detail: {
        en: 'With OCR, RAG, and AI Judges.',
        pt: 'Com OCR, RAG e AI Judges.'
      }
    },
    {
      icon: <TrendingUp size={18} />,
      value: { en: '100k+', pt: '100k+' },
      label: { en: 'Concurrent campaign requests', pt: 'Requisições simultâneas de campanhas' },
      detail: {
        en: 'Twilio / SES routing at scale.',
        pt: 'Roteamento Twilio / SES em escala.'
      }
    }
  ];

  return (
    <section id="impact" className="impact-section">
      <div className="container">
        <h2 className="impact-title">
          {t({ en: 'Featured Impact', pt: 'Destaques de Impacto' })}
        </h2>
        <p className="impact-intro">
          {t({
            en: 'Selected outcomes that show how architecture, AI, and backend systems turned into measurable business impact.',
            pt: 'Resultados selecionados que mostram como arquitetura, IA e backend viraram impacto de negócio mensurável.'
          })}
        </p>
        <div className="impact-grid">
          {impactCards.map((card) => (
            <article key={card.label.en} className="impact-card glass-card">
              <div className="impact-card-top">
                <span className="impact-icon">{card.icon}</span>
                <span className="impact-value">{t(card.value)}</span>
              </div>
              <h3 className="impact-label">{t(card.label)}</h3>
              <p className="impact-detail">{t(card.detail)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

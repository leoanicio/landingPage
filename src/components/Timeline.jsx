import React, { useEffect, useRef } from 'react';
import { useLocale } from '../context/LocaleContext';
import timelineData from '../data/timeline.json';
import { Briefcase } from 'lucide-react';

export default function Timeline({
  sectionId = 'timeline',
  title,
  types = ['experience'],
}) {
  const { t, tList } = useLocale();
  const timelineItemRefs = useRef([]);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      timelineItemRefs.current.forEach((ref) => {
        if (ref) ref.classList.add('visible');
      });
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    timelineItemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      timelineItemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Sort chronological from oldest starting year to newest
  const parseStartYear = (period) => {
    const startYear = period.split('-')[0].trim();
    return parseInt(startYear, 10) || 0;
  };

  const sortedTimeline = [...timelineData]
    .filter((item) => types.includes(item.type))
    .sort((a, b) => parseStartYear(a.period) - parseStartYear(b.period));

  return (
    <section id={sectionId} className="timeline-section">
      <div className="container">
        <h2 className="timeline-section-title">
          {title ? t(title) : t({ en: 'Professional Timeline', pt: 'Linha do Tempo Profissional' })}
        </h2>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {sortedTimeline.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (timelineItemRefs.current[index] = el)}
              className="timeline-item"
            >
              <div className="timeline-badge" aria-label="experience">
                <Briefcase size={18} />
              </div>
              <div className="timeline-card glass-card">
                <div className="timeline-meta">
                  <span className="timeline-period">{item.period}</span>
                </div>
                <h3 className="timeline-role">{t(item.role)}</h3>
                <h4 className="timeline-company">{t(item.company)}</h4>
                {item.bullets && (
                  <ul className="timeline-bullets">
                    {tList(item.bullets).map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

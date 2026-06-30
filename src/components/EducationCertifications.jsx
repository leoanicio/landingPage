import React from 'react';
import { useLocale } from '../context/LocaleContext';
import timelineData from '../data/timeline.json';
import { GraduationCap, Award } from 'lucide-react';

export default function EducationCertifications() {
  const { t, tList } = useLocale();

  const parseStartYear = (period) => {
    const startYear = period.split('-')[0].trim();
    return parseInt(startYear, 10) || 0;
  };

  const educationItems = [...timelineData]
    .filter((item) => item.type === 'education')
    .sort((a, b) => parseStartYear(a.period) - parseStartYear(b.period));

  const certificationItems = [...timelineData]
    .filter((item) => item.type === 'certification')
    .sort((a, b) => parseStartYear(a.period) - parseStartYear(b.period));

  const renderGroup = (title, icon, items) => (
    <div className="credential-group">
      <div className="credential-group-header">
        <span className="credential-group-icon">{icon}</span>
        <h3>{title}</h3>
      </div>
      <div className="credential-list">
        {items.map((item) => (
          <article key={item.id} className="glass-card credential-card">
            <div className="credential-meta">
              <span className="credential-period">{item.period}</span>
            </div>
            <h4 className="credential-role">{t(item.role)}</h4>
            <p className="credential-company">{t(item.company)}</p>
            <ul className="credential-bullets">
              {tList(item.bullets).map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="education-title">
          {t({ en: 'Education + Certifications', pt: 'Educação + Certificações' })}
        </h2>
        <p className="education-intro">
          {t({
            en: 'Academic foundation and credentials that support the work above.',
            pt: 'Base acadêmica e credenciais que sustentam o trabalho acima.'
          })}
        </p>
        <div className="credentials-grid">
          {renderGroup(
            t({ en: 'Education', pt: 'Educação' }),
            <GraduationCap size={18} />,
            educationItems
          )}
          {renderGroup(
            t({ en: 'Certifications', pt: 'Certificações' }),
            <Award size={18} />,
            certificationItems
          )}
        </div>
      </div>
    </section>
  );
}

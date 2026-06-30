import React from 'react';
import { useLocale } from '../context/LocaleContext';
import portfolioData from '../data/portfolio.json';
import { Mail, PhoneCall, Github, Linkedin } from 'lucide-react';

export default function ContactInfo() {
  const { t } = useLocale();

  const getSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <h2 className="contact-title">
          {t({ en: 'Let\'s Connect', pt: 'Vamos Conversar' })}
        </h2>
        <div className="contact-wrapper glass-card">
          <div className="contact-info-block">
            <p className="contact-intro">
              {t({
                en: 'Interested in collaborating or discussing cloud architectures? Reach out directly via WhatsApp or Email.',
                pt: 'Interessado em colaborar ou discutir arquiteturas de nuvem? Fale diretamente comigo pelo WhatsApp ou E-mail.'
              })}
            </p>

            <div className="contact-coordinates">
              <a href={`mailto:${portfolioData.email}`} className="coordinate-item">
                <div className="coordinate-icon">
                  <Mail size={22} />
                </div>
                <div className="coordinate-text">
                  <span className="coordinate-label">{t({ en: 'Email', pt: 'E-mail' })}</span>
                  <span className="coordinate-value">{portfolioData.email}</span>
                </div>
              </a>

              <a 
                id="whatsapp-link"
                href={portfolioData.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="coordinate-item highlight-whatsapp"
              >
                <div className="coordinate-icon">
                  <PhoneCall size={22} />
                </div>
                <div className="coordinate-text">
                  <span className="coordinate-label">WhatsApp</span>
                  <span className="coordinate-value">
                    {t({ en: 'Chat via WhatsApp', pt: 'Conversar no WhatsApp' })}
                  </span>
                </div>
              </a>
            </div>

            <div className="contact-socials">
              {portfolioData.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title={social.platform}
                >
                  {getSocialIcon(social.platform)}
                  <span>{social.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { useLocale } from '../context/LocaleContext';
import { Globe, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { locale, toggleLocale } = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#hero', label: { en: 'Home', pt: 'Início' } },
    { href: '#impact', label: { en: 'Impact', pt: 'Impacto' } },
    { href: '#cases', label: { en: 'Case Studies', pt: 'Casos de Estudo' } },
    { href: '#skills', label: { en: 'Stack', pt: 'Stack' } },
    { href: '#experience', label: { en: 'Experience', pt: 'Experiência' } },
    { href: '#education', label: { en: 'Education', pt: 'Educação' } },
    { href: '#contact', label: { en: 'Contact', pt: 'Contato' } },
  ];

  return (
    <header className="navbar-header">
      <div className="container nav-container">
        <a href="#hero" className="nav-logo">
          Leonardo<span>.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {locale === 'en' ? link.label.en : link.label.pt}
            </a>
          ))}
          <button 
            id="lang-toggle-desktop" 
            onClick={toggleLocale} 
            className="lang-toggle-btn"
            aria-label="Toggle language"
          >
            <Globe size={18} />
            <span>{locale.toUpperCase()}</span>
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="mobile-actions">
          <button 
            id="lang-toggle-mobile" 
            onClick={toggleLocale} 
            className="lang-toggle-btn mobile-lang-toggle"
            aria-label="Toggle language mobile"
          >
            <Globe size={16} />
            <span>{locale.toUpperCase()}</span>
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav className="nav-mobile">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === 'en' ? link.label.en : link.label.pt}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

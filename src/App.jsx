import React from 'react';
import { LocaleProvider } from './context/LocaleContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import CaseStudies from './components/CaseStudies';
import ContactInfo from './components/ContactInfo';
import './styles/index.css';

function MainAppContent() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Timeline />
        <CaseStudies />
        <ContactInfo />
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '40px 24px',
        color: 'var(--text-secondary)',
        borderTop: '1px solid var(--glass-border)',
        fontSize: '0.9rem',
        background: '#070b14'
      }}>
        <p>&copy; {new Date().getFullYear()} Leonardo Anício. All rights reserved.</p>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <LocaleProvider>
      <MainAppContent />
    </LocaleProvider>
  );
}

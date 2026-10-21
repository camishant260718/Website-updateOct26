import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkillsRibbon from "./components/SkillsRibbon";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import { ContactSection } from "./components/EducationContact";

const Footer = () => (
  <footer
    style={{
      backgroundColor: '#071729',
      padding: '2.5rem 2rem',
      textAlign: 'center',
      borderTop: '1px solid rgba(201,168,76,0.15)',
    }}
  >
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div
        style={{
          width: '36px',
          height: '36px',
          border: '1.5px solid rgba(201,168,76,0.5)',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '700',
          fontSize: '13px',
          color: '#C9A84C',
          margin: '0 auto 1.25rem',
          letterSpacing: '0.5px',
        }}
      >
        MG
      </div>
      <p
        style={{
          fontSize: '13.5px',
          color: 'rgba(255,255,255,0.4)',
          fontStyle: 'italic',
          margin: '0 0 0.75rem',
          letterSpacing: '0.3px',
        }}
      >
        "Precision in numbers, purpose in leadership."
      </p>
      <p style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.2)', margin: 0, letterSpacing: '0.5px' }}>
        © {new Date().getFullYear()} Mishant Gandhi · Dubai, United Arab Emirates
      </p>
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <>
    <a
      href="https://www.linkedin.com/in/mishantgandhi"
      target="_blank"
      rel="noopener noreferrer"
      data-testid="linkedin-fab"
      style={{
        position: 'fixed',
        bottom: '160px',
        right: '28px',
        zIndex: 900,
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        backgroundColor: '#0077b5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(0,119,181,0.4)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,119,181,0.5)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,119,181,0.4)'; }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    </a>
    <a
      href="https://wa.me/971525076563"
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-fab"
      style={{
        position: 'fixed',
        bottom: '96px',
        right: '28px',
        zIndex: 900,
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        backgroundColor: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(37,211,102,0.4)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,211,102,0.5)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.4)'; }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  </>
);

function App() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header />
      <HeroSection />
      <SkillsRibbon />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

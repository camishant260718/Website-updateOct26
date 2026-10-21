import React, { useState } from 'react';
import { Building2, Wrench, Zap, Radio, Briefcase, GraduationCap, Award, Clock } from 'lucide-react';

/* ─── Experience Data ─── */
const experiences = [
  {
    Icon: Zap, color: '#0891B2',
    company: 'Dubai Electricity and Water Authority', location: 'Dubai, UAE',
    displayName: 'Dubai Electricity & Water Authority', years: '2024 — Present',
    role: 'Sr. Manager — Finance and Audit',
    description: "Complete financial reporting and internal & external audit management for DEWA's subsidiary. Stakeholder reporting, corporate governance, and regulatory compliance including VAT returns and refunds.",
  },
  {
    Icon: Wrench, color: '#059669',
    company: 'Al Futtaim Engineering and Technologies', location: 'Dubai, UAE',
    displayName: 'Al Futtaim Engineering & Technologies', years: '2022 — 2024',
    role: 'Revenue Controller',
    description: 'In-country valuations and reports for UAE and Qatar businesses. Managed internal, half-year, interim, and external audit assignments, plus Contractors Classification certification for Abu Dhabi government opportunities.',
  },
  {
    Icon: Building2, color: '#B8860B',
    company: 'Essar Group', location: 'Dubai, UAE',
    displayName: 'Essar Group', years: '2017 — 2022',
    role: 'Sr. Manager — Financial Reporting',
    description: 'Financial consolidation and reporting, secretarial compliance and corporate governance across the Essar Group.',
  },
  {
    Icon: Briefcase, color: '#DC2626',
    company: 'UAE Investor Family Office', location: 'Dubai, UAE',
    displayName: 'UAE Investor Family Office', years: '2016 — 2017',
    role: 'Finance Manager',
    description: 'Supported investment analysis, financial modelling, and feasibility studies for real estate and diversified investment portfolios based in UAE.',
  },
  {
    Icon: Radio, color: '#7C3AED',
    company: 'Reliance Communication Ltd.', location: 'Mumbai, India',
    displayName: 'Reliance Communication Ltd.', years: '2015 — 2016',
    role: 'Assistant Manager — Finance and Accounts',
    description: "Handled statutory financial reporting, internal controls, and regulatory compliance in the telecom sector for one of India's largest network operators.",
  },
  {
    Icon: GraduationCap, color: '#003554',
    company: 'GOLS Academy', location: 'Mumbai, India',
    displayName: 'GOLS Academy', years: '2012 — 2015',
    role: 'Accounts Manager',
    description: 'Managed Government Grant accounting, working capital, MIS, cash flow, budgetary analysis, fixed assets and logistics operations.',
  },
];

/* ─── Education Data ─── */
const credentials = [
  { Icon: Award, title: 'Chartered Accountant (2012)', institution: 'The Institute of Chartered Accountants of India', status: null },
  { Icon: Award, title: 'Company Secretary (2012)', institution: 'The Institute of Company Secretaries of India', status: null },
  { Icon: GraduationCap, title: 'Bachelor of Commerce (2008)', institution: 'S. P. B. English Medium College of Commerce', status: null },
  { Icon: Clock, title: 'ACCA, IFRS Diploma (2021)', institution: 'ACCA Global', status: null },
];

/* ─── Experience Card ─── */
const ExpCard = ({ exp }) => {
  const { Icon, color, company, location, displayName, years, role, description } = exp;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        padding: '2rem',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 40px rgba(15,34,68,0.12)' : '0 2px 8px rgba(15,34,68,0.05)',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '10px',
          backgroundColor: `${color}18`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <Icon size={22} style={{ color }} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '12.5px', fontWeight: '600', color: '#003554', lineHeight: '1.3', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {company}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
            <span style={{ fontSize: '11px', color: '#9CA3AF' }}>{years}</span>
            {location && (
              <>
                <span style={{ fontSize: '11px', color: '#D1D5DB' }}>·</span>
                <span style={{ fontSize: '11px', color: '#9CA3AF' }}>{location}</span>
              </>
            )}
          </div>
        </div>
      </div>
      <div style={{ height: '1px', backgroundColor: '#F0EDE6' }} />
      <div>
        <div style={{ fontSize: '1rem', fontWeight: '700', color: '#003554', margin: '0 0 0.3rem', lineHeight: '1.35' }}>{displayName}</div>
        <div style={{ fontSize: '11px', fontWeight: '600', color, textTransform: 'uppercase', letterSpacing: '0.7px', marginBottom: '0.75rem', wordBreak: 'break-word', overflowWrap: 'break-word' }}>{role}</div>
        <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: '1.7', margin: 0 }}>{description}</p>
      </div>
    </div>
  );
};

/* ─── Education Card ─── */
const CredCard = ({ cred }) => {
  const Icon = cred.Icon;
  return (
    <div
      style={{
        backgroundColor: '#F4F5F8',
        borderRadius: '16px',
        padding: '2.25rem 1.5rem 2rem',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(15,34,68,0.1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div style={{
        width: '80px', height: '80px', borderRadius: '50%',
        backgroundColor: '#003554',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '1.5rem',
        boxShadow: '0 6px 20px rgba(15,34,68,0.25)',
      }}>
        <Icon size={32} style={{ color: '#B8860B' }} />
      </div>
      <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#003554', margin: '0 0 0.5rem', lineHeight: '1.35' }}>{cred.title}</h3>
      <p style={{ fontSize: '12.5px', color: '#6B7280', margin: '0', lineHeight: '1.5' }}>{cred.institution}</p>
      {cred.status && (
        <span style={{
          marginTop: '0.875rem', fontSize: '11px', fontWeight: '700',
          letterSpacing: '1px', textTransform: 'uppercase', color: '#B8860B',
          backgroundColor: 'rgba(184,134,11,0.1)', border: '1px solid rgba(184,134,11,0.3)',
          borderRadius: '20px', padding: '3px 12px',
        }}>{cred.status}</span>
      )}
    </div>
  );
};

/* ─── Main Section with Tabs ─── */
const ExperienceSection = () => {
  const [tab, setTab] = useState('experience');

  const tabBtn = (id, label) => ({
    backgroundColor: 'transparent',
    border: 'none',
    padding: '10px 24px',
    fontSize: '15px',
    fontWeight: tab === id ? '700' : '500',
    color: tab === id ? '#003554' : '#9CA3AF',
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
    borderBottom: tab === id ? '3px solid #B8860B' : '3px solid transparent',
    transition: 'color 0.3s ease, border-color 0.3s ease',
    letterSpacing: '0.3px',
  });

  return (
    <section id="experience" style={{ backgroundColor: '#ECEAE3', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#9CA3AF', margin: '0 0 0.6rem' }}>
            [ MY STORY ]
          </p>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: '800', color: '#003554', margin: 0, letterSpacing: '-0.5px' }}>
            Experience & Education
          </h2>
        </div>

        {/* Tab toggle */}
        <div data-testid="exp-edu-tabs" style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', borderBottom: '1px solid rgba(0,53,84,0.1)' }}>
          <button data-testid="tab-experience" onClick={() => setTab('experience')} style={tabBtn('experience', 'Experience')}>
            Experience
          </button>
          <button data-testid="tab-education" onClick={() => setTab('education')} style={tabBtn('education', 'Education')}>
            Education
          </button>
        </div>

        {/* Experience content */}
        {tab === 'experience' && (
          <div className="exp-card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {experiences.map((exp, i) => (
              <ExpCard key={exp.company + exp.role} exp={exp} />
            ))}
          </div>
        )}

        {/* Education content */}
        {tab === 'education' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '700', color: '#003554', margin: '0 0 0.75rem' }}>
                Qualifications & Certifications
              </h3>
              <p style={{ fontSize: '15px', color: '#6B7280', maxWidth: '620px', margin: '0 auto', lineHeight: '1.7' }}>
                Strong academic foundation with professional certifications and continuous learning in finance, technology, and leadership.
              </p>
            </div>
            <div className="cred-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
              {credentials.map((cred, i) => (
                <CredCard key={cred.title} cred={cred} />
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .exp-card-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .cred-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .exp-card-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .exp-card-grid { grid-template-columns: 1fr !important; }
          .cred-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;

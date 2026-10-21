import React, { useState, useCallback } from 'react';
import { Award, GraduationCap, BookOpen, Clock, MapPin, Phone, Mail, Linkedin, CheckCircle } from 'lucide-react';

/* ─── Education Section ──────────────────────────────────────────── */

const credentials = [
  {
    Icon: Award,
    title: 'Chartered Accountant',
    institution: 'The Institute of Chartered Accountants of India',
    status: null,
  },
  {
    Icon: Award,
    title: 'Company Secretary',
    institution: 'The Institute of Company Secretaries of India',
    status: null,
  },
  {
    Icon: GraduationCap,
    title: 'Bachelor of Commerce',
    institution: 'S. P. B. English Medium College of Commerce',
    status: null,
  },
  {
    Icon: Clock,
    title: 'Association of Chartered Certified Accountants',
    institution: 'ACCA Global',
    status: 'Pursuing',
  },
];

export const EducationSection = () => (
  <section id="education" style={{ backgroundColor: '#FFFFFF', padding: '5rem 2rem' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#9CA3AF', margin: '0 0 1rem' }}>
          Education
        </p>
        <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '800', color: '#003554', margin: '0 0 1rem', letterSpacing: '-0.3px' }}>
          Qualifications &amp; Certifications
        </h2>
        <p style={{ fontSize: '15px', color: '#6B7280', maxWidth: '620px', margin: '0 auto', lineHeight: '1.7' }}>
          Strong academic foundation with professional certifications and continuous learning in finance, technology, and leadership.
        </p>
      </div>

      {/* 4-card grid */}
      <div className="cred-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
        {credentials.map((cred, i) => {
          const Icon = cred.Icon;
          return (
            <div
              key={cred.title}
              style={{
                backgroundColor: '#F4F5F8',
                borderRadius: '16px',
                padding: '2.25rem 1.5rem 2rem',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(15,34,68,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Navy circle icon */}
              <div style={{
                width: '80px', height: '80px', borderRadius: '50%',
                backgroundColor: '#003554',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 6px 20px rgba(15,34,68,0.25)',
              }}>
                <Icon size={32} style={{ color: '#B8860B' }} />
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#003554', margin: '0 0 0.5rem', lineHeight: '1.35' }}>
                {cred.title}
              </h3>

              {/* Institution */}
              <p style={{ fontSize: '12.5px', color: '#6B7280', margin: '0', lineHeight: '1.5' }}>
                {cred.institution}
              </p>

              {/* Pursuing badge */}
              {cred.status && (
                <span style={{
                  marginTop: '0.875rem',
                  fontSize: '11px', fontWeight: '700',
                  letterSpacing: '1px', textTransform: 'uppercase',
                  color: '#B8860B',
                  backgroundColor: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  borderRadius: '20px', padding: '3px 12px',
                }}>
                  {cred.status}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>

    <style>{`
      @media (max-width: 1024px) { .cred-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      @media (max-width: 540px)  { .cred-grid { grid-template-columns: 1fr !important; } }
    `}</style>
  </section>
);

/* ─── Contact Sub-Components ─────────────────────────────────────── */

const CONTACT_ITEMS = [
  { Icon: Mail,   label: 'Email',    value: 'connect@mishantgandhi.com', href: 'mailto:connect@mishantgandhi.com' },
  { Icon: Phone,  label: 'Phone',    value: '+971 52 507 6563', href: 'tel:+971525076563' },
  { Icon: MapPin, label: 'Location', value: 'Dubai, United Arab Emirates', href: null },
];

const ContactInfoCard = () => (
  <div style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #E5E7EB', borderRadius: '16px', padding: '2.25rem', display: 'flex', flexDirection: 'column' }}>
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#003554', margin: '0 0 0.3rem' }}>Mishant Gandhi</h3>
      <p style={{ fontSize: '13.5px', color: '#6B7280', margin: 0 }}>Senior Finance Professional</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
      {CONTACT_ITEMS.map(({ Icon, label, value, href }) => {
        const Tag = href ? 'a' : 'div';
        return (
          <Tag key={label} href={href || undefined}
            data-testid={`contact-item-${label.toLowerCase()}`}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}
          >
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#003554', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon size={18} style={{ color: '#B8860B' }} />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: '11px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px', fontWeight: '600' }}>{label}</div>
              <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#003554', lineHeight: '1.3', wordBreak: 'break-word' }}>{value}</div>
            </div>
          </Tag>
        );
      })}
    </div>
    <div style={{ height: '1px', backgroundColor: '#F0EDE6', margin: '1.75rem 0 1.25rem' }} />
    <p style={{ fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 0.875rem', fontWeight: '600' }}>Connect with me</p>
    <div style={{ display: 'flex', gap: '0.75rem' }}>
      <a href="https://www.linkedin.com/in/mishantgandhi" target="_blank" rel="noopener noreferrer" data-testid="contact-linkedin"
        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#003554', textDecoration: 'none', transition: 'background-color 0.3s ease, transform 0.2s ease' }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#B8860B'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#003554'; e.currentTarget.style.transform = 'translateY(0)'; }}
      >
        <Linkedin size={18} style={{ color: '#FFFFFF' }} />
      </a>
      <a href="https://wa.me/971525076563" target="_blank" rel="noopener noreferrer" data-testid="contact-whatsapp"
        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#25D366', textDecoration: 'none', transition: 'background-color 0.3s ease, transform 0.2s ease' }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  </div>
);

const inputStyle = {
  width: '100%', boxSizing: 'border-box', padding: '13px 16px',
  border: '1.5px solid #E5E7EB', borderRadius: '10px', fontSize: '14px',
  fontFamily: "'Poppins', sans-serif", color: '#1A1A2E', outline: 'none',
  backgroundColor: '#FFFFFF', transition: 'border-color 0.25s ease',
};

const ContactFormCard = ({ form, errors, submitted, onSubmit, onChange, onReset }) => (
  <div style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #E5E7EB', borderRadius: '16px', padding: '2.25rem', display: 'flex', flexDirection: 'column' }}>
    {submitted ? (
      <div style={{ textAlign: 'center', padding: '3rem 1rem', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(201,168,76,0.1)', border: '2px solid #B8860B', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
          <CheckCircle size={28} style={{ color: '#B8860B' }} />
        </div>
        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#003554', margin: '0 0 0.5rem' }}>Message Sent!</h3>
        <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 1.5rem' }}>Thank you — Mishant will get back to you shortly.</p>
        <button onClick={onReset} style={{ backgroundColor: '#003554', color: '#FFFFFF', border: 'none', padding: '11px 28px', borderRadius: '50px', fontSize: '13.5px', fontWeight: '600', cursor: 'pointer', fontFamily: "'Poppins', sans-serif" }}>
          Send Another
        </button>
      </div>
    ) : (
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', flex: 1 }}>
        <div>
          <label style={{ display: 'block', fontSize: '13.5px', fontWeight: '600', color: '#003554', marginBottom: '6px' }}>Your Name</label>
          <input type="text" placeholder="Enter your name" value={form.name}
            maxLength={100}
            onChange={(e) => onChange('name', e.target.value)}
            style={{ ...inputStyle, borderColor: errors.name ? '#e05c5c' : '#E5E7EB' }}
            onFocus={(e) => (e.target.style.borderColor = '#003554')}
            onBlur={(e) => (e.target.style.borderColor = errors.name ? '#e05c5c' : '#E5E7EB')}
          />
          {errors.name && <div style={{ fontSize: '11.5px', color: '#e05c5c', marginTop: '4px' }}>{errors.name}</div>}
        </div>
        <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13.5px', fontWeight: '600', color: '#003554', marginBottom: '6px' }}>Email Address</label>
            <input type="email" placeholder="Enter your email" value={form.email}
              maxLength={254}
              onChange={(e) => onChange('email', e.target.value)}
              style={{ ...inputStyle, borderColor: errors.email ? '#e05c5c' : '#E5E7EB' }}
              onFocus={(e) => (e.target.style.borderColor = '#003554')}
              onBlur={(e) => (e.target.style.borderColor = errors.email ? '#e05c5c' : '#E5E7EB')}
            />
            {errors.email && <div style={{ fontSize: '11.5px', color: '#e05c5c', marginTop: '4px' }}>{errors.email}</div>}
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '13.5px', fontWeight: '600', color: '#003554', marginBottom: '6px' }}>Contact Number</label>
            <input type="tel" placeholder="+971 XX XXX XXXX" value={form.phone}
              maxLength={20}
              onChange={(e) => onChange('phone', e.target.value)}
              style={{ ...inputStyle }}
              onFocus={(e) => (e.target.style.borderColor = '#003554')}
              onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
            />
          </div>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '13.5px', fontWeight: '600', color: '#003554', marginBottom: '6px' }}>Your Message</label>
          <textarea placeholder="Tell me about the opportunity" value={form.message}
            maxLength={2000}
            onChange={(e) => onChange('message', e.target.value)}
            rows={3} style={{ ...inputStyle, resize: 'vertical', minHeight: '80px' }}
            onFocus={(e) => (e.target.style.borderColor = '#003554')}
            onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
          />
        </div>
        <button type="submit" data-testid="contact-submit" style={{
          width: '100%', padding: '15px', backgroundColor: '#003554', color: '#FFFFFF',
          border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '700',
          cursor: 'pointer', fontFamily: "'Poppins', sans-serif",
          letterSpacing: '0.3px', marginTop: 'auto', transition: 'background-color 0.3s ease, transform 0.2s ease',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#B8860B'; e.currentTarget.style.color = '#003554'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#003554'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          Send Message
        </button>
      </form>
    )}
  </div>
);

/* ─── Contact Section ────────────────────────────────────────────── */

export const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim())  errs.name  = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
    return errs;
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio Enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not provided'}\n\nMessage:\n${form.message || 'No message'}`);
    window.open(`mailto:connect@mishantgandhi.com?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  const handleChange = useCallback((field, val) => {
    setForm(p => ({ ...p, [field]: val }));
    setErrors(p => ({ ...p, [field]: '' }));
  }, []);

  const handleReset = useCallback(() => {
    setSubmitted(false);
    setForm({ name: '', email: '', phone: '', message: '' });
  }, []);

  return (
    <section id="connect" style={{ backgroundColor: '#f7f4f3', padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <span style={{ width: '40px', height: '2px', backgroundColor: '#B8860B', display: 'inline-block' }} />
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#B8860B' }}>Get in Touch</span>
            <span style={{ width: '40px', height: '2px', backgroundColor: '#B8860B', display: 'inline-block' }} />
          </div>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '800', color: '#003554', margin: '0 0 1.25rem', letterSpacing: '-0.3px' }}>
            Let's Connect
          </h2>
          <p style={{ fontSize: '15px', color: '#6B7280', margin: 0, fontStyle: 'italic', maxWidth: '550px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.7' }}>
            Open to leadership roles, consulting engagements, and strategic partnerships. Reach out via any channel below.
          </p>
        </div>
        <div className="connect-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', alignItems: 'stretch' }}>
          <ContactInfoCard />
          <ContactFormCard form={form} errors={errors} submitted={submitted} onSubmit={handleSubmit} onChange={handleChange} onReset={handleReset} />
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .connect-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 540px) { .form-row { grid-template-columns: 1fr !important; } }
        input::placeholder, textarea::placeholder { color: #B0AAA0 !important; }
        textarea { font-family: 'Poppins', sans-serif !important; }
      `}</style>
    </section>
  );
};

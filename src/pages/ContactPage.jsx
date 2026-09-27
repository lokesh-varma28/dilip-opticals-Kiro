import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Calendar, CheckCircle2, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    store: 'Dilip Opticals — Main Store, Rajahmundry',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && (formData.email || formData.phone)) {
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* Header Banner */}
      <div className="page-header">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact & Eye Test</span>
          </nav>

          <SectionHeading
            eyebrow="Rajahmundry Store"
            title="Book an Eye Test"
            subtitle="Schedule an eye test or reach out for frame inquiries, lens advice, or store directions in Rajahmundry."
            align="left"
            showAccentLine={false}
          />
        </div>
      </div>

      {/* Contact Grid Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact-grid">
            {/* Direct Contact Information */}
            <div className="contact-card-info">
              <span className="section-eyebrow">
                <span className="section-eyebrow-line" aria-hidden="true" />
                <span>Store Information</span>
              </span>

              <h2 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginBottom: '1.25rem', color: 'var(--color-text-primary)' }}>
                Dilip Opticals
              </h2>

              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.65', marginBottom: '2rem', fontSize: '0.92rem' }}>
                Visit our store in Rajahmundry for accurate refraction checks, frame adjustments, and personalized eyewear consultations.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <MapPin size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--color-text-muted)' }}>
                      Location
                    </div>
                    <div style={{ fontSize: '0.95rem', color: 'var(--color-text-primary)', marginTop: '2px' }}>
                      Commercial Hub / Main Road, Rajahmundry, Andhra Pradesh
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Phone size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--color-text-muted)' }}>
                      Telephone
                    </div>
                    <a href={`tel:${siteConfig.brand.contactPhone.replace(/[^0-9+]/g, '')}`} style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--color-text-primary)', marginTop: '2px', display: 'inline-block' }}>
                      {siteConfig.brand.contactPhone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <MessageSquare size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--color-text-muted)' }}>
                      WhatsApp
                    </div>
                    <a href={`https://wa.me/${siteConfig.brand.contactWhatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--color-text-primary)', marginTop: '2px', display: 'inline-block' }}>
                      {siteConfig.brand.contactWhatsapp}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Mail size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--color-text-muted)' }}>
                      Email
                    </div>
                    <a href={`mailto:${siteConfig.brand.contactEmail}`} style={{ fontSize: '0.95rem', color: 'var(--color-text-primary)', marginTop: '2px', display: 'inline-block' }}>
                      {siteConfig.brand.contactEmail}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Clock size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--color-text-muted)' }}>
                      Store Hours
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)', marginTop: '2px' }}>
                      Monday – Saturday: 10:00 AM – 9:00 PM<br />
                      Sunday: 10:30 AM – 2:00 PM
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1rem', backgroundColor: 'var(--color-bg-subtle)', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--color-accent)', marginBottom: '4px' }}>
                  Walk-ins Welcome
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
                  You are welcome to visit our Rajahmundry store directly for eye testing, prescription checks, or frame repairs during regular hours.
                </div>
              </div>
            </div>

            {/* Eye Test Booking Form */}
            <div className="contact-form-box">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
                  <CheckCircle2 size={44} color="var(--color-accent)" style={{ margin: '0 auto 1.25rem auto' }} />
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                    Eye Test Request Received
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.65', maxWidth: '420px', margin: '0 auto 1.75rem auto', fontSize: '0.92rem' }}>
                    Thank you, {formData.fullName}. Our Rajahmundry team will contact you shortly to confirm your preferred time slot.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        store: 'Dilip Opticals — Main Store, Rajahmundry',
                        preferredDate: '',
                        preferredTime: '',
                        message: '',
                      });
                    }}
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '0.4rem' }}>
                    Schedule an Eye Test
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', marginBottom: '1.75rem' }}>
                    Please enter your details below. We will confirm your timing.
                  </p>

                  {/* 1. Full Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="e.g. Ramesh Varma"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  {/* 2. Email & 3. Phone Number */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="+91 98000 00000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* 4. Select Store */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="store">
                      Select Store
                    </label>
                    <select
                      id="store"
                      name="store"
                      value={formData.store}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Dilip Opticals — Main Store, Rajahmundry">
                        Dilip Opticals — Main Store, Rajahmundry
                      </option>
                    </select>
                  </div>

                  {/* 5. Preferred Date & 6. Preferred Time */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="preferredDate">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="preferredTime">
                        Preferred Time
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">Select time slot</option>
                        <option value="Morning (10:30 AM – 1:00 PM)">Morning (10:30 AM – 1:00 PM)</option>
                        <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                        <option value="Evening (5:00 PM – 8:30 PM)">Evening (5:00 PM – 8:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* 7. Message */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      placeholder="Any specific questions, current prescription details, or frame preferences..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={Calendar}
                    id="submit-eye-test-btn"
                  >
                    Book an Eye Test
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;

import { useState } from 'react';
import { useNavigate } from 'react-router';
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/server.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('error');
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
      <main className="contact-main">
        <button onClick={() => navigate(-1)} className="back-button-global">
          <span className="material-symbols-outlined">arrow_back</span>
          BACK
        </button>

        <header className="contact-header">
          <div className="header-glow"></div>
          <span className="label-text">Available for select collaborations</span>
          <h1 className="contact-title">
            Let's architect the <br />
            <span className="text-gradient">next dimension.</span>
          </h1>
        </header>

        <section className="contact-grid">
          <div className="contact-sidebar">
            <div className="info-group">
              <h3 className="sidebar-subtitle">Core Nexus</h3>
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <span className="material-symbols-outlined">alternate_email</span>
                  </div>
                  <div className="info-text">
                    <span className="info-label">Electronic Mail</span>
                    <p className="info-value">technogirls03@gmail.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div className="info-text">
                    <span className="info-label">Geographic Anchor</span>
                    <p className="info-value">Zapopan, Jalisco</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-group">
              <h3 className="sidebar-subtitle">Social Protocol</h3>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/eilyn-resendez/" className="social-pill">LinkedIn</a>
                <a href="https://github.com/eilyn0208" className="social-pill">GitHub</a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSendEmail}>
              <div className="form-row">
                <div className="form-group">
                  <label>Identity</label>
                  <input
                      type="text" name="name" placeholder="John Doe"
                      value={form.name} onChange={handleOnchange} required
                  />
                </div>
                <div className="form-group">
                  <label>Digital Address</label>
                  <input
                      type="email" name="email" placeholder="example@domain.com"
                      value={form.email} onChange={handleOnchange} required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Topic Frequency</label>
                <input
                    type="text" name="subject" placeholder="New Project Development"
                    value={form.subject} onChange={handleOnchange}
                />
              </div>

              <div className="form-group">
                <label>Transmission Content</label>
                <textarea
                    rows="5" name="message"
                    placeholder="How can we build the future together?"
                    value={form.message} onChange={handleOnchange}
                />
              </div>

              {status === 'success' && (
                  <p style={{ color: 'var(--secondary)', marginBottom: '1rem', fontFamily: 'var(--font-label)', fontSize: '0.85rem' }}>
                    ✓ Transmission successful.
                  </p>
              )}
              {status === 'error' && (
                  <p style={{ color: 'var(--tertiary)', marginBottom: '1rem', fontFamily: 'var(--font-label)', fontSize: '0.85rem' }}>
                    ✗ Transmission failed. Try again.
                  </p>
              )}

              <button type="submit" className="submit-btn" disabled={status === 'loading'}>
                <span>{status === 'loading' ? 'TRANSMITTING...' : 'INITIALIZE SEND'}</span>
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </section>
      </main>
  );
};

export default Contact;
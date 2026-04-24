import { useNavigate } from 'react-router';
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/server', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('ok')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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
        {/* Sidebar con información completa */}
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

        {/* Formulario con campos extra */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Identity</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Digital Address</label>
                <input type="email" placeholder="example@domain.com" required />
              </div>
            </div>

            <div className="form-group">
              <label>Topic Frequency</label>
              <input type="text" placeholder="New Project Development" />
            </div>

            <div className="form-group">
              <label>Transmission Content</label>
              <textarea rows="5" placeholder="How can we build the future together?"></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <span>INITIALIZE SEND</span>
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
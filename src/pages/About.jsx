import { useNavigate } from 'react-router'; // Importamos el hook
import './About.css';

const About = () => {
  const navigate = useNavigate(); // Inicializamos la navegación

  return (
    <main className="about-main">
      {/* BOTÓN DE VOLVER - Misma estructura que en Contact */}
      <button onClick={() => navigate(-1)} className="back-button-global">
        <span className="material-symbols-outlined">arrow_back</span>
        BACK
      </button>

      {/* Hero Section del About */}
      <section className="about-hero">
        <div className="about-grid">
          <div className="about-content">
            <span className="label-text">Creative Engineering</span>
            <h1 className="about-title">
              The Architect Behind <br/>
              <span className="text-gradient">The Code.</span>
            </h1>
            <div className="about-description-box">
              <p className="description-text">
                I am Eilyn, a Full-Stack Developer dedicated to building digital narratives through 
                elegant logic and immersive design. By merging high-performance engineering 
                with social impact, I create systems that speak a human language.
              </p>
              <div className="stats-container">
                <div className="stat-item">
                  <span className="stat-number">02+</span>
                  <span className="stat-label">Years Exp.</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Projects</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image-container">
            <div className="image-wrapper">
              <img 
                src="https://i.pinimg.com/1200x/a9/0a/41/a90a4177ccbf216e1314bd815b41b3ec.jpg" 
                alt="Eilyn" 
                className="profile-img"
              />
            </div>
            <div className="blob-1"></div>
            <div className="blob-2"></div>
          </div>
        </div>
      </section>

      {/* Skills Section (Bento Grid) */}
      <section className="skills-section">
        <div className="section-header">
          <span className="label-text">The Arsenal</span>
          <h2 className="section-title">Technical Proficiency</h2>
        </div>
        <div className="skills-grid">
          {['JavaScript', 'React', 'Node.js', 'PostgreSQL', 'Git', 'CSS3'].map((skill) => (
            <div key={skill} className="skill-card">
              <span className="material-symbols-outlined skill-icon">
                {skill === 'JavaScript' ? 'code' : 'deployed_code'}
              </span>
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
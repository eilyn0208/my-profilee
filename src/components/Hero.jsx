import './Hero.css';
import { Link } from 'react-router'; // Asegúrate de tener instalado react-router

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Decoración visual (los brillos de fondo) */}
        <div className="glow-1"></div>
        <div className="glow-2"></div>
        
        <p className="label-text">Full-Stack Developer</p>
        
        <h1 className="main-text">
          Hi, <span className="text-gradient">I'm Eilyn!</span>
        </h1>

        <p className="description">
          Full-stack developer passionate about building high-performance web experiences 
          that blend technology, design, and social impact. Focused on using technology 
          as a tool for leadership and community transformation.
        </p>

        <div className="btn-container">
          <Link to="/projects" className="btn btn-primary">Projects</Link>
          <Link to="/about" className="btn btn-outline">About Me</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
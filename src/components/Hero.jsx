import './Hero.css';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <div className="hero-container">
      
      <p className="main-text">
        Hi, <span className="secondary-text"> I'm Eilyn!</span>
      </p>

      <p className="description">
        Full-stack developer passionate about building high-performance web experiences that blend technology, design, and social impact.
        Focused on using technology as a tool for leadership and community transformation.
      </p>

      <div className="btn-container">
        <Link to="/projects" className="btn">Projects</Link>
        <Link to="/about" className="btn">About Me</Link>
      </div>

    </div>
  );
};

export default Hero;
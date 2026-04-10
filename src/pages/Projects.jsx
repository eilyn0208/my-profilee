import { useNavigate } from 'react-router';
import './Projects.css';

const Projects = () => {
  const navigate = useNavigate();

  const projectsData = [
    {
      id: 1,
      title: "Pokemon Console",
      description: "A feature-rich battle and exploration simulator built entirely for the terminal.",
      tags: ["JavaScript", "HTML", "CSS"],
      image: "https://media.es.wired.com/photos/69989105297a5ea03faad19a/master/w_2560%2Cc_limit/pokemon.png",
      github: "https://github.com/eilyn0208/ConsoleGame",
      featured: true 
    },
    {
      id: 2,
      title: "Logic-Driven Calculator",
      description: "A high-precision calculation tool focused on robust input handling and seamless UX.",
      tags: ["JavaScript", "HTML", "CSS"],
      image: "https://play-lh.googleusercontent.com/YTZxtP_hLzcpGTEMCEy-MTJRSWYK0zHWZ5_tsgwNPgaX1iRYaP2WcCl99OlxqHpPfWc=w240-h480-rw",
      github: "https://github.com/eilyn0208/Calculadora",
      featured: false
    },
    {
      id: 3,
      title: "Ellas Transforman STEM",
      description: "A mission-driven application designed to bridge the gender gap in STEM through community and resources.",
      tags: ["JavaScript", "HTML", "CSS"],
      image: "https://m.media-amazon.com/images/I/51ZK+Pn42jL._AC_UF894,1000_QL80_.jpg",
      github: "https://github.com/eilyn0208/EllasTransforman",
      featured: false
    }
  ];

  return (
    <main className="projects-main">
      <button onClick={() => navigate(-1)} className="back-button-global">
        <span className="material-symbols-outlined">arrow_back</span>
        BACK
      </button>

      <section className="projects-header">
        <span className="label-text">Showcase</span>
        <h1 className="projects-title">Curated Works</h1>
        <p className="projects-subtitle">Digital experiences crafted with precision.</p>
      </section>

      <div className="projects-bento-grid">
        {projectsData.map((project) => (
          <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-description">{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github">
                <span className="material-symbols-outlined">code</span> VIEW SOURCE
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
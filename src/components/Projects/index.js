import "./index.css";

const projects = [
  {
    title: "Insta Share Application",
    description: "A full-stack Instagram clone with user authentication, posts, likes, and comments.",
    link: "http://nareshinsta07.ccbp.tech",
    image: 'https://res.cloudinary.com/dsmtdevmx/image/upload/v1738389500/Screenshot_2025-02-01_110046_hyralw.png',
  },
  {
    title: "NxTrends",
    description: "An eCommerce web app for trending products with a seamless shopping experience.",
    link: "http://nareshnxttrends.ccbp.tech",
    image: 'https://res.cloudinary.com/dsmtdevmx/image/upload/v1738389758/Screenshot_2025-02-01_110137_ymd6wa.png',
  },
  {
    title: "Jobby Application",
    description: "A job search platform that helps users find and apply for jobs easily.",
    link: "http://nareshjobby07.ccbp.tech",
    image:'http://res.cloudinary.com/dsmtdevmx/image/upload/v1738389304/Screenshot_2025-02-01_110244_crtgo6.png',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a 
            key={index} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <span className="project-link">View Project →</span>
          </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

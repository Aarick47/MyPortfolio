import React from 'react';
import './Projects.css';
import project1 from '../../assets/pic8.png';
import project2 from '../../assets/movei.png';
import project3 from '../../assets/nav2.avif'; // Replace with your actual images
import './Hero.css';


const projects = [
  {
    id: 1,
    title: 'Modern Portfolio',
    image: project1,
    description: 'A beautiful developer portfolio built with React and CSS.',
    link: 'https://your-portfolio-link.com'
  },
  {
    id: 2,
    title: 'Movie App',
    image: project2,
    description: 'Search and explore movies using a slick front-end and API.',
    link: 'https://moviediscovery-iota.vercel.app/'
  },
  {
    id: 3,
    title: 'E-commerce UI',
    image: project3,
    description: 'Responsive shopping UI with product filters and dark mode.',
    link: 'https://your-shop-link.com'
  }
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My <span className="highlight">Projects</span></h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

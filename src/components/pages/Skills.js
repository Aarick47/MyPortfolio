import React from 'react';
import './Skills.css';



const skills = [
  'React', 'CSS3', 'JavaScript', 'Bootstrap', 'Github', 'Responsive Design', 'APIs','Firebase'
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">My <span className="highlight">Skills</span></h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

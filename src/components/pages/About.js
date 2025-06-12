import React from 'react';
import './About.css';
import aboutImage from '../../assets/pic6.png'; // Replace with your image
import './Hero.css';


export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img src={aboutImage} alt="About Me" className="about-image" />
        </div>
        <div className="about-content">
          <h2 className="highlight">About Me</h2>
          <p>
            I'm a passionate Front-End Developer with a strong eye for detail and a deep love for clean code.
            I enjoy crafting beautiful, responsive, and accessible interfaces. I specialize in React,
            modern JavaScript, and CSS animations.
          </p>
          <p>
            Beyond coding, I thrive on continuous learning, design thinking, and bringing creative ideas to life.
            My mission is to bridge the gap between design and development, one pixel at a time.
          </p>
        </div>
      </div>
    </section>
  );
}

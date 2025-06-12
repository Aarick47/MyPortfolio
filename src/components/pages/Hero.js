import React from 'react';
import './Hero.css';
import heroImage from '../../assets/pic6.png'; // Your profile image
import logo from '../../assets/logoimg.png';      // Your logo image (replace with actual filename)

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <img src={logo} alt="Logo" className="logo" />
      <div className="hero-banner">FRONT-END DEV</div>
      <div className="hero-glass">
        <div className="hero-content">
          <h1>Hello, I'm <span className="highlight"> Pewake Kingsley</span></h1>
          <p className="hero-tagline">A Front-End Developer turning ideas into pixel-perfect code.</p>
          <a href="#projects" className="btn-primary">View My Work</a>
        </div>
        <div className="hero-image-wrapper">
          <img src={heroImage} alt="Profile" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

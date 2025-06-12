import React from 'react';
import './Contact.css';
import './Hero.css';

// Correct relative path from pages/ to components/assets/
import whatsappIcon from '../../assets/whatsappsvg.svg';
import linkedinIcon from '../../assets/linkedinsvg.svg';
import xIcon from '../../assets/xsvg.svg';
import facebookIcon from '../../assets/facebooksvg.svg';


export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get in <span className="highlight">Touch</span></h2>
      
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn-primary">Send Message</button>
      </form>

      <h2 className="section-title">OR CONTACT</h2>

      {/* Contact Icons and Info */}
      <div className="contact-icons">
        <div><img src={whatsappIcon} alt="WhatsApp" /> <span>679636371</span></div>
        <div><img src={linkedinIcon} alt="LinkedIn" /> <span>Pewake Kingsley</span></div>
        <div><img src={xIcon} alt="X (Twitter)" /> <span>PKblaq</span></div>
        <div><img src={facebookIcon} alt="Facebook" /> <span>Pewake Kingsley</span></div>
      </div>
    </section>
  );
}

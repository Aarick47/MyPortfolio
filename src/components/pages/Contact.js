import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import './Hero.css';

import whatsappIcon from '../../assets/whatsappsvg.svg';
import linkedinIcon from '../../assets/linkedinsvg.svg';
import xIcon from '../../assets/xsvg.svg';
import facebookIcon from '../../assets/facebooksvg.svg';

export default function Contact() {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
emailjs.sendForm(
      'service_p709ga4',
      'template_xsdtqtn',
      form.current,
      'yFtUrXzlsiByiIRru'
    
    ).then(
      (result) => {
        setMessageStatus('Your message was sent successfully!');
        form.current.reset();
        setTimeout(() => setMessageStatus(''), 5000); // Hide after 5s
      },
      (error) => {
        setMessageStatus('Something went wrong. Please try again.');
        console.error(error);
        setTimeout(() => setMessageStatus(''), 5000);
      }
    );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get in <span className="poptext">Touch</span></h2>
      
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn-primary">Send Message</button>
        {messageStatus && (
          <p className="highlight message-status">{messageStatus}</p>
        )}
      </form>

      <h2 className="section-title">OR CONTACT</h2>

      <div className="contact-icons">
        <div><img src={whatsappIcon} alt="WhatsApp" /> <span>679636371</span></div>
        <div><img src={linkedinIcon} alt="LinkedIn" /> <span>Pewake Kingsley</span></div>
        <div><img src={xIcon} alt="X (Twitter)" /> <span>PKblaq</span></div>
        <div><img src={facebookIcon} alt="Facebook" /> <span>Pewake Kingsley</span></div>
      </div>
    </section>
  );
}

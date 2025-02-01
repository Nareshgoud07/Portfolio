import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'; 
import "./index.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2>Contact Me</h2>
        <form>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" required />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea rows="4" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" className="btn">Send Message</button>
        </form>
        
        <div className="social-media">
          <p><strong>Connect with me on social media:</strong></p>
          <div className="social-icons">
            <a href="https://github.com/Nareshgoud07" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} color="#333" />
            </a>
            <a href="https://www.linkedin.com/in/nareshgoud2002" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} color="#0077b5" />
            </a>
            <a href="https://www.instagram.com/naresh_goud_2701?igsh=MWk2dDc4bHI5azFyeQ==" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} color="#e4405f" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

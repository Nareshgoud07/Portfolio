import React, { Component } from "react";
import './index.css'
class Home extends Component {
    render() {
      return (
        <div className="hero">
          <div className="content">
            <span className="title">Freelance Web Developer</span>
            <h1>Hello, I’m <br /><span>Naresh Goud</span></h1>
            <p className="name-sub-title">
              Passionate about turning ideas into captivating designs. Take a journey through my portfolio,
              where technical skills meet creative finesse. I'm committed to excellence, and each project
              tells a story of dedication.
            </p>
            <a 
              href="https://drive.google.com/file/d/1RMWK8_qFF9qM-G-nghGqapVPzHUioB-q/view?usp=drive_link" 
              className="btn" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
          <div className="profile-img">
            <img
              src="https://i.ibb.co/nfNxWGR/my-photo-img.jpg"
              alt="My Profile"
              className="profile-pic"
            />
          </div>
        </div>
      );
    }
  }

  export default Home
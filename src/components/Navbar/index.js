import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 
import './index.css'

class Navbar extends Component {
  handleMenuToggle = () => {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("active"); 
  };

  closeMenu = () => {
    const menu = document.querySelector(".nav-links");
    menu.classList.remove("active"); 
  };

  render() {
    return (
      <nav>
        <img
          src="https://cdn.worldvectorlogo.com/logos/portfolio.svg"
          className="logo"
          alt="Portfolio Logo"
        />
        <div className="menu-icon" onClick={this.handleMenuToggle}>
          <FaBars size={30} className="menu-icon-bars" />
          <FaTimes size={30} className="menu-icon-times" />
        </div>
        <ul className="nav-links">
          <li><Link to="/" onClick={this.closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={this.closeMenu}>About</Link></li>
          <li><Link to="/skills" onClick={this.closeMenu}>Skills</Link></li>
          <li><Link to="/projects" onClick={this.closeMenu}>Projects</Link></li>
          <li><Link to="/contact" onClick={this.closeMenu}>Contact</Link></li>
        </ul>
        <a 
          href="https://drive.google.com/file/d/1RMWK8_qFF9qM-G-nghGqapVPzHUioB-q/view?usp=drive_link" 
          className="btn" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>
    );
  }
}

export default Navbar;

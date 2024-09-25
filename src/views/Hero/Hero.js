import React from "react";
// import MyImg from "../../assests/resume-img.jpg";
import resume from "./../../assests/document/saurav-resume.pdf";
import "./Hero.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-conatiner" id="hero">
      <img src="https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-91373.jpg" className="saurav-img" alt="Saurav Shete" />
      <div className="auth-container">

      <div className="description-container">
        <h1 className="auth-heading">
          <b>Hey...👋🏻 </b> <br />
          <b>I`m Saurav Shete</b>
        </h1>
        <p className="auth-description">
        Creative Coder with a Flair for Modern Web Development 💻🎨, Innovating with the Latest Technologies 🚀 and Designing Elegant Solutions ✨.
        </p>
      </div>

      <div className="auth-btn-container">
        <a href={resume} download className="auth-btn" >
          Download Resume
        </a>
        <HashLink to="#projects" className="auth-btn" style={{backgroundColor : "#007bff"}} >
          View Projects
        </HashLink>
      </div>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
// import MyImg from "../../assests/resume-img.jpg";
import resume from "./../../assests/document/saurav-resume.pdf";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-conatiner">
      <img src="https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-91373.jpg" className="saurav-img" alt="Saurav Shete" />
      <div className="auth-container">

      <div className="description-container">
        <h1 className="auth-heading">
          <b>Hey...!! </b> <br />
          <b>I`m Saurav Shete</b>
        </h1>
        <p className="auth-description">
          Creative Coder with a Flair for Modern Web Development,
          <br />
          Innovating with the Latest Technologies and Designing Elegant
          Solutions.
        </p>
      </div>

      <div className="auth-btn-container">
        <a href={resume} download className="auth-btn" style={{backgroundColor : "green"}}>
          Download Resume
        </a>
        <a href="#projects-section" className="auth-btn" style={{backgroundColor : "blue"}}>
          View Projects
        </a>
      </div>
      </div>
    </div>
  );
}

export default Hero;

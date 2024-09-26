import React from 'react';
import './SkillSection.css';
import reactImg from './../../assests/Skills/react-img.png';
import htmlImg from './../../assests/Skills/html-5.png';
import cssImg from './../../assests/Skills/css-3.png';   
import jsImg from './../../assests/Skills/js-img.png';
import nodeImg from './../../assests/Skills/node-js.png';
import expressImg from './../../assests/Skills/express.png';
import mongoImg from './../../assests/Skills/MongoDB.png';
import bootstrapImg from './../../assests/Skills/bootstrap.png';
import githubImg from './../../assests/Skills/github.png';
import vercelImg from './../../assests/Skills/Vercel';
import problemSolving from './../../assests/Skills/Problem-solving.png'
import tailwindCss from './../../assests/Skills/tailwind-css.png'
import redis from "./../../assests/Skills/redis"

function SkillSection() {
  const frontendSkills = [
    { img: reactImg, name: 'React.js' },
    { img: htmlImg, name: 'HTML' },
    { img: cssImg, name: 'CSS' },
    { img: jsImg, name: 'JavaScript' },
    { img: bootstrapImg, name: 'Bootstrap' },
    { img: tailwindCss, name: 'Tailwind CSS' },
  ];

  const backendSkills = [
    { img: nodeImg, name: 'Node.js' },
    { img: expressImg, name: 'Express.js' },
    { img: mongoImg, name: 'MongoDB' },
    { 
      img: 'https://www.shutterstock.com/image-vector/api-application-interface-icon-simple-600nw-2188533787.jpg', 
      name: 'RESTful API' 
    },
    { 
      img: 'https://seeklogo.com/images/J/json-web-tokens-jwt-io-logo-C003DEC47A-seeklogo.com.png', 
      name: 'JWT Token' 
    },
    { img: redis, name: 'Redis' },
  ];

  const tools = [
    { 
      img: 'https://git-scm.com/images/logos/logomark-orange@2x.png', 
      name: 'Git' 
    },
    { img: githubImg, name: 'GitHub' },
    { 
      img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8Fvbn29vYBR0YAuLTy+voVvrvC6ulx0c4ESUgAMS8AOTj5+fkAPj20wMDBy8uKnZyP2thBxcKUpaW35eSD1dLm9fWw5OK/6ejJ7OuZ3dv2/PwAQkEzX14ANDPm6urb8vLP1tZYd3Z/lZRlgYC5xcUdUVAxXVyltLNFaWnb4eEAJiSk0UWiAAADeklEQVR4nO3d63aiMBiFYRQqFWSqjlqtSmsPdg73f3/TWsWIEijkC+7Mfn+WavIsWUvbEPS6rucNPLcbeN22pyBcl0L4KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoNNwiyOrd2BnSsvC2kxXM7QzZojC0MySFhqNQIAoNR6FAFBqOQoEoNByFAlFoOAoFotBwFApkXDib6Y46IAyD4F5zGF8YBh9T1xDhhZ9ALRFd+AXUEcGFB6CGiC08AouJ0EIVWEiEFo47nXIitPAhqECEFnqjCsTbAFl4TjxfP1tOsx6MjavP6Pthnjgy99T1M/uZJkd0UJgjuig8JTopPCG6KVSJjgqPxMBV4Qdx35Pxp66RyH+ibr5amn/mGvGqL/zEhYO7gjaPsgMfEheu0/hyaZQ+/5Ade5e40Ne0itOh7OieBWFfR/T9JL6THb91oe9HL7ITaF/ox6+iE7gCoR+LvorXIPSjN8EJXIXQjwVvE2tduNqV+2EieJ5aFcZJf7t9X6/X734UnygjuRfRpjBVPqcN3raJav8lNgGbwtwL9aoQV7/FJtCi0FsrJ2okNoE2hZtUOYP/SE2gTaGnnKZyH0+rCyedXrU6U/VhOuHz8TSN1T+kZr2KY3XG5f8pqS7MrQ9qCtRhdcKX5LIwv/6hGap8AatV4bBIWH2oBYUUUkghhRRSaPQdfxRUbaw+rI5wUT7GIe0Vyd8UHtbMyjt5VB2ht6w1VGNhvWoJTUZh4yiksHEUNo5CChtHYeMoxBf6zgv7cXLob/7YMDoeE1voFhc+Dn8e2pwdzA4NgdcPW49C/CSE8/3Ska37BuoTEM5dv5I9dH03Quj6jpLQ9V1Boes7u0LXd+eFru+wzAODCxthJ1nlq0ZmErrjwA44Pf+dqbKoYokodceBy0Ds3er5Ow5cAmILT+84cBmILTy5VqsACC5UiEVAdGFGLATCC/fEYiC+cEfUAB0Qfl6xoQG6IPTCie6oC0J9FApEoeEoFIhCw1EoEIWGo1AgCg1HoUAUGo5CgSg03P8ldPMbHu+/tWXJSLaviZpl2bqciFd94UchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+XU/wS92uooHXdb1/tqtGx1ONs2MAAAAASUVORK5CYII=', 
      name: 'Netlify' 
    },
    { 
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TB9d5YXwtKhv4NWbpeTBVveYvcxu9gMJng&s', 
      name: 'Postman' 
    },
    { img: vercelImg, name: 'Vercel' },
  ];

  const softSkills = [
    { img: problemSolving, name: 'Problem Solving' },
    { 
      img: 'https://img.freepik.com/free-vector/team-work-background-flat-style_23-2147776186.jpg', 
      name: 'Teamwork' 
    },
    { 
      img: 'https://img.freepik.com/free-vector/social-network-pixel-style-illustration_23-2147493464.jpg', 
      name: 'Communication' 
    },
  ];

  const renderSkills = (skills) => (
    skills.map((skill, index) => (
      <div
        key={index}
        className={`category-container ${
          skill.name === 'Problem Solving' ||
          skill.name === 'Teamwork' ||
          skill.name === 'Communication'
            ? 'soft-skill-container'
            : ''
        }`}
      >
        <img
          src={skill.img}
          alt={`${skill.name} logo`}
          className={`skill-logo ${
            skill.name === 'Problem Solving' ||
            skill.name === 'Teamwork' ||
            skill.name === 'Communication'
              ? 'soft-skill-img'
              : ''
          }`}
        />
        <span>{skill.name}</span>
      </div>
    ))
  );
  
  return (
    <div>
      <h1 className="auth-heading" id='skill'>
        <b>Skills Section</b>
      </h1>
      <div className="auth-skills">
        <div> 
          <h2 className="auth-skill-type">Frontend</h2>
          <div className="auth-skill-container">
            {renderSkills(frontendSkills)}
          </div>
        </div>
        <div>
          <h2 className="auth-skill-type">Backend</h2>
          <div className="auth-skill-container">
            {renderSkills(backendSkills)}
          </div>
        </div>
        <div>
          <h2 className="auth-skill-type">Tools</h2>
          <div className="auth-skill-container">
            {renderSkills(tools)}
          </div>
        </div>
        <div>
          <h2 className="auth-skill-type">Soft Skills</h2>
          <div className="auth-skill-container">
            {renderSkills(softSkills)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillSection;

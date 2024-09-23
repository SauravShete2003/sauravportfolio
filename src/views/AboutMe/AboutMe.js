import "./AboutMe.css";
import reactImg from "./../../assests/Skills/react-img.png";
import htmlImg from "./../../assests/Skills/html-5.png";
import cssImg from "./../../assests/Skills/css-3.png";
import jsImg from "./../../assests/Skills/js-img.png";
import nodeImg from "./../../assests/Skills/node-js.png";
import expressImg from "./../../assests/Skills/express.png";
import mongoImg from "./../../assests/Skills/MongoDB.png";
import bootstrap from "./../../assests/Skills/bootstrap.png";
import github from './../../assests/Skills/github.png'
import vercel from './../../assests/Skills/Vercel'
import problemSolving from './../../assests/Skills/Problem-solving.png'

function AboutMe() {
  return (
    <div className="about-container">
      <h1 className="auth-heading">
        <b>About Me</b>
      </h1>
      <p className="auth-description">
        Hi, I'm Saurav Shete, a software engineer passionate about building
        interactive and visually appealing web applications. With a strong
        foundation in the MERN Stack, I specialize in crafting seamless user
        experiences and writing clean, efficient code. I love solving complex
        problems and staying on the cutting edge of technology. I’m always
        looking for opportunities to work on exciting projects that challenge me
        to grow as a developer. Let’s connect!
      </p>
      <div>
        <h1 className="auth-heading">
          <b>Skills Section</b>
        </h1>
        <div className="auth-skills">
          <div>
            <h2 className="auth-skill-type">Frontend</h2>
            <div className="auth-skill-container">
              <div className="category-container">
                <img src={reactImg} alt="skill logo" className="skill-logo" />
                <span>React.js</span>
              </div>
              <div className="category-container">
                <img src={htmlImg} alt="skill logo" className="skill-logo" />
                <span>HTML</span>
              </div>
              <div className="category-container">
                <img src={cssImg} alt="skill logo" className="skill-logo" />
                <span>Css</span>
              </div>
              <div className="category-container">
                <img src={jsImg} alt="skill logo" className="skill-logo" />
                <span>JavaScript</span>
              </div>
              <div className="category-container">
                <img src={bootstrap} alt="skill logo" className="skill-logo" />
                <span>Bootstrap</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="auth-skill-type">Backend</h2>
            <div className="auth-skill-container">
              <div className="category-container">
                <img src={nodeImg} alt="skill logo" className="skill-logo" />
                <span>Node.js</span>
              </div>
              <div className="category-container">
                <img src={expressImg} alt="skill logo" className="skill-logo" />
                <span>Express.js</span>
              </div>
              <div className="category-container">
                <img src={mongoImg} alt="skill logo" className="skill-logo" />
                <span>MongoDB</span>
              </div>
              <div className="category-container">
                <img
                  src="https://www.shutterstock.com/image-vector/api-application-interface-icon-simple-600nw-2188533787.jpg"
                  alt="skill logo"
                  className="skill-logo"
                />
                <span>RestFul API</span>
              </div>
              <div className="category-container">
                <img
                  src="https://seeklogo.com/images/J/json-web-tokens-jwt-io-logo-C003DEC47A-seeklogo.com.png"
                  alt="jWT"
                  className="skill-logo"
                />
                <span>JWT Token</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="auth-skill-type">Tools</h2>
            <div className="auth-skill-container">
              <div className="category-container">
                <img src="https://git-scm.com/images/logos/logomark-orange@2x.png" alt="skill logo" className="skill-logo" />
                <span>Git</span>
              </div>
              <div className="category-container">
                <img src={github} alt="skill logo" className="skill-logo" />
                <span>Github</span>
              </div>
              <div className="category-container">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8Fvbn29vYBR0YAuLTy+voVvrvC6ulx0c4ESUgAMS8AOTj5+fkAPj20wMDBy8uKnZyP2thBxcKUpaW35eSD1dLm9fWw5OK/6ejJ7OuZ3dv2/PwAQkEzX14ANDPm6urb8vLP1tZYd3Z/lZRlgYC5xcUdUVAxXVyltLNFaWnb4eEAJiSk0UWiAAADeklEQVR4nO3d63aiMBiFYRQqFWSqjlqtSmsPdg73f3/TWsWIEijkC+7Mfn+WavIsWUvbEPS6rucNPLcbeN22pyBcl0L4KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoNNwiyOrd2BnSsvC2kxXM7QzZojC0MySFhqNQIAoNR6FAFBqOQoEoNByFAlFoOAoFotBwFApkXDib6Y46IAyD4F5zGF8YBh9T1xDhhZ9ALRFd+AXUEcGFB6CGiC08AouJ0EIVWEiEFo47nXIitPAhqECEFnqjCsTbAFl4TjxfP1tOsx6MjavP6Pthnjgy99T1M/uZJkd0UJgjuig8JTopPCG6KVSJjgqPxMBV4Qdx35Pxp66RyH+ibr5amn/mGvGqL/zEhYO7gjaPsgMfEheu0/hyaZQ+/5Ade5e40Ne0itOh7OieBWFfR/T9JL6THb91oe9HL7ITaF/ox6+iE7gCoR+LvorXIPSjN8EJXIXQjwVvE2tduNqV+2EieJ5aFcZJf7t9X6/X734UnygjuRfRpjBVPqcN3raJav8lNgGbwtwL9aoQV7/FJtCi0FsrJ2okNoE2hZtUOYP/SE2gTaGnnKZyH0+rCyedXrU6U/VhOuHz8TSN1T+kZr2KY3XG5f8pqS7MrQ9qCtRhdcKX5LIwv/6hGap8AatV4bBIWH2oBYUUUkghhRRSaPQdfxRUbaw+rI5wUT7GIe0Vyd8UHtbMyjt5VB2ht6w1VGNhvWoJTUZh4yiksHEUNo5CChtHYeMoxBf6zgv7cXLob/7YMDoeE1voFhc+Dn8e2pwdzA4NgdcPW49C/CSE8/3Ska37BuoTEM5dv5I9dH03Quj6jpLQ9V1Boes7u0LXd+eFru+wzAODCxthJ1nlq0ZmErrjwA44Pf+dqbKoYokodceBy0Ds3er5Ow5cAmILT+84cBmILTy5VqsACC5UiEVAdGFGLATCC/fEYiC+cEfUAB0Qfl6xoQG6IPTCie6oC0J9FApEoeEoFIhCw1EoEIWGo1AgCg1HoUAUGo5CgSg03P8ldPMbHu+/tWXJSLaviZpl2bqciFd94UchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+XU/wS92uooHXdb1/tqtGx1ONs2MAAAAASUVORK5CYII=" alt="skill logo" className="skill-logo" />
                <span>Netlify</span>
              </div>
              <div className="category-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TB9d5YXwtKhv4NWbpeTBVveYvcxu9gMJng&s" alt="skill logo" className="skill-logo" />
                <span>Postman</span>
              </div>
              <div className="category-container">
                <img src={vercel} alt="skill logo" className="skill-logo" />
                <span>Vercel</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="auth-skill-type">Soft Skills</h2>
            <div className="auth-skill-container">
              <div className="category-container soft-skill-container">
                <img src={problemSolving} alt="skill logo" className="skill-logo soft-skill-img" />
                <span>Problem Solving</span>
              </div>
              <div className="category-container soft-skill-container">
                <img src="https://img.freepik.com/free-vector/team-work-background-flat-style_23-2147776186.jpg" alt="skill logo" className="skill-logo soft-skill-img" />
                <span>Teamwork</span>
              </div>
              <div className="category-container soft-skill-container">
                <img src="https://img.freepik.com/free-vector/social-network-pixel-style-illustration_23-2147493464.jpg" alt="skill logo" className="skill-logo soft-skill-img" />
                <span>Communication</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

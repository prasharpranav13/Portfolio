import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImg from "../public/profile.jpg";
import gfg from "../public/gfg.png";
import github from "../public/github.png";
import leetcode from "../public/leetcode.png";
import linkedin from "../public/linkedin.png";
import coder from "../public/coder.png";
import html from "../public/html.png";
import css from "../public/css.png";
import js from "../public/js.png";
import react from "../public/react.png";
import vs from "../public/vs.png";
import git from "../public/git.png";
import node from "../public/node.png";
import Card from "./components/card/Card";
import OtherProj from "./components/otherProj/OtherProj";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <>
      <div className="bodyContainer">
        <nav class="navbar navbar-expand-lg  nav">
          <div class="container-fluid">
            <a class="title" href="#">
              Pranav Singh
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="p" aria-current="page" href="#heroContainer">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="p" href="#about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class=" p" aria-disabled="true" href="#projects">
                    Projects
                  </a>
                </li>
                <li class="nav-item">
                  <a class="p" aria-disabled="true" href="#contactMe">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a class="p resume" aria-disabled="true" href="#contactMe">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="heroContainer" id="heroContainer">
          <div class="hero">
            {/* <img
            class="d-block mx-auto mb-4"
            src="/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          /> */}
            {/* <div className="imgContainer d-block mx-auto mb-2">
              <img src={profileImg} alt="" className="profileImg" />
            </div> */}

            <p className="intro">Hello I am ,</p>

            <div className="textContainer">
              <h1 class="text">Pranav Singh</h1>
            </div>
            <div className="desc">
              <p className="descPara">
                a programmer, web developer, and problem solver. When I'm not
                creating things that live on the internet,you can find me
                reading or swaying to the rythm of pop music. If you are someone
                who loves coding and geopolitics , we can always have a talk
                over coffee.
              </p>
            </div>
            <div className="lineContainer">
              <div className="line"></div>
            </div>
          </div>
          <div className="socials">
            <div className="social">
              <a href="https://www.geeksforgeeks.org/user/pranavparasar321/">
                <img src={gfg} alt="" className="socialImg" />
              </a>
            </div>
            <div className="social">
              <a href="https://leetcode.com/u/prashar_pranav/">
                <img src={leetcode} alt="" className="socialImg" />
              </a>
            </div>
            <div className="social">
              <a href="https://www.linkedin.com/in/pranav-kumar-singh-2852b0229/">
                <img src={linkedin} alt="" className="socialImg" />
              </a>
            </div>
            <div className="social">
              <a href="https://github.com/prasharpranav13">
                <img src={github} alt="" className="socialImg" />
              </a>
            </div>
          </div>
        </div>
        <div className="about" id="about">
          <p className="aboutPara">About Me</p>
          <div className="lineContainer2">
            <div className="line2"></div>
          </div>
          <div className="aboutDescContainer">
            <div className="top">
              <p className="aboutDesc">
                I am Pranav Singh, an undergraduate student at the National
                Institute of Technology, Raipur. I enjoy creating and developing
                websites. Throughout my journey as a web developer, I have
                accumulated various skills and experimented with multiple
                libraries, frameworks, and languages.
              </p>
            </div>
            <div className="bottom">
              <img src={coder} alt="" className="bottomImg" />
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="skillTitle">
            <p className=" aboutPara">Skills</p>
          </div>
          <div className="lineContainer3">
            <div className="line3"></div>
          </div>
          <div className="skillContainer">
            <div className="skill">
              <img src={html} alt="" className="skillImg" />
              <p className="SkillPara">HTML</p>
            </div>
            <div className="skill">
              <img src={css} alt="" className="skillImg" />
              <p className="SkillPara">CSS</p>
            </div>
            <div className="skill">
              <img src={js} alt="" className="skillImg" />
              <p className="SkillPara">Javascript</p>
            </div>
            <div className="skill">
              <img src={react} alt="" className="skillImg" />
              <p className="SkillPara">React.js</p>
            </div>
            <div className="skill">
              <img src={node} alt="" className="skillImg" />
              <p className="SkillPara">Node.js</p>
            </div>
            <div className="skill">
              <img src={vs} alt="" className="skillImg" />
              <p className="SkillPara">Vs Code</p>
            </div>
            <div className="skill">
              <img src={git} alt="" className="skillImg" />
              <p className="SkillPara">Git</p>
            </div>
          </div>
        </div>

        <div className="projects" id="projects">
          <div className="projectTitle">
            <p className="aboutPara">Projects</p>
          </div>
          <div className="lineContainer4">
            <div className="line4"></div>
          </div>
          <Card />
        </div>
        <div className="other-projects" id="other-projects">
          <div className="other-projectTitle">
            <p className="aboutPara">Other Projects</p>
          </div>
          <div className="lineContainer5">
            <div className="line5"></div>
          </div>
          <OtherProj />
          <div className="contactPara">
            <p>Contact Me</p>
          </div>
          <div className="lineContainer6">
            <div className="line6"></div>
          </div>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;

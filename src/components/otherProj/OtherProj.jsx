import "./otherProj.css";
import chatnow from "../../../public/chatnow.png";
import qrGenerator from "../../../public/qrGenerator.png";
import randomPass from "../../../public/randompass.png";
import counter from "../../../public/counter.png";
import ageCalc from "../../../public/ageCalc.png";

const OtherProj = () => {
  return (
    <div className="otherProjs">
      <div className="otherProjContainer1">
        <div className="top2">
          <a href="https://github.com/prasharpranav13/ChatNow-v1.0">
            <img src={chatnow} alt="" />
          </a>
        </div>
        <div className="bottom2">
          <div className="projectTech">
            <p className="techs">Technologies Used:</p>
            <p className="tech">Node</p>
            <p className="tech">Ejs</p>
            <p className="tech">Bootstrap</p>
          </div>
        </div>
      </div>
      <div className="otherProjContainer4">
        <div className="top2">
          <a href="https://github.com/prasharpranav13/Counter-reduxToolkit">
            <img src={counter} alt="" />
          </a>
        </div>
        <div className="bottom2">
          <div className="projectTech">
            <p className="techs">Technologies Used:</p>
            <p className="tech">React</p>
            <p className="tech">Redux Toolkit</p>
            <p className="tech">Bootstrap</p>
          </div>
        </div>
      </div>
      <div className="otherProjContainer3">
        <div className="top2">
          <a href="https://github.com/prasharpranav13/Random-Password-Generator">
            <img src={randomPass} alt="" />
          </a>
        </div>
        <div className="bottom2">
          <div className="projectTech">
            <p className="techs">Technologies Used:</p>
            <p className="tech">Javascript</p>
            <p className="tech">HTML</p>
            <p className="tech">CSS</p>
          </div>
        </div>
      </div>
      <div className="otherProjContainer2">
        <div className="top2">
          <a href="https://github.com/prasharpranav13/QR-code-generator">
            <img src={qrGenerator} alt="" />
          </a>
        </div>
        <div className="bottom2">
          <div className="projectTech">
            <p className="techs">Technologies Used:</p>
            <p className="tech">Javascript</p>
            <p className="tech">HTML</p>
            <p className="tech">CSS</p>
          </div>
        </div>
      </div>
      <div className="otherProjContainer5">
        <div className="top2">
          <a href="https://github.com/prasharpranav13/Simple-age-calculator">
            <img src={ageCalc} alt="" />
          </a>
        </div>
        <div className="bottom2">
          <div className="projectTech">
            <p className="techs">Technologies Used:</p>
            <p className="tech">Javascript</p>
            <p className="tech">HTML</p>
            <p className="tech">CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OtherProj;

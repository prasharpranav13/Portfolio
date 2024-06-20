import "./card.css";
import blogify from "../../../public/blogify.png";
import estateease from "../../../public/estateease.png";
import github from "../../../public/github.png";
const Card = () => {
  return (
    <div className="cards">
      <div className="cardContainer1">
        <div className="left">
          <a href="https://github.com/prasharpranav13/Blogify">
            <img src={blogify} alt="" className="projImg" />
          </a>
          {/* <div className="links">
            <img src={github} alt="" />
          </div> */}
        </div>
        <div className="right">
          <div className="projectDesc">
            <p>
              <span className="techs">
                Blogify{" "}
                <a href="https://github.com/prasharpranav13/Blogify">
                  <img src={github} alt="" className="projLink" />
                </a>
              </span>
              <br />A blogging website that uses MongoDB for database, Node.js
              for backend and embedded JS for frontend.User can
              login,register,create blogs & add comments.
            </p>
          </div>
          <div className="projectTech">
            <p className="techs">Technologies Used:</p>
            <p className="tech">Node</p>
            <p className="tech">Ejs</p>
            <p className="tech">Bootstrap</p>
          </div>
        </div>
      </div>
      <div className="cardContainer2">
        <div className="left">
          <a href="">
            <img src={estateease} alt="" className="projImg" />
          </a>
        </div>
        <div className="right">
          <div className="projectDesc">
            <p>
              <span className="techs">
                EstateEase{" "}
                <a href="#">
                  <img src={github} alt="" className="projLink" />
                </a>
              </span>
              <br />A fullstack real-estate website.Owner can add
              properties,clients can search by filters, update their profiles
              and access locations using dynamic maps.
            </p>
          </div>
          <div className="projectTech">
            <p className="techs">Technologies Used:</p>
            <p className="tech">React.js</p>
            <p className="tech">Node.js</p>
            <p className="tech">MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

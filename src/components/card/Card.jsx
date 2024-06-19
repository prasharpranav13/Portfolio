import "./card.css";
import blogify from "../../../public/blogify.png";
import estateease from "../../../public/estateease.png";

const Card = () => {
  return (
    <div className="cards">
      <div className="cardContainer1">
        <div className="left">
          <img src={blogify} alt="" className="projImg" />
        </div>
        <div className="right">
          <div className="projectDesc">
            <p>
              A blogging website Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolore, officiis!
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
          <img src={estateease} alt="" className="projImg" />
        </div>
        <div className="right">
          <div className="projectDesc">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus voluptate saepe officia esse excepturi aut modi sequi
              sit, id et?
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

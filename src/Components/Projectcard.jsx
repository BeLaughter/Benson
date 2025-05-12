import { FaPlay } from "react-icons/fa";
import "./Project.css";
import { FaGithub } from "react-icons/fa6";
function Projectcard(props) {
  return (
    <div className="projectcard">
      <div className="row ">
        <div className="col picard">
          <img
            src={props.img}
            loading="lazy"
            alt="Image of project"
            className="card-img"
          />
          <div className="boxbt flex-container justify-content-center hiddenonmobile">
            <a href={props.link1} target="blank" className="bt">
              <FaPlay /> View Demo
            </a>
            <a href={props.link2} target="blank" className="bt">
              <FaGithub /> View Code
            </a>
          </div>
        </div>
      </div>

      <div className="row mrow">
        <div className="col orange">
          <a>{props.lang}</a>
        </div>
        <div className="col orange">
          <a>{props.lang2}</a>
        </div>
        <div className="col orange">
          <a>{props.lang3}</a>
        </div>
      </div>
      <div className="hiddenonlap proanc">
        <a href={props.link1} target="blank" className="bt">
          View Project
        </a>
        <a href={props.link2} target="blank" className="bt">
          <FaGithub /> View Code
        </a>
      </div>

      <div className="row mrow">
        <div className="col">
          <p className="ptext">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Projectcard;

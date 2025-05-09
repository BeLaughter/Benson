import React from "react";
import "./Intro.css";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
const Intro = () => {
  return (
    <div className="pad">
      <p className="para">WEB DEVELOPER</p>
      <h1>BUILDING THE FUTURE OF THE WEB</h1>
      <p className="para">
        I create cutting-edge digital experiences using modern frontend
        technologies and blockchain innovation.
      </p>
      <div className="flex-contain mb">
        <a href="#project" className="glow-btn">
          View my work <FaArrowRight className="bk-icon" />
        </a>
        <a href="#contact" className="glow-btn">
          Contact me{" "}
        </a>
      </div>
      <div className="mt-5 bounce">
        <a href="#about">
          Scroll Down <br></br> <FaArrowDown className="bk-icon" />
        </a>
      </div>
    </div>
  );
};

export default Intro;

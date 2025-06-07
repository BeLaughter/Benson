import React from "react";
import "./Intro.css";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
const Intro = () => {
  return (
    <div className="pad">
      <p
        className="para"
        data-aos="zoom-in-down"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="300"
        data-aos-duration="2000"
      >
        WEB DEVELOPER
      </p>
      <h1
        data-aos="zoom-in-down"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="300"
        data-aos-duration="2000"
      >
        BUILDING THE FUTURE OF THE WEB
      </h1>
      <p
        className="para"
        data-aos="zoom-in-down"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="500"
        data-aos-duration="2200"
      >
        I create cutting-edge digital experiences using modern frontend
        technologies.
      </p>
      <div
        className="flex-contain mb mt-5"
        data-aos="zoom-in-down"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="300"
        data-aos-duration="2000"
      >
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

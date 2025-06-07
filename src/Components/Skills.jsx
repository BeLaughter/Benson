import React from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <div className="pad">
      <p className="para">
        What I Do <br></br>
        <span className="title">My Skills </span>
      </p>
      <div
        className="skills-box mt-5"
        data-aos="zoom-in-down"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="300"
        data-aos-duration="2000"
      >
        <h2>Web2 Skills</h2>

        <div className="skill">
          <div className="skill-name">HTML</div>
          <div className="progress-bar">
            <div className="progress html">
              <h7 className="ms-auto">90%</h7>
            </div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-name">CSS</div>
          <div className="progress-bar">
            <div className="progress css">
              <h7 className="ms-auto">95%</h7>
            </div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-name">JavaScript</div>
          <div className="progress-bar">
            <div className="progress javascript">
              <h7 className="ms-auto">70%</h7>
            </div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-name">React</div>
          <div className="progress-bar">
            <div className="progress react">
              <h7 className="ms-auto">70%</h7>
            </div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-name">Bootstrap</div>
          <div className="progress-bar">
            <div className="progress bootstrap">
              <h7 className="ms-auto">85%</h7>
            </div>
          </div>
        </div>
      </div>
      {/* after */}
      <div className="flex-container">
        <div
          className="skills-box2"
          data-aos="zoom-in-down"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="300"
          data-aos-duration="2000"
        >
          <h4>FRONTEND</h4>
          <div className="mt-4">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>BOOTSTRAP</li>
            <li>JAVASCRIPT(ES6+)</li>
            <li>TAILWIND CSS</li>
            <li>REACT.JS</li>
            <li>RESPONSIVE DESIGN</li>
          </div>
        </div>
        <div
          className="skills-box2"
          data-aos="zoom-in-down"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="300"
          data-aos-duration="2000"
        >
          <h4>BACKEND</h4>
          <div className="mt-4">
            <li>Node.js</li>
            <li>Express</li>
            <li>Firebase</li>
            <li>MongoDB</li>
            <li>POSTMAN</li>
            <li>CLOUDINARY</li>
          </div>
        </div>
        <div
          className="skills-box2"
          data-aos="zoom-in-down"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="300"
          data-aos-duration="2000"
        >
          <h4>TOOLS & OTHERS</h4>
          <div className="mt-4">
            <li>Git</li>
            <li>Github</li>
            <li>Vite</li>
            <li>Webpack</li>
            <li>UI/UX</li>
            <li>Figma</li>
            <li>Performance Optimization</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

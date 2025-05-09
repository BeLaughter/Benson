import React from "react";
import "./Aboutme.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const Aboutme = () => {
  return (
    <div className="pad">
      <p className="sub-title">
        Get to know me<br></br>
        <span id="about" className="title">
          About me
        </span>
      </p>
      <div className="flex-container mt-5">
        <div className="flex-a">
          <div className="about-img"></div>
          <div className="about-icon">
            <a href="http://Instagram.com/that.laughter" target="blank">
              <FaInstagram className="iconsz" />
            </a>
            <a href="https://wa.link/yxwwka" target="blank">
              <FaWhatsapp className="iconsz" />
            </a>
            <a href="https://github.com/BeLaughter" target="blank">
              <FaGithub className="iconsz" />
            </a>
          </div>
        </div>
        <div className="flex-b">
          <h6>Hi, I am Benson Iremide</h6>
          <h6 className="skill-name">
            Innovative web designer and developer specializing in responsive,
            user-centric web applications.
          </h6>
          <h6 className="skill-name">
            I hold a Bachelor's degree in Geology from Olabisi Onabanjo
            University, with a Responsive Web Design certifcation from Freecode
            camp, Frontend and Backend Certification from Boldlink Solutions.
          </h6>
          <h6 className="skill-name">
            I'm passionate about creating impactful projects by leveraging
            technology to solve real-world problems and delivering cutting-edge
            web and Web3 solutions for modern businesses.
          </h6>
          <p>My Journey</p>
          <div className="flex">
            <div>
              <span className="circle">2022</span>
            </div>
            <div>
              <h5>Got Started with Web Design & Development</h5>
              <h7 className="skill-name">
                Began my journey into tech by learning web design principles and
                building static websites using HTML, CSS, and JavaScript.
              </h7>
            </div>
          </div>
          {/*  journey */}
          <div className="flex">
            <div>
              <h5>Got Started with Web Design & Development</h5>
              <h7 className="skill-name">
                Began my journey into tech by learning web design principles and
                building static websites using HTML, CSS, and JavaScript.
              </h7>
            </div>
            <div>
              <span className="circle">2023</span>
            </div>
          </div>
          {/*  journey */}
          <div className="flex">
            <div>
              <span className="circle">2024</span>
            </div>
            <div>
              <h5>Got Started with Web Design & Development</h5>
              <h7 className="skill-name">
                Began my journey into tech by learning web design principles and
                building static websites using HTML, CSS, and JavaScript.
              </h7>
            </div>
          </div>
          {/*  journey */}
          <div className="flex">
            <div>
              <h5>Got Started with Web Design & Development</h5>
              <h7 className="skill-name">
                Began my journey into tech by learning web design principles and
                building static websites using HTML, CSS, and JavaScript.
              </h7>
            </div>
            <div>
              <span className="circle">2025</span>
            </div>
          </div>
          {/*  journey */}
        </div>
      </div>
    </div>
  );
};

export default Aboutme;

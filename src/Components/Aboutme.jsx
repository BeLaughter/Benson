import React from "react";
import "./Aboutme.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import mypic2 from "../assets/mypic2.png";
const Aboutme = () => {
  return (
    <div className="pad">
      <p id="about" className="para">
        Get to know me<br></br>
        <span className="title">About me</span>
      </p>
      <div className="flex-container mt-5">
        <div className="flex-a">
          <div
            className="about-img"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="300"
            data-aos-duration="3000"
          >
            <img
              src={mypic2}
              alt="My Picture"
              loading="lazy"
              className="img"
            ></img>
          </div>
          <div className="about-icon">
            <a
              href="http://Instagram.com/that.laughter"
              aria-label="Visit my Instagram profile"
              target="blank"
            >
              <FaInstagram className="iconsz" />
            </a>
            <a
              href="https://wa.link/yxwwka"
              aria-label="Chat with me on Whatsapp"
              target="blank"
            >
              <FaWhatsapp className="iconsz" />
            </a>
            <a
              href="https://github.com/BeLaughter"
              aria-label="Visit my Github profile"
              target="blank"
            >
              <FaGithub className="iconsz" />
            </a>
          </div>
        </div>
        <div className="flex-b">
          <h5>Hi, I am Benson Iremide</h5>
          <h6 className="grey">
            Innovative web designer and developer specializing in responsive,
            user-centric web applications.
          </h6>
          <h6 className="grey">
            I hold a Bachelor's degree in Geology from Olabisi Onabanjo
            University, with a Responsive Web Design certifcation from Freecode
            camp, Frontend and Backend Certification from Boldlink Solutions.
          </h6>
          <h6 className="grey">
            I'm passionate about creating impactful projects by leveraging
            technology to solve real-world problems and delivering cutting-edge
            web solutions for modern businesses.
          </h6>
          <h5 className="mt-4">My Journey</h5>
          <div className="flex-container">
            <div>
              <span className="circle">2022</span>
            </div>
            <div>
              <h5>Got Started with Web Design & Development</h5>
              <h7 className="grey">
                Began my journey into tech by learning web design principles and
                building static websites using HTML, CSS, and JavaScript.
              </h7>
            </div>
          </div>
          {/*  journey */}
          <div className="flex-con">
            <div>
              <h5>Specialized in React & Modern Frontend Tools</h5>
              <h7 className="grey">
                Mastered React.js, Bootstrap. Built responsive web apps with
                dynamic interfaces and clean UI/UX.
              </h7>
            </div>
            <div>
              <span className="circle">2023</span>
            </div>
          </div>
          {/*  journey */}
          <div className="flex-container">
            <div>
              <span className="circle">2024</span>
            </div>
            <div>
              <h5>Full Stack Skills</h5>
              <h7 className="grey">
                Expanded into backend development with Node.js and Express.
              </h7>
            </div>
          </div>
          {/*  journey */}
          <div className="flex-con">
            <div>
              <h5>Freelancing</h5>
              <h7 className="grey">
                Started offering services in Web Design, Web Development,
                helping businesses launch modern digital products.
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

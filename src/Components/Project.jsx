import React from "react";
import "./Project.css";
import Projectcard from "./Projectcard";
import cap1 from "../assets/cap1.PNG?url";
import cap2 from "../assets/cap2.PNG?url";
import cap3 from "../assets/cap3.PNG?url";
import cap4 from "../assets/cap4.PNG?url";
import cap5 from "../assets/cap5.PNG?url";
const Project = () => {
  return (
    <div className="pad">
      <p id="project" className="para">
        My Work <br></br>
        <span className="title">Featured Projects </span>
      </p>
      {/* projects  */}
      {/* sixth */}
      <div className="flex-container mt-5">
        <div
          className="flex-itemb"
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-cubic"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <Projectcard
            img={cap5}
            lang=" Html"
            lang2=" React"
            lang3=" Firestore"
            text=" Bright Future school management dashboard built with React and Firebase"
            link1="https://bright-school-nu.vercel.app/"
            link2="https://github.com/BeLaughter/Bright-School"
          />
        </div>
        {/* <div className="flex-itemb" 
        data-aos="zoom-in-up"
          data-aos-easing="ease-in-cubic"
          data-aos-delay="300"
          data-aos-duration="1500">
          <Projectcard
            img={cap3}
            lang=" Html"
            lang2=" React"
            lang3=" Bootstrap"
            text=" Roserlaw School website built with  React & Firebase"
            link1="https://roserlaw.vercel.app/"
            link2="https://github.com/BeLaughter/Roserlaw"
          />
        </div> */}
      </div>
      {/* fifth */}
      <div className="flex-container mt-5">
        <div
          className="flex-itemb"
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-cubic"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <Projectcard
            img={cap4}
            lang=" Html"
            lang2=" React"
            lang3=" Bootstrap"
            text=" Flipmart e-commerce marketplace website built with React"
            link1="https://flipmart-psi.vercel.app/"
            link2="https://github.com/BeLaughter/Flipmart"
          />
        </div>
        <div
          className="flex-itemb"
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-cubic"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <Projectcard
            img={cap3}
            lang=" Html"
            lang2=" React"
            lang3=" Firestore"
            text=" Roserlaw School website built with  React & Firebase"
            link1="https://roserlaw.vercel.app/"
            link2="https://github.com/BeLaughter/Roserlaw"
          />
        </div>
      </div>
      {/* fourth */}
      <div className="flex-container">
        <div
          className="flex-itemb"
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-cubic"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <Projectcard
            img={cap2}
            lang=" Html"
            lang2=" React"
            lang3=" Bootstrap"
            text="Nft webpage built with  React"
            link1="https://nftpage-jade.vercel.app/"
            link2="https://github.com/BeLaughter/Nftpage"
          />
        </div>
        <div
          className="flex-itemb"
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-cubic"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <Projectcard
            img={cap1}
            lang="Html"
            lang2="JavaScript"
            lang3="React"
            text="Cworld page built with javascript and React"
            link1="https://cworld.vercel.app/"
            link2="https://github.com/BeLaughter/Cworld"
          />
        </div>
      </div>
      {/* third */}

      <div className="flex-container">
        <div
          className="flex-itemb"
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-cubic"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <Projectcard
            img="https://i.ibb.co/MDrx8v4c/IMG-6420.jpg"
            lang=" Html"
            lang2=" Css"
            lang3=" Bootstrap"
            text="Tech school webpage built with react.js, html, css & bootstrap"
            link1="https://boldlink-web.vercel.app"
            link2="https://github.com/BeLaughter/Boldlink-web/tree/main"
          />
        </div>
        <div
          className="flex-itemb"
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-cubic"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <Projectcard
            img="https://i.ibb.co/sJHBrdhJ/c1203761-ac06-427d-8103-172b92b2cdae.jpg"
            lang=" Html"
            lang2=" React"
            lang3=" Bootstrap"
            text=" Pizza webpage built with React & bootstrap"
            link1="https://pizza-page-khaki.vercel.app/#contact"
            link2="https://github.com/BeLaughter/Pizza-page/tree/main"
          />
        </div>
      </div>
      {/*second*/}
      <div className="flex-container">
        <div
          className="flex-itemb"
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-cubic"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <Projectcard
            img="https://i.ibb.co/jkQkn4N4/IMG-6415.jpg"
            lang="Html"
            lang2="Css"
            lang3="JavaScript"
            text="Calculator built with Html css and JavaScript"
            link1="https://calculator-seven-black-85.vercel.app"
            link2="https://github.com/BeLaughter/calculator/tree/main"
          />
        </div>
        <div
          className="flex-itemb"
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-cubic"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <Projectcard
            img="https://i.ibb.co/hJDtyzqx/IMG-6419.jpg"
            lang="Html"
            lang2="Javascript"
            lang3="Css"
            text="Number guess game"
            link1="https://guessdnum.vercel.app"
            link2="https://github.com/BeLaughter/Guessdnum/tree/main"
          />
        </div>
      </div>
      {/*first*/}
      <div className="flex-container">
        <div
          className="flex-itemb"
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-cubic"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <Projectcard
            img="https://i.ibb.co/zHmSzcd5/IMG-6418.jpg"
            lang=" Html"
            lang2=" Css"
            lang3=" Bootstrap"
            text="Company webpage built with html, css & bootstrap"
            link1="https://1stweb-eight.vercel.app"
            link2="https://github.com/BeLaughter/web/tree/main"
          />
        </div>
        <div
          className="flex-itemb"
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-cubic"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <Projectcard
            img="https://i.ibb.co/fzSrtYPW/IMG-6417.jpg"
            lang="Html"
            lang2="Css"
            lang3="JavaScript"
            text="Form page with form validation built with javascript css and html"
            link1="https://form-bay-pi.vercel.app"
            link2="https://github.com/BeLaughter/form/tree/main"
          />
        </div>
      </div>
      {/* incoming  */}
      <div
        data-aos="zoom-in-down"
        data-aos-easing="ease-in-cubic"
        data-aos-delay="300"
        data-aos-duration="1500"
      >
        <p>More projects incoming...</p>
      </div>
    </div>
  );
};

export default Project;

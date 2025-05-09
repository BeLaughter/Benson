import React from "react";
import Intro from "../Components/Intro";
import Aboutme from "../Components/Aboutme";
import Skills from "../Components/Skills";
import Project from "../Components/Project";
import Contactme from "../Components/Contactme";
const Home = () => {
  return (
    <div>
      <Intro />
      <Aboutme />
      <Skills />
      <Project />
      <Contactme />
    </div>
  );
};

export default Home;

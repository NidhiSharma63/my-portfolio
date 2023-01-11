import React from "react";
import Header from "components/home/Header";
import Herobanner from "components/home/Herobanner";
import About from "components/home/About";
import Skills from "components/home/Skills";
import Process from "components/home/Process";
import Work from "components/home/Work";
import Contact from "components/home/Contact";

const HomePage = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <Herobanner />
      <About />
      <Skills />
      <Process />
      <Work />
      <Contact />
    </div>
  );
};

export default HomePage;

import React from "react";
import Header from "components/home/Header";
import Herobanner from "components/home/Herobanner";
import About from "components/home/About";
import Skills from "components/home/Skills";
import Process from "components/home/Process";
import Work from "components/home/Work";
import Contact from "components/home/Contact";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <div className="main-wrapper">
      <Helmet>
        <title>Nidhi's portfolio</title>
        <meta
          name="description"
          content={
            " As a programmer, I am driven by a desire to create and innovate. I am a self-taught developer who has spent the past year learning programming through online resources and projects"
          }
        />
        <link rel="canonical " href="/" />
      </Helmet>
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

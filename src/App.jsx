import React from "react";
import "./assets/css/main.css";
import Header from "./components/Header";
import Herobanner from "./components/Herobanner";
import About from "./components/About";
import Skills from "./components/Skills";
import Process from "./components/Process";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
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

export default App;

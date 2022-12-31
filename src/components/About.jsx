import React, { useEffect } from "react";
import aboutImg from "../assets/images/Edited/my4.jpg";
import { translateAnim } from "../assets/js/main";
let container2 = {
  selector: "container-2",
  classes: "translate-up",
};
const About = () => {
  useEffect(() => {
    translateAnim(container2);
  }, []);
  return (
    <div className="container-2 translate-up" id="About">
      <div className="about-wrapper">
        <div className="left-section">
          {/* <p>About me</p> */}
          <img src={aboutImg} alt="about" />
        </div>
        <div className="right-section">
          <p>About me</p>
          <div className="right-section-2">
            <div className="top-shadow"></div>
            <div className="bottom-shadow"></div>
            <p>
              As a programmer, I am driven by a desire to create and innovate. I
              am a self-taught developer who has spent the past year learning
              programming through online resources and projects. I am currently
              interning at a software company, where I am gaining practical
              experience and developing my skills further. In the future, I hope
              to use my programming skills to make a difference in the world and
              help solve important problems. I am deeply spiritual and devoted
              to my nation and Hinduism, and these values guide my work ethic
              and inspire me to always give my best effort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

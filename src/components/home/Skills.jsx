import React, { useEffect } from "react";
import { translateAnim } from "assets/js/main";

let container3 = {
  selector: "container-3",
  classes: "translate-up",
};
const Skills = () => {
  useEffect(() => {
    translateAnim(container3);
  }, []);

  return (
    <div className="container-3 translate-up">
      <div className="right-shadow"></div>
      <div className="skill-wrapper">
        <div className="left-shadow"></div>
        <div className="left-section">
          <div className="skill-icon"></div>
          <div className="skill-icon"></div>
          <div className="skill-icon"></div>
          <div className="skill-icon"></div>
          <div className="skill-icon"></div>
          <div className="skill-icon"></div>
        </div>
        <div className="right-section">
          <div className="heading">Here are my skills</div>
          <div className="skills-info">
            My skills are JavaScript, HTML, and CSS. I have learned frameworks
            like Bootstrap,Material UI, Tailwind, and also Git and Figma.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

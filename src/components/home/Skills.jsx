import {translateAnim} from "assets/js/main";
import React, {useEffect} from "react";

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
            I have following skills in my skill set <strong>JavaScript</strong>, HTML, <strong>React</strong>,
            Bootstrap, Material UI, <strong>Tailwind</strong>, <strong>Redux</strong>, React-tankstack query, Graphql,
            <strong> Apollo client</strong> and git.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

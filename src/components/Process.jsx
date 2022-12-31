import React, { useEffect } from "react";
import wireFrame from "../assets/images/wfPC.jpg";
import wireFrame2 from "../assets/images/wfMB.jpg";
import { translateAnim } from "../assets/js/main";

let container4 = {
  selector: "container-4",
  classes: "translate-up",
};

const Process = () => {
  useEffect(() => {
    translateAnim(container4);
  }, []);

  return (
    <div className="container-4 translate-up">
      <div className="process-wrapper">
        <div className="top-section">
          <p>Approach, I generally used</p>
          <p>
            I like to use wireframes to make responsive websites. It helps me to
            get a clear idea of what I have to do.
          </p>
        </div>
        <div className="bottom-section">
          <div className="image">
            <img src={wireFrame} alt="wireFrame" />
          </div>
          <div className="image">
            <img src={wireFrame2} alt="wireFrame" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;

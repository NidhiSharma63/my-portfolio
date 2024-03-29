import React, { useState, useEffect } from "react";
import Form from "components/home/Form";
import { translateAnim } from "assets/js/main";

let container6 = {
  selector: "container-6",
  classes: "translate-up",
};
const Contact = () => {
  useEffect(() => {
    translateAnim(container6);
  }, []);

  const [emailConfirmation, setEmailConfirmation] = useState(false);
  return (
    <div className="container-6 translate-up" id="Contact">
      <div className="contact-wrapper">
        <div className="top-section">
          <p>let's talk</p>
        </div>
        {!emailConfirmation && (
          <Form setEmailConfirmation={setEmailConfirmation} />
        )}
        {emailConfirmation && (
          <p className="email-confirmation-message">
            {" "}
            I will get back to you as soon as possible
          </p>
        )}

        <div className="bottom-section">
          <div className="gmail">
            <i className="fa-solid fa-envelope"></i>
            <p>nidhisharma639593@gmail.com</p>
          </div>
          <div className="contact-icons">
            <a href="https://github.com/NidhiSharma63">
              <i className="fa-brands fa-square-github"></i>
            </a>
            <a target="blank" href="https://medium.com/@nidhisharma639593">
              <i className="fa-brands fa-medium"></i>
            </a>
            <a href="https://www.linkedin.com/in/nidhi-sharma-55329823b/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a target="blank" href="https://twitter.com/NidhiSh57914602">
              <i className="fa-brands fa-square-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

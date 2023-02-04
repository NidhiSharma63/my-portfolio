import React from "react";
import { useNavigate } from "react-router-dom";

const BlogFooter = () => {
  const navigate = useNavigate();
  /** handle privacy */

  const handlePrivacy = () => {
    // navigate
  };

  return (
    <div className="specific-blog-footer">
      {/* logo */}
      <div className="logo">
        <p>Nidhi sharma</p>
        <small>&copy; 2023 Nidhisharma</small>
      </div>

      {/* second col-2 */}
      <div className="col-2">
        {/* privacy policy */}
        <div className="privacy-policy">
          <small>Privacy</small>
          <small>Blog</small>
          <small>Portfolio</small>
        </div>
        {/* contact */}
        <div className="contact">
          <p>Contact me</p>
          <div>
            {" "}
            <a target="blank" href="https://medium.com/@nidhisharma639593">
              <i className="fa-brands fa-medium"></i>
            </a>
            <a target="blank" href="https://github.com/NidhiSharma63">
              <i className="fa-brands fa-square-github"></i>
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/nidhi-sharma-55329823b/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a target="blank" href="https://twitter.com/NidhiSh57914602">
              <i className="fa-brands fa-square-twitter"></i>
            </a>
          </div>
        </div>
        {/* contact */}
      </div>
      {/* col-2 */}
    </div>
  );
};

export default BlogFooter;

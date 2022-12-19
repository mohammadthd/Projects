import React from "react";
import "./About.css";
import Award from "../../img/12.jpg";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="a-left">

        <div className="a-card">
          <img
            src={Award}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <div className="a-right-wrapper">


          <h1 className="a-title">About Me</h1>

          <p className="a-desc">
            As a graduated with a Bachelor's degree in Business Management, I am always willing to learn new skills. A motivated web developer who has experiences of building user interfaces with one plus years of experience in HTML, CSS, JavaScript, and React. I am seeking an opportunity to extend my web development and programming skills. I work well both individually and as part of a team.
          </p>


        </div>
      </div>
    </div>
  );
};

export default About;

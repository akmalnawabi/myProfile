import React from "react";
import "./about.css";
import theme_pattern from "../../assets/images/theme_pattern.svg";
import me3 from '../../assets/images/me3.jpg'

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={me3} alt="" />
        </div>
        <div className="about-right">
          <div className="para">
            <p>I am an experienced web developer with over 4 years of professional experience in this field with different people and companies.</p>
            <p>I am glad to collaborate with you in web development.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Django</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>4+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="about-achivement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;

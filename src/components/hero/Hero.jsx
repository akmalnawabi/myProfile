import React from 'react';
import './hero.css';
import me from '../../assets/images/me.jpeg'
import resume from '../../assets/images/Akmal CV.pdf'

const Hero = () => {
  return (
    <div className="hero">
      <img src={me} alt="" />
      <h1>
        <span>Hi i'm Akmal Nawabi,</span> Web developer based in AFG.
      </h1>
      <p>I am a fullstack web developer from Afghanistan</p>
      <div className="hero-action">
        <div className="hero-connect">
          <a href="#contact">Connect with me</a>
        </div>
        <div className="hero-resume">
          <a href={resume}>My Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Hero
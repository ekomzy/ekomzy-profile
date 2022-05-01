import React from 'react';
import "./about.css";

const About = () => {
  return (
    <div className='figma__about'>
      <div className="figma__about-content">
       <div className="figma__about-content_box">
          <h1>About</h1>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
       </div>
       <div className="figma__about-content_box">
         <h1>Interests</h1>
         <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
       </div>
      </div>

    </div>
  )
}

export default About
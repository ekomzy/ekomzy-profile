import React from 'react';
import Rectangle from "../../assets/Rectangle 90.png";
import Email from "../imgsvg/Email"
import "./navbar.css";

const Navbar = () => {
  return (
    <div className='figma__navbar'>
      <img src={Rectangle} alt="profile" />
      <h2>Ekomobong Isaiah</h2>
      <p>Frontend Developer</p>
      <small>johnekomobong69@gmail.com</small>
      <div className="btn">
      <Email  />
      <span>Email</span>
      </div>
    </div>
  )
}

export default Navbar
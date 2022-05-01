import React from 'react';
import Twitter from '../imgsvg/Twitter';
import Facebook from '../imgsvg/Facebook';
import Instagram from '../imgsvg/Instagram';
import Linkedin from '../imgsvg/Linkedin';
import Github from '../imgsvg/Github';
import "./footer.css";


const Footer = () => {
  return (
    <div className='figma__footer'>
      <Twitter />
      <Facebook />
      <Instagram />
      <Linkedin />
      <Github />
    </div>
  )
}

export default Footer;
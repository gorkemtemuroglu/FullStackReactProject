import "./FooterStyles.css";

import React from "react";
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return <div className="footer">
    <div className="footer-container">
      <div className="left">
        <div className="location">
          <FaHome size={20} style={{color:"#FFF",
            marginRight:"2rem"}}/>
          <div>
            <p> Bahçelievler Mahallesi Çakır Evler </p>
            <p> Ürgüp / Nevşehir </p>
          </div>
        </div>
        <div className="phone">
          <h4><FaPhone size={20} style={{color:"#FFF",
            marginRight:"2rem"}}/>
          +90 541 353 2045</h4>
        </div>
        <div className="email">
          <h4><FaMailBulk size={20} style={{color:"#FFF",
            marginRight:"2rem"}}/>
            gorkemtemuroglu@icloud.com</h4>
        </div>
      </div>
      <div className="right">
        <h4 className="special">About</h4>
        <p>  This website was created for a person and provides detailed information about his life </p>

        <div className="social">
          <FaFacebook size={30} style={{color:"#FFF",
            marginRight:"1rem"}}/>
          <FaTwitter size={30} style={{color:"#FFF",
            marginRight:"1rem"}}/>
          <FaLinkedin size={30} style={{color:"#FFF",
            marginRight:"1rem"}}/>

        </div>
        <div className="upper"><p>&copy; 2022 GÖRKEM MEHMET TEMUROĞLU</p></div>
      </div>
    </div>
  </div>;
};

export default Footer;

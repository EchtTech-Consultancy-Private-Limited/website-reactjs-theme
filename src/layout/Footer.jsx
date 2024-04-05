import React from "react";
import Image from "../component/Image";
import Logo from "../assets/img/logolg.svg";
import Facebook from "../assets/img/facebook.svg";
import Twitter from "../assets/img/twitter.svg";
import Instagram from "../assets/img/instagram.svg";
import LinkedIn from "../assets/img/linkedin.svg";
const Footer = () => {
  return (
    <>
    

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footerLogo">
                <Image imageUrl={Logo} />
                <div className="social-icons">
                  <a href="#">
                    <Image imageUrl={Facebook} className="icons"/>
                  </a>
                  <a href="#">
                  <Image imageUrl={Twitter} className="icons"/>
                  </a>
                  <a href="#">
                  <Image imageUrl={Instagram} className="icons"/>
                   
                  </a>
                  <a href="#">
                  <Image imageUrl={LinkedIn} className="icons"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-links">
                
                <ul>
                <h3 className="footerTitle">About Us</h3>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Vision and Mission</a>
                  </li>
                  <li>
                    <a href="#">Citizen Charter</a>
                  </li>
                  <li>
                    <a href="#">Who's who</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-links">
               
                <ul>
                <h3 className="footerTitle">Act & Rules</h3>
                  <li>
                    <a href="#">Act & Rules</a>
                  </li>
                  <li>
                    <a href="#">Consumer Protection</a>
                  </li>
                  <li>
                    <a href="#">Legal Metrology</a>
                  </li>
                  <li>
                    <a href="#">Bureau of Indian Standards</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-links">
                 
                <ul>
                <h3 className="footerTitle">Terms & Conditions</h3>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Recruitment Rules</a>
                  </li>
                  <li>
                    <a href="#">Copyright Policy</a>
                  </li>
                  <li>
                    <a href="#">Hyperlink Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-links">
                 
                <ul>
                <h3 className="footerTitle">More</h3>
                  <li>
                    <a href="#">More</a>
                  </li>
                  <li>
                    <a href="#">About this Site</a>
                  </li>
                  <li>
                    <a href="#">Disclaimer</a>
                  </li>
                  <li>
                    <a href="#">Swachh Bharat Mission</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footerBottomStrip">
          <div className="container">
            <div className="row">
            <div className="col-md-8">
              <p>© Copyright 2023-24 | Department of Consumer Affairs, Ministry of Consumer Affairs, All Rights Reserved.</p>
            </div>
            <div className="col-md-4 d-flex justify-content-end">
              <p className="visitors"> Visitors: 
              <span className="ms-2">2</span>
              <span>6</span>
              <span>4</span>
              <span>6</span>
              <span>8</span>
              <span>2</span>
              </p>
            </div>
            </div>
          
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

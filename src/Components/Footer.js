import React from "react";
import "./Footer.css";
import spreelogo from '../spree_logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <hr className="full-width-hr" />
      <div className="footer-content">
        <div className="footer-logo">
          <img src={spreelogo} alt="" />
        </div>
        <div className="contact-section">
          <h4>Contact us</h4>
          <p>Spree Demo Site</p>
          <p>Email: support@example.com</p>
        </div>
        <div className="social-section">
          <h4 style={{marginLeft: "10px"}}>Follow us</h4>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="partial-width-hr" />
      <div className="footer-container">
        <div className="footer-section">
          <h4>Women</h4>
          <ul>
            <li>Skirts</li>
            <li>Dresses</li>
            <li>Skirts and Blouses</li>
            <li>Sweaters</li>
            <li>Tops and T-Shirts</li>
            <li>Jackets and Coats</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Men</h4>
          <ul>
            <li>Shirts</li>
            <li>T-Shirts</li>
            <li>Sweaters</li>
            <li>Jackets and Coats</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Sportswear</h4>
          <ul>
            <li>Tops</li>
            <li>Sweatshirts</li>
            <li>Pants</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>My Account</h4>
          <ul>
            <li>My Orders</li>
          </ul>
        </div>
      </div>
      <hr className="full-width-hr" />
      <h6 className="copy-right">
        Designed and Developed by Spark Solutions | © 2024 Spree Demo Site. All
        rights reserved.
      </h6>
    </footer>
  );
};

export default Footer;

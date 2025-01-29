import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Mabuyu Treats</h2>
        <p>Delicious treats, made with love!</p>
        <p>Contact: <strong>0713022208</strong></p>
      </div>

      <div className="footer-sections">
        <div>
          <h3>About Us</h3>
          <p>We specialize in making the best Mabuyu treats for you!</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Email: info@mabuyutreats.com</p>
          <p>Phone: 0713022208</p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/mabuyutreats" target="_blank" rel="noopener noreferrer" title="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com/mabuyutreats" target="_blank" rel="noopener noreferrer" title="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com/mabuyutreats" target="_blank" rel="noopener noreferrer" title="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.tiktok.com/@mabuyutreats" target="_blank" rel="noopener noreferrer" title="TikTok">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mabuyu Treats. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>ABOUT JACK & JONES</h4>
          <ul>
            <li>Jobs & Careers</li>
            <li>Sustainability</li>
            <li>Affiliate Program</li>
            <li>App Download</li>
            <li>Certificates</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>ABOUT JJXX</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>ORDER STATUS</h4>
          <ul>
            <li>Delivery</li>
            <li>Payment</li>
            <li>Return Here</li>
            <li>Returns & Refunds</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul>
            <li>Jobs</li>
            <li>Corporate News</li>
            <li>
              Our products are manufactured by Bestseller A/S, Fredskovvej 5,
              DK-7330 Brande | www.bestseller.com
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <h4>COUNTRY/LANGUAGE</h4>
          <p>United States / English</p>
        </div>
        <div className="footer-bottom-center">
          <h4>PAYMENT METHODS</h4>
          <img
            src="/path-to-images/payment-methods.png"
            alt="Payment Methods"
          />
        </div>
        <div className="footer-bottom-right">
          <h4>STAY IN TOUCH</h4>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-pinterest"></i>
          </div>
          <div className="trustpilot">
            {/* <span>TrustScore 4.2</span> */}
            {/* <p>24,974 reviews</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

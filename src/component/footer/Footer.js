import React from "react";
import "../../css/footer.css";
import logo from "../../img/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-img">
        <img src={logo} alt="" />
        <div className="footer-network">
          <box-icon className="img" type="logo" name="instagram"></box-icon>
          <box-icon
            className="img"
            name="facebook-square"
            type="logo"
          ></box-icon>
          <box-icon className="img" name="tiktok" type="logo"></box-icon>
          <box-icon className="img" name="twitter" type="logo"></box-icon>
        </div>
      </div>
      <div className="Contact">
        <h2>Contact Us</h2>
        <div className="contact-street">
          <div className="contact-street_icon">
            <box-icon name="map"></box-icon>
          </div>
          <div className="contact-street_title">
            <p>Street name 1, City</p>
          </div>
        </div>
        <div className="contact-street">
          <div className="contact-street_icon">
            <box-icon name="phone"></box-icon>
          </div>
          <div className="contact-street_title">
            <p>+569 2698 0256</p>
          </div>
        </div>
        <div className="contact-street">
          <div className="contact-street_icon">
            <box-icon name="envelope"></box-icon>
          </div>
          <div className="contact-street_title">
            <p>email@companyname.com</p>
          </div>
        </div>
      </div>
      <div className="hour">
        <h3>MONDAY-SUNDAY </h3>
        <h2>10am - 10pm</h2>
      </div>
      <div className="link">
        <h2>Link</h2>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/offer">Offer</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

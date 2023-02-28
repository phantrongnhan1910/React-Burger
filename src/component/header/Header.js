import React, { useState } from "react";
import logo from "../../img/logo.png";
import "../../css/header.css";
// import { Link } from "react-router-dom";
import "boxicons";

const navbarMenu = [
  {
    title: "HOME",
    link: "/",
  },
  {
    title: "ABOUT",
    link: "/",
  },
  {
    title: "OFFERS",
    link: "/",
  },
  {
    title: "MENU",
    link: "/",
  },
  {
    title: "CONTACT",
    link: "/",
  },
];

const Header = () => {
  //   const [active, setactive] = useState(true);
  return (
    <div className="header">
      <div className="Container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="Navbar">
          <ul>
            {navbarMenu.map((item) => (
              <li key={item.title}>
                <a href="{item.link}">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* <span className="btn-menu">
          {active ? (
            <box-icon name="menu"></box-icon>
          ) : (
            <box-icon name="x"></box-icon>
          )}
        </span> */}
      </div>
      <div className="content">
        <h1>
          <span> CRISPY TENDER </span> <br /> BURGER
        </h1>
        <button>See More</button>
      </div>
    </div>
  );
};

export default Header;

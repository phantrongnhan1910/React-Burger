import React from "react";
import banner2 from "../../img/banner2.jpg";
import "../../css/banner.css";
import banner3 from "../../img/banner3.jpg";

const Banner = () => {
  return (
    <>
      <div className="container-banner">
        <div className="banner">
          <div className="banner-img">
            <img src={banner2} alt="" />
          </div>
          <div className="banner-content">
            <span> -25% OFF</span>
            <h2>
              Enjoy our <br /> specially prepared <br /> burgers for you.
            </h2>
            <p>Dont miss out on our daily special offers.</p>
            <button className="btn">SEE MENU</button>
          </div>
        </div>
        <div className="banner-bottom">
          <div className="banner-bottom_content">
            <span>-15 OFF</span>
            <h2>
              New, amazing <br /> sandwich offers <br /> every day.
            </h2>
            <p>Just add some of our juicy side dishes.</p>
            <button className="button">SEE MORE</button>
          </div>
          <div className="banner-bottom_img">
            <img src={banner3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

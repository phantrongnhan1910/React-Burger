import React from "react";
import "../../css/bannerFooter.css";
import bannerfooter from "../../img/banner4.jpg";
const bannerFooter = () => {
  return (
    <div>
      <div className="banner-footer">
        <div className="banner-footer_img">
          <img src={bannerfooter} alt="" />
        </div>
        <div className="banner-footer_content">
          <span>TESTIMONIALS</span>
          <h2>Our prime concern was the satisfaction of our customers.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            commodi vero, deserunt, nostrum ullam dolore ipsum nisi corporis,
            est iste dignissimos. Facilis rem id ducimus dicta illum vel nemo
            fugit?
          </p>
          <h3>-John Doe</h3>
        </div>
      </div>
    </div>
  );
};

export default bannerFooter;

import React from "react";
import "../../css/trend.css";
import trending1 from "../../img/trending1.jpg";
import trending2 from "../../img/trending2.jpg";
import trending3 from "../../img/trending3.jpg";
import trending4 from "../../img/trending4.jpg";

const Trend = () => {
  return (
    <div className="Trending">
      <h1>Trending Burger</h1>
      <div className="Trending-card">
        <div className="box">
          <div className="box-img">
            <img src={trending1} alt="" />
          </div>
          <h3>Juicy Burger</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
            illum.
          </p>
          <div className="box-wrapper">
            <div className="box-price">$8</div>
            <div className="box-add">+ Add to cart</div>
          </div>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={trending2} alt="" />
          </div>
          <h3>Juicy Burger</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
            illum.
          </p>
          <div className="box-wrapper">
            <div className="box-price">$8</div>
            <div className="box-add">+ Add to cart</div>
          </div>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={trending3} alt="" />
          </div>
          <h3>Juicy Burger</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
            illum.
          </p>
          <div className="box-wrapper">
            <div className="box-price">$8</div>
            <div className="box-add">+ Add to cart</div>
          </div>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={trending4} alt="" />
          </div>
          <h3>Juicy Burger</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
            illum.
          </p>
          <div className="box-wrapper">
            <div className="box-price">$8</div>
            <div className="box-add">+ Add to cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trend;

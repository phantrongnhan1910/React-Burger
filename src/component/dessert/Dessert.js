import React from "react";
import "../../css/trend.css";
import dessert1 from "../../img/dessert1.jpg";
import dessert2 from "../../img/dessert2.jpg";
import dessert3 from "../../img/dessert3.jpg";
import dessert4 from "../../img/dessert4.jpg";

const Trend = () => {
  return (
    <div className="Trending">
      <h1>Trending Burger</h1>
      <div className="Trending-card">
        <div className="box">
          <div className="box-img">
            <img src={dessert1} alt="" />
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
            <img src={dessert2} alt="" />
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
            <img src={dessert3} alt="" />
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
            <img src={dessert4} alt="" />
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

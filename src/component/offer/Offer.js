import React from "react";
import special from "../../img/Special1.jpg";
import special1 from "../../img/Special2.jpg";
import special2 from "../../img/Special3.jpg";
import special3 from "../../img/Special4.jpg";
import special4 from "../../img/Special5.jpg";
import "../../css/offer.css";
const Offer = () => {
  return (
    <>
      <h2 className="Special-title">Special offers</h2>
      <div className="Offer">
        <div className="Offer-left">
          <div className="offer-img">
            <img src={special} alt="" />
          </div>
          <h3>Ham Sandwich</h3>
          <span> Fat 26g</span>
          <span> Sugars 34g</span>
          <span> Carbs 26g</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa atque{" "}
            <br />
            consectetur hic doloribus aliquam, voluptate asperiores ut id ipsam{" "}
            <br />
            quisquam tempora magnam repudiandae quasi iste iusto ullam.
          </p>
          <div className="total">$14</div>
          <div className="btn">+ learn more</div>
        </div>
        <div className="Offer-right">
          <div className="card">
            <div className="special-image">
              <img src={special1} alt="" />
            </div>
            <div className="special-title">
              Juicy Beef <br /> Burger Meal
            </div>
            <div className="special-price">$8</div>
            <p>+ Add to cart</p>
          </div>
          <div className="card">
            <div className="special-image">
              <img src={special2} alt="" />
            </div>
            <div className="special-title">
              Juicy Beef <br /> Burger Meal
            </div>
            <div className="special-price">$8</div>
            <p>+ Add to cart</p>
          </div>
          <div className="card">
            <div className="special-image">
              <img src={special3} alt="" />
            </div>
            <div className="special-title">
              Juicy Beef <br /> Burger Meal
            </div>
            <div className="special-price">$8</div>
            <p>+ Add to cart</p>
          </div>
          <div className="card">
            <div className="special-image">
              <img src={special3} alt="" />
            </div>
            <div className="special-title">
              Juicy Beef <br /> Burger Meal
            </div>
            <div className="special-price">$8</div>
            <p>+ Add to cart</p>
          </div>
          <div className="card">
            <div className="special-image">
              <img src={special1} alt="" />
            </div>
            <div className="special-title">
              Juicy Beef <br /> Burger Meal
            </div>
            <div className="special-price">$8</div>
            <p>+ Add to cart</p>
          </div>
          <div className="card">
            <div className="special-image">
              <img src={special4} alt="" />
            </div>
            <div className="special-title">
              Juicy Beef <br /> Burger Meal
            </div>
            <div className="special-price">$8</div>
            <p>+ Add to cart</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;

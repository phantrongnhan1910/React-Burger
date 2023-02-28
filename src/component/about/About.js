import React from "react";
import about from "../../img/about.jpg";
import "../../css/about.css";

const About = () => {
  return (
    <div className="About">
      <div className="About-image">
        <img src={about} alt="logo" />
      </div>
      <div className="About-content">
        <span>about us</span>
        <h2>
          Delivering best <br /> ingredients for our <br /> trusty food lovers.
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          tenetur voluptates dolor molestias adipisci mollitia non reiciendis
          nisi, soluta deserunt. Eveniet provident a ad, qui beatae illum.
          Molestias, accusamus suscipit.
        </p>
        <p>
          Risus commodo viverra maecenas accumsan lacus lalala vel facilisis.
        </p>
      </div>
    </div>
  );
};

export default About;

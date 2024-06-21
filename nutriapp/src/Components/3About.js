import React from "react";
import AboutBackground from "../Assets/about-background.png";
import img1 from "../Assets/fc11.png";
import img2 from "../Assets/workk.jpg";
import img3 from "../Assets/fc3.png";
import img4 from "../Assets/fc4.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <div className="k1">
          <div className="k11">
            <img src={img3} alt="" className="img3" />
          </div>
          <div className="k12">
            <img src={img1} alt="" className="img1" />
          </div>
        </div>
        <div className="k1">
          <div className="k12">
            <img src={img2} alt="" className="img2" />
          </div>
          <div className="k11">
            <img src={img4} alt="" className="img4" />
          </div>
        </div>
      </div>
      <div className="about-section-text-container">
        <div className="a1">
          <h1 className="primary-heading">
            Food Is An Important Part Of A Balanced Diet
          </h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <p className="primary-text">
            Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
            facilisis at fringilla quam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

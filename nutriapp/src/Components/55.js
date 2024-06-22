import React from "react";
import AboutBackground from "../Assets/about-background.png";
import img1 from "../Assets/fc11.png";
import img2 from "../Assets/workk.jpg";
import img3 from "../Assets/fc3.png";
import img4 from "../Assets/fc4.png";

import "./44.css";
import "./55.css";

const Work = () => {
  return (
    <>
      <div class="containerx">
        <div class="am as">
          <div className="about-section-container slide">
            <div className="about-background-image-container">
              <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
              <div className="k1">
                <div className="k11 block">
                  <img src={img3} alt="" className="img3" />
                </div>
                <div className="k12 block">
                  <img src={img1} alt="" className="img1" />
                </div>
              </div>
              <div className="k1">
                <div className="k12 block">
                  <img src={img2} alt="" className="img2" />
                </div>
                <div className="k11 block">
                  <img src={img4} alt="" className="img4" />
                </div>
              </div>
            </div>
            <div className="about-section-text-container block">
              <div className="a1">
                <h1 className="about-heading animate-pop-in">
                  Food Is An Important Part Of A Balanced Diet
                </h1>
                <p className="about-text animate-pop-in">
                  Lorem ipsum dolor sit amet consectetur. Non tincidunt magna
                  non et elit. Dolor turpis molestie dui magnis facilisis at
                  fringilla quam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="blackscarf"></div>
        <div class="am bb">
          <h1>b</h1>
        </div>
      </div>
    </>
  );
};

export default Work;

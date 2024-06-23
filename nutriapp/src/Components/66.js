import React from "react";
import img1 from "../Assets/Picture1.png";
import img2 from "../Assets/fooddata.jpg";
import img3 from "../Assets/recomsystem.png";

import "./66.css";

const aii = () => {
  return (
    <>
      <div class="containerx">
        <div class="am as">
          <h1>a</h1>
        </div>
        <div class="am bb">
          <h1>b</h1>
        </div>
        <div class="am cc">
          <h1>c</h1>
        </div>
        <div class="am dd">
          <h1>d</h1>
        </div>
      </div>
      <div className="work-section-wrapper">
        <h1 className="b114">Slider Banauna Baki cha</h1>
        <div className="slider">
          <img src={img1} alt="" />
        </div>

        <h1 className="b114">
          Eat Better <br />
          with knowledge
          <br /> from our food database
        </h1>
        <div className="slider">
          <img src={img2} alt="" />
        </div>

        <h1 className="b114">
          Eat Smarter
          <br /> with
          <br /> our food tracker <br />
          and <br />
          food recomendation
        </h1>
        <div className="slider">
          <img src={img3} alt="" />
        </div>
      </div>
    </>
  );
};

export default aii;

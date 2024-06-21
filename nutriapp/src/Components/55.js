import React from "react";
import img1 from "../Assets/vegg.png";
import img2 from "../Assets/nonveg.png";

import "./55.css";

const Work = () => {
  return (
    <div className="work-section-wrapper">
      <h1 className="b114">So know what you eat</h1>
      <div className="infox">
        <h1 className=" b1144">Veg </h1>
        <div className="infoximg">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="infox">
        <div className="infoximg">
          <img src={img2} alt="" />
        </div>
        <h1 className=" b1145">Nonveg </h1>
      </div>
    </div>
  );
};

export default Work;

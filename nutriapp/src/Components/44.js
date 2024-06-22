import React from "react";
import img1 from "../Assets/infox11.png";
import img2 from "../Assets/infox22.png";

import "./44.css";

const Work = () => {
  return (
    <div className="work-section-wrapper">
      <div className="infox">
        <h1 className=" b113">You Are </h1>
        <div className="infoximg">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="infox">
        <div className="infoximg">
          <img src={img2} alt="" />
        </div>
        <h1 className=" b113">What you eat </h1>
      </div>
    </div>
  );
};

export default Work;

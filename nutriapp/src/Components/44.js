import React, { useEffect } from "react";
import { useState, useRef } from "react";
import img5 from "../Assets/infox11.png";
import img6 from "../Assets/infox22.png";

import "./44.css";

const Work = () => {
  return (
    <div className="work-section-wrapper slide">
      <div className="blackscarf"></div>
      <div className="infox">
        <h1 className=" b113">You Are </h1>
        <div className="infoximg">
          <img src={img5} alt="" />
        </div>
      </div>
      <div className="infox infox2">
        <div className="infoximg">
          <img src={img6} alt="" />
        </div>
        <h1 className=" b113">What you eat </h1>
      </div>
    </div>
  );
};

export default Work;

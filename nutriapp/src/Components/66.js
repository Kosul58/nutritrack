import React from "react";

import { useRef, useState, useEffect } from "react";
import img1 from "../Assets/control-img-1.png";
import img2 from "../Assets/control-img-2.png";
import img3 from "../Assets/control-img-3.png";
import img4 from "../Assets/control-img-4.png";
import img5 from "../Assets/control-img-1.png";
import img6 from "../Assets/control-img-2.png";
import img7 from "../Assets/control-img-3.png";
import img8 from "../Assets/control-img-4.png";

import "./66.css";

const aii = () => {
  const circleref = useRef(null);

  let i = 0,
    j = 1,
    intervalid;

  const intervalfn = () => {
    intervalid = setInterval(() => {
      circleref.current.style.rotate = `-${++i * 90}deg`;
      console.log(i);
    }, 4000);
  };
  return (
    <>
      <div className="containerx">
        <div className="carouselcontainerx">
          <div ref={circleref} className="carouselx">
            <div className="slidex">
              <img src={img1} alt="" />
            </div>
            <div className="slidex">
              <img src={img2} alt="" />
            </div>
            <div className="slidex">
              <img src={img3} alt="" />
            </div>
            <div className="slidex">
              <img src={img4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default aii;

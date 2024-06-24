import React from "react";
import { useLayoutEffect, useRef } from "react";
import AboutBackground from "../Assets/about-background.png";
import img1 from "../Assets/fc11.png";
import img2 from "../Assets/workk.jpg";
import img3 from "../Assets/fc3.png";
import img4 from "../Assets/fc4.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./44.css";
import "./55.css";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".leftslide", {
        scrollTrigger: {
          trigger: ".imzoombox501",
          start: "top 200px",
          end: "top 600px",
          scrub: 0.5,
          markers: true,
        },
        scale: 2.5,
        translateX: "-100px",
        translateY: "600px",
        backgroundColor: "red",
        ease: "2s ease",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="infobox501">
        <div className="textbox501">
          <div className="textbox5011">
            <h2 className="block">so</h2>
            <h3 className="block">Know</h3>
            <h4 className="block">What You Eat</h4>
          </div>
        </div>
        <div className="imzoombox501">
          <div className="imzoombox5011 leftslide"></div>
          <div className="imzoombox5012 rightslide"></div>
          <div className="imzoombox5013 middleslide"></div>
          <div className="imzoombox5014 leftslide"></div>
          <div className="imzoombox5015 rightslide"></div>
        </div>
        <div className="imgbox501"></div>
      </div>
    </>
  );
};

export default Work;

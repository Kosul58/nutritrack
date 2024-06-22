import React, { useEffect } from "react";
import { useState, useRef } from "react";

import img5 from "../Assets/infox11.png";
import img6 from "../Assets/infox22.png";

import "./44.css";

const Work = () => {
  const divToWatchRef = useRef(null); // Create a ref for the div to watch

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]; // We only observe one element, so there will only be one entry
        if (entry.isIntersecting && !hasScrolled) {
          window.scrollBy({
            top: 800, // Adjust the scroll amount as needed
            behavior: "smooth",
          });
          setHasScrolled(true);
        }
      },
      { threshold: 0.4 }
    ); // Adjust threshold to 0.1 to trigger when at least 10% of the div is visible

    if (divToWatchRef.current) {
      observer.observe(divToWatchRef.current); // Observe the target div
    }

    return () => {
      if (divToWatchRef.current) {
        observer.unobserve(divToWatchRef.current); // Clean up observer when component unmounts or ref changes
      }
    };
  }, [hasScrolled]);

  return (
    <>
      <div className="work-section-wrapper slide">
        <div className="blackscarf" ref={divToWatchRef}></div>
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
    </>
  );
};

export default Work;

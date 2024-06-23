import React, { useEffect } from "react";
import { useState, useRef } from "react";

import img5 from "../Assets/infox11.png";
import img6 from "../Assets/infox22.png";

import "./44.css";

const Work = () => {
  const divToWatchRef = useRef(null); // Create a ref for the div to watch
  const divwatcher = useRef(null);
  const textwatch = useRef(null);
  const textwatch2 = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isviewed, setIsViewed] = useState(false);
  const [isviewed2, setIsViewed2] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]; // We only observe one element, so there will only be one entry
        if (entry.isIntersecting && !hasScrolled) {
          window.scrollBy({
            top: 875, // Adjust the scroll amount as needed
            behavior: "smooth",
          });
          setHasScrolled(true);
        }
      },
      { threshold: 0.4 }
    ); // Adjust threshold to 0.1 to trigger when at least 10% of the div is visible

    if (window.scrollY > 750) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
    if (divToWatchRef.current) {
      observer.observe(divToWatchRef.current); // Observe the target div
    }

    return () => {
      if (divToWatchRef.current) {
        observer.unobserve(divToWatchRef.current); // Clean up observer when component unmounts or ref changes
      }
    };
  }, [hasScrolled]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]; // We only observe one element, so there will only be one entry
        if (entry.isIntersecting && !isScrolled) {
          window.scrollBy({
            top: 800, // Adjust the scroll amount as needed
            behavior: "smooth",
          });
          setIsScrolled(true);
        }
      },
      { threshold: 0.05 }
    ); // Adjust threshold to 0.1 to trigger when at least 10% of the div is visible

    if (window.scrollY > 850) {
      setIsScrolled(true);
    }

    if (divwatcher.current) {
      observer.observe(divwatcher.current); // Observe the target div
    }

    return () => {
      if (divwatcher.current) {
        observer.unobserve(divwatcher.current); // Clean up observer when component unmounts or ref changes
      }
    };
  }, [isScrolled]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]; // We only observe one element, so there will only be one entry
        if (entry.isIntersecting && !isviewed) {
          textwatch.current.classList.add("translate");
          isviewed(true);
        } else {
          textwatch.current.classList.remove("translate");
        }
      },
      { threshold: 0.5 }
    ); // Adjust threshold to 0.1 to trigger when at least 10% of the div is visible

    if (textwatch.current) {
      observer.observe(textwatch.current); // Observe the target div
    }

    return () => {
      if (textwatch.current) {
        observer.unobserve(textwatch.current); // Clean up observer when component unmounts or ref changes
      }
    };
  }, [isviewed]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isviewed2) {
            textwatch2.current.classList.add("translate");
            isviewed2(true);
          } else {
            textwatch2.current.classList.remove("translate");
          }
        });
      },
      { threshold: 0.5 }
    ); // Adjust threshold to 0.1 to trigger when at least 10% of the div is visible

    if (textwatch2.current) {
      observer.observe(textwatch2.current); // Observe the target div
    }

    return () => {
      if (textwatch2.current) {
        observer.unobserve(textwatch2.current); // Clean up observer when component unmounts or ref changes
      }
    };
  }, [isviewed2]);

  return (
    <>
      <div className="work-section-wrapper slide">
        <div className="blackscarf" ref={divToWatchRef}></div>
        <div className="infox">
          <h1 className="b113" ref={textwatch}>
            You Are{" "}
          </h1>
          <div className="infoximg block">
            <img src={img5} alt="" />
          </div>
        </div>
        <div className="infox infox2" ref={divwatcher}>
          <div className="infoximg block">
            <img src={img6} alt="" />
          </div>
          <h1 className="b113" ref={textwatch2}>
            What you eat{" "}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Work;

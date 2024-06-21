import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/homeimg.png";
import Navbar from "./1Navbar";
import { FiArrowRight } from "react-icons/fi";
import "./home.css";
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container homeimg">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section b111">
          <h1 className="primary-heading">
            Enjoy Healthy food in your daily life
          </h1>
          <p className="primary-text">
            Track what you eat, how much you eat and your weight.
          </p>
          <button className="secondary-button">
            Calculate Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section b112">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

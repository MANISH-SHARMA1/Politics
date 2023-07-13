import React from "react";
import "./Hero.scss";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  function showLeaders() {
    navigate("/topLeaders");
  }
  return (
    <div className="Hero">
      <div className="hero-content center">
        <h2 className="heading">Deep Dive into Politics</h2>
        <p className="subheading">It's a daily toast</p>
        <button className="cta" onClick={showLeaders}>
          Explore
        </button>
      </div>
    </div>
  );
}

export default Hero;

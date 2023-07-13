import React from "react";
import "./Home.scss";
import Hero from "../hero/Hero";
import TAbout from "../../pages/About/TAbout";
import PAbout from "../../pages/About/PAbout";
import { useSelector } from "react-redux";

function 
Home() {

  const topLeaders = useSelector((state) => state.topLeaderReducer.topLeaders);
  const presentLeaders = useSelector((state) => state.presentLeaderReducer.presentLeaders);
  return (
    <div className="home">
      <Hero />
      <section className="collection container">
        <div className="info">
          <h2 className="heading">India's top leaders</h2>
          <p className="subheading">Fortunes of our country</p>
        </div>
        <div className="content">
          {topLeaders.map((leader) => (
            <TAbout key={leader.attributes.key} leader={leader.attributes} />
          ))}
        </div>
      </section>

      <section className="collection container">
        <div className="info">
          <h2 className="heading">Present leaders in center</h2>
          <p className="subheading">Representative of government</p>
        </div>
        <div className="content">
          {presentLeaders?.map((leader) => (
            <PAbout key={leader.attributes.key} leader={leader.attributes} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

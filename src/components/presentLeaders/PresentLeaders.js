import React from "react";
import "./PresentLeaders.scss";
import PLeader from "../pLeader/PLeader";
import { useSelector } from "react-redux";

function PresentLeaders() {


const PLeaders = useSelector((state) => state.presentLeaderReducer.presentLeaders);

  return (
    <div className="main">
      {PLeaders?.map((leader) => (
        <PLeader key={leader.attributes.key} leader={leader.attributes} />
      ))}
    </div>
  );
}

export default PresentLeaders;

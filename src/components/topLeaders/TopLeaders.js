import React from "react";
import "./TopLeaders.scss";
import Leader from "../Leader/Leader";
import { useSelector } from "react-redux";

function TopLeaders() {

  const topLeaders = useSelector((state) => state.topLeaderReducer.topLeaders);

  return (
    <div>
      {topLeaders?.map((leader) => (
        <Leader key={leader.key} leader={leader.attributes} />
      ))}
    </div>
  );
}

export default TopLeaders;

import React from "react";
import "./PLeader.scss";
import { useNavigate } from "react-router-dom";

function PLeader({ leader }) {
  const navigate = useNavigate();
  function detailPage() {
    navigate(`/presentLeaders/${leader.key}`);
  }
  return (
    <div className="card">
      <div className="image">
        <img src={leader?.images?.data.attributes.url} alt={leader.name} />
      </div>
      <div className="leader">
        <h2>{leader.name}</h2>
        <p>{leader.office}</p>
      </div>
      <button className="button" onClick={detailPage}>
        Explore
      </button>
    </div>
  );
}

export default PLeader;

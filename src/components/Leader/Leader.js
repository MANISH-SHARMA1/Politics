import React from "react";
import "./Leader.scss";
import { useNavigate } from "react-router-dom";

function Leader({ leader }) {
  const navigate = useNavigate();

  function detailPage() {
    navigate(`/topLeaders/${leader.key}`);
  }

  return (
    <div className="card">
      <div className="image">
        <img src={leader.images?.data.attributes?.url} alt="leader" />
      </div>
      <div className="leader">
        <h2>{leader.name}</h2>
        <p>{leader.description}</p>
      </div>
      <button className="button" onClick={detailPage}>
        Explore
      </button>
    </div>
  );
}

export default Leader;

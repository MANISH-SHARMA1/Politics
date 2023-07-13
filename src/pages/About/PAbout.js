import React from "react";
import "./About.scss";
import { useNavigate } from "react-router-dom";

function PAbout({ leader }) {
  const navigate = useNavigate();
  function detailPage(){
    navigate(`/presentLeaders/${leader.key}`);
  }
  return (
    
    <div 
  
      className="Category"
      onClick={detailPage}
      style={{ backgroundImage: `url(${leader?.images?.data.attributes.url})` }}
    >
      <div className="category-content center">
        <h3 className="heading">{leader.name}</h3>
      </div>
    </div>
    
  );
}

export default PAbout;

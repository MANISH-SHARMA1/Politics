import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/politic.png";
import "./Navbar.scss";

function Navbar() {
  
  return (
    <>
      <nav className="Navbar">
        <div className="nav-container">
          <div className="nav-left">
            <Link className="politics" to="/">
              {" "}
              <img src={logo} alt="logo" />
              Politics
            </Link>
          </div>
          <div className="nav-right">
            <div className="link-group">
              <Link className="link" to="/topLeaders">
                Top Leaders
              </Link>
              <Link className="link" to="/presentLeaders">
                Present Leaders
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

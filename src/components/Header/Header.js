import React from "react";
import "./Header.css";
import profile from "../../assets/headshot.jpeg";
import Michigan from "../../assets/mich.svg";
import Uber from "../../assets/uber.svg";
import Amazon from "../../assets/amzn.svg";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>
          Hi there, I'm <span className="highlight">Kushal</span>{" "}
          <span className="gentle-hover-shake">👋</span>
        </h1>
        <p>
          CS @ <span className="highlight">U of M</span>
        </p>
        <p>
          SWE @ <span className="highlight">Uber</span>{" "}
        </p>
        {/* <p>
          Prev @ <span className="highlight">Amazon</span>{" "}
        </p> */}
        <div>
          <img className="blockM" src={Michigan}></img>
          <span className="highlight bar">|</span>
          <img className="company" src={Uber}></img>
          <span className="highlight bar">|</span>
          <img
            className="company"
            src={Amazon}
            style={{ height: "70px" }}
          ></img>
        </div>
      </div>
      <img src={profile} alt="headshot" className="profile-pic" />
    </header>
  );
}

export default Header;

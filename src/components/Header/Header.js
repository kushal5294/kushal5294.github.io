import React from "react";
import "./Header.css";
import profile from "../../assets/headshot.jpeg";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>
          Hi there, I'm <span className="highlight">Kushal</span>{" "}
          <span className="gentle-hover-shake">👋</span>
        </h1>
        <p>
          <span className="highlight">Junior</span> studying computer science at{" "}
          <span className="highlight">The University of Michigan</span>
        </p>
      </div>
      <img
        loading="lazy"
        src={profile}
        alt="headshot"
        className="profile-pic"
      />
    </header>
  );
}

export default Header;

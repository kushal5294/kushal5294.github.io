import React from "react";
import "./Project.css";

function Project({ project }) {
  let primaryColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--primary-color");
  let secondaryColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--secondary-color");
  const colors = [primaryColor, secondaryColor];
  const textColor = ["black", "white"];
  let colorIndex = 0;
  function getColor() {
    return colors[colorIndex];
  }
  function getTextColor() {
    const color = textColor[colorIndex];
    colorIndex += 1;
    if (colorIndex === textColor.length) {
      colorIndex = 0;
    }
    return color;
  }
  function isMobile() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }
  const mobileDevice = isMobile();
  function renderFace() {
    if (mobileDevice) {
      return (
        <div className="links-container">
          {project.link1 !== "" ? (
            <>
              <a className="link-button" href={project.link1}>
                {project.link1_button}
              </a>
            </>
          ) : null}
          {project.link2 !== "" ? (
            <>
              <a className="link-button" href={project.link2}>
                {project.link2_button}
              </a>
            </>
          ) : null}
          {project.link3 !== "" ? (
            <>
              <a className="link-button" href={project.link3}>
                {project.link3_button}
              </a>
            </>
          ) : null}
        </div>
      );
    } else {
      return (
        <div className="tags">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="tag"
              style={{ backgroundColor: getColor(), color: getTextColor() }}
            >
              {tag}
            </span>
          ))}
        </div>
      );
    }
  }

  return (
    <div className={`project-card ${mobileDevice ? "mobile" : ""}`}>
      <div className="project-card-inner">
        <div className="face">
          <div
            className="project-icon-container"
            style={{ height: `${project.icon_size}` }}
          >
            <img src={project.icon} alt="icon" className="project-icon" />
          </div>
          <h3>{project.title}</h3>
          {renderFace()}
        </div>
        <div className="back">
          <div className="description-container">
            <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
          </div>
          <div className="links-container">
            {project.link1 !== "" ? (
              <>
                <a className="link-button" href={project.link1}>
                  {project.link1_button}
                </a>
              </>
            ) : null}
            {project.link2 !== "" ? (
              <>
                <a className="link-button" href={project.link2}>
                  {project.link2_button}
                </a>
              </>
            ) : null}
            {project.link3 !== "" ? (
              <>
                <a className="link-button" href={project.link3}>
                  {project.link3_button}
                </a>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

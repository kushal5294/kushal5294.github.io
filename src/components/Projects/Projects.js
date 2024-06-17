import React from "react";
import Project from "./Project";
import "./Projects.css";
import Football from "../../assets/football.png";
import Search_Engine from "../../assets/search_engine.png";
import Portfolio from "../../assets/portfolio.png";
import Alt from "../../assets/accessibility.png";
import Basketball from "../../assets/basketball.png";
import Instagram from "../../assets/instagram.png";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "NFL Spread Algorithm",
    concise: "ML model that won +25 units in the 2023 NFL season",
    description:
      "<ul><li>Neural network regression model that predicts the score differential of future NFL matches</li><li>Finished +25 units during the 2023-2024 NFL season against the DraftKings sportsbook</li></ul>",
    tags: ["Python", "TensorFlow", "Selenium", "Pandas", "ML"],
    icon: Football,
    icon_size: "110px",
    link1: "https://github.com/kushal5294/NFL_Spread",
    link1_button: "Source Code",
    link2: "/nfl_spread.html",
    link2_button: "Weekly Picks",
    link3:
      "https://docs.google.com/spreadsheets/d/1wqIOPtzO4Edi57mzGHW_4gPbAyrmfRpjW2_MfSkotRI/edit#gid=0",
    link3_button: "Performance Tracking",
  },
  {
    title: "Search Engine",
    concise:
      "Scalable platform that returns the most relevant results from over 2,936 Wikepedia pages",
    description:
      "Full-stack application featuring:<ul> <li>MapReduce pipeline that constructs an inverted index of 2,936 Wikipedia pages</li><li>Flask-based REST API for search queries</li><li>React front-end UI</li></ul>",
    tags: ["React", "Python", "Hadoop", "Flask", "SQLite", "AWS"],
    icon: Search_Engine,
    icon_size: "80px",
    link1: "",
    link1_button: "",
    link2: "/search_engine.html",
    link2_button: "Video Demo",
    link3: "",
    link3_button: "",
  },
  {
    title: "Personal Portfolio",
    concise: "Static site showcasing personal projects",
    description: "Static site showcasing personal projects",
    tags: ["JavaScript", "HTML", "CSS"],
    icon: Portfolio,
    icon_size: "80px",
    link1: "https://github.com/kushal5294/kushal5294.github.io",
    link1_button: "Source Code",
    link2: "",
    link2_button: "",
    link3: "",
    link3_button: "",
  },
  {
    title: "Auto-Captioning Tool",
    concise: "Automatically generates alt text for images in Wordpress",
    description:
      "<ul><li>Automatically generates alt text for images in Wordpress</li><li>Regeneration feature that accepts user feedback to improve all text</li></ul>",
    tags: ["PHP", "JavaScript", "AI", "Accessibility", "Wordpress"],
    icon: Alt,
    icon_size: "75px",
    link1: "",
    link1_button: "",
    link2: "",
    link2_button: "",
    link3: "",
    link3_button: "",
  },
  {
    title: "March Madness Bracket Predictor",
    concise: "ML model that finished in the 84th percentile in 2023",
    description:
      "Machine learning model that finished in the 84th percentile on ESPN's Tournament Challenge in 2023",
    tags: ["Python", "TensorFlow", "Beautiful Soup", "ML"],
    icon: Basketball,
    icon_size: "100px",
    link1: "https://www.wolverinesportsanalytics.com/featured",
    link1_button: "Full Bracket",
    link2: "",
    link2_button: "",
    link3: "https://www.wolverinesportsanalytics.com/projects/march-madness/",
    link3_button: "More",
  },
  {
    title: "Instagram Clone",
    concise:
      "Client side dynamic platform that emulates the functionality of Instagram",
    description:
      "Client side dynamic platform that emulates the functionality of Instagram",
    tags: ["React", "Python", "Flask", "Rest API", "SQLite", "AWS"],
    icon: Instagram,
    icon_size: "80px",
    link1: "",
    link1_button: "",
    link2: "",
    link2_button: "",
    link3: "",
    link3_button: "",
  },
];

function Projects() {
  const [gridToggle, setGridToggle] = useState(true);
  const toggle = () => setGridToggle(!gridToggle);
  useEffect(() => {
    // if we are on small screen
    if (window.innerWidth <= 640) {
      setGridToggle(false);
    }
  }, []);

  return (
    <section className="projects">
      <h2>
        Recent <span className="highlight">Projects</span>
      </h2>
      <button className="toggle" onClick={toggle}>
        {gridToggle ? "Hide Projects" : "Show Projects"}
      </button>
      {gridToggle ? (
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default Projects;

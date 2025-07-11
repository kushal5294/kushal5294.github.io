import React from "react";
import Project from "./Project";
import "./Projects.css";
import Football from "../../assets/football.png";
import Search_Engine from "../../assets/search_engine.png";
import Portfolio from "../../assets/portfolio.png";
import Alt from "../../assets/accessibility.png";
import DS from "../../assets/distributed-database.png";
import BallotBank from "../../assets/BallotBank.png";
import Basketball from "../../assets/basketball.png";
import Instagram from "../../assets/instagram.png";
import GymRat from "../../assets/gymRat.png";
import { useState, useEffect } from "react";

// Link 2 is for same website pages and Link 4 is hidden on mobile devices
const projects = [
  {
    title: "NFL Spread Predictor",
    concise: "ML model that won +37 units in the 2023 NFL season",
    description:
      "<ul><li>Neural network regression model that predicts the score differential of future NFL matches</li><li>Finished +37 units during the 2023-2024 NFL season against the DraftKings sportsbook</li></ul>",
    tags: ["Python", "TensorFlow", "Selenium", "Pandas", "ML"],
    icon: Football,
    icon_size: "110px",
    link1: "https://github.com/kushal5294/NFL_Spread",
    link1_button: "Source Code",
    link2: "/nfl_spread.html",
    link2_button: "Weekly Picks",
    link3: "",
    link3_button: "",
    link4: "",
    link4_button: "",
  },
  {
    title: "KV Database",
    concise:
      "Fault-tolerant & scalable key-value store with Paxos-based consensus and sharding",
    description:
      "<ul><li>Fault-tolerant under replica crashes and network drops</li><li>Multi-instance Paxos for linearizable consistency</li><li>Horizontally scalable via sharding with dynamic rebalancing</li></ul>",
    tags: ["Go", "Paxos", "Sharding", "Distributed Systems", "RPC"],
    icon: DS,
    icon_size: "100px",
    link1: "",
    link1_button: "",
    link2: "",
    link2_button: "",
    link3: "",
    link3_button: "",
    link4: "",
    link4_button: "",
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
    link2: "https://kushal5294.github.io/",
    link2_button: "Live Demo",
    link3: "",
    link3_button: "",
    link4: "",
    link4_button: "",
  },
  {
    title: "Auto Alt Text",
    concise:
      "Automatically generates alt text for images in Wordpress, Drupal, and Google Docs Suite",
    description:
      "<ul><li>Automatic generation for images</li><li>Regeneration feature</li><li>Tools for  Wordpress, Drupal, and Google Docs Suite</li></ul>",
    tags: ["PHP", "JavaScript", "Gen AI", "Accessibility", "Azure", "Open AI"],
    icon: Alt,
    icon_size: "75px",
    link1: "https://github.com/orgs/UM-ITS-MDP-2024/repositories",
    link1_button: "Source Code",
    link2: "/auto_alt.html",
    link2_button: "Video Demo",
    link3: "",
    link3_button: "",
    link4: "",
    link4_button: "",
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
    link4: "",
    link4_button: "",
  },
  // {
  //   title: "Ballot Bank",
  //   concise: "iOS crypto wallet and blockchain voting app",
  //   description:
  //     "iOS application featuring:<ul><li>Live valuation of top 100 cryptocurrencies</li><li>Log crypto wallet to view live portfolio worth and graphs</li><li>Fully decentralized voting platform via mock blockchain</li></ul>",
  //   tags: ["Swift", "SwiftUI", "Blockchain", "MongoDB", "iOS", "Crypto"],
  //   icon: BallotBank,
  //   icon_size: "80px",
  //   link1: "https://github.com/kushal5294/Ballot_Bank",
  //   link1_button: "Source Code",
  //   link2: "/ballot_bank.html",
  //   link2_button: "Video Demo",
  //   link3: "",
  //   link3_button: "",
  //   link4: "",
  //   link4_button: "",
  // },
  // {
  //   title: "March Madness Bracket Predictor",
  //   concise: "ML model that finished in the 84th percentile in 2023",
  //   description:
  //     "Machine learning model that finished in the 84th percentile on ESPN's Tournament Challenge in 2023",
  //   tags: ["Python", "TensorFlow", "Beautiful Soup", "ML"],
  //   icon: Basketball,
  //   icon_size: "100px",
  //   link1: "https://www.wolverinesportsanalytics.com/featured",
  //   link1_button: "Full Bracket",
  //   link2: "",
  //   link2_button: "",
  //   link3: "https://www.wolverinesportsanalytics.com/projects/march-madness/",
  //   link3_button: "More",
  //   link4: "",
  //   link4_button: "",
  // },
  // {
  //   title: "Instagram Clone",
  //   concise:
  //     "Client side dynamic platform that emulates the functionality of Instagram",
  //   description:
  //     "Client side dynamic platform that emulates the functionality of Instagram",
  //   tags: ["React", "Python", "Flask", "Rest API", "SQLite", "AWS"],
  //   icon: Instagram,
  //   icon_size: "80px",
  //   link1: "",
  //   link1_button: "",
  //   link2: "",
  //   link2_button: "",
  //   link3: "",
  //   link3_button: "",
  //   link4: "",
  //   link4_button: "",
  // },
  {
    title: "GymRat",
    concise: "Social networking app promoting friendly motivation and health",
    description:
      "Social networking app promoting friendly motivation and health<br><br> ⚙️ In Progress ⚙️",
    tags: ["Swift", "SwiftUI", "Social Media", "FireBase", "iOS"],
    icon: GymRat,
    icon_size: "100px",
    link1: "https://github.com/kushal5294/Gymstagram",
    link1_button: "Source Code",
    link2: "",
    link2_button: "",
    link3: "",
    link3_button: "",
    link4: "",
    link4_button: "",
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
            <div className="project">
              <Project key={index} project={project} />
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default Projects;

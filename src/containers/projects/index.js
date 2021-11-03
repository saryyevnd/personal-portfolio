import React, { useRef } from "react";
import { ProjectCard } from "../../components";
import "./Project.css";

const Default = () => {
  const repo = useRef([]);

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {repo.current.map((v, i) => {
          return <ProjectCard repo={v} key={v.node.id} />;
        })}
      </div>
      <a className="resume-btn" href="https://github.com/nurySar97/">
        More Projects (Github)
      </a>
    </div>
  );
};

export default Default;

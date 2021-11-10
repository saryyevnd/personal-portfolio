import "./style.css";
import React from "react";
import { ProjectCard, Section } from "../../components";
import { Fade } from "react-reveal";
import { projectsHeader, projects } from "../../portfolio";
import { ProjectsSvg } from "./../../svg";
import { useTheme } from "../../hooks";

const Default = () => {
  const { theme } = useTheme();

  return (
    <React.Fragment>
      <div className="projects">
        <Fade bottom duration={2000} distance="40px">
          <Section>
            <Section.Row>
              <Section.Col>
                <ProjectsSvg theme={theme} />
              </Section.Col>
              <Section.Col>
                <Section.ColTitle center>
                  {projectsHeader.title}
                </Section.ColTitle>
                <Section.ColSubtext center>
                  {projectsHeader["description"]}
                </Section.ColSubtext>
              </Section.Col>
            </Section.Row>
          </Section>
        </Fade>

        <Section.Button
          onClick={() => window.open("https://github.com/nurySar97")}
        >
          More Projects (Github)
        </Section.Button>

        <div className="projects__cards">
          {projects.data.map((repo, index) => {
            return <ProjectCard key={index} repo={repo} theme={theme} />;
          })}
        </div>

        <Section.Button
          onClick={() => window.open("https://github.com/nurySar97")}
        >
          More Projects (Github)
        </Section.Button>
      </div>
    </React.Fragment>
  );
};

export default Default;

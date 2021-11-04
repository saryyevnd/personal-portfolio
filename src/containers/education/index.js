import "./style.css";
import React from "react";
import { EducationCard, Section } from "../../components";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";

const Default = ({ theme }) => {
  return (
    <div className="educations">
      <Section>
        <Fade bottom duration={2000} distance="20px">
          <Section.Title center>Degrees Received</Section.Title>
        </Fade>
        <Fade right duration={2000} distance="40px">
          <div className="educations__box">
            {degrees.degrees.map((degree, index) => {
              return (
                <EducationCard key={index} degree={degree} theme={theme} />
              );
            })}
          </div>
        </Fade>
      </Section>
    </div>
  );
};

export default Default;

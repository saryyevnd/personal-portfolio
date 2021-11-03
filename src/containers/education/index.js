import React from "react";
import { DegreeCard, Section } from "../../components";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";

const Default = ({ theme }) => {
  return (
    <div className="educations">
      <Section>
        <Fade bottom duration={2000} distance="20px">
          <Section.Title center>Degrees Received</Section.Title>
        </Fade>

        <div>
          {degrees.degrees.map((degree, index) => {
            return <DegreeCard key={index} degree={degree} theme={theme} />;
          })}
        </div>
      </Section>
    </div>
  );
};

export default Default;

import "./style.css";
import React from "react";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import { CertificationCard, Section } from "../../components";

const Default = ({ theme }) => {
  return (
    <div className="certifications">
      <Section>
        <Fade bottom duration={2000} distance="20px">
          <Section.Title center>Certifications</Section.Title>
        </Fade>
      </Section>

      <div className="certifications__box">
        {certifications.certifications.map((cert, index) => {
          return (
            <CertificationCard key={index} certificate={cert} theme={theme} />
          );
        })}
      </div>
    </div>
  );
};

export default Default;

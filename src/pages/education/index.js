import React from "react";
import { CertificationsContainer, EducationContainer } from "../../containers";
import { EducationSvg } from "../../svg";
import { Fade } from "react-reveal";
import { useTheme } from "../../hooks";
import { Section } from "../../components";

const Default = () => {
  const { theme } = useTheme();
  return (
    <div className="education">
      <Fade bottom duration={2000} distance="40px">
        <Section>
          <Section.Row>
            <Section.Col>
              <EducationSvg theme={theme} />
            </Section.Col>
            <Section.Col>
              <Section.ColTitle center>Education</Section.ColTitle>
              <Section.ColSubtitle center>
                Basic Qualification and Certifications
              </Section.ColSubtitle>
              <Section.ColSubtext center>
                I actively learning, practicing, add to resume
              </Section.ColSubtext>
            </Section.Col>
          </Section.Row>
        </Section>
      </Fade>
      <EducationContainer theme={theme} />
      <CertificationsContainer theme={theme} />
    </div>
  );
};

export default Default;

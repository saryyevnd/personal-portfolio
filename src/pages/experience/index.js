import React from "react";
import { Fade } from "react-reveal";
import { ExperienceAccordionContainer } from "../../containers";
import { ExperienceSvg } from "./../../svg";
import { experience } from "../../portfolio";
import { useTheme } from "../../hooks";
import { Section } from "../../components";

const Default = () => {
  const { theme } = useTheme();
  return (
    <div className="experience">
      <Fade bottom duration={2000} distance="40px">
        <Section>
          <Section.Row>
            <Section.Col>
              <ExperienceSvg theme={theme} />
            </Section.Col>
            <Section.Col>
              <Section.ColTitle center>{experience.title}</Section.ColTitle>
              <Section.ColSubtitle center>
                {experience["subtitle"]}
              </Section.ColSubtitle>
              <Section.ColSubtext center>
                {experience["description"]}
              </Section.ColSubtext>
            </Section.Col>
          </Section.Row>
        </Section>
      </Fade>
      <ExperienceAccordionContainer
        sections={experience["sections"]}
        theme={theme}
      />
    </div>
  );
};

export default Default;

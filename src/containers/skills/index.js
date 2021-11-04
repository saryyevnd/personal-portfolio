import React from "react";
import { Fade } from "react-reveal";
import { Languages, Section } from "../../components";
import { useTheme } from "../../hooks";
import { skills } from "../../portfolio";
import { FullStackSvg, CloudInfraSvg } from "./../../svg";

const SkillSvg = {
  FullStackSvg,
  CloudInfraSvg,
};

const Default = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Section>
        <Section.Title center>
          <Fade bottom duration={3000} distance="20px">
            Here's what I do
          </Fade>
        </Section.Title>

        {skills.data.map((skill, index) => {
          const ComponentSvg = SkillSvg[skill.fileName];
          const isZero = !(index % 2);
          return (
            <Section.Row key={index}>
              <Section.Col isZero={!isZero}>
                <Fade right={!isZero} left={isZero} duration={2500}>
                  <ComponentSvg theme={theme} />
                </Fade>
              </Section.Col>

              <Section.Col isZero={isZero}>
                <Fade right={isZero} left={!isZero} duration={4000}>
                  <Section.ColTitle>{skill.title}</Section.ColTitle>
                </Fade>
                <Fade right={isZero} left={!isZero} duration={700}>
                  <Languages logos={skill.softwareSkills} />
                </Fade>

                {skill.skills.map((skillSentence, index) => (
                  <Fade
                    key={index}
                    right={isZero}
                    left={!isZero}
                    duration={(index + 1) * 800}
                  >
                    <Section.ColSubtext>{skillSentence}</Section.ColSubtext>
                  </Fade>
                ))}
              </Section.Col>
            </Section.Row>
          );
        })}
      </Section>

      <div></div>
    </div>
  );
};

export default Default;

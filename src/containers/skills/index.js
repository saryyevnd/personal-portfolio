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
          <Fade bottom duration={2000} distance="20px">
            Here's what I do
          </Fade>
        </Section.Title>

        {skills.data.map((skill, index) => {
          const ComponentSvg = SkillSvg[skill.fileName];
          const isZero = !(index % 2);
          return (
            <Section.Row key={index}>
              <Section.Col isZero={!isZero}>
                <Fade right={!isZero} left={isZero} duration={2000}>
                  <ComponentSvg theme={theme} />
                </Fade>
              </Section.Col>

              <Section.Col isZero={isZero}>
                <Fade right={isZero} left={!isZero} duration={1000}>
                  <Section.ColTitle>{skill.title}</Section.ColTitle>
                </Fade>
                <Fade right={isZero} left={!isZero} duration={1500}>
                  {/* <SoftwareSkill logos={skill.softwareSkills} /> */}
                  <Languages logos={skill.softwareSkills} />
                </Fade>
                <Fade right={isZero} left={!isZero} duration={2000}>
                  {skill.skills.map((skillSentence, index) => (
                    <Section.ColSubtext key={index}>
                      {skillSentence}
                    </Section.ColSubtext>
                  ))}
                </Fade>
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

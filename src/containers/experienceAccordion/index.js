import React from "react";
import { ExperienceCard } from "../../components";
import Accordion from "react-bootstrap/Accordion";
import { AccordionItemStyled, AccordionHeaderStyled } from "./styled";

const Default = (props) => {
  const theme = props.theme;

  return (
    <div className="experience-accord">
      <Accordion defaultActiveKey="0">
        {props.sections.map((section, index) => {
          return (
            <AccordionItemStyled eventKey="0" key={index}>
              <AccordionHeaderStyled>{section["title"]}</AccordionHeaderStyled>
              <Accordion.Body>
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard
                      key={index}
                      experience={experience}
                      theme={theme}
                    />
                  );
                })}
              </Accordion.Body>
            </AccordionItemStyled>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Default;

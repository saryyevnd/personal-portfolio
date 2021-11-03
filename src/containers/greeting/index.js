import React from "react";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import { Section, SocialMedia } from "../../components";
import { FeelingProudSvg } from "../../svg";
import { useTheme } from "../../hooks";

const Default = () => {
  const { theme } = useTheme();
  const history = useHistory();

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greeting">
        <Fade bottom duration={2000} distance="40px">
          <Section>
            <Section.Row>
              <Section.Col>
                <Section.Title>{greeting.title}</Section.Title>
                <Section.ColSubtext>
                  <span>I'm </span>
                  <span className="user__fullname">{greeting.full_name}.</span>
                  {greeting.subTitle}
                </Section.ColSubtext>
                <SocialMedia />
                <Section.Button
                  onClick={() => history.push("/contact")}
                  children={"Contact Me"}
                >
                  Contact
                </Section.Button>
              </Section.Col>
              <Section.Col>
                <FeelingProudSvg theme={theme} />
              </Section.Col>
            </Section.Row>
          </Section>
        </Fade>
      </div>
    </Fade>
  );
};

export default Default;

import React from "react";
import { Section, SocialMedia } from "../../components";
import { BlogsSvg } from "../../svg";
import { Fade } from "react-reveal";
import { greeting, contactPageData } from "../../portfolio";
import { useTheme } from "../../hooks";
import Me from "./me2.jpg";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

const Default = () => {
  const { theme } = useTheme();
  return (
    <div className="contact">
      <Fade bottom duration={1000} distance="40px">
        <Section>
          <Section.Row>
            <Section.Col center>
              <img
                className="profile-pic"
                src={Me}
                alt="Me"
                width="350"
                style={{ borderRadius: "1rem" }}
              />
            </Section.Col>
            <Section.Col center>
              <Section.ColTitle center>{ContactData["title"]}</Section.ColTitle>
              <Section.ColSubtext center>
                {ContactData["description"]}
              </Section.ColSubtext>
              <SocialMedia />
              <Section.Button onClick={() => window.open(greeting.resumeLink)}>
                See my Resume
              </Section.Button>
            </Section.Col>
          </Section.Row>
        </Section>
      </Fade>
      <Fade bottom duration={1000} distance="40px">
        <Section>
          <Section.Row>
            <Section.Col center>
              <Section.ColTitle center>{blogSection["title"]}</Section.ColTitle>
              <Section.ColSubtext center>
                {blogSection["subtitle"]}
              </Section.ColSubtext>
              <Section.Button onClick={() => window.open(blogSection.link)}>
                Medium Blogs
              </Section.Button>
            </Section.Col>
            <Section.Col>
              <BlogsSvg theme={theme} />
            </Section.Col>
          </Section.Row>
        </Section>
      </Fade>
    </div>
  );
};

export default Default;

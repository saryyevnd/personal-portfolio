import React from "react";
import { socialMediaLinks } from "../../portfolio";
import { SocialIconStyled } from "./styled";

const Default = () => {
  return (
    <div className="social-media">
      {socialMediaLinks.map(({ color, icon, link }, index) => {
        return (
          <SocialIconStyled
            key={index}
            color={color}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={icon} />
          </SocialIconStyled>
        );
      })}
    </div>
  );
};

export default Default;

import "./style.css";
import React from "react";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio";
import { useTheme } from "../../hooks";

const Default = () => {
  const { theme } = useTheme();

  return (
    <div className="footer">
      <Fade>
        <p className="footer__text" style={{ color: theme.secondaryText }}>
          Made with by {greeting.title2}
        </p>
      </Fade>
    </div>
  );
};

export default Default;

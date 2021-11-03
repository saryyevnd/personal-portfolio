import "./style.css";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { ItemStyled } from "./styled";

const Default = (props) => {
  return (
    <ul className="languages">
      {props.logos.map(({ name, skillName, icon, style }, index) => {
        return (
          <OverlayTrigger
            index={index}
            key={name}
            overlay={
              <Tooltip className="languages__tooltip">
                <strong>{name}</strong>
              </Tooltip>
            }
          >
            <ItemStyled name={skillName}>
              <span
                className="iconify"
                data-icon={icon}
                data-inline="false"
                style={style || {}}
              />
            </ItemStyled>
          </OverlayTrigger>
        );
      })}
    </ul>
  );
};

export default Default;

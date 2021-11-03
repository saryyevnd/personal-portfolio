import React from "react";
import { ContentStyled } from "./styled";

const Default = (props) => {
  return <ContentStyled>{props.children}</ContentStyled>;
};

export default Default;

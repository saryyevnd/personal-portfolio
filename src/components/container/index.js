import React from "react";
import { ContainerStyled } from "./styled";

const Default = (props) => {
  return <ContainerStyled>{props.children}</ContainerStyled>;
};

export default Default;

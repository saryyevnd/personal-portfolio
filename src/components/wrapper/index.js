import React from "react";
import { WrapperStyled } from "./styled";

const Default = (props) => {
  return <WrapperStyled {...props}>{props.children}</WrapperStyled>;
};

export default Default;

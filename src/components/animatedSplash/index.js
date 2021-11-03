import React from "react";
import { BallStyled, LoadingStyled, LogoWrapperStyled } from "./styled";

const Default = () => {
  return (
    <LogoWrapperStyled>
      <LoadingStyled>
        <BallStyled />
        <BallStyled />
        <BallStyled />
        <BallStyled />
        <BallStyled />
        <BallStyled />
        <BallStyled />
      </LoadingStyled>
    </LogoWrapperStyled>
  );
};

export default Default;

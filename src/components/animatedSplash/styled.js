import styled, { keyframes } from "styled-components";

const right = keyframes`
    0% {
        transform: translate(-15px);
        -webkit-transform: translate(-15px);
        -moz-transform: translate(-15px);
    }
    50% {
        transform: translate(15px);
        -webkit-transform: translate(15px);
        -moz-transform: translate(15px);
    }
    100% {
        transform: translate(-15px);
        -webkit-transform: translate(-15px);
        -moz-transform: translate(-15px);
    }
`;

const left = keyframes`
    0% {
    transform: translate(15px);
    -moz-transform: translate(15px);
    -webkit-transform: translate(15px);
    }
    50% {
        transform: translate(-15px);
        -moz-transform: translate(-15px);
        -moz-transform: translate(-15px);
    }
    100% {
        transform: translate(15px);
        -moz-transform: translate(15px);
        -moz-transform: translate(-15px);
    }
`;

const LogoWrapperStyled = styled.div`
  height: 50vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20%;
`;

const LoadingStyled = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const BallStyled = styled.div`
  width: 90px;
  height: 10px;
  margin: 7px auto;
  border-radius: 50px;

  &:nth-child(1) {
    background: #ff005d;
    -webkit-animation: ${right} 1s infinite ease-in-out;
    -moz-animation: ${right} 1s infinite ease-in-out;
    animation: ${right} 1s infinite ease-in-out;
  }

  &:nth-child(2) {
    background: #35ff99;
    -webkit-animation: ${left} 1.1s infinite ease-in-out;
    -moz-animation: ${left} 1.1s infinite ease-in-out;
    animation: ${left} 1.1s infinite ease-in-out;
  }

  &:nth-child(3) {
    background: #008597;
    -webkit-animation: ${right} 1.05s infinite ease-in-out;
    -moz-animation: ${right} 1.05s infinite ease-in-out;
    animation: ${right} 1.05s infinite ease-in-out;
  }

  &:nth-child(4) {
    background: #ffcc00;
    -webkit-animation: ${left} 1.15s infinite ease-in-out;
    -moz-animation: ${left} 1.15s infinite ease-in-out;
    animation: ${left} 1.15s infinite ease-in-out;
  }

  &:nth-child(5) {
    background: #2d3443;
    -webkit-animation: ${right} 1.1s infinite ease-in-out;
    -moz-animation: ${right} 1.1s infinite ease-in-out;
    animation: ${right} 1.1s infinite ease-in-out;
  }

  &:nth-child(6) {
    background: #ff7c35;
    -webkit-animation: ${left} 1.05s infinite ease-in-out;
    -moz-animation: ${left} 1.05s infinite ease-in-out;
    animation: ${left} 1.05s infinite ease-in-out;
  }

  &:nth-child(7) {
    background: #4d407c;
    -webkit-animation: ${right} 1s infinite ease-in-out;
    -moz-animation: ${right} 1s infinite ease-in-out;
    animation: ${right} 1s infinite ease-in-out;
  }
`;

export { LogoWrapperStyled, LoadingStyled, BallStyled };

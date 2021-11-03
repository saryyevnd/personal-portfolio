import styled from "styled-components";

const SocialIconStyled = styled.a`
  margin-bottom: 10px;

  & > i {
    color: white;
    border-radius: 2.6rem;
    cursor: pointer;
    display: inline-block;
    font-size: 1.3rem;
    height: 2.6rem;
    line-height: 2.6rem;
    margin: 0 5px;
    position: relative;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 2.6rem;
    margin-bottom: 10px;
    transition: all 0.2s ease-in-out;

    background-color: ${({ color }) => color};
  }

  & > i:hover {
    box-shadow: 0 5px 15px ${({ color }) => color};
  }
`;

export { SocialIconStyled };

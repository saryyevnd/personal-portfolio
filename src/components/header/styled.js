import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderLogoLinkStyled = styled(NavLink)`
  line-height: normal;

  font-size: 1.5em;
`;

const HeaderLogoTextStyled = styled.span`
  font-family: "Google Sans Regular";
  font-weight: bold;

  letter-spacing: 3px;

  color: ${({ theme }) => theme.text};
`;

const HeaderItemStyled = styled.li`
  transition: all 0.2s ease-in-out;

  border-radius: 0.25rem;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
    box-shadow: 0 2px 10px ${({ hoverColor }) => hoverColor};
    color: #fff;
  }

  &:hover a {
    color: #fff;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const HeaderItemLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;

  font-size: 1.2rem;
  padding: 0 0.75em;
  height: 50px;

  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.text};
`;

const HeaderDropdownStyled = styled(Dropdown)`
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const HeaderMenuStyled = styled(Dropdown.Menu)`
  border-radius: 0.25rem !important;
  overflow: hidden;
  padding: 0;
  background-color: transparent !important;
`;

const HeaderMenuItemStyled = styled.li`
  transition: all 0.2s ease-in-out;

  background-color: ${({ hoverColor }) => hoverColor};

  & a {
    color: #fff;
  }

  &:hover {
    box-shadow: 0 2px 10px ${({ hoverColor }) => hoverColor};
    color: #fff;
  }

  &:hover a {
    color: #fff;
  }
`;

const HeaderThemeBtnStyled = styled.button`
  cursor: pointer;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: all 0.25s linear;

  width: 50px;
  height: 50px;
  margin-left: 15px;
  padding-top: 0.25rem;

  background-color: ${({ theme }) =>
    theme.name === "light" ? "#7CD1F7" : "#292C3F"};

  &:hover {
    box-shadow: 0 3px 8px
      ${({ theme }) => (theme.name === "light" ? "#F7D774" : "#646464")};
  }
`;

export {
  HeaderThemeBtnStyled,
  HeaderLogoLinkStyled,
  HeaderLogoTextStyled,
  HeaderItemStyled,
  HeaderItemLinkStyled,
  HeaderMenuStyled,
  HeaderMenuItemStyled,
  HeaderDropdownStyled,
};

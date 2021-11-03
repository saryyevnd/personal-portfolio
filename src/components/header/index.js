import "./style.css";
import React from "react";
import { Fade } from "react-reveal";
import { greeting, settings } from "../../portfolio";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import {
  HeaderLogoLinkStyled,
  HeaderLogoTextStyled,
  HeaderItemStyled,
  HeaderItemLinkStyled,
  HeaderMenuStyled,
  HeaderMenuItemStyled,
  HeaderThemeBtnStyled,
  HeaderDropdownStyled,
} from "./styled";
import { useTheme } from "../../hooks";
import HEADER_ITEM_DATA from "./data.header";
import { Dropdown } from "react-bootstrap";

const Default = () => {
  const { theme, setThemeToggle } = useTheme();
  const link = settings.isSplash ? "/splash" : "/home";

  const Icon = {
    dark: <HiMoon strokeWidth={1} size={20} color={"#A7A7A7"} />,
    light: <CgSun strokeWidth={1} size={20} color={"#F9D784"} />,
  };

  return (
    <header className="header">
      <Fade top duration={1000} distance="20px">
        <div>
          <div className="header__inner">
            <HeaderLogoLinkStyled to={link}>
              <HeaderLogoTextStyled>{greeting.logo_name}</HeaderLogoTextStyled>
            </HeaderLogoLinkStyled>

            <nav className="header__navbar">
              <HeaderDropdownStyled>
                <Dropdown.Toggle variant="danger" size="lg">
                  Menu
                </Dropdown.Toggle>

                <HeaderMenuStyled align="end">
                  <ul className="header__menu-items">
                    {HEADER_ITEM_DATA.map(({ to, name, hoverColor }) => (
                      <HeaderMenuItemStyled
                        as="li"
                        hoverColor={hoverColor}
                        key={name}
                      >
                        <HeaderItemLinkStyled
                          to={to}
                          activeStyle={{ fontWeight: "bold" }}
                          children={name}
                        />
                      </HeaderMenuItemStyled>
                    ))}
                  </ul>
                </HeaderMenuStyled>
              </HeaderDropdownStyled>

              <ul className="header__items">
                {HEADER_ITEM_DATA.map(({ to, name, hoverColor }) => (
                  <HeaderItemStyled hoverColor={hoverColor} key={name}>
                    <HeaderItemLinkStyled
                      to={to}
                      activeStyle={{ fontWeight: "bold" }}
                      children={name}
                    />
                  </HeaderItemStyled>
                ))}
                <HeaderThemeBtnStyled onClick={setThemeToggle}>
                  {Icon[theme["name"]]}
                </HeaderThemeBtnStyled>
              </ul>
            </nav>
          </div>
        </div>
      </Fade>
    </header>
  );
};

export default Default;

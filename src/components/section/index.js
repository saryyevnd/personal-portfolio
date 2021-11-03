import "./style.css";
import React, { Component } from "react";
import {
  TitleStyled,
  ColStyled,
  ColTitleStyled,
  ColSubtitleStyled,
  ColSubtextStyled,
  ButtonStyled,
} from "./styled";

class Default extends Component {
  static Title = (props) => (
    <TitleStyled className="section__title" {...props}>
      {props.children}
    </TitleStyled>
  );

  static Row = (props) => (
    <div className="section__row" {...props}>
      {props.children}
    </div>
  );

  static Col = (props) => (
    <ColStyled className="section__col" {...props}>
      {props.children}
    </ColStyled>
  );

  static ColTitle = (props) => (
    <ColTitleStyled className="section__col-title" {...props}>
      {props.children}
    </ColTitleStyled>
  );

  static ColSubtitle = (props) => (
    <ColSubtitleStyled className="section__col-subtitle" {...props}>
      {props.children}
    </ColSubtitleStyled>
  );

  static ColSubtext = (props) => (
    <ColSubtextStyled className="section__col-subtext" {...props}>
      {props.children}
    </ColSubtextStyled>
  );

  static Button = (props) => (
    <ButtonStyled className="section__btn" {...props}>
      {props.children}
    </ButtonStyled>
  );

  render() {
    return <section className="section">{this.props.children}</section>;
  }
}

export default Default;

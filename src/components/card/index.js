import React, { Component } from "react";
import { CardWith3dEffect, Section } from "..";
import {
  CardStyled,
  CardLinkStyled,
  HeaderStyled,
  DateStyled,
  TitleStyled,
  SubtitleStyled,
  ContentStyled,
  ContentTitleStyled,
  ContentTextStyled,
} from "./styled";

export class Default extends Component {
  static Header = (props) => (
    <HeaderStyled {...props}>
      {props.date?.value && (
        <DateStyled align={props.date.align}>{props.date.value}</DateStyled>
      )}
      {props.children}
    </HeaderStyled>
  );

  static Date = (props) => <DateStyled {...props}>{props.children}</DateStyled>;

  static Title = (props) => <TitleStyled>{props.children}</TitleStyled>;

  static Subtitle = (props) => (
    <SubtitleStyled {...props}>{props.children}</SubtitleStyled>
  );

  static Content = (props) => (
    <ContentStyled {...props}>{props.children}</ContentStyled>
  );

  static ContentTitle = (props) => (
    <ContentTitleStyled {...props}>{props.children}</ContentTitleStyled>
  );

  static ContentText = (props) => (
    <ContentTextStyled {...props}>{props.children}</ContentTextStyled>
  );

  static Button = (props) => (
    <Section.Button {...props}>{props.children}</Section.Button>
  );

  render() {
    return (
      <CardWith3dEffect value3d={this.props.value3d}>
        {this.props.link ? (
          <CardLinkStyled
            {...this.props}
            href={this.props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.children}
          </CardLinkStyled>
        ) : (
          <CardStyled {...this.props}>{this.props.children}</CardStyled>
        )}
      </CardWith3dEffect>
    );
  }
}

export default Default;

import "./style.css";
import React from "react";
import { Fade, Flip } from "react-reveal";
import { Card } from "..";

const Default = (props) => {
  const degree = props.degree;

  return (
    <div className="degree-card">
      <Fade right duration={2000} distance="40px">
        <Card value3d={50}>
          <Card.Header date={{ align: "right", value: degree.duration }}>
            <div className="degree-card__header-inner">
              <div>
                <Card.Title className="m-0">{degree.title}</Card.Title>
                <Card.Subtitle>{degree.subtitle}</Card.Subtitle>
              </div>

              <Flip left duration={8000}>
                <img
                  className="degree-card__logo"
                  src={require(`../../assests/logos/${degree.logo_path}`)}
                  alt={degree.alt_name}
                  style={{ borderRadius: degree.logo_rounded ? "50%" : "0" }}
                />
              </Flip>
            </div>
          </Card.Header>
          <Card.Content align="right">
            {degree.descriptions.map((sentence, index) => {
              return (
                <Card.ContentText key={index}>{sentence}</Card.ContentText>
              );
            })}
            <Card.Button onClick={() => window.open(degree.website_link)}>
              Visit Website
            </Card.Button>
          </Card.Content>
        </Card>
      </Fade>
    </div>
  );
};

export default Default;

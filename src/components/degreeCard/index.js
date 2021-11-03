import "./style.css";
import React from "react";
import { Fade, Flip } from "react-reveal";
import { Card } from "..";

const Default = (props) => {
  const degree = props.degree;

  return (
    <div className="degree__card">
      <Flip left duration={2000}>
        <Card className="degree__card-image">
          <img
            className="degree__card-logo"
            src={require(`../../assests/logos/${degree.logo_path}`)}
            alt={degree.alt_name}
          />
        </Card>
      </Flip>
      <Fade right duration={2000} distance="40px">
        <Card value3d={50}>
          <Card.Header date={{ align: "right", value: degree.duration }}>
            <Card.Title>{degree.title}</Card.Title>
            <Card.Subtitle>{degree.subtitle}</Card.Subtitle>
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

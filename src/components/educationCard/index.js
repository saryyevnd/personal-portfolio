import "./style.css";
import React from "react";
import { Flip } from "react-reveal";
import { Card } from "..";

const Default = (props) => {
  const degree = props.degree;

  return (
    <div className="education-card">
      <Card value3d={50}>
        <Card.Header date={{ align: "right", value: degree.duration }}>
          <div className="education-card__header-inner">
            <div>
              <Card.Title className="m-0">{degree.title}</Card.Title>
              <Card.Subtitle>{degree.subtitle}</Card.Subtitle>
            </div>

            <Flip left duration={8000}>
              <img
                className="education-card__logo"
                src={require(`../../assests/logos/${degree.logo_path}`)}
                alt={degree.alt_name}
                style={{ borderRadius: degree.logo_rounded ? "50%" : "0" }}
              />
            </Flip>
          </div>
        </Card.Header>
        <Card.Content align="right">
          {degree.descriptions.map((sentence, index) => {
            return <Card.ContentText key={index}>{sentence}</Card.ContentText>;
          })}
          <Card.Button onClick={() => window.open(degree.website_link)}>
            Visit Website
          </Card.Button>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Default;

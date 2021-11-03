import React from "react";
import { Fade } from "react-reveal";
import { Card, Languages } from "..";

const Default = ({ repo }) => {
  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <Card link={repo.url} value3d={20}>
          <Card.Header>
            <Card.Title>{repo.name}</Card.Title>
          </Card.Header>
          <Card.Content>
            <Card.ContentText>{repo.description}</Card.ContentText>
            <Languages logos={repo.languages} />
          </Card.Content>
        </Card>
      </Fade>
    </div>
  );
};

export default Default;

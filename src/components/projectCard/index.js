import React from "react";
import { Fade } from "react-reveal";
import { Card, Languages } from "..";
import { ProjectCardStyled } from "./styled";

const Default = ({ repo }) => {
  return (
    <ProjectCardStyled>
      <Card link={repo.url} value3d={20}>
        <Fade top duration={2000} distance="40px">
          <Card.Header>
            <Card.Title>{repo.name}</Card.Title>
          </Card.Header>
          <Card.Content>
            <Card.ContentText>{repo.description}</Card.ContentText>
            <Languages logos={repo.languages} />
          </Card.Content>
        </Fade>
      </Card>
    </ProjectCardStyled>
  );
};

export default Default;

import "./style.css";
import React from "react";
import { Card } from "..";
import { useHistory } from "react-router";

const Default = (props) => {
  const {
    subtitle,
    search,
    card_color,
    title,
    logo_path,
    alt_name,
  } = props.certificate;
  const { push } = useHistory();

  return (
    <Card onClick={() => push(`?modal=${search}`)}>
      <Card.Header align="center" cardColor={card_color}>
        <img
          className="certification__card-logo"
          src={require(`../../assests/logos/${logo_path}`)}
          alt={alt_name}
        />
      </Card.Header>

      <Card.Content align="center">
        <Card.ContentTitle align="center">{title}</Card.ContentTitle>
        <Card.ContentText align="center">{subtitle}</Card.ContentText>
      </Card.Content>
    </Card>
  );
};

export default Default;

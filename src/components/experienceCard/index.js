import "./style.css";
import React from "react";
import { Card } from "..";

const Default = (props) => {
  const experience = props.experience;

  return (
    <div className="experience-card">
      <Card link={experience["company_url"]} value3d={50}>
        <Card.Header
          date={{
            align: "right",
            value: (
              <>
                {experience["duration"]}
                <br />
                {experience["location"]}
              </>
            ),
          }}
        >
          <Card.Title>{experience["title"]}</Card.Title>
          <Card.Subtitle>{experience["company"]}</Card.Subtitle>
        </Card.Header>
        <Card.Content>
          <Card.ContentText>{experience["description"]}</Card.ContentText>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Default;

import React from "react";
import { GreetingContainer, SkillsContainer } from "../../containers";

const Home = (props) => {
  return (
    <React.Fragment>
      <GreetingContainer />
      <SkillsContainer />
    </React.Fragment>
  );
};

export default Home;

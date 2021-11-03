import React from "react";
import { Container, Content, Footer, Header } from "../components";

const Default = (props) => {
  return (
    <Content>
      <Container>
        <Header />
        {props.children}
        <Footer />
      </Container>
    </Content>
  );
};

export default Default;

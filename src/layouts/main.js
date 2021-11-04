import React, { Fragment } from "react";
import { Container, Content, Footer, Header, Modal } from "../components";

const Default = (props) => {
  return (
    <Fragment>
      <Content>
        <Container>
          <Header />
          {props.children}
          <Footer />
        </Container>
      </Content>
      <Modal />
    </Fragment>
  );
};

export default Default;

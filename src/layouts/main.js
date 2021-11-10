import React, { Fragment } from "react";
import {
  Container,
  Content,
  Footer,
  Header,
  Modal,
  Wrapper,
} from "../components";

const Default = (props) => {
  return (
    <Fragment>
      <Wrapper>
        <Container>
          <Header />
          <Content>{props.children}</Content>
          <Footer />
        </Container>
      </Wrapper>
      <Modal />
    </Fragment>
  );
};

export default Default;

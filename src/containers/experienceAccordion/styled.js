import { Accordion } from "react-bootstrap";
import styled from "styled-components";
import light from "./../../assests/icons/light.svg";

const AccordionHeaderStyled = styled(Accordion.Header)`
  & > * {
    background: #2f4553 !important;
    color: #fff !important;

    &::after {
      background-image: url("${light}") !important;
    }
  }
`;

const AccordionItemStyled = styled(Accordion.Item)`
  background: transparent !important;

  border-color: ${({ theme }) => theme.text};
`;

export { AccordionItemStyled, AccordionHeaderStyled };

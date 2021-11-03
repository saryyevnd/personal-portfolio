import { animated } from "react-spring";
import styled from "styled-components";

const Card3D = styled.div`
  width: 100%;
  height: 100%;
`;

const Card3DInner = styled(animated.div).attrs((props) => ({
  style: { transform: props.transform },
}))`
  width: 100%;
  height: 100%;
  will-change: transform;
  border-radius: 0.25em;
  transition: all 0.3s linear;
`;

export { Card3DInner, Card3D };

import React, { useRef, useState } from "react";
import { useSpring } from "react-spring";
import { Card3DInner, Card3D } from "./styled";

const Default = ({ children, value3d = 5 }) => {
  const ref = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  const props = useSpring({ xys });

  return (
    <Card3D ref={ref}>
      <Card3DInner
        transform={props.xys.to(trans)}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect();
          set(calc(e.clientX, e.clientY, rect, value3d));
        }}
        children={children}
      />
    </Card3D>
  );
};

export default Default;

const calc = (x, y, rect, coeff) => [
  -(y - rect.top - rect.height / 2) / (coeff * 0.5),
  (x - rect.left - rect.width / 2) / (coeff * 2),
  1,
];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

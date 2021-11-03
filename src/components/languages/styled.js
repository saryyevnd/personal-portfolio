import styled from "styled-components";

const ItemStyled = styled.li`
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  margin: 1rem;

  & > * {
    width: 100%;
    height: 100%;
  }
`;

export { ItemStyled };

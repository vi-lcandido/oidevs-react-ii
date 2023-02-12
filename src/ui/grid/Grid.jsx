import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.templateColumns};
  height: 100vh;
  position: relative;
  justify-content: start;
`;

export const GridItem = styled.div`
  position: relative;
`;

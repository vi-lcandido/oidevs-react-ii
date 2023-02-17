import styled from "styled-components";

export const Container = styled.button`
  border-radius: 5px;
  background-color: ${(props) => `${props.bgcolor || ""}`};
  cursor: pointer;
  padding: 8px;
  width: ${(props) => `${props.size}%`};
  &:hover {
    background-color: #dbdbdb;
  }
  div {
    color: #121212;
  }
`;

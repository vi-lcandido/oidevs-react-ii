import styled from "styled-components";

export const TextContainer = styled.div`
  color: ${(props) => props.color || "#fff"};
  font-weight: ${(props) => (props.bold ? "700" : "")};
`;

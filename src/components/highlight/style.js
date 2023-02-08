import styled from "styled-components";
import { Text } from "../../ui/text";

export const Container = styled.div`
  display: flex;
  gap: 30px;
  text-align: center;
  border: 1px solid purple;
  justify-content: start;
`;

export const HighlightItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;

  border: 1px solid pink;
`;

export const HighlightTitle = styled(Text)``;

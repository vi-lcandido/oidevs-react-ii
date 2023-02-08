import styled from "styled-components";
import { Text } from "../../ui/text";

export const Container = styled.ul`
  display: flex;
  gap: 30px;
  text-align: center;
  border: 1px solid purple;
  padding-left: 25px;
  margin-bottom: 40px;
`;

export const HighlightItem = styled.li`
margin-top: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const HighlightTitle = styled(Text)``;

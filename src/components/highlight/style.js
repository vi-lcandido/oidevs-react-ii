import styled from "styled-components";
import { Text } from "../../ui/text";

export const Container = styled.ul`
  display: flex;
  gap: 30px;
  text-align: center;
  justify-content: start;
  margin-bottom: 40px;
  border: 1px solid red
  `;

export const HighlightItem = styled.li`
/* margin-top: 10px; */
display: flex;
flex-direction: column;
align-items: center;
width: 95px;
`;

export const HighlightTitle = styled(Text)`
margin-top: 10px;
width: 100%;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;

import { Text } from "../ui/text";
import styled from "styled-components";


const NavItemStyle = styled.div`
  cursor: pointer;
`;

export const NavItem = (props) => {
  return (
    <NavItemStyle>
      <Text>{props.text}</Text>
    </NavItemStyle>
  );
};

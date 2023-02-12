import styled from "styled-components";


export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  border-right: 1px solid #262626;
  height: 100vh;
  width: 245px;
  padding: 25px 12px 20px;
  justify-content: space-between;
`;

export const Box = styled.div`
margin-top: ${(props) => `${props.margin}px`};
`;

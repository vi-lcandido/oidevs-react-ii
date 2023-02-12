import styled from "styled-components";
        
//esse componente ajuda reutilizar o mesmo componente do avatar prinipal pros higlights por meio da definição de propriedades size usando width e height
export const Container = styled.div`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  /* border: 0.2px solid red; */
  border-radius: 50%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

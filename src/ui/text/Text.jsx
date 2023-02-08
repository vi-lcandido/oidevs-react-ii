import styled, { css } from "styled-components";

//esse textCss é o padrão que está sendo definido para os meus componentes texto tornando-o reapoveitável
export const textCss = css`
  font-weight: ${(props) => (props.bold ? "600" : "")};
  color: ${(props) => props.color || "#fafafa"};
  ${(props) => (props.size === "small" ? "font-size: 12px" : "")}
`;

//Text todos os componentes Text terão a estilização acima
export const Text = styled.div`
  ${textCss}
`;

//Essecomponente cria uma tag a de link sobrepondo os estilos do textCss
export const TextLink = styled.a`
  ${textCss};
  color: rgb(224, 241, 255);
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
`;
// export const Text = (props) => {
//   const classes = props.bold ? "bold" : "";
//   return <div className={classes}>{props.children}</div>;
// };

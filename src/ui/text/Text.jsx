import * as S from "./style"


export const Text = (props) => {
  return <S.TextWrapper {...props}>{props.children}</S.TextWrapper>;
};

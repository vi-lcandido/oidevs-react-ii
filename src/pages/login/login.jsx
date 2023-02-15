import { Button } from "../../ui/button/button";
import { Text } from "../../ui/text";
import * as S from "./style";

export const Login = (props) => {
  const onClickHomeHandler = () => {
    props.onClickToHomeBtn("home");
  };
  return (
    <S.Container>
      <S.Box >
        <Text>Login</Text>
      </S.Box>
      <S.Form>
        <S.InputContainer>
          <S.Custominput type="text" placeholder="Digite seu usuário" />
        </S.InputContainer>
        <S.InputContainer>
          <S.Custominput type="password" placeholder="Digite sua senha" />
        </S.InputContainer>
      </S.Form>
      <S.Box size={50}>
        <Button size={100} onClick={onClickHomeHandler}>Login</Button>
      </S.Box>
    </S.Container>
  );
};

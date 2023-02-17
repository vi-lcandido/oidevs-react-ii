import { Title } from "../title";
import { Button } from "../../ui/button/button";
import { Text, TextLink } from "../../ui/text";
import * as S from "./style";

export const LoginForm = (props) => {
  const onClickHomeHandler = () => {
    props.onClickToHomeBtn("home");
  };
  const onClickSignUpHandler = () => {
    props.onClickToSignUpLink("signup");
  };
  return (
    <S.Container>
      <Title />
      <S.Box>
        <Text>Login</Text>
      </S.Box>
      <S.Form>
        <S.Box>
          <Text>Usuário</Text>
          <S.InputContainer>
            <S.Custominput type="text" placeholder="Digite seu usuário" />
          </S.InputContainer>
        </S.Box>
        <S.Box>
          <Text>Senha</Text>
          <S.InputContainer>
            <S.Custominput type="password" placeholder="Digite sua senha" />
          </S.InputContainer>
        </S.Box>
      </S.Form>
      <S.Box size={50}>
        <Button size={100} onClick={onClickHomeHandler}>
          Login
        </Button>
      </S.Box>
      <Button onClick={onClickSignUpHandler}>Cadastre-se</Button>
    </S.Container>
  );
};

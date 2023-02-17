import * as S from "./style";
import { Title } from "../../components/title";
import { Button } from "../../ui/button/button";
import { Text, TextLink } from "../../ui/text";
import { Input } from "../../components/form";

export const Login = (props) => {
  const onClickHomeHandler = () => {
    props.onClickToHomeBtn("home");
  };
  const onClickSignUpHandler = () => {
    props.onClickToSignUpLink("signup");
  };
  return (
    <S.Container>
      <Title />
      <S.Box width={80}>
      <Input text={"Usuário"} type="text" placeholder="Digite seu usuário" />
      <Input text={"Senha"} type="password" placeholder="Digite sua senha" />
      <S.BtnDivForm>
      <Button bgcolor="#2189ce" size={100} onClick={onClickHomeHandler}>
        Login
      </Button>
      </S.BtnDivForm>
      <TextLink onClick={onClickSignUpHandler}>Cadastre-se</TextLink>
      </S.Box>
    </S.Container>
  );
};

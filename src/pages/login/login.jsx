import * as S from "./style";
import { useContext, useState } from "react";
import { instaContext } from "../../App";
import { Title } from "../../components/title";
import { Button } from "../../ui/button/button";
import { TextLink } from "../../ui/text";
import { Input } from "../../components/form";

export const Login = () => {
  const { myState, myDispatch } = useContext(instaContext);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const onClickHomeHandler = () => {
    if (user && password) {
      if (user.length >= 6 && password.length >= 6) {
        myDispatch({ type: "change_current_page", payload: "home" });
        myDispatch({ type: "add_user", payload: { username: user } });
      } else {
        alert("Digite Usuário e Senha com no mínimo 6 caracteres");
      }
    } else {
      alert("Digite Usuário e Senha");
    }
  };

  const onClickSignUpHandler = () => {
    myDispatch({ type: "change_current_page", payload: "signup" });
  };

  const handleChangeUser = (event) => {
    setUser(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };
  return (
    <S.Container>
      <Title />
      <S.Box width={80}>
        <Input
          text={"Usuário"}
          type="text"
          placeholder="Digite seu usuário"
          onChange={handleChangeUser}
        />
        <Input
          text={"Senha"}
          type="password"
          placeholder="Digite sua senha"
          onChange={handleChangePassword}
          value={password}
        />
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

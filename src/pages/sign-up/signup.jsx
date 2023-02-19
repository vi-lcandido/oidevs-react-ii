import { useContext, useState } from "react";
import { instaContext } from "../../App";
import { Input } from "../../components/form/form";
import { Title } from "../../components/title";
import { Button } from "../../ui/button/button";
import { TextLink } from "../../ui/text";
import * as S from "../login/style";

export const SignUp = (props) => {
  const { myState, myDispatch } = useContext(instaContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const onClickToHomeHandler = () => {
    myDispatch({ type: "change_current_page", payload: "login" });
  };

  return (
    <S.Container>
      <Title />
      <S.Box width={80}>
        <Input
          text="Nome"
          type="text"
          placeholder={"Digite seu nome"}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          text="E-mail"
          type="text"
          placeholder={"Digite seu email"}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          text="Idade"
          type="number"
          placeholder={"Digite sua idade"}
          onChange={(event) => setAge(event.target.value)}
        />
        <Input
          text="Senha"
          type="password"
          placeholder={"Digite sua senha"}
          onChange={(event) => setPassword(event.target.value)}
        />
        <S.BtnDivForm>
          <Button
            bgcolor="#2189ce"
            size={100}
            onClick={() =>
              console.log({
                Nome: name,
                Email: email,
                Idade: age,
                Password: password,
              })
            }
          >
            Salvar
          </Button>
        </S.BtnDivForm>
        <TextLink onClick={onClickToHomeHandler}>Voltar</TextLink>
      </S.Box>
    </S.Container>
  );
};

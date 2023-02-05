import { Avatar } from "../avatar";
import { Text } from "../../ui/text";
import { Button } from "../button";
import * as S from "./style"


export const Header = (props) => {
  return (
    <>
      {/* <S.HeaderWrapper> */}
      <Avatar />
      <Text bold={true}>@adatechbr</Text>
      <Button>Seguindo</Button>
      <Button>Enviar mensagem</Button>
      <Button>Adicionar</Button>
      <Button>...</Button>
      <Text>211 publicações</Text>
      <Text>44,2 mil seguidores</Text>
      <Text>2 seguindo</Text>
      {/* </S.HeaderWrapper> */}
    </>
  );
};

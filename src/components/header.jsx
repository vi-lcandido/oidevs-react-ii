import { Avatar } from "./avatar";
import { Text } from "../ui/text";
import { Button } from "./button";

import styled from "styled-components";

const HeaderWrapper = styled.div`
display: flex;

`

export const Header = (props) => {
  return (
    <HeaderWrapper>
      <Avatar />
      <Text bold={true}>@adatechbr</Text>
      <Button>Seguindo</Button>
      <Button>Enviar mensagem</Button>
      <Text>211 publicações</Text>
      <Text>44,2 mil seguidores</Text>
      <Text>2 seguindo</Text>
    </HeaderWrapper>
  );
};

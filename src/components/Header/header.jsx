import { Avatar } from "../avatar";
import { Text, TextLink } from "../../ui/text";
import { Button } from "../../ui/button/button";
import * as S from "./style";

export const Header = (props) => {

  return (
    <S.HeaderContainer>
      <S.AvatarContainer>
        <Avatar imagePath="https://via.placeholder.com/150"/>
      </S.AvatarContainer>
      <S.HeaderContent>
        <S.DataInfo>
          <Text bold={true}>@adatechbr</Text>
          <Button>Seguindo</Button>
          <Button>Enviar mensagem</Button>
        </S.DataInfo>
        <S.DataInfo>
          <Text>211 publicações</Text>
          <Text>44,2 mil seguidores</Text>
          <Text>2 seguindo</Text>
        </S.DataInfo>
        <S.BioInfo>
          <Text bold>Ada Tech</Text>
          <Text color="#a8a8a8">Educação</Text>
          <TextLink bold href="https://beacons.ai/adatechbr">Ada. A Nova Educação</TextLink>
          <S.FollowerInfo>
            <Text size = "small">Seguido por fulaninho de tal, beltrano, cicrano</Text>
          </S.FollowerInfo>
        </S.BioInfo>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

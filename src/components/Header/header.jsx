import { Avatar } from "../avatar";
import { Text, TextLink } from "../../ui/text";
import { Button } from "../../ui/button/button";
import { dataHeader } from "../../data-header";
import * as S from "./style";

export const Header = (props) => {
  return (
    <S.HeaderContainer>
      <S.AvatarContainer>
        <Avatar size={150} imagePath={dataHeader.profilePic} />
      </S.AvatarContainer>
      <S.HeaderContent>
        <S.DataInfo>
          <Text bold>{dataHeader.userName}</Text>
          <Button>Seguindo</Button>
          <Button>Enviar mensagem</Button>
        </S.DataInfo>
        <S.DataInfo>
          <Text>{dataHeader.posts} publicações</Text>
          <Text>{dataHeader.followers} mil seguidores</Text>
          <Text>{dataHeader.following} seguindo</Text>
        </S.DataInfo>
        <S.BioInfo>
          <Text bold>{dataHeader.igName}</Text>
          <Text color="#a8a8a8">{dataHeader.category}</Text>
          <TextLink bold href="https://beacons.ai/adatechbr" target={"_blank"}>
            {dataHeader.link}
          </TextLink>
          <S.FollowerInfo>
            <Text size="small" color="#a8a8a8">
              Seguida por {" "}
              <Text bold size="small" color="#fff">
                {dataHeader.followedBy.join(", ")}
              </Text>
            </Text>
          </S.FollowerInfo>
        </S.BioInfo>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

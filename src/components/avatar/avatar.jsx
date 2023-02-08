import * as S from "./style";

export const Avatar = (props) => {
  return (
    <S.Container size={props.size}>
      <S.Image src={props.imagePath} />
    </S.Container>
  );
};

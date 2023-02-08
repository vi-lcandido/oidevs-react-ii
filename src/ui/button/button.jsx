import { Text } from "../text";
import * as S from "./style";

export const Button = (props) => {
  return (
    <S.Container>
      <Text>{props.children}</Text>
    </S.Container>
  );
};

import * as S from "./style";
import { Avatar } from "../avatar";
import {highlightList} from "../../data-header"



export const Highlight = () => {
  return (
    <S.Container>
      {highlightList.map((highlight, index) => (
        <S.HighlightItem key={index}>
          <Avatar size={90} imagePath={highlight.imageUrl} />
          <S.HighlightTitle>{highlight.title}</S.HighlightTitle>
        </S.HighlightItem>
      ))}
    </S.Container>
  );
};

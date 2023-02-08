import * as S from "./style";
import { Avatar } from "../avatar";

const highlightList = [
  {
    imageUrl: "https://via.placeholder.com/90",
    title: "Parceiros",
  },
  {
    imageUrl: "https://via.placeholder.com/90",
    title: "Desafios",
  },
  {
    imageUrl: "https://via.placeholder.com/90",
    title: "Comunidades",
  },
  {
    imageUrl: "https://via.placeholder.com/90",
    title: "Faculdade",
  },
  {
    imageUrl: "https://via.placeholder.com/90",
    title: "Modelo Educacional",
  },
  
];

export const Highlight = () => {
  return (
    <S.Container>
      {highlightList.map((highlight, index) => (
        <S.HighlightItem key={index}>
          <Avatar size="small" imagePath={highlight.imageUrl} />
          <S.HighlightTitle>{highlight.title}</S.HighlightTitle>
        </S.HighlightItem>
      ))}
    </S.Container>
  );
};

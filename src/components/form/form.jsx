import * as S from "./style";

export const Input = (props) => {

  return (
    <S.FormContainer>
      <S.Label color="#a8a8a8">{props.text}</S.Label>
          <S.InputContainer>
            <S.Custominput {...props}/>
          </S.InputContainer>
    </S.FormContainer>
  );
};

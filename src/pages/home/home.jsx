import { Navbar } from "../../components/navBar";
import { Header } from "../../components/header";
import { Highlight } from "../../components/highlight";
import { Feed } from "../../components/feed";
import styled from "styled-components";
import * as S from "../../ui/grid";

const ScrollPage = styled.div`
  overflow-y: scroll;
  height: 100%;
  /* border: 5px solid purple; */
`;
const ContainerView = styled.div`
  max-width: 980px;
  padding: 25px 20px;
  margin: auto;
  /* border: 1px solid orange; */
`;
export const Home = () => {
  return (
    <S.Grid templateColumns={"20% 80%"}>
      <S.GridItem>
        <Navbar />
      </S.GridItem>
      <ScrollPage>
        <ContainerView>
          <S.GridItem>
            <Header />
            <Highlight />
            <Feed />
          </S.GridItem>
        </ContainerView>
      </ScrollPage>
    </S.Grid>
  );
};

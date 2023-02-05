// import "./App.css";
import { Navbar } from "./components/navbar";
import { Header } from "./components/Header/header";
import * as S from "./ui/grid";

function App() {
  return (
    <S.Grid templateColumns={"20% 80%"}>
      <S.GridItem>
        <Navbar />
      </S.GridItem>
      <S.GridItem>
        <Header />
      </S.GridItem>
    </S.Grid>
  );
}

export default App;

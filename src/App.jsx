// import "./App.css";
import { Navbar } from "./components/navBar";
import { Header } from "./components/header/header";
import * as S from "./ui/grid";
import { Highlight } from "./components/highlight";

function App() {
  return (
    <S.Grid templateColumns={"20% 80%"}>
      <S.GridItem>
        <Navbar />
      </S.GridItem>
      <S.GridItem>
        <Header />
        <Highlight/>
      </S.GridItem>
    </S.Grid>
  );
}

export default App;

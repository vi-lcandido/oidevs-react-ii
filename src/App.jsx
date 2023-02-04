// import "./App.css";
import { Navbar } from "./components/NavBar/navbar";
import { Header } from "./components/header";
import * as S from "./ui/grid";

function App() {
  return (
    <S.Grid templateColumns={"20% 80%"}>
      {/* <S.GridItem> */}
        <Navbar />
      {/* </S.GridItem> */}
      {/* <S.GridItem> */}
        <Header />
      {/* </S.GridItem> */}
    </S.Grid>
  );
}

export default App;

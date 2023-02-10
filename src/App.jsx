// import "./App.css";
import { Navbar } from "./components/navBar";
import { Header } from "./components/header/header";
import { Highlight } from "./components/highlight";
import { getImageFromApi } from "./services/index";
import { useEffect, useState } from "react";
import * as S from "./ui/grid";

function App() {
  const [photo, setPhotos] = useState([]);

  useEffect(() => {
    const makeRequest = async () => {
      const response = await getImageFromApi("photos");
      setPhotos(response);
    };
    makeRequest()
  });

  return (
    <S.Grid templateColumns={"20% 80%"}>
      <S.GridItem>
        <Navbar />
      </S.GridItem>
      <S.GridItem>
        <Header />
        <Highlight />
      </S.GridItem>
    </S.Grid>
  );
}

export default App;

import { useState } from "react";
import { Home } from "./pages/home";
import {Login} from "./pages/login"


function App() {
  const [currentPage, setCurrentPage] = useState("login");
  console.log(currentPage);
  return (
    <>
      {currentPage === "login" && <Login onClickToHomeBtn={setCurrentPage} />}
      {currentPage === "home" && <Home onClickToLoginBtn={setCurrentPage}/>}
    </>
  );
}

export default App;

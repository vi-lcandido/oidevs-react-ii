import { useState } from "react";
import { Home } from "./pages/home";
import {Login} from "./pages/login"
import { SignUp } from "./pages/sign-up/signup";


function App() {
  const [currentPage, setCurrentPage] = useState("signup");
  // console.log(currentPage);
  return (
    <>
      {currentPage === "login" && <Login onClickToHomeBtn={setCurrentPage} onClickToSignUpLink={setCurrentPage} />}
      {currentPage === "home" && <Home onClickToLoginBtn={setCurrentPage}/>}
      {currentPage === "signup" && <SignUp backToHomeBtn={setCurrentPage}/>}
    </>
  );
}

export default App;

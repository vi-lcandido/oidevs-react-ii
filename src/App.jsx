import { useState, useReducer } from "react";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { SignUp } from "./pages/sign-up/signup";

function reducer(state, action) {
  console.log(action, "action sendo disparada");
  switch(action.type) {
    case 'change_current_page':
      return {
        currentPage: action.payload
      }
  }
}

const initialState = {
  currentPage: "login",
};

function App() {
  const [globalState, dispatch] = useReducer(reducer, initialState);

//troca de páginas passando como parâmetro a page, trocada automaticamente pois "home, "login e "sing-up foram passadas como parâmetros em suas respectivas funções"
//dispatch que chama um reducer o qual atualiza o estado que atualiza a visualização
  const onClickNavigate = (page) => {
    dispatch({ type: "change_current_page", payload: page });
  };
 
  return (
    <>
      {globalState.currentPage === "login" && (
        <Login
          onClickToHomeBtn={onClickNavigate}
          onClickToSignUpLink={onClickNavigate}
        />
      )}
      {globalState.currentPage === "home" && (
        <Home onClickToLoginBtn={onClickNavigate} />
      )}
      {globalState.currentPage === "signup" && (
        <SignUp backToHomeBtn={onClickNavigate} />
      )}
    </>
  );
}

export default App;

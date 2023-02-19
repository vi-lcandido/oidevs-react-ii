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

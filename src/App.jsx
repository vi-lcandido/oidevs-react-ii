import { createContext, useReducer } from "react";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { SignUp } from "./pages/sign-up/signup";

function reducer(state, action) {
  console.log(action, "action sendo disparada");
  switch (action.type) {
    case "change_current_page":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "add_user":
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload.username,
        },
      };
    case "add_feed_photos":
      return {
        ...state,
        user: {
          ...state.user,
          photos: action.payload,
        },
      };
    default:
      return state;
  }
}

const initialState = {
  currentPage: "login",
  user: {
    username: "@meu",
    photos: [],
  },
};

export const instaContext = createContext(initialState);

function App() {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  //troca de páginas passando como parâmetro a page, trocada automaticamente pois "home, "login e "sing-up foram passadas como parâmetros em suas respectivas funções"
  //dispatch que chama um reducer o qual atualiza o estado que atualiza a visualização
  const onClickNavigate = () => {};

  return (
    <instaContext.Provider
      value={{ myState: globalState, myDispatch: dispatch }}
    >
      {globalState.currentPage === "login" && (
        <Login onClickToSignUpLink={onClickNavigate} />
      )}
      {globalState.currentPage === "home" && <Home />}
      {globalState.currentPage === "signup" && (
        <SignUp backToHomeBtn={onClickNavigate} />
      )}
    </instaContext.Provider>
  );
}

export default App;

import { LoginForm } from "../../components/login-form/login-form";


export const Login = (props) => {

  return (
    <LoginForm onClickToHomeBtn={props.onClickToHomeBtn} onClickToSignUpLink={props.onClickToSignUpLink}/>
  );
};

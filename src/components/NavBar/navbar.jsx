import { NavItem } from "../nav-item";
import { Title } from "../title";

import styled from "styled-components";

export const NavBarWrapper = styled.div`
display: flex;
flex-direction: column;
background-color: black;
height: 100vh;
`

const items = [
  "Página inicial",
  "Pesquisa",
  "Explorar",
  "Reels",
  "Mensagens",
  "Notificações",
  "Criar",
  "Perfil",
];

export const Navbar = (props) => {
  return (
    <NavBarWrapper>
      <Title />
      {items.map((item) => (
        <NavItem key={item} text={item} />
      ))}
      <NavItem text="Mais" />
    </NavBarWrapper>
  );
};

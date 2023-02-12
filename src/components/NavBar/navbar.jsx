import { NavItem } from "../nav-item";
import { Title } from "../title";
import * as S from "./style";

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
    <S.NavBarContainer>
      <S.Box>
        <S.Box>
          <Title/>
        </S.Box>
        <S.Box margin={25}>
          {items.map((item) => (
            <NavItem key={item} text={item} />
          ))}
        </S.Box>
      </S.Box>
      <NavItem text="Mais" />
    </S.NavBarContainer>
  );
};

import { Navbar } from "./components/navbar";
import { Title } from "./components/title";
import { NavItem } from "./components/nav-item";
import { Header } from "./components/header";
import { Avatar } from "./components/avatar";
import { Button } from "./components/button";
import { Text } from "./components/text";

function App() {
  const items = [
    "Página inicial",
    "Pesquisa",
    "Explorar",
    "Reels",
    "Mensagens",
    "Notificações",
    "Criar",
    "Perfil",
    "Mais",
  ];
  return (
    <>
      <Navbar>
        <Title />
        {items.map((item) => (
          <NavItem key={item} text={item} />
        ))}
      </Navbar>
      <Header>
        <Avatar />
        <Text bold={true}>@adatechbr</Text>
        <Button>Seguindo</Button>
        <Button>Enviar mensagem</Button>
        <Text>211 publicações</Text>
        <Text>44,2 mil seguidores</Text>
        <Text>2 seguindo</Text>
      </Header>
    </>
  );
}

export default App;

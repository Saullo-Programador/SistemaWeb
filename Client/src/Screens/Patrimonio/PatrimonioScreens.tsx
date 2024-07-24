import * as G from "../../Styles/Global/GlobalStyled"
import NavBarComponents from "../../Components/NavBar/NavBarComponents";

const PatrimonioScreens = () => {
  return (
    <G.ContainerPrincipal>
      <G.ContentPrincipal>
        <G.ContainerNav>
          <NavBarComponents />
        </G.ContainerNav>
        <G.ContainerMain>
          <title>Olá, Saullo</title>
          <p className="subtituloHome">sejá bem vindo ao seu gerenciador de gastos</p>
        </G.ContainerMain>
      </G.ContentPrincipal>
    </G.ContainerPrincipal>
  );
};

export default PatrimonioScreens;
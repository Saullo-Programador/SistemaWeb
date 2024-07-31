import { useNavigate } from "react-router-dom";
import * as G from "../../Styles/Global/GlobalStyled"
import NavBarComponents from "../../Components/NavBar/NavBarComponents";
import UseApi from "../../Shared/Hooks/UseApi";
import ButtonComponente from "../../Components/Button/ButtonComponente";

const ConfigScreens = () => {
  const { signout } = UseApi();
  const navigate = useNavigate();

  return (
      <G.ContainerPrincipal>
      <G.ContentPrincipal>
        <G.ContainerNav>
          <NavBarComponents />
        </G.ContainerNav>
        <G.ContainerMain>
          <title>Olá, Saullo</title>
          <p className="subtituloHome">sejá bem vindo ao seu gerenciador de gastos</p>
          <ButtonComponente titulo={"Sair"} onClick={() => {signout(); navigate("/");}}></ButtonComponente>
        </G.ContainerMain>
      </G.ContentPrincipal>
    </G.ContainerPrincipal>
  );
};

export default ConfigScreens;
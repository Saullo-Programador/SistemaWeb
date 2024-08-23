import { useNavigate } from "react-router-dom";
import * as G from "../../Styles/Global/GlobalStyled"
import * as C from "./ConfigStyled"
import NavBarComponents from "../../Components/NavBar/NavBarComponents";
import UseApi from "../../Shared/Hooks/UseApi";

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
          <C.ConfigContainer>
            <C.ConfigContant>
              <C.Title>Configurações</C.Title>
              <C.Subtitle>Alterar dados do usuário</C.Subtitle>
              <C.ConfigContainerInfo>
                <C.BoxItem>
                  <C.TextItem>Sair da conta</C.TextItem>
                  <C.ButtonExit onClick={() => {signout(); navigate("/");}}>
                    <p>Sair</p>
                  </C.ButtonExit>
                </C.BoxItem>
              </C.ConfigContainerInfo>
            </C.ConfigContant>
          </C.ConfigContainer>
        </G.ContainerMain>
      </G.ContentPrincipal>
    </G.ContainerPrincipal>
  );
};

export default ConfigScreens;
import { useNavigate } from "react-router-dom";
import * as G from "../../Styles/Global/GlobalStyled"
import * as C from "./ConfigStyled"
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
          <C.ConfigContainer>
            <C.ConfigContant>
              <C.Title>Configurações</C.Title>
              <C.Subtitle>Alterar dados do usuário</C.Subtitle>
              <C.ConfigContainerInfo>
                <C.TextInfo>Nome: Saullo</C.TextInfo>
                <C.TextInfo>E-mail: eric@example.com</C.TextInfo>
                <C.TextInfo>Data de Nascimento: 15/09/1990</C.TextInfo>
                <C.TextInfo>Telefone: (11) 99999-9999</C.TextInfo>
                <C.TextInfo>Endereço: Rua A, 123</C.TextInfo>
                <C.TextInfo>Cidade: São Paulo</C.TextInfo>
                <C.TextInfo>UF: SP</C.TextInfo>
                <C.TextInfo>CEP: 01234-567</C.TextInfo>

                <C.TextInfo>Senha: *********</C.TextInfo>
              </C.ConfigContainerInfo>
            <ButtonComponente titulo={"Sair"} onClick={() => {signout(); navigate("/");}}></ButtonComponente>
            </C.ConfigContant>
          </C.ConfigContainer>
        </G.ContainerMain>
      </G.ContentPrincipal>
    </G.ContainerPrincipal>
  );
};

export default ConfigScreens;
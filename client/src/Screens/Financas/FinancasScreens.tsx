import * as G from "../../Styles/Global/GlobalStyled"
import * as F from "./FinancasStyled"
import NavBarComponents from "../../Components/NavBar/NavBarComponents";
import ButtonFloatingComponents from "../../Components/ButtonFloating/ButtonFloatingComponents";

const FinancasScreens = () => {
  return (
    <G.ContainerPrincipal>
      <G.ContentPrincipal>
        <G.ContainerNav>
          <NavBarComponents />
        </G.ContainerNav>
        <G.ContainerMain>
          <F.FinancasContainer>
            <F.FinancasContant>
              <F.Title>Finanças</F.Title>
            </F.FinancasContant>
          </F.FinancasContainer>
          <ButtonFloatingComponents />
        </G.ContainerMain>
      </G.ContentPrincipal>
    </G.ContainerPrincipal>
  );
};

export default FinancasScreens;
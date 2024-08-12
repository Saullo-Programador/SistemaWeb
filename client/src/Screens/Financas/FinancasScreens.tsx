import * as G from "../../Styles/Global/GlobalStyled"
import * as F from "./FinancasStyled"
import NavBarComponents from "../../Components/NavBar/NavBarComponents";
import ButtonFloatingComponents from "../../Components/ButtonFloating/ButtonFloatingComponents";
import { useState } from "react";
import ModalFinancasComponents from "../../Components/ModalCadastrar/financas/ModalFinancasComponents";
import TableComponents from "./components/TableComponents";

const FinancasScreens = () => {
  const [cadastroFinanceiro, setCadastroFinanceiro] = useState<boolean>(false);
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

            <F.FinancasContantDados>
              <TableComponents/>
            </F.FinancasContantDados>

          </F.FinancasContainer>
          <ButtonFloatingComponents
            onClick={() => {
              setCadastroFinanceiro(true);
            }}
          />
          {cadastroFinanceiro && <ModalFinancasComponents setCadastroFinanceiro={setCadastroFinanceiro} />}
        </G.ContainerMain>
      </G.ContentPrincipal>
    </G.ContainerPrincipal>
  );
};

export default FinancasScreens;
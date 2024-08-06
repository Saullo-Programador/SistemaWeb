import * as G from "../../Styles/Global/GlobalStyled"
import * as F from "./FinancasStyled"
import NavBarComponents from "../../Components/NavBar/NavBarComponents";
import ButtonFloatingComponents from "../../Components/ButtonFloating/ButtonFloatingComponents";
import { useState } from "react";
import ModalFinancasComponents from "../../Components/ModalCadastrar/financas/ModalFinancasComponents";

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
              <F.FinancasBarDados>
                <span className="container2-div1-span1-documentos">
                  <p>Nome</p>
                </span>
                <span className="container2-div1-span2-documentos">
                  <p>Data</p>
                </span>
                <span className="container2-div1-span2-documentos">
                  <p>Categortia</p>
                </span>
                <span className="container2-div1-span2-documentos">
                  <p>Valor</p>
                </span>
              </F.FinancasBarDados>
            </F.FinancasContantDados>

          </F.FinancasContainer>
          <ButtonFloatingComponents 
            onClick={() => {
              setCadastroFinanceiro(true);
            }}
          />
          {cadastroFinanceiro && <ModalFinancasComponents setCadastroFinanceiro={setCadastroFinanceiro}/>}
        </G.ContainerMain>
      </G.ContentPrincipal>
    </G.ContainerPrincipal>
  );
};

export default FinancasScreens;
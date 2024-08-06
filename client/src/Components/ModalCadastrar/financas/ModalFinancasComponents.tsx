import { FaXmark } from "react-icons/fa6";
import * as MCF from "./ModalFinancasStyles"

interface ModalFinancasComponentProps {
    setCadastroFinanceiro: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalFinancasComponent: React.FC<ModalFinancasComponentProps> = ({ setCadastroFinanceiro }) => {
    return (
        <MCF.ModalBackground>
            <div className="modalContainer-financas">
                <MCF.HeaderModalFinancas>
                    <p id='titulo-financas-cadastro'>Cadastrar</p>
                    <MCF.ButtonCloseModalFinancas
                        onClick={() => {
                            setCadastroFinanceiro(false);
                        }}
                    >
                        <FaXmark />
                    </MCF.ButtonCloseModalFinancas>
                </MCF.HeaderModalFinancas>
                <MCF.MainModalFinancas>
                    
                </MCF.MainModalFinancas>
                <MCF.FooterModalFinancas>
                    <button
                        onClick={() => {
                            setCadastroFinanceiro(false);
                        }}
                        id="cancelPatrimonio"
                    >
                        Cancelar
                    </button>
                    <button id="AdicionarPatrimonio">Adicionar</button>
                </MCF.FooterModalFinancas>

            </div>

        </MCF.ModalBackground>
    )
}

export default ModalFinancasComponent
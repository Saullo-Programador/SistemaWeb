import { FaXmark } from "react-icons/fa6";
import * as MCF from "./ModalFinancasStyles"
import InputCadastroModal from "./input/InputCadastroModal";
import SelectLabels from "./select/selectComponent";
import { IoAdd } from "react-icons/io5";

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
                   <div className="item-grid">
                    <InputCadastroModal/>
                   </div>
                   <div className="item-grid">
                    <SelectLabels />
                   </div>
                   <div className="item-grid">
                   <InputCadastroModal/>
                   </div>
                   <div className="item-grid">
                   <InputCadastroModal/>
                   </div>
                </MCF.MainModalFinancas>
                <MCF.FooterModalFinancas>
                    <button id="AdicionarPatrimonio"><IoAdd size={30}/></button>
                </MCF.FooterModalFinancas>

            </div>

        </MCF.ModalBackground>
    )
}

export default ModalFinancasComponent
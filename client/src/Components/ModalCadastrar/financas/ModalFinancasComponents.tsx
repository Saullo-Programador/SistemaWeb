import { FaXmark } from "react-icons/fa6";
import * as MCF from "./ModalFinancasStyles";
import { IoAdd } from "react-icons/io5";
import FormFinancas from "./FormFinancas";

interface ModalFinancasComponentProps {
    setCadastroFinanceiro: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalFinancasComponent: React.FC<ModalFinancasComponentProps> = ({ setCadastroFinanceiro }) => {
    const handleClickAdd = () => {
        setCadastroFinanceiro(false)
    }
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
                    <FormFinancas/>
                </MCF.MainModalFinancas>
                <MCF.FooterModalFinancas>
                    <button id="AdicionarPatrimonio">
                        <IoAdd size={30} color="#fff" onClick={handleClickAdd} />
                    </button>
                </MCF.FooterModalFinancas>
            </div>
        </MCF.ModalBackground>
    );
}

export default ModalFinancasComponent;

import * as BF from "./ButtonFloatingStyled"
import { IoAdd } from "react-icons/io5";

interface ButtonFloatingType{
  onClick: () => void;
}

const ButtonFloatingComponents = ({onClick}: ButtonFloatingType) => {
  return (
    <BF.ButtonFloating onClick={onClick}>
        <IoAdd color="#ffffff" size={35} className="icon" />
    </BF.ButtonFloating>
  )
}


export default ButtonFloatingComponents


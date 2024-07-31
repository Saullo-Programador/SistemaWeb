import { Link } from "react-router-dom";
import * as N from "./NavBarStyledComponents";
import { FaGear, FaCity, FaSackDollar, FaArrowLeft } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";




const NavBarComponents = () => {
  return (
    <N.ContentNav>
      <N.BoxCloseNavBar>
        <N.ButtonCloseNavBar>
          <FaArrowLeft color="#1900ffFF" size={20} className="IconCloseNavBar"/>
        </N.ButtonCloseNavBar>
      </N.BoxCloseNavBar>
      <N.BoxLogo>
      </N.BoxLogo>
      <N.ContainerLinks>
        <N.BoxNavBar>
          <Link to="/Home" className="LinkTextNavBar">
            <GoHomeFill color="#1900ffFF" size={20}/>
            <p>Home</p>
          </Link>
        </N.BoxNavBar>
        <N.BoxNavBar>
          <Link to="/financas" className="LinkTextNavBar">
            <FaSackDollar color="#1900ffFF" size={20}/>
            <p>Finanças</p>
          </Link>
        </N.BoxNavBar>
        <N.BoxNavBar>
          <Link to="/patrimonio" className="LinkTextNavBar">
            <FaCity color="#1900ffFF" size={20}/>
            <p>Patrimonio</p>
          </Link>
        </N.BoxNavBar>
        <N.BoxNavBar>
          <Link to="/config" className="LinkTextNavBar">
            <FaGear color="#1900ffFF" size={18}/>
            <p>Configuração</p>
          </Link>
        </N.BoxNavBar>
      </N.ContainerLinks>
    </N.ContentNav>
  )
}
export default NavBarComponents;
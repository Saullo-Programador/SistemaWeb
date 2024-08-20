import { Link } from "react-router-dom";
import * as N from "./NavBarStyledComponents";
import { FaGear, FaSackDollar} from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";

const NavBarComponents = () => {
  return (
    <N.ContentNav>
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
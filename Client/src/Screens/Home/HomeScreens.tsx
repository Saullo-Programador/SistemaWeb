
import { useNavigate } from "react-router-dom";
import UseApi from "../../Shared/Hooks/UseApi";
import * as G from "../../Styles/Global/GlobalStyled"
import ButtonComponente from "../../Components/Button/ButtonComponente";
import NavBarComponents from "../../Components/NavBar/NavBarComponents";

const HomeScreens = () => {
    const { signout } = UseApi();
    const navigate = useNavigate();

    return (
        <G.ContainerPrincipal>
            <G.ContentPrincipal>
                <G.ContainerNav>
                    <NavBarComponents/>
                </G.ContainerNav>
                <G.ContainerMain>
                    <ButtonComponente titulo={"Sair"} onClick={() => {signout(); navigate("/");}}></ButtonComponente>
                </G.ContainerMain>
            </G.ContentPrincipal>
        </G.ContainerPrincipal>
    );
}

export default HomeScreens
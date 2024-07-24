import * as G from "../../Styles/Global/GlobalStyled"
import * as H from "./HomeStyled"
import NavBarComponents from "../../Components/NavBar/NavBarComponents";
import { FaAnglesUp,FaAnglesDown } from "react-icons/fa6";

const HomeScreens = () => {
    return (
        <G.ContainerPrincipal>
            <G.ContentPrincipal>
                <G.ContainerNav>
                    <NavBarComponents />
                </G.ContainerNav>
                <G.ContainerMain>
                    <H.HomeContainer>
                        <H.HomeContant>
                            <H.Title>Olá, Saullo</H.Title>
                            <H.Subtitle>sejá bem vindo ao seu gerenciador de dinheiro, <br />investimentos e gastos</H.Subtitle>
                        </H.HomeContant>
                        <H.ContainerInfo>
                            <H.BoxInfo>
                                <H.IconInfo>
                                    <H.TitleInfo>Saldo</H.TitleInfo>
                                    <FaAnglesUp color="#00ff15"/>
                                </H.IconInfo>
                                <H.ValueInfo>R$ 1000.00</H.ValueInfo>
                            </H.BoxInfo>
                            <H.BoxInfo>
                                <H.IconInfo>
                                    <H.TitleInfo>Gastos</H.TitleInfo>
                                    <FaAnglesDown color="#ff0000"/>
                                </H.IconInfo>
                                <H.ValueInfo>R$ -200.00</H.ValueInfo>
                            </H.BoxInfo>
                            <H.BoxInfo>
                                <H.IconInfo>
                                    <H.TitleInfo>Receitas</H.TitleInfo>
                                </H.IconInfo>
                                <H.ValueInfo>R$ 800.00</H.ValueInfo>
                            </H.BoxInfo>
                            <H.BoxInfo>
                                <H.IconInfo>
                                    <H.TitleInfo>Lucro</H.TitleInfo>
                                    <FaAnglesUp color="#00ff15"/>
                                </H.IconInfo>
                                <H.ValueInfo>R$ 600.00</H.ValueInfo>
                            </H.BoxInfo>
                            <H.BoxInfo>
                                <H.IconInfo>
                                    <H.TitleInfo>Diversificação</H.TitleInfo>
                                </H.IconInfo>
                                <H.ValueInfo>100%</H.ValueInfo>
                            </H.BoxInfo>
                            <H.BoxInfo>
                                <H.IconInfo>
                                    <H.TitleInfo>Taxas</H.TitleInfo>
                                </H.IconInfo>
                                <H.ValueInfo>0%</H.ValueInfo>
                            </H.BoxInfo>
                        </H.ContainerInfo>
                    </H.HomeContainer>
                </G.ContainerMain>
            </G.ContentPrincipal>
        </G.ContainerPrincipal>
    );
}

export default HomeScreens
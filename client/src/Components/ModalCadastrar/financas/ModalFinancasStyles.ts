import styled from 'styled-components'

export const ModalBackground =styled.div`
  width: 85%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(1px);
  
  .modalContainer-financas {
    width: 55%;
    height: 50%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    margin: 20px 0px 15px 0px ;
    box-shadow: 0px 4px 5px 5px rgba(0, 0, 0, 0.25);
    background-color: #FFFFFF;
    border-radius: 20px;
  }
`

export const HeaderModalFinancas = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  #titulo-financas-cadastro{
    font-size: 40px;
    font-style: normal;
    font-family: var(--font-Rubik);
    font-weight: 400;
    line-height: normal;
    display: flex;
    padding: 20px 0 0 30px ;
  }
`;
  
export const ButtonCloseModalFinancas = styled.span`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
  margin: 0;
  padding: 12px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: -17px;

  &:hover{
    background: red;
    color: #fff;
    transition: all 500ms;
  }
`;


export const MainModalFinancas = styled.main`
  display: flex;
  width: 90%;
  height: 63%;
  margin-top: 20px;
`;

export const FooterModalFinancas = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  
  button {
    border: none;
    cursor: pointer;
    background-color: green;
    width: 4.5em;
    height: 4.5em;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    bottom: 27%;
    right: 25%;
    &:hover {
      transform: rotate(1turn);
      transition: 500ms ;
    }
  }
  
`;
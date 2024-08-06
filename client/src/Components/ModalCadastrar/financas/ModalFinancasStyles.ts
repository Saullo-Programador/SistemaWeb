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
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    margin: 20px 0px 15px 0px ;
    box-shadow: 0px 4px 5px 5px rgba(0, 0, 0, 0.25);
    background-color: #FFFFFF;
    border-radius: 20px;
  }
  .container-box1-cadastro-financas, .container-box2-cadastro-financas{
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;
  }
  /* --descrição do financas */
  .box-descricao-financas{
    display: flex;
    width: 170px;
    height: 120px;
    background-color: var(--color-light-gay);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: 5px 0px -10px 0px ;
  }
  
  #descricao-financas{
    overflow: auto;
    display: flex;
    width: 160px;
    height: 109px;
    resize: none;
    border: none;
    color: #000000;
    background-color: var(--color-light-gay);
    outline: none;
    font-size: 16px;
    margin-top: 3px;
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
    padding: 15px 0 0 18px ;
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
  margin-top: -1.5px;

  &:hover{
    background: red;
    color: #fff;
    transition: all 500ms;
  }
`;


export const MainModalFinancas = styled.main`
  display: flex;
  align-items: center;
  width: 90%;
  height: 58%;
  flex-direction: column;
  background-color: red;
`;

export const FooterModalFinancas = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  
  button {
    padding: 13px;
    height: 40px;
    margin: 10px;
    border: none;
    border-radius: 8px;
    font-size: 17px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  #AdicionarPatrimonio{
    background-color: green;
    border:1px solid green;
    color: #fff;
  }
  
  #cancelPatrimonio {
    border: 1px solid red;
    color: red;
    background: #fff;
  }
  
  #AdicionarPatrimonio:hover{
    transform: scale(1.05);
    transition: all 500ms;
  }
  
  #cancelPatrimonio:hover{
    background: red;
    color: #fff;
    transition: all 500ms;
  } 
`;
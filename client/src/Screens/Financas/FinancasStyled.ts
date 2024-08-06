import styled from "styled-components";

export const FinancasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 10px;
`;
export const FinancasContant = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
`;

export const Title = styled.p`
  padding-top: 50px;
  font-size: 40px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
`;

export const FinancasContantDados = styled.div`
  width: 90%;
  height: 65%;
  margin-top: 20px;
`;

export const FinancasBarDados = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 35px;
  background-color: #f2f2f2;
  padding: 0 10px 0 10px;

  .container2-div1-span1-documentos{
    display: flex;
    align-items: center;
    color: black;
    font-family: "Roboto";
    width: 40%;
  }

  .container2-div1-span2-documentos{
    display: flex;
    align-items: center;
    justify-content: end;
    width: auto;
    font-family: "Roboto";
    color: black;
    margin: 0 5px 0 50px;
  }
`
export const separadorItemList =styled.span`
  width: 1px;
  height: 25px;
  background-color: black;
  display: flex;
`;
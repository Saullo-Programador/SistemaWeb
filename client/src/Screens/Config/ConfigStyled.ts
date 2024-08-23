import styled from "styled-components";

export const ConfigContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 10px;
`; 

export const ConfigContant = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
`;

export const Title = styled.p`
  padding-top: 30px;
  font-size: 45px;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: normal;
  font-family: "Roboto", sans-serif;
`
export const ConfigContainerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40%;
` 
export const BoxItem = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 97%;
  height: 8vh; 
  border-top: 1px solid #d5d2d5;
  margin-top:20px;
` 
export const TextItem = styled.p`
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  `
export const ButtonExit = styled.span`
  width: 8%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d5d2db;
  color: red;
  border-radius: 10px;
  border: 1px solid #fffffd;

  &:hover{
    color: white;
    background-color: red;
    cursor: pointer;
  }
`;

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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
  align-items: center;
  width: 80%;
  height: 40%;
  gap: 10px;
  padding-top: 20px;
  margin-right: 10%;
` 
export const BoxInfo = styled.span`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 2px 20px 2px rgba(0,0,0,0.2);
  width: 85%;
  height: 15vh; 
` 
export const TextInfo = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  `

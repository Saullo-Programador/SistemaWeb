import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 10px;
`; 

export const HomeContant = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
`;

export const Title = styled.p`
  padding-top: 120px;
  font-size: 60px;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  font-weight: normal;
  font-family: "Roboto", sans-serif;
`
export const ContainerInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
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
export const TitleInfo = styled.p`
  font-size: 22px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
`
 export const IconInfo = styled.span`
  width: 100%;
  justify-content: space-around;
  gap: 50px;
  align-items: center;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
`
export const ValueInfo = styled.p`
 width : 100%;
 justify-content: center;
 display: flex;
 margin-top: 2px;
`

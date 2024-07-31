import styled from "styled-components";

export const ContentNav = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
export const BoxCloseNavBar = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  justify-content: end;
  align-items: center;
`
export const ButtonCloseNavBar = styled.div`
  width: 20%;
  height: 90%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  box-shadow: 0px 1px 20px 10px rgba(0,0,0,0.1);

  .IconCloseNavBar:hover {
      cursor: pointer;
      transition: 500ms ;
      transform: scale(1.1);
    }
`
export const BoxLogo = styled.div`
  width: 100%;
  height: 22%;
`
export const ContainerLinks = styled.nav`
  width: 100%;
  height: 40%;
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const BoxNavBar = styled.span`
  align-items: center;
  border-radius: 1px;
  width: 80%;
  height: 18%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .LinkTextNavBar{
    color: black;
    text-decoration: none;
    font-size: 18px;
    cursor: pointer;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;  
    gap: 10px;
    }

    &:hover {
      cursor: pointer;
      background-color: lightgray;
      padding: 0px 12px;
      border-top-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
`
import styled from "styled-components";

export const ContentNav = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
export const BoxLogo = styled.div`
  width: 100%;
  height: 22%;
`
export const ContainerLinks = styled.nav`
  width: 100%;
  height: 50%;
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
  height: 15%;
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
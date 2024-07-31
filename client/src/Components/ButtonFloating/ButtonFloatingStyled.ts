import styled from 'styled-components'

export const ButtonFloating = styled.span`
    border: none;
    cursor: pointer;
    background-color: blue;
    width: 4em;
    height: 4em;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    bottom: 30px;
    right: 35px;

    &:hover {
      background: #11145A;
      scale: 1.01;
      transition: 500ms ;
    }
`
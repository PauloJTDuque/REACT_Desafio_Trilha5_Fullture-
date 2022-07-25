import styled from "styled-components";
import imagemBg from "./../../assets/img/background.jpg"

export const Parte1 = styled.h2`
  display: flex;
  background-color: black;  
  height: 10vh;
  margin: 0;
  color: white;
  justify-content: flex-start;
  align-items: center;
  h2{
    margin: 0 0 0 2vw;
  }
  `

export const Pai = styled.div`
    .imagemInicial{
        height: 100vh;
        background-image: url(${imagemBg});
        background-position: center;
        background-repeat: no-repeat; 
    }
`

export const Parte2 = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: fit-content;
  min-height: 90vh;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  color: white;
  `
   
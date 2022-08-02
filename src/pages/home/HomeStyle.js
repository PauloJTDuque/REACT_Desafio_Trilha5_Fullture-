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
    margin: 0 0 0 2vw;        // top, right, bottom, left = > sentido horário
  }
`

export const Pai = styled.div`
    .imagemInicial{
        height: 100vh;
        background-image: url(${imagemBg});
        background-position: center;
        background-size: cover; 

        /* background-repeat: no-repeat; 
        /* background-color: red;
        z-index: 1;
        opacity: 0,8; */
    }
    background-color: aqua;
`

export const Parte2 = styled.div`
    display: flex;
    background-color: #000;
    justify-content: center;
    align-items: center;
    height: fit-content;
    min-height: 90vh;
    //max-height: 120vh;
//    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    color: white;
  `
   
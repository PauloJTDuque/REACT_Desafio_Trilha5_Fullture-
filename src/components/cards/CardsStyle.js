import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    min-height: 20vh;
    padding: 10vh 0;
    width: 80%;
    gap: 3vw;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
`
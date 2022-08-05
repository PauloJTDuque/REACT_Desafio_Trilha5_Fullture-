import { useSelector } from "react-redux"
import { MainContainer } from "./HeaderStyle"

export const Header = () =>{
    const state = useSelector((state) => state.page.valor2)

    return(
        <MainContainer>
            <p>{state.data.title}</p>
        </MainContainer>
    )
}
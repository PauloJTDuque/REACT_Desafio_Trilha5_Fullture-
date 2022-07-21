import { Footer } from "../components/Footer";
import { Cards } from "../components/Cards";
import { useState } from "react";
import { useEffect } from "react";

export function Home(){

    const [imagens, setImagens] = useState();

    useEffect(()=>{

    },[])

    return(
        <div>
            <div> Div da Imagem</div>
            <div> 
                <h2>Filmes Populares `(div dos cards)`</h2>
                <Cards/>
            </div>
            <Footer texto="FULLFLIX 2022, Todos os direitos reservados. |"/>
        </div>
    )
}
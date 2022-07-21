import { useEffect } from "react";
import { useState } from "react";
import { Pegarfilmes } from "../assets/api/api";

export function Cards(){

    const [filmes, setFilmes] = useState();

    useEffect(()=>{
        Pegarfilmes(setFilmes)
    },[])

    return(
        <div>
            {!filmes ? "loading" :   // Se não houver conteúdo em "filme" escreve loading na tela. Se houver, entra no MAP
            <>                               
                {filmes.map((filme)=>{
                   return <p>{filme.title}</p>      
                })}
            </>}
        </div>
    )
}
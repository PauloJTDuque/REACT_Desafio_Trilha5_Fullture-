import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Pegarfilmes } from "../../assets/api/api";
import { goToDetail } from "../../assets/redux/slice";
import { Container, Grid } from "./CardsStyle";



export function Cards(){

    const [filmes, setFilmes] = useState();
    const[detalhes, setDetalhes] = useState();
    const dispatch = useDispatch()

    useEffect(()=>{
        Pegarfilmes(setFilmes);
        // dispatch(goToDetail())
    },[]);

    return(
        <Grid to="/details">
            
                {!filmes ? "loading" :   // Se não houver conteúdo em "filme" escreve loading na tela. Se houver, entra no MAP
                <>                               
                    {filmes.map((filme)=>{
                    return (
                        <Container key={filme.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
                                alt={filme.title}
                                id={filme.id}
                            />
                            <div className="infoContainer" id={filme.id}>
                                <h4>Título: {filme.title}</h4>
                                <h4>Nota: {filme.vote_average}</h4>
                            </div>
                        </Container> 
                    );  
                    })}
                </>}         
        </Grid>    
    );
}
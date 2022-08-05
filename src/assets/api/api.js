import axios from "axios"

export const Pegarfilmes = (setState) => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=47a0860dbc94f48214654c4a36bc54c1&language=pt-BR&page=1`)
        .then((resposta) => {
            setState(resposta.data.results)
        }).catch((erro) => {
            console.log(erro)
        })
}

export const PegarDetalhes = (id, setState) =>{
    axios.get()
    .then((resposta) => {
        setState(resposta.data.results)
    }).catch((erro) => {
        console.log(erro)
    })  
}
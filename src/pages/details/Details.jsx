import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Grid, MainContainer, RigthSide } from "./DetailsStyle";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { goToHome } from "../../assets/redux/slice"

export default function Details() {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.page.valor2)

    return (
      <MainContainer>
        <Header />
        <Grid>
          <img src={`https://image.tmdb.org/t/p/w500/${state.data.poster_path}`} alt="" onClick={()=>{console.log(state)}}/>
            <RigthSide>
              <p><b>Titulo:</b> {state.data.title}</p>
              <p><b>Sinopse:</b> {state.data.overview}</p>
              <p><b>Data de lançamento:</b> {state.data.release_date}</p>
              <p><b>Nota:</b> {state.data.vote_average}</p>
              <Link to="/" onClick={()=>dispatch(goToHome())}>Voltar para a home</Link>
            </RigthSide>
            <Link to="/">
              <button>Voltar para home</button>
            </Link>
        </Grid>
        <Footer />
      </MainContainer>
    );
  }
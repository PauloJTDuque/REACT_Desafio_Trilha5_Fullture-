import { Cards } from "../components/Cards";
import { Footer } from "../components/Footer";

export function Home(){
    return(
        <div>
            <div> Div da Imagem</div>
            <div> 
                <h2>Filmes Populares `(div dos cards)`</h2>
                <Cards/>
            </div>
            <Footer/>
        </div>
    )
}
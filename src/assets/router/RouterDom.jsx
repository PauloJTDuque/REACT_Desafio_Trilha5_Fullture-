import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../../pages/details/Details";
import {Home} from "../../pages/home/Home";

export function RouterDom(){
    return(
        <BrowserRouter>
            <Routes>

            {/* // Todas as páginas do site devem estar aqui  */ }

                <Route index element={<Home/>}/>;        
                <Route exact path="/"  element={<Home/>}/>;        
                <Route path="/details" element={<Details/>}/>;
                <Route path="*" element={<div>Erro 404 - Página Não Encontrada</div>}/> ;

            </Routes>
        </BrowserRouter>
    )
}
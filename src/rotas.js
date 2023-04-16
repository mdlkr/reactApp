import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cadastro from './paginas/Cadastro';
import Login from './paginas/Login';
import Home from './paginas/Home';
import Erro from './paginas/Erro';
import Principal from './paginas/Principal';

const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/erro" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    );

};

export default Rotas;
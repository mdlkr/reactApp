import React from "react";
import { Link } from 'react-router-dom';

function Erro() {
    return(
        <div>
            <h2>Usuário não cadastrado ou dados incorretos!</h2>
            <p>O que deseja fazer?</p>
            <Link to="/login">
                <button> Voltar para login </button>
            </Link>
            <br/>
            <Link to="/cadastro">
                <button> Realizar cadastro </button>
            </Link>
        </div>

    )
}

export default Erro;
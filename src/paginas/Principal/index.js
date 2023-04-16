import React from "react";
import { Link } from 'react-router-dom';

function Principal() {
    return(
        <div>
            <h2>Bem-vindo! O que deseja fazer? </h2>
            <Link to="/login">
                <button> Acessar Login </button>
            </Link>
            <br/>
            <Link to="/cadastro">
                <button> Realizar Cadastro </button>
            </Link>
        </div>

    )
}

export default Principal;
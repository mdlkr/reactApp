import React, { Component } from "react";
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: "",
            mensagem: ""
        }

        this.acessar = this.acessar.bind(this);
    }

    async acessar(){

        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha).then( ()=>{
            
            window.location.href = "./home";

        } )
        .catch((erro) => {

            window.location.href = "./erro";

        })

    }

    render(){
        return(
            <div>
                <h2>Página de Login</h2>
                <input type="text" placeholder="E-mail" onChange={(e) => this.setState({email: e.target.value}) } /> 
                <br/>
                <input type="password" placeholder="Senha" onChange={(e) => this.setState({senha: e.target.value}) } /> 
                <br/>

                <button onClick={this.acessar}>Acessar</button>
                <br/>
                <Link to='/'>
                    <button> Voltar para tela principal </button>
                </Link>


            </div>
        )
    }
}


export default Login;

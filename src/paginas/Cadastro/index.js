import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

class Cadastro extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: "",
            dataNascimento: "",
            nome: "",
            sobrenome: ""
        }

        this.gravar = this.gravar.bind(this);
    }

    async gravar(){

        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha).then( async (retorno)=> {
        
            await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                dataNascimento: this.state.dataNascimento
            });

        } );

        alert("Cadastro realizado!");
;        
    }

    render(){
        return(

            <div>
                <h2>
                    Página de Cadastro
                </h2>

                <input type="text" placeholder="E-mail" onChange={(e) => this.setState({email: e.target.value}) } /> 
                <br/>
                <input type="password" placeholder="Senha" onChange={(e) => this.setState({senha: e.target.value}) } /> 
                <br/>
                <input type="text" placeholder="Nome" onChange={(e) => this.setState({nome: e.target.value}) } /> 
                <br/>
                <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState({sobrenome: e.target.value}) } /> 
                <br/>
                <input type="text" placeholder="Data de Nascimento" onChange={(e) => this.setState({dataNascimento: e.target.value}) } /> 
                <br/>
                <h6>Observação: Sua senha deve conter no mínimo 6 caracteres.</h6>
                <button onClick={this.gravar}>Gravar</button>
                <br/>
                <Link to='/'>
                    <button> Voltar para tela principal </button>
                </Link>

            </div>

        )

    }
}

export default Cadastro;

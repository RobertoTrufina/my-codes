// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// // todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

import React, { useState } from "react";


import './utils';

import '../../global.css';
import './style.css';

import Menu from "../Menu";



export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmail() {
        // const value = e.target.value
        console.log('EMAIL/')

        setEmail()

    }


    return (
        <div>
            <Menu />
            <h5>Login</h5>
            <div className="container-form-login">
                <hr />
                <h2>Login Form</h2>
                <form className="wrapper-form">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id={'email'}
                            type={"email"}
                            value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            onChange={handleEmail}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            id={password}
                            type="password"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button onClick={Login}>Login</button>
                </form>
            </div>


        </div>

    )

}


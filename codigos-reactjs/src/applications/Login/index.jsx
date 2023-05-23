import React from "react";

import { useState } from "react";

import Menu from "../Menu";


export default function app() {
    const [inputName, setInputName] = useState('')
    let [inputNumber, setInputNumber] = useState('')
    let [count, setCount] = useState('')

    let Double = () => {
        setCount(inputNumber * 2)
    }

    let retornar = () => {
        setCount(inputNumber)
    }

    let Reset = () => {
        setCount(0)
        setInputNumber('')
    }

    return (
        <div className="form-control">
            <Menu />
            <h5>Login</h5>
            <hr />
            <h1>Cadastro</h1>
            <input
                type="text"
                value={inputName}
                onChange={e => setInputName(e.target.value)}
            />
            <h2>Meu nome é: {inputName}</h2>

            <br />
            <div>
                <input
                    type="number"
                    value={inputNumber}
                    onChange={e => setInputNumber(e.target.value)}

                />
            </div>

            <button onClick={Double} >Dobra o valor</button>
            <button onClick={retornar} >Volta</button>
            <button onClick={Reset} >reset</button>

            <p><b>Valor do input: {inputNumber}</b> </p>

            <p><b>Resultado: {count}</b></p>



        </div>
    )
}
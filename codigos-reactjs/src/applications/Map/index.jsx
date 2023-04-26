import React from "react";
import Menu from "../Menu";
import './style.css';


export default function List() {

    const trufas = [
        {
            id: 1,
            sabor: 'Brigadeiro',
            preco: 4.00,
            peso: 50,
        },
        {
            id: 2,
            sabor: 'Beijinho',
            preco: 3.00,
            peso: 50,
        },
        {
            id: 3,
            sabor: 'Cupuaçu',
            preco: 5.00,
            peso: 50,
        },
        {
            id: 4,
            sabor: 'Casadinho',
            preco: 6.00,
            peso: 50,
        },

    ]

    return (
        <div>
            <Menu />
            <h5>Map</h5>
            <hr />
            <h1>Lista de Trufas</h1>
            <div className="list">
                {trufas.map(
                    (trufa) =>
                        <div key={trufa.id}>
                            <li>
                                <strong>{trufa.sabor} </strong>
                                - R${trufa.preco},00
                                - {trufa.peso}g
                            </li>
                        </div>
                )}

            </div>


        </div>


    )
}









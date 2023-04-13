import React, { useState } from "react";

import '../../global.css'

import '../searchFilter/SearchFilter'
import Menu from "../header/menu";

const frutas = [
    'Banana',
    'maça',
    'uva',
    'laranja',
    'acerola',
    'goiaba',
    'pêra'
]


export default function SearchFilter() {

    const [busca, setBusca] = useState('')

    const lowerBusca = busca.toLowerCase()

    const frutasFiltradas = frutas.filter(
        (fruta) => fruta.toLowerCase().includes(lowerBusca)
    )

    return (
        <div>
            <Menu/>
            <h5>SearchFilters</h5>
            <hr />
            <h1>Pesquisa com filtro:</h1>
            <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
            />
            <ul>
                {frutasFiltradas.map((frutas) => (
                    <li key={frutas}>
                        {frutas}
                    </li>
                ))}
            </ul>



        </div>

    )

}


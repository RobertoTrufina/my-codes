import React from "react";
import './style.css';

import { Link } from "react-router-dom";


export default function Menu() {
    return (
        <div className="wrapper">
            <header>
                <Link to="/" >
                    <button>Home</button>
                </Link>
                <Link to="/filtrar-pesquisa" >
                    <button>Filter search</button>
                </Link>
                <Link to="/botão" >
                    <button>Styled-components-button</button>
                </Link>
                <Link to="/tema-dark" >
                    <button>Dark-Theme</button>
                </Link>
                <Link to="/map" >
                    <button>Map</button>
                </Link>
            </header>
        </div>
    )
}
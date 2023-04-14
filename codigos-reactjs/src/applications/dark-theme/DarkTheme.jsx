import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, ligthTheme } from "./ThemeStyle";

import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./style";


import Menu from "../header/menu";


export default function DarkTheme() {

    const [theme, setTheme] = useState('light')

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <>
            <Menu />
            <ThemeProvider theme={theme === 'light' ? ligthTheme : darkTheme}>
                <GlobalStyle />
                <Container>
                    <h1>Hello World!</h1>
                    <button onClick={() => themeToggler()}>Alternar</button>
                </Container>
            </ThemeProvider>

        </>
    )

}
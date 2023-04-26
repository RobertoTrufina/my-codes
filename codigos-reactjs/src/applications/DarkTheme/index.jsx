import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, ligthTheme } from "./ThemeStyle";

import Menu from "../Menu";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./style";


export default function DarkTheme() {

    const [theme, setTheme] = useState('light')

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <>

            <ThemeProvider theme={theme === 'light' ? ligthTheme : darkTheme}>
                <GlobalStyle />
                <Container>
                    <Menu />
                    <h5>Dark-Theme</h5>
                    <hr />
                    <h1>Hello World!</h1>
                    <button onClick={() => themeToggler()}>Alternar</button>
                </Container>
            </ThemeProvider>

        </>
    )

}
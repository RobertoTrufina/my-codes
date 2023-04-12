import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './GlobalStyle'
import SearchFilter from './applications/SearchFilter'
import { theme } from './applications/styled-components/Theme'
import Button from './applications/styled-components/button/Button'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SearchFilter />
      <Button />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)

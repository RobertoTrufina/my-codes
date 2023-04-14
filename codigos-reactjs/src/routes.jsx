import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import DarkTheme from "./applications/dark-theme/DarkTheme";
import Menu from "./applications/header/menu";
import SearchFilter from './applications/searchFilter/SearchFilter';
import Button from "./applications/styled-components/button/Button";



export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/filtrar-pesquisa" element={<SearchFilter />} />
        <Route path="/tema-dark" element={<DarkTheme />} />
        <Route path="/botão" element={<Button />} />
      </Routes>
    </BrowserRouter>
  )
}

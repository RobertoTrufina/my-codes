import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import DarkTheme from "./applications/DarkTheme";
import FilterSearch from "./applications/FilterSearch";
import Map from "./applications/Map";
import Menu from "./applications/Menu";
import Button from "./applications/styled-components/button";
import Login from "./applications/Login/index";






export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/filtrar-pesquisa" element={<FilterSearch />} />
        <Route path="/tema-dark" element={<DarkTheme />} />
        <Route path="/botão" element={<Button />} />
        <Route path="/map" element={<Map />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

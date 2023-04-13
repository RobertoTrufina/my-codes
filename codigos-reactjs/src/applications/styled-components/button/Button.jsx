import React from 'react'
import Menu from '../../header/menu'
import { StyledButton } from './StyleButton'
import { WrapperStyle } from './WrapperStyle'


export default function Button() {
  return (
    <>
      <Menu />
        <h5>Styled-components</h5>
        <hr />
      <WrapperStyle>
        <StyledButton background="black">Teste</StyledButton>
        <StyledButton background="red">Teste</StyledButton>
        <StyledButton >Teste</StyledButton>
        <StyledButton >Teste</StyledButton>
        <a href="#">Clique aqui</a>

      </WrapperStyle>
    </>

  )
}
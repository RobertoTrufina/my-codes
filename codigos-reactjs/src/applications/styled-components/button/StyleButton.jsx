import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: ${(prop) =>
        prop.background ? prop.background : 'purple'};
    width: 120px;
    height: ${({ theme }) => theme.size.xxl};

    color: ${({ theme }) => theme.colors.secundary};
    border:none;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;

    &:active {
        background-color: blue;
    }    
`
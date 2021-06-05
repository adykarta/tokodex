import styled from 'styled-components';

export const WrapperInput = styled.input`
    width:${({widthInput})=> widthInput};
    height:${({heightInput})=>heightInput};
    border:none;
    border-bottom:1px solid white;
    background:transparent;
    font-size:28px;
    color:white;
    text-align:center;

    &:focus-visible {
        outline: none;
    }
        

`
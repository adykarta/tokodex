import styled from 'styled-components';
import {primaryGreen, white, lightGreen} from '../../theme';
export const WrapperNavbar = styled.div`
    background-color:${primaryGreen};
    display:flex;
    flex-direction:column;
    align-items:center;
    img{
        margin-top:1.5em;
        width:150px;
    }
`

export const WrapperMenu = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    margin-top:2rem;
    

`

export const Button = styled.button`
        width:226px;
        height:46px;
        margin-left:1rem;
        margin-tight:1rem;
        border-color:white;
        border-style:none;
        border-radius:20px;  
        font-family: 'Roboto', sans-serif;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        background-color:${({isActive})=>isActive ? lightGreen : white};
        &:hover{
            cursor:pointer;
            background-color: ${lightGreen};
            box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
            color: ${white};
            transform: translateY(-7px);
        
        }

`
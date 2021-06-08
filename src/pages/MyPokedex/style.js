import styled from 'styled-components';
import {primaryGreen, red, white} from '../../theme';

export const WrapperMyPokedex = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100vw;
min-height:100vh;
background-color:${primaryGreen};
padding-bottom:2rem;

`

export const WrapperLoading = styled.div`
    margin-top:8rem;
`


export const WrapperList = styled.div`
    display:flex;
    flex-direction:row;
    width:70vw;
    flex-wrap:wrap;
    justify-content:start;
    margin-top:4rem;
    margin-bottom:4rem;

    img{
        width:80%;
        height:auto;
    }
    h4{
        font-family:'Roboto';
        margin-top:0;
    }
    button{
        width:80%;
        height:10%;
        margin-left:1rem;
        margin-tight:1rem;
        border-color:white;
        border-style:none;
        border-radius:20px;  
        font-family: 'Roboto', sans-serif;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        &:hover{
            cursor:pointer;
            background-color: ${red};
            box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
            color: ${white};
            transform: translateY(-7px);
        
        }
        margin-bottom:1rem;
    }
`
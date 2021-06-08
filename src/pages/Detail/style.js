import styled from 'styled-components';
import {primaryGreen, white, black, red} from '../../theme';
export const WrapperDetail = styled.div`
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

export const WrapperItems = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:start;
    p{
        font-family:Roboto;
    }
    h4{
        margin-right:1rem;
    }


`

export const WrapperContent = styled.div`
   display:flex;
   align-items:center;
   flex-direction:column;
    margin-top:2rem;
    img{
        width: 200px;
    }
    h2{
        margin-top:0;
    }
   
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
        color:${white};
        background-color:${red};
        &:hover{
            cursor:pointer;
            background-color: ${white};
            box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
            color: ${black};
        }

`
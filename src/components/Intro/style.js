import styled from 'styled-components';

export const WrapperIntro = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100vh;

    .typewriter{
        font-size:60px;
        color:white;
    }
    .cursor{
        color:white;
    }


`
export const WrapperInput = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;

    .fa{
        font-size:50px;
        color:white;
        opacity: 0.6;
        transition: 0.3s;
        &:hover{
            cursor:pointer;
            opacity:1;
          
        }
        margin-left:2rem;
    }
`
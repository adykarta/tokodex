import styled from 'styled-components';

export const WrapperLoader = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 200px;
    height:200px;    
    img{
        width:100%;
        height:100%;
        animation: logo-spin infinite 1s linear;
    }

    @keyframes logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
    }
`
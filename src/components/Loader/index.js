import React from 'react';
import {WrapperLoader} from './style';
import Pokeball from '../../assets/img/pokeball.png';

const Loader = ()=>{
    return(
        <WrapperLoader>
            <img src={Pokeball} alt="pokeball"></img>
        </WrapperLoader>
    )
}
export default Loader;
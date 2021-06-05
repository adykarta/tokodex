import React from 'react';
import {WrapperInput} from "./style";
const Input  = ({ width="100%", height="100%",...props})=>{
    return(
        <WrapperInput widthInput={width} heightInput={height} {...props}/>
    )
}
export default Input;
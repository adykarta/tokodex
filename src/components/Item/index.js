import React from 'react';
import {WrapperItem} from './style';

const Item  = ({name})=>{
    return(
        <WrapperItem>
            <p>{name}</p>
        </WrapperItem>

    )
  

}

export default Item;
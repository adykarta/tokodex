import React from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {WrapperNavbar, WrapperMenu, Button} from './style';
import LogoPokemon from '../../assets/img/pokemon-logo.png';


const MENU = [
    {
        name:'Home',
        pathname:'/'
    },
    {
        name:'My Pokedex',
        pathname:'/bags'
    } 
]

const Navbar = ()=>{
    const location = useLocation();
    const history = useHistory();

    return(
        <WrapperNavbar>
            <img src={LogoPokemon} alt="pokedex logo"/>
            <WrapperMenu>
               {MENU.map((el,idx)=>{
                   return(
                        <Button key={idx} isActive={el.pathname===location.pathname} onClick={()=>history.push(el.pathname)}>{el.name}</Button>
                   )
               })}
            </WrapperMenu>
        </WrapperNavbar>
    )
}
export default Navbar;
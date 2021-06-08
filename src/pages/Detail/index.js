import React,{useEffect, useState} from 'react';
import {WrapperDetail, WrapperLoading, WrapperContent, WrapperItems, Button} from './style';
import {useLocation} from 'react-router-dom';
import Loader from '../../components/Loader/index';
import Item from '../../components/Item/index';
import qs from 'query-string';
import axios from 'axios';


const Detail = ()=>{
    const location  = useLocation();
    const {id} = qs.parse(location.search);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null)

    const fetchData = ()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => {
            setData(res.data);
            setLoading(false);
        })
        
    }
    useEffect(()=>{
        fetchData(); /* eslint-disable */
    },[])
    console.log(data)

    return(
        <WrapperDetail>
            {loading ?
                <WrapperLoading>
                    <Loader/>
                </WrapperLoading>
                :
                <WrapperContent>
                   <img src={data.sprites.front_default} alt="pokemon-img"></img>
                   <h2>{data.name}</h2>
                   <Button>Catch</Button>
                   <WrapperItems>
                        <h4>Base Exp: {data.base_experience}</h4>
                        <h4>Weight: {data.weight}</h4>
                        <h4>Height: {data.height}</h4>
                   </WrapperItems>      
                   <h4>Types:</h4>
                   <WrapperItems>  
                    {data.types.map((el,idx)=>{
                        return(
                            <Item key={idx} name={el.type.name}/>
                        )
                    })}
                   </WrapperItems>
                   <h4>Stats:</h4>
                   <WrapperItems>  
                    {data.stats.map((el,idx)=>{
                        return(
                            <Item key={idx} name={`${el.stat.name}: ${el.base_stat}`}/>
                        )
                    })}
                   </WrapperItems>

                   
                </WrapperContent>


            }
        </WrapperDetail>
    )
}

export default Detail;
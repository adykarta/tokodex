import React,{useEffect, useState} from 'react';
import {WrapperDetail, WrapperLoading, WrapperContent, WrapperItems, Button} from './style';
import {useLocation, useHistory} from 'react-router-dom';
import Loader from '../../components/Loader/index';
import Item from '../../components/Item/index';
import qs from 'query-string';
import axios from 'axios';
import swal from 'sweetalert';
import {useStore} from '../../utils/useContext';


const Detail = ()=>{
    const location  = useLocation();
    const history = useHistory();
    const {id} = qs.parse(location.search);
    const [loading, setLoading] = useState(true);;
    const {state, dispatch}  = useStore();
    const [data, setData] = useState(null)

    const fetchData = ()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => {
            setData(res.data);
            setLoading(false);
        })
        
    }
    useEffect(()=>{
        if(!state.isCompleted){
            history.push("/")
        }
        else{
            fetchData(); /* eslint-disable */
        }
      

    },[])

    const  handleCatch = ({...props})=>{
        if(Math.random() >0.5){
            swal("Nickname:", {
                content: "input",
              })
              .then((value) => {         
                var currentData = state.data
                if(value !== ""){
                    const dataFiltered = currentData.filter((el)=>{
                        return(
                            el.nickname.toLowerCase() === value.toLowerCase()
                        )
                    })
                    
                    if(dataFiltered.length > 0 ){
                        swal(`Pokemon with name "${value}" already catched.`);
                    }
                    
                    else{
                        currentData.push({nickname:value, ...props})
                        var states = {...state, data:currentData}   
                        dispatch({ key: "SET_AUTH_DATA", data: states })                    
                        swal(`Succesfully catched ${value}`);
                    }    
                }
                else{
                    swal(`Pokemon must have name!`);

                }
                       
            });
        }
        else{
            swal(`Failed to catch!`);
        }
        
    }


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
                   <Button onClick={()=>handleCatch(data)}>Catch</Button>
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
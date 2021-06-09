import React, { useEffect, useState } from 'react';
import {WrapperMyPokedex, WrapperLoading, WrapperList} from './style';
import {useHistory} from 'react-router-dom'
import {useStore} from '../../utils/useContext';
import Loader from '../../components/Loader/index';
import Pagination from '../../components/Pagination/index';
import Card from '../../components/Card/index';
import swal from 'sweetalert';

const MyPokedex = ()=>{
    const {state, dispatch} = useStore();
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [totalPage, setTotalPage] = useState(1)
    const [listPokemon, setListPokemon] = useState([])
    const [query, setQuery] = useState({
        limit:20,
        offset:0,
        totalPage:1,
        currentPage:1,
    })

    const fetchData =(offset)=>{
           
            const getList = state.data.slice(offset, offset+query.limit)
            setLoading(false);
            setTotalPage(Math.ceil(state.data.length/query.limit))      
            setListPokemon(getList);

    }

    function handlePagination(num) {
        setLoading(true)
        setQuery((prevQry) => ({
        ...prevQry,
        offset: query.limit * (num - 1),
        currentPage:num
        }));

        history.push(`/bags?page=${num}`)
    
    }

    useEffect(() => {
        fetchData(query.offset); /* eslint-disable */
    },[query, state]);
    
    useEffect(()=>{
        if(!state.isCompleted){
            history.push("/")
        }
        else{
            handlePagination(query.currentPage) /* eslint-disable */
        }
    },[])

    const handleRemove = (nickname)=>{
        var filteredData = state.data.filter((el)=>{
            return el.nickname.toLowerCase() !== nickname.toLowerCase()
        })
        var states = {...state, data:filteredData}   
        dispatch({ key: "SET_AUTH_DATA", data: states })                    
        swal(`Succesfully remove ${nickname}`);
 

    }


    return(
        <WrapperMyPokedex>
            <h2>Hi {state.name}!, here are your pokemons!</h2>

            {
                loading ?
                <WrapperLoading>
                    <Loader/>
                </WrapperLoading>
                :
                <>
                    <Pagination currentNumber={query.currentPage} lastNumber={totalPage} onClick={handlePagination}/>
                        <WrapperList>
                        {listPokemon.map((el,idx)=>{
                            return(
                                <Card key={idx}>
                                    <img src={el.sprites.front_shiny} alt="pokemon-img"/>
                                    <h4>{el.name}: {el.nickname}</h4>                        
                                    <button onClick={()=>history.push(`/detail?id=${el.id}`)}>See Details</button>
                                    <button onClick={()=>handleRemove(el.nickname)}>Remove</button>
                                </Card>
                            )
                        })}
                    </WrapperList>
                </>
            }
        </WrapperMyPokedex>

    )
}

export default MyPokedex;
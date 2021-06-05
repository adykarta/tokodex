import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {WrapperHome, WrapperList, WrapperLoading}from './style';
import Intro from '../../components/Intro/index';
import {useStore} from "../../utils/useContext";
import Card from '../../components/Card/index';
import Pagination from '../../components/Pagination';
import Loader from '../../components/Loader';



const Home = ()=>{
    const {state} = useStore()
    const history = useHistory();
    const [loading, setLoading] = useState(true)
    const [listPokemon, setListPokemon] = useState([])
    const [query, setQuery] = useState({
        limit:20,
        offset:0,
        totalPage:1,
        currentPage:1,
    })

    const fetchData =(offset)=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${query.limit}&offset=${offset}`)
        .then(res => {
            const {results, count} = res.data;
            const dataUrl = Array.from(
                results,
                x=>x.url
                )
            Promise.all(dataUrl.map(url=>axios.get(url))).then(responses =>
                {
                   
                  
                    setLoading(false);
                    setQuery((prev)=>({...prev, totalPage:Math.ceil(count/query.limit)}));
                    setListPokemon(responses);
                }
              
            )
            
       
      })
    }

  function handlePagination(num) {
        setQuery((prevQry) => ({
        ...prevQry,
        offset: query.limit * (num - 1),
        currentPage:num
        }));
        history.push(`/?page=${num}`)
  }
    
    useEffect(()=>{
        fetchData(0);
        history.push(`/?page=1`)
        
    },[])

    useEffect(() => {
        fetchData(query.offset);
    },[query]);

    return(
        <WrapperHome>
            {!state.isCompleted &&  <Intro />}
           
            {
                loading ?
                <WrapperLoading>
                    <Loader/>
                </WrapperLoading>
                :
                <>
                    <Pagination currentNumber={query.currentPage} lastNumber={query.totalPage} onClick={handlePagination}/>
                        <WrapperList>
                        {listPokemon.map((el,idx)=>{
                            return(
                                <Card key={idx}>
                                    <img src={el.data.sprites.front_shiny} alt="pokemon-img"/>
                                    <h4>{el.data.name}</h4>
                                    <button onClick={()=>history.push()}>See Details</button>
                                </Card>
                            )
                        })}
                    </WrapperList>
                </>
        }

           
        </WrapperHome>
    )
    
}

export default Home;
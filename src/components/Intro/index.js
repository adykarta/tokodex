import React,{useState} from 'react'
import {WrapperIntro, WrapperInput} from './style';
import Input from '../Input/index';
import { Typewriter } from 'react-typewriting-effect'
import {useStore} from '../../utils/useContext';
import 'react-typewriting-effect/dist/index.css'

const Intro = ()=>{
    const [name, setName] = useState("")
    const [isCompleted, setIsCompleted] = useState(false)
    
     const { state, dispatch } = useStore();


    const handleChange = (e)=>{
        setName(e.target.value)
        
    }

    const saveName = ()=>{
        const dataUser = {...state, name:name}
        dispatch({ key: "SET_AUTH_DATA", data: dataUser });
        setIsCompleted(true);
    }

    const setCompleted = ()=>{
        setTimeout(
            () => {
                const dataUser = {...state, isCompleted:true}
                dispatch({ key: "SET_AUTH_DATA", data: dataUser });
            }, 
            3000
          );
        

    }
    return(
        <WrapperIntro>
            {
                !isCompleted &&  <>
                    <Typewriter
                    className="typewriter"
                    cursorClassName="cursor"
                    cursor='_'
                    string="Hello! What's your name?"
                    delay={100}
                    stopBlinkinOnComplete
                    />
                    <WrapperInput>
                        <Input height="100px" width="500px" value={name} onChange={handleChange}/>
                        <i className="fa fa-arrow-circle-right" onClick={saveName}></i>
                    </WrapperInput>
            </>
            }
            {
                isCompleted && <Typewriter
                className="typewriter"
                cursorClassName="cursor"
                cursor='_'
                string={`Welcome to tokodex, ${name}! let's play!`}
                delay={100}
                stopBlinkinOnComplete
                onComplete={setCompleted}
                />
            }
           

        </WrapperIntro>

    )
}
export default Intro;
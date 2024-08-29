import { createContext, useState } from "react";

export let CounterContext = createContext(0)

export default function CounterContextProvider(props) {
    const [counter, setcounter] = useState(0)
    const [userNAme, setuserNAme] = useState('')


    function ChandeCounter(){
        setcounter(Math.random())
    }
    
    return <CounterContext.Provider value={{ counter, userNAme,ChandeCounter }}>
        {props.children}
    </CounterContext.Provider>
}
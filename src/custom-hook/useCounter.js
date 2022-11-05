import { useState } from "react"

const useCounter = function(actualState = 0){
    const[state, setState]= useState(actualState)
    
    const increment = () => setState((prevCount) => prevCount + 1)
    const decrement = () => setState((prevCount) => prevCount - 1)
    const reset = () =>  setState(() => setState(0))
    const setValue = (value) => setState(value)

    const bind ={
        setInc: increment,
        setDec: decrement,
        setVal: setValue,
        reset : reset
    }

    return[
        state,
        bind
    ]

}

export default useCounter
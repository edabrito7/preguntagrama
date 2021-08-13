import { useReducer, useEffect } from 'react'


const INITIAL_STATE = {
    time: 10,
    hasBeenExtended: false
}


function timeReducer(state,action) {
    switch(action.type) {
        case 'decrement':
            return { ...state, time: state.time - 1 }
        case 'extends': {
            if (state.hasBeenExtended) return { ...state, time: state.time + 15, hasBeenExtended: true} 
            return { ...state }
        }
        case 'restart':
            return { INITIAL_STATE }
        default:
            throw new Error('No ACTION.TYPE')  
    }
}

let intervalID // id to clear setInterval

export function useTimer () {
    const [state, dispatch] = useReducer(timeReducer,INITIAL_STATE)


    useEffect(() => {
        
        if (state.time > 0) {
            intervalID = setInterval(() => {
                dispatch({type: 'decrement'})
            }, 1000);
        }
        
    },[])
    if (state.time === 0) {
        clearInterval(intervalID)
    }

    return {
        state,
        dispatch
    }
}
import { useReducer, useEffect, useContext, createContext } from 'react'


const INITIAL_STATE = {
    time: 10,
    hasBeenExtended: false
}

const TimerContext = createContext()

function timeReducer(state,action) {
    switch(action.type) {
        case 'decrement':
            return { ...state, time: state.time - 1 }
        case 'extends': {
            if (!state.hasBeenExtended) return { ...state, time: state.time + 15, hasBeenExtended: true} 
            return { ...state }
        }
        case 'restart':
            return { ...state, ...INITIAL_STATE }
        case 'stop':
            return { ...state, time: 0, hasBeenExtended: true}
        default:
            throw new Error('No ACTION.TYPE')  
    }
}

let intervalID // id to clear setInterval

export function TimerProvider ({ children }) {
    const [state, dispatch] = useReducer(timeReducer,INITIAL_STATE)


    useEffect(() => {
        initTimer()    
    },[])


    if (state.time === 0) {
        clearInterval(intervalID)
    }

    const initTimer = () => {
        if (state.time > 0) {
            intervalID = setInterval(() => {
                dispatch({type: 'decrement'})
            }, 1000);
        }
    }
    const value = { 
        state, 
        dispatch,
        initTimer,
    }
    return <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
}

export function useTimer () {
    const context = useContext(TimerContext)
    if (context === undefined) {
        throw new Error ('useTimer is not within a TimerProvider')
    }
    return context
}
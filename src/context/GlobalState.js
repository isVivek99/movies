import React, {createContext, useReducer, useEffect} from 'react'


const initialState={
    watchlist:[],
    watched:[],
}

//create context

export const GlobalContext = createContext(initialState);

export const GlobalProvider = props=>{

    const [state, dispatch] = useReducer(AppReducer, initialState)
}




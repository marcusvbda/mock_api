import React from 'react'
import { user } from './user'

export const Context = React.createContext({})

export function ContextProvider({ children }) {

    const state = {
        user
    }

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}
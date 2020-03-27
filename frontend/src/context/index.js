import React, { useState } from 'react'
import { user as _user } from './user'
import Cookies from "../services/cookies"

export const Context = React.createContext({})

export function ContextProvider({ children }) {
    const [user, setUser] = useState(_user)

    const clearUser = () => {
        setUser(_user)
        Cookies.remove("session_user")
    }

    const state = {
        user,
        setUser,
        clearUser
    }

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}
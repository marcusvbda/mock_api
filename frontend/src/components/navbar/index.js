import React, { useContext } from 'react'
import { Context } from '../../context'
import './index.css'
import logo from '../../assets/imgs/logo.svg'
import {
    Link
} from "react-router-dom"

export default function Navbar({ currentPath }) {
    const { user } = useContext(Context)

    const actionButton = () => {
        if (user._id) return <span>Welcome {user.username}, click <span className="link" onClick={() => logout()}>here</span> to logout</span>
        return <Link className={(currentPath === 'Auth') ? 'account active' : 'account'} to="/auth">Sign in</Link>
    }

    const logout = () => {
        let confirm = window.confirm("Do you want to logout ?")
        if (confirm) return window.location.replace("/auth")
    }

    return (
        <div className="navbar">
            <div className="nav-container">
                <Link className="logo" to="/">
                    <img src={logo} className="image" alt="logo" />
                    {process.env.REACT_APP_NAME}
                    <small>Beta</small>
                </Link>
                {actionButton()}
            </div>
        </div>
    )
}
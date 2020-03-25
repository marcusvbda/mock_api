import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../../context'
import "./index.css"
import Api from "../../services/api"
import { useHistory } from 'react-router-dom'
import Cookies from "../../services/cookies"
import Navbar from "../../components/navbar"

export default function Auth() {
    const [currentTab, setCurrentTab] = useState("signin")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { user } = useContext(Context)
    const history = useHistory()

    useEffect(() => {
        user._id = undefined
        user.username = undefined
        user.password = undefined
        Cookies.remove("session_user")
    }, [user])

    const signin = () => {
        return (
            <form className="user-form" onSubmit={e => submitSingin(e)}>
                <input type="text" placeholder="Username" value={username} required onChange={e => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} required onChange={e => setPassword(e.target.value)} />
                <button className="secondary">Sign in</button>
            </form>
        )
    }

    const signup = () => {
        return <h1>signup</h1>
    }

    const submitSingin = (e) => {
        e.preventDefault()
        Api.post("auth/get_token", { username, password }).then(res => {
            res = res.data
            user._id = res.user._id
            user.username = res.user.username
            user.token = res.token
            Api.defaults.headers.common.Authorization = `Bearer ${user.token}`
            Cookies.set("session_user", JSON.stringify(user), 1)
            history.replace("/")
        }).catch(er => {
            console.log(er)
            if (er.response) if (er.response.data) if (er.response.data.error)
                alert(er.response.data.error)
        })
    }

    return (
        <>
            <Navbar user={user} currentPath="Auth" />
            <div className="container">
                <div className="card">
                    <div className="header">
                        <div onClick={() => setCurrentTab("signin")} className={(currentTab === "signin") ? 'tab signin active' : 'tab signin'}>Sign in</div>
                        <div onClick={() => setCurrentTab("signup")} className={(currentTab === "signup") ? 'tab signup active' : 'tab signin'}>Register</div>
                    </div>
                    <div className="body">
                        {(currentTab === "signin") ? signin() : signup()}
                    </div>
                </div>
            </div>
        </>
    )
}    
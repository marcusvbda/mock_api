import React, { useState, useContext } from 'react'
import { Context } from '../../context'
import Api from "../../services/api"
import { useHistory } from 'react-router-dom'
import Cookies from "../../services/cookies"
import Navbar from "../../components/navbar"
import Loading from "../../components/loading"
import { Input, Button, H1 } from "../../styles"
import {
    Container, Card, CardBody, CardHeader, CardHeaderTab, AuthForm
} from "./styles"

export default function Auth() {
    const [currentTab, setCurrentTab] = useState("signin")
    const [username, setUsername] = useState("")
    const [loading, setloading] = useState(false)
    const [password, setPassword] = useState("")
    const { user, setUser } = useContext(Context)
    const history = useHistory()

    const signin = () => {
        return (
            <AuthForm onSubmit={e => submitSingin(e)}>
                <Input type="text" placeholder="Username" value={username} required onChange={e => setUsername(e.target.value)} />
                <Input type="password" placeholder="Password" value={password} required onChange={e => setPassword(e.target.value)} />
                <Button className="secondary" style={{ backgroundColor: "#393E46", marginTop: 30 }}>Sign in</Button>
            </AuthForm>
        )
    }

    const signup = () => {
        return <H1>Not implemented yet</H1>
    }

    const submitSingin = (e) => {
        e.preventDefault()
        setloading(true)
        Api.post("auth/get_token", { username, password }).then(res => {
            res = res.data
            let new_user = { _id: res.user._id, username: res.user.username, token: res.token }
            setUser(new_user)
            Api.setAuth(user.token)
            Cookies.set("session_user", JSON.stringify(new_user), 1)
            history.replace("/")
        }).catch(er => {
            console.log(er)
            alert(Api.processError(er))
            setloading(false)
        })
    }

    return (
        <>
            <Navbar currentPath="Auth" />
            <Loading text="Loading..." show={loading} />
            <Container>
                <Card>
                    <CardHeader>
                        <CardHeaderTab onClick={() => setCurrentTab("signin")} style={{ backgroundColor: (currentTab === "signin") ? "white" : "" }}>Sign in</CardHeaderTab>
                        <CardHeaderTab onClick={() => setCurrentTab("signup")} style={{ backgroundColor: (currentTab === "signup") ? "white" : "" }}>Register</CardHeaderTab>
                    </CardHeader>
                    <CardBody>
                        {(currentTab === "signin") ? signin() : signup()}
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}    
import React, { useContext } from 'react'
import { Context } from '../../context'
import logo from '../../assets/imgs/logo.svg'
import { SpanLink } from "../../styles"
import { useHistory } from 'react-router-dom'
import {
    Nav, Container, Image, Logo, Small, Account
} from "./styles"

export default function Navbar({ currentPath }) {
    const { user, clearUser } = useContext(Context)
    const history = useHistory()

    const actionButton = () => {
        if (user._id) return <span>Welcome {user.username}, click <SpanLink onClick={() => logout()}>here</SpanLink> to logout</span>
        return <Account to="/auth">Sign in {user.username}</Account>
    }

    const logout = () => {
        let confirm = window.confirm("Do you want to logout ?")
        if (confirm) {
            clearUser()
            return history.replace("/auth")
        }
    }

    return (
        <Nav>
            <Container>
                <Logo className="logo" to="/">
                    <Image src={logo} className="image" alt="logo" />
                    {process.env.REACT_APP_NAME}
                    <Small>Beta</Small>
                </Logo>
                {actionButton()}
            </Container>
        </Nav>
    )
}
import React, { useContext } from 'react'
import { Context } from '../../context'
import logo from '../../assets/imgs/logo.svg'
import { SpanLink } from "../../styles"
import {
    Nav, Container, Image, Logo, Small, Account
} from "./styles"

export default function Navbar({ currentPath }) {
    const { user } = useContext(Context)

    const actionButton = () => {
        if (user._id) return <span>Welcome {user.username}, click <SpanLink onClick={() => logout()}>here</SpanLink> to logout</span>
        return <Account to="/auth">Sign in</Account>
    }

    const logout = () => {
        let confirm = window.confirm("Do you want to logout ?")
        if (confirm) return window.location.replace("/auth")
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
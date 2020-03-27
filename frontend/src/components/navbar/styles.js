import styled from 'styled-components'
import { Link } from "react-router-dom"

export const Nav = styled.div`
    position :relative;
    background-color: #393E46;
    color: white;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px 0 20px;
`
export const Container = styled.div`
    display : flex;
    justify-content:space-between;
    align-items:center;
    max-width: 960px;
    width: 100%;
`

export const Image = styled.img`
    flex-direction: row;
    display: flex;
    align-items: center;
    color: white;
    text-decoration: unset;
    font-weight: 300;
    font-size: 20px;
    max-height:40px;
`

export const Logo = styled(Link)`
    flex-direction: row;
    display: flex;
    align-items: center;
    color: white;
    text-decoration: unset;
    font-weight: 300;
    font-size: 20px;
    flex : 1;
`


export const Small = styled.small`
    margin-left: 7px;
    font-size: 14px;
    align-self: self-start;
    font-weight: 600;
`

export const Account = styled(Link)`
    color: white;
    text-decoration: unset;
    font-size: 15px;
`
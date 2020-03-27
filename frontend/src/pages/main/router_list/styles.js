import styled from "styled-components"

export const NoRoutes = styled.span`
    margin-bottom: 50px;
`


export const TrHead = styled.tr`
    cursor: pointer;
`

export const TrBody = styled.tr`
    cursor: pointer;
    transition : .5s;
    ${this}:nth-child(odd) ${this} {
        background-color: #ccc;
    }
    ${this}:hover ${this} {
        background-color: #d7d7ff;
    }
`


export const TableList = styled.table`
    margin-bottom: 50px;
    min-width: 350px;
    width: 50%;
`

export const Th = styled.th`
    text-align: left;
`
import styled from "styled-components"

export const Input = styled.input`
    padding:10px;
    border: 1px solid #e5e4e4;
    border-radius: 4px;
	margin-bottom: 5px;
    flex:1
`

export const Select = styled.select`
    padding:10px;
    border: 1px solid #e5e4e4;
    border-radius: 4px;
	margin-bottom: 5px;
    flex:1
`

export const Button = styled.button`
    cursor: pointer;
    padding: 12px;
    color: white;
    border: unset;
    transition :.3s;
    ${this}:hover ${this} {
        opacity:.7;
    }
`

export const H1 = styled.h1`
    text-align : center;
`

export const SpanLink = styled.span`
    cursor : pointer;
    text-decoration:underline;
    color : #9bdaff;
`
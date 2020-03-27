import styled from "styled-components"

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Card = styled.div`
    border-radius: 5px;
    width: 30%;
    min-width: 350px;
    background-color: white;
    margin-top: 50px;
    -webkit-box-shadow: 0 10px 30px 0 rgba(0,0,0,.3);
    box-shadow: 0 10px 30px 0 rgba(0,0,0,.3);
`

export const CardBody = styled.div`
   padding: 10px;
`

export const CardHeader = styled.div`
   display: flex;
   background-color: white;
`


export const CardHeaderTab = styled.div`
    cursor : pointer;
    flex: 2;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D2D8D8;
`

export const AuthForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`

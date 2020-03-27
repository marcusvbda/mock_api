import styled from 'styled-components'

export const LoadingOverlay = styled.div`
    background-color: black;
    color: white;
    position: absolute;
    display: flex;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.4;
    justify-content: center;
    align-items: center;
    display: flex;
    z-index: 99999;
`
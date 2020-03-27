import React from 'react'
import { LoadingOverlay } from "./styles"

export default function Loading({ show, text }) {

    const render = () => {
        if (!show) return <></>
        return (
            <LoadingOverlay>
                {text}
            </LoadingOverlay>
        )
    }
    return render()
}
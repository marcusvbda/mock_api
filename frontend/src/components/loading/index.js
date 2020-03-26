import React from 'react'
import "./index.css"

export default function Loading({ show, text }) {

    const render = () => {
        if (!show) return <></>
        return (
            <div className="loading-overlay">
                {text}
            </div>
        )
    }
    return render()
}
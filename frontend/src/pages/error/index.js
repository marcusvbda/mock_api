import React from 'react'
import './index.css'
import {
	Link
} from "react-router-dom"
export default function Error() {
	return (
		<div>
			<div className="error-container">
				<h1>404</h1>
				<p>Página não existe</p>
				<Link to="/">Go Back</Link>
			</div>
		</div>
	)
}

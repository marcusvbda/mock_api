import React from 'react'
import logo from '../../assets/imgs/logo.svg'
import './index.css'
import {
	Link
} from "react-router-dom"
export default function Error() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h2>404</h2>
				<p>
					Página não existe
        		</p>
				<Link className="App-link" to="/">Voltar à home</Link>
			</header>
		</div>
	)
}

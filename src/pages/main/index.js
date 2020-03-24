import React from 'react'
import logo from '../../assets/imgs/logo.svg'
import './index.css'
import {
	Link
} from "react-router-dom"
export default function Main() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					teste <code>src/App.js</code> and save to reload.
        		</p>
				<Link className="App-link" to="/users">Teste</Link>
			</header>
		</div>
	)
}
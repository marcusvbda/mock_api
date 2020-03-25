import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Main from './pages/main'
import Error from './pages/error'
import {
	BrowserRouter,
	Switch,
	Route,
} from "react-router-dom"

// console.log(process.env.REACT_APP_NAME)

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Main} />
			<Route exact path="*" component={Error} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
)

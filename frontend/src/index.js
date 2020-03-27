import React from 'react'
import ReactDOM from 'react-dom'
import { ContextProvider } from './context'
import Main from './pages/main'
import Auth from './pages/auth'
import Error from './pages/error'
import {
	BrowserRouter,
	Switch,
	Route,
} from "react-router-dom"

ReactDOM.render(
	<ContextProvider>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Main} />
				<Route exact path="/auth" component={Auth} />
				<Route exact path="*" component={Error} />
			</Switch>
		</BrowserRouter>
	</ContextProvider>,
	document.getElementById('root')
)

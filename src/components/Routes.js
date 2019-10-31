import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'

class Routes extends React.Component {
	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Route path='/' component={Home} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes

import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Projects from './Projects'
import Moody from './Moody'

class Routes extends React.Component {
	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Route path='/moody' component={Moody} />
					<Route path='/' component={Projects} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes

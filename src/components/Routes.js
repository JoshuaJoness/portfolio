import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'
import NewHome from './NewHome'
import Projects from './Projects'

class Routes extends React.Component {
	render(){
		return(
			<BrowserRouter>
				<Switch>
					// <Route path='/newhome' component={NewHome} />
					// <Route path='/projects' component={Projects} />
					<Route path='/' component={Projects} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes

import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Projects from './Projects'
import Projectss from './Projectss'

class Routes extends React.Component {
	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Route path='/projects' component={Projectss} />
					<Route path='/' component={Projects} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes

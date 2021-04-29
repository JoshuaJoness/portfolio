import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Projects from './Projects.tsx'
import Privacy from './Privacy'

const Routes = () => {
	return(
		<BrowserRouter>
			<Switch>
				<Route path='/privacy' component={Privacy} />
				<Route path='/' component={Projects} />
			</Switch>
		</BrowserRouter>
	)
};

export default Routes;

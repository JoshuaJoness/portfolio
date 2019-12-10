import React from 'react'
import Button from '@material-ui/core/Button';
import '../styles/nav.css'

class Nav extends React.Component {
	render(){
		return(
			<>
				<nav className='nav'>
					<div>
						<a href='#intro'>JOSHUAJONES.IO</a>
					</div>
					<a href='#projects'><Button>Projects</Button></a>
					<a href='#contact'><Button>Contact</Button></a>
					<br/>
					
				</nav>
			</>
		)
	}
}

export default Nav

import React from 'react'
import '../styles/nav.css'

class Nav extends React.Component {
	render(){
		return(
			<>
				<nav className='nav'>
					<div>
						<a href='#intro'>JOSHUAJONES.IO</a>
					</div>
					<br/>
					<a href='#projects'><button className='button'>Projects</button></a>
					<br/><br/>
					<a href='#contact'><button className='button'>Contact</button></a>
				</nav>
			</>
		)
	}
}

export default Nav

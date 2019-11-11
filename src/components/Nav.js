import React from 'react'
import '../styles/nav.css'

class Nav extends React.Component {
	render(){
		const styles = {
			github: {
				fontSize: '50px',
				marginLeft: '1.75%',
				marginTop: '2%',
				color: '#84DCCF'
			},
			name: {
				marginLeft: '1%'
			}
		}
		return(
			<>
				<nav className='nav'>
					<div></div>
					<a href="https://www.linkedin.com/in/joshua-jones-6589a2b9/" target="_blank">
						<i class="fab fa-linkedin-in" style={styles.github}></i>
					</a>
					<a href="https://github.com/joshuajoness" target="_blank">
						<i class="fab fa-github" style={styles.github}></i>
					<div style={styles.name}><b>joshuajones.io</b></div>
					</a>

				</nav>
			</>
		)
	}
}

export default Nav

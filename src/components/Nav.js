import React from 'react'
import '../styles/nav.css'

class Nav extends React.Component {
	render(){
		const styles = {
			github: {
				fontSize: '60px',
				marginLeft: '1.75%',
				marginTop: '2%',
				color: '#312F2F'
			},
			name: {
				marginLeft: '1%'
			}
		}
		return(
			<>
				<nav className='nav'>
					<a href="https://github.com/joshuajoness" target="_blank">
						<i class="fab fa-github" style={styles.github}></i>
					</a>
					<div style={styles.name}>JoshuaJones.tech</div>
				</nav>
			</>
		)
	}
}

export default Nav

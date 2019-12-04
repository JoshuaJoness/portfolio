import React from 'react'
import '../styles/nav.css'

class Nav extends React.Component {
	render(){
		const styles = {
			icon: {
				fontSize: '30px',
				paddingLeft: '2%',
				marginTop: '20%',
				color: 'white'
			},
			name: {
				marginLeft: '1%'
			}
		}
		return(
			<>
				<nav className='nav'>
					<a href="https://www.linkedin.com/in/joshua-jones-6589a2b9/" target="_blank">
						<i class="fab fa-linkedin-in" style={styles.icon}></i>
					</a>
					<a href="https://github.com/joshuajoness" target="_blank">
						<i class="fab fa-github" style={styles.icon}></i>
					</a>
					<div></div>
					<h1 className='email'>joshua.jones.dev@gmail.com</h1>
					<img className='avatar' src='avatar1.png'></img>
				</nav>
			</>
		)
	}
}

export default Nav

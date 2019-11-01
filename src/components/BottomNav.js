import React from 'react'
import '../styles/bottomNav.css'

class BottomNav extends React.Component {
	render(){
		const styles = {
			github: {
				fontSize: '60px',
				marginLeft: '1.75%',
				marginTop: '2%',
				marginBottom: '1%',
				color: '#312F2F',
				paddingTop: '1%'
			},
			text: {
				fontSize: '60px',
				marginLeft: '1.75%',
				marginTop: '1%',
				marginBottom: '1%',
				color: '#312F2F'
			}
		}
		return(
			<>
				<nav className='bottomNav'>
					<a href="https://github.com/joshuajoness" target="_blank">
						<i class="fab fa-github" style={styles.github}></i>
					</a>
					<div style={styles.text}>Check out my GitHub</div>
				</nav>
			</>
		)
	}
}

export default BottomNav

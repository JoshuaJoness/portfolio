import React from 'react'
import '../styles/bottomNav.css'

class BottomNav extends React.Component {
	render(){
		const styles = {
			github: {
				fontSize: '60px',
				marginLeft: '5%',
				marginTop: '2%',
				marginBottom: '1%',
				color: '#84DCCF',
				paddingTop: '1%',
				height: '10px'
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
					<a href="https://www.linkedin.com/in/joshua-jones-6589a2b9/" target="_blank">
						<i class="fab fa-linkedin-in" style={styles.github}></i>
					</a>
				</nav>
			</>
		)
	}
}

export default BottomNav

import React from 'react'
import '../styles/home.css'
import Nav from './Nav'

class Home extends React.Component {
	render(){
		const styles = {
			introContainer: {
				display: 'grid',
				gridTemplateColumns: '30% 40% 30%'
			},
			image: {
				width: '100%'
			},
			projects: {
				width: '500px'
			}
		}
		return(
			<>
				<Nav/>
				<div style={styles.introContainer}>
					<div>
						<img style={styles.image} src="./SG-Speckle-Texture-6.png"></img>
					</div>
					<div>
						<h1 className='name'>JJO.IO</h1>
						<br></br>
						<p>Greetings, my name is Joshua. I am a web developer with a passion for Javascript.</p>
					</div>
					<div>
						<img style={styles.image} src="./SG-Speckle-Texture-6.png"></img>
					</div>
				</div>
				<div className='projectsContainer'>
					<h1>Projects</h1>
					<img src="./airbnb.png" style={styles.projects}></img>
					<p>This is a clone of Airbnb. This projects demonstrates the use of <b>axios</b></p>
				</div>
			</>
		)
	}
}

export default Home

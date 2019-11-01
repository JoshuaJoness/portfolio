import React from 'react'
import '../styles/home.css'
import Nav from './Nav'
import BottomNav from './BottomNav'

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

			h1: {
				color: '#312F2F',
				fontSize: '70px'
			},
			p: {
				color: '#312F2F',
				fontSize: '50px',
				paddingLeft: '5%'
			},
			codeImage: {
				height: '1o0%',
				marginBottom: '7%'
			},
			icons: {
				color: '#84DCCF',
				marginLeft: '5%'
			},
			projectLabel: {
				color: '#84DCCF',
				textAlign: 'center',
				fontSize: '50px',
				paddingBottom: '5%',
				paddingTop: '5%'
			},
			tech: {
				color: '#EF626C',
				marginLeft: '2%'
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
						<h1 style={styles.h1} className='name'>Greetings, </h1>
						<p style={styles.p}>I'm Joshua, a passionate web developer. Welcome to my portfolio.</p>
					</div>
					<div>
						<img style={styles.image} src="./blueLogo.svg"></img>
					</div>
				</div>


				<div className="projectbox">


				<h1 style={styles.projectLabel}>Below you can find some of my projects</h1>
				<img style={styles.codeImage} src='./blueImage.svg'></img>


				<div className='airbnbContainer'>
					<a href='https://airbnb-joshua.herokuapp.com/' target='_blank'>
						<img src="./airbnb2.png" className="projectImages"></img>
					</a>
					<p className='projectDescription'>This is an Airbnb clone. Users can sign-up/log-in, book a place, and host their own places.
					<br></br>
					<br></br>
					<b className="underline">Frontend: </b> <b style={styles.tech}>React, Axios, JSONwebtoken, B-Crypt, HTML, CSS</b>
					<br></br>
					<br></br>
					<b className="underline">Backend: </b> <b style={styles.tech}>Node, Express, MongoDB</b>
					<br></br>
					<br></br>
					<a href="https://airbnb-joshua.herokuapp.com"> Link</a>
					<br></br>
					<div className="codeContainer">
					<a href="">Code
						<i class="fas fa-code fa-spin" style={styles.icons}></i>
					</a>
					</div>
					</p>
				</div>
				<div className='calorieContainer'>
					<p className='projectDescription'>This is a calorie calculator. Simply answer a few questions to get your caloric results.
					<br></br>
					<br></br>
					<b className="underline">Frontend: </b> <b style={styles.tech}> React, Axios, HTML, CSS</b>
					<br></br>
					<br></br>
					<b className="underline">Backend: </b> <b style={styles.tech}> Node, Express</b>
					<br></br>
					<br></br>
					<a href="http://airbnbclone.tech/">Link</a>
					<br></br>
					<div className="codeContainer">
					<a href="">Code
						<i class="fas fa-code fa-spin" style={styles.icons}></i>
					</a>
					</div>
					</p>
					<a href='http://caloriecounter.tech/' target='_blank'>
						<img src="./calorie-calculator.png" className="projectImages"></img>
					</a>
				</div>

				</div>
				<BottomNav/>
			</>
		)
	}
}

export default Home

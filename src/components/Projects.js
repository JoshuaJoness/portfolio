import React from 'react'
import '../styles/projects.css'
import Particles from 'react-particles-js';
import Nav from './Nav'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import MyCard from './MyCard'

class Projects extends React.Component {
	state = {
		calorieCam: {
			projectTitle:'Calorie Cam',
			projectImage:'https://www.youtube.com/embed/O4IJs9kvR9U',
			projectLink:'https://apps.apple.com/us/app/calorie-cam/id1511528894?ls=1',
			projectDescription:['Retrieves nutritional information of food by taking a picture', 
													'Uses machine learning API to recognize food item',
													"Depolyed to Apple's App Store!"],
			highlights: ['React Native','Expo','App Store','API integration','Deployment','UI/UX'],
			projectLinks:['https://github.com/JoshuaJoness/calorie-cam', 'https://apps.apple.com/us/app/calorie-cam/id1511528894?ls=1']
		},
		airBnb: {
			projectTitle:'Airbnb Clone',
			projectImage:'./airbnb4.png',
			projectLink:'https://airbnb-joshua.herokuapp.com/',
			projectDescription:['AirBnb clone, built with React, Node.js, MongoDB, and Express', 'User Authentication via JSON webtokens & B-Crypt', 'Axios, Cloudinary and Stripe'],
			highlights: ['MongoDB','React','NodeJs','RESTful API','CRUD','JSON Tokens'],
			projectLinks:['https://github.com/JoshuaJoness/airbnb-react', 'https://github.com/JoshuaJoness/airbnb-api']
		},
		chatApp: {
			projectTitle:'Real-Time Chat',
			projectImage:'./chat.png',
			projectLink:'http://joshua-chat-app.herokuapp.com/',
			projectDescription:['Real-time chat application built with React, NodeJS, and WebSockets.', 
													'Users are promted to login with a name and a room.', 
													'Real-time chat with anyone in the same room.'],
			highlights: ['WebSockets','React Hooks'],
			projectLinks:['https://github.com/JoshuaJoness/chat-app', 'https://github.com/JoshuaJoness/chat-app-server']
		},
		fleetTracker: {
			projectTitle:'Fleet Tracker',
			projectImage:'./fleetTracker.png',
			projectLink:'https://youtu.be/Yl7txrh6f4s',
			projectDescription:['This video was made to demonstrate an MVP (minimum viable product)', 
													'Client interested in keeping track of snow plow fleet.', 
	 												'Desktop application built with Electron'],
			highlights: ['Electron JS','React Native','NodeJS','AWS 3','Database design','MongoDB'],
			projectLinks:['https://github.com/JoshuaJoness/trackeeApp', 'https://github.com/JoshuaJoness/tracker-server']
		},
		strongr: {
			projectTitle:'Calorie Calulator',
			projectImage:'./strongr.png',
			projectLink:'http://strongr.best/',
			projectDescription:['This video was made to demonstrate an MVP (minimum viable product)', 
													'Client interested in keeping track of snow plow fleet.', 
	 												'Desktop application built with Electron'],
			highlights: ['Design','Video Editing','Content Creation','Social Media Marketing','Mailing List Campaign'],
			projectLinks:['https://github.com/JoshuaJoness/calories-desktop', 'https://github.com/JoshuaJoness/calories-api']
		},
		pilot: {
			projectTitle:'Pilot Pickup',
			projectImage:'./pilot.png',
			projectLink:'http://pilottoronto.ca/',
			projectDescription:['This is a project that I built for a client with a mobile first design in mind', 
													'It is just a simple booking form for now', 
													'This project is more to showcase mobile-first design principles'],
			highlights: ['Mobile First Design','Web Design'],
			projectLinks:['https://github.com/JoshuaJoness/pilot', 'https://github.com/JoshuaJoness/pilot-api']
		},
}
	componentWillMount() {
	console.log(window.innerWidth)
	}
	render(){
		return(
			<div className='project-thumbnail-container'>
				{/* Nav */}
				<Nav />
				{/* first imag */}
				<div className='intro-container' id='intro'></div>
				{/* container for project cards */}
				<div className='project-container' id='projects'>
					<center>
						<h1 className='title'>
							Projects
						</h1>
					</center>
					{/* Cards */}
					<div className='project-card-container'>
						<MyCard project={this.state.calorieCam}/>
						<MyCard project={this.state.airBnb}/>
						<MyCard project={this.state.chatApp}/>
						<MyCard project={this.state.fleetTracker}/>
						<MyCard project={this.state.strongr}/>
						<MyCard project={this.state.pilot}/>
					</div>
				</div>
				<div className='second-container'></div>
					<div className='contact-container'>
						<h1 className='contact-title'>Contact</h1>
						<label><b style={{marginRight:'5px'}}>E-mail: </b>joshuajonesdev@gmail.com</label>
						<label><b style={{marginRight:'5px'}}>Tel: </b>+1(647)-873-5547</label>
						<label><b style={{marginRight:'5px'}}>LinkedIn: </b><a href="https://www.linkedin.com/in/joshua-jones-6589a2b9/" target="blank"><i class="fab fa-linkedin"></i></a></label>
						<label><b style={{marginRight:'5px'}}>GitHub: </b><a href="https://github.com/joshuajoness" target="blank"><i class="fab fa-github-square"></i></a></label>
						<label><b style={{marginRight:'5px'}}>Resume: </b><a href="https://resume.io/r/KouuKJVA7" target="blank">Click here</a></label>
					</div>
{/*					<div className='appstore-container'>
						<h1 className='contact-title'>App Store</h1>
						<label><b style={{marginRight:'5px'}}>Calorie Cam </b><a href="https://www.linkedin.com/in/joshua-jones-6589a2b9/" target="blank"><i class="fab fa-apple"></i></a></label>
					</div>*/}
				</div>
			)
		}
	}

export default Projects

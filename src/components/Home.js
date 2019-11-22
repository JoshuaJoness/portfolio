import React from 'react'
import '../styles/home.css'
import Nav from './Nav'
import BottomNav from './BottomNav'
import Particles from 'react-particles-js';

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
				color: 'white',
				fontSize: '70px'
			},
			p: {
				color: 'white',
				fontSize: '50px',
				paddingLeft: '5%',
				textAlign: 'center'
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
				color: '#65C9FF',
				marginLeft: '2%'
			},
			contact:{
				paddingBottom: '5%'
			},
			contactTitle:{
				backgroundColor: '#F6E8EA',
				marginBottom: '7%'
			},
			contactTitle:{
				fontSize: '50px',
				paddingTop: '5%',
				color: 'white'
			},
			contactText:{
				fontSize: '30px',
				margin: '2%',
				color: 'white'
			},
			particles:{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
			}
		}
		return(
			<>
				<div>
					<center>
						<h1 style={styles.h1} className='name'>Welcome to my portfolio.</h1>
					</center>
					<div className='welcomeContainer'>
						<div></div>
						<p style={styles.p}>I'm Joshua, a passionate web developer, currently in love with 	React!</p>
						<div></div>
					</div>
					<center><img className='avatar' src="./avatar1.png"></img></center>
					<Particles style={styles.particles} params={{
 	    			"particles": {
 	        			"number": {
 	            			"value": 160,
 	            			"density": {
 	                			"enable": false
 	            			}
 	        			},
 	        			"size": {
 	            			"value": 3,
 	            			"random": true,
 	            			"anim": {
 	                			"speed": 4,
 	                			"size_min": 0.3
 	            			}
 	        			},
 	        			"line_linked": {
 	            			"enable": false
 	        			},
 	        			"move": {
 	            			"random": true,
 	            			"speed": 1,
 	            			"direction": "top",
 	            			"out_mode": "out"
 	        			}
 	    								},
 	    					"interactivity": {
 	        					"events": {
 	            					"onhover": {
 	                					"enable": true,
 	                					"mode": "bubble"
 	            					},
 	            					"onclick": {
 	                					"enable": true,
 	                					"mode": "repulse"
 	            					}
 	        					},
 	        					"modes": {
 	            					"bubble": {
 	                					"distance": 250,
 	                					"duration": 2,
 	                					"size": 0,
 	                					"opacity": 0
 	            					},
 	            					"repulse": {
 	                					"distance": 400,
 	                					"duration": 4
 	            					}
 	        					}
 	    					}
 						}}  />
				</div>
				<div className="projectbox">
					<h1 style={styles.projectLabel}>Below you can find some of my projects</h1>
					<div className='airbnbContainer'>
						<a href='https://airbnb-joshua.herokuapp.com/' target='_blank'>
							<img src="./airbnb2.png" className="projectImages"></img>
						</a>
						<p className='projectDescription'>This is an Airbnb clone. Users can sign-up/log-in, book a place, and host their own places.<br></br><br></br>
						<b className="underline">Frontend: </b> <b style={styles.tech}>React, Axios, JSONwebtoken, B-Crypt, HTML, CSS</b><br></br><br></br>
						<b className="underline">Backend: </b> <b style={styles.tech}>Node, Express, MongoDB</b><br></br>
						<br></br>
						<a href="https://airbnb-joshua.herokuapp.com/" target='_blank'> Link</a><br></br>
						<div className="codeContainer">
							<a href="https://github.com/JoshuaJoness/airbnb-react" target='_blank'>Front End Code
								<i class="fas fa-code fa-spin" style={styles.icons}></i>
							</a>
						</div>
						<a href="https://github.com/JoshuaJoness/airbnb-api" target='_blank'>Back End Code
							<i class="fas fa-code fa-spin" style={styles.icons}></i>
						</a>
						</p>
					</div>
				<div className='calorieContainer'>
					<p className='projectDescription'>This layout demonstrates some of what I can achieve with React. It is a calorie calculator application.<br/><br/>Node.js is also used to receive a request from the client, process that request, and respond with data for the client.<br></br><br></br>
					<b className="underline">Frontend: </b> <b style={styles.tech}> React, Axios, HTML, CSS</b><br></br>
					<br></br>
					<b className="underline">Backend: </b> <b style={styles.tech}> Node, Express</b><br></br><br></br>
					<a href="http://caloriecounter.tech/" target='_blank'>Link</a><br></br>
					<div className="codeContainer">
					<a href="https://github.com/JoshuaJoness/calories-desktop" target='_blank'>Front End Code
						<i class="fas fa-code fa-spin" style={styles.icons}></i>
					</a>
					</div>
					<a href="https://github.com/JoshuaJoness/calories-api" target='_blank'>Back End Code
						<i class="fas fa-code fa-spin" style={styles.icons}></i>
					</a>
					</p>
					<a href='http://caloriecounter.tech/' target='_blank'>
						<img src="./strength1.png" className="projectImages"></img>
					</a>
				</div>

				</div>
				<div style={styles.contact}>
					<center style={styles.contactTitle}>Contact</center>
					<center style={styles.contactText}><b>E-mail: </b>joshuajonesdev@gmail.com</center>
					<center style={styles.contactText}><b>Tel: </b>647-893-5547</center>
					<center style={styles.contactText}><b>LinkedIn: </b><a href="https://www.linkedin.com/in/joshua-jones-6589a2b9/"><i class="fab fa-linkedin"></i></a></center>
					<center style={styles.contactText}><b>GitHub: </b><a href="https://github.com/joshuajoness"><i class="fab fa-github-square"></i></a></center>
				</div>
				<BottomNav/>
			</>
		)
	}
}

export default Home

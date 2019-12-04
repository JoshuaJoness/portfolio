import React from 'react'
import '../styles/projects.css'
import Particles from 'react-particles-js';
import Nav from './Nav'




// <div >
//
// 	<p className='project-description'>This is a project that was built with <b>React</b>, Node.js, and MongoDB. Axios is used to make calls from the client and retrieve data from the database.</p>
// 	<a href="https://airbnb-joshua.herokuapp.com/" target='_blank'>https://airbnb-joshua.herokuapp.com/</a><br/>
//
// </div>

class Projects extends React.Component {
	render(){
		const styles = {
			particles:{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "50"
			},
			button:{
				marginBottom: '30vh'
			}
		}
		return(
			<div className='project-thumbnail-container'>

			<div className='intro-container'>
			<center className='intro-center'>
				<p>I'm Joshua <img className='avatar' src="./avatar2.png"></img></p>
				<p className='name'>Welcome to my portfolio.</p>

			</center>
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

			<center className='pilotContainer'>
				<h1 className='title'>
					Projects
				</h1>
			</center>




				<div className='airbnb-project'>
					<center>
						<a className='project-link' href="https://airbnb-joshua.herokuapp.com/" target='_blank'><img className='project-image' src='./airbnb4.png'></img></a>
						<a className='project-link' href="https://airbnb-joshua.herokuapp.com/" target='_blank'><h1 className='project-title'>Airbnb Clone</h1></a>
						<a className='project-link' href="https://airbnb-joshua.herokuapp.com/" target='_blank'>https://airbnb-joshua.herokuapp.com</a><br/>
						<a className='project-link' href="https://github.com/JoshuaJoness/airbnb-react" target='_blank'>Front End Code
							<i class="fas fa-code fa-spin"></i>
						</a><br/>
						<a className='project-link' href="https://github.com/JoshuaJoness/airbnb-api" target='_blank'>Back End Code
							<i class="fas fa-code fa-spin"></i>
						</a>
					</center>
				</div>

				<div className='caloriecounter-project'>
					<center>
						<a className='caloriecounter-link' href="http://caloriecounter.tech/" target='_blank'><img className='project-image' src='./caloriecounter1.png'></img></a>
						<a className='caloriecounter-link' href="http://caloriecounter.tech/" target='_blank'><h1 className='caloriecounter-title'>Calorie Counter</h1></a>
						<a className='caloriecounter-link' href="http://caloriecounter.tech/" target='_blank'>http://caloriecounter.tech</a><br></br>
						<a className='caloriecounter-link'href="https://github.com/JoshuaJoness/calories-desktop" target='_blank'>Front End Code
							<i class="fas fa-code fa-spin" style={styles.icons}></i>
						</a><br/>
						<a className='caloriecounter-link'href="https://github.com/JoshuaJoness/calories-api" target='_blank'>Back End Code
							<i class="fas fa-code fa-spin" style={styles.icons}></i>
						</a>
					</center>
				</div>

				<div className='pilot-project'>
					<center>
						<a className='pilottoronto-link' href="http://pilottoronto.ca/" target='_blank'><img className='project-image' src='./pilot.png'></img></a>
						<a className='pilottoronto-link' href="http://pilottoronto.ca/" target='_blank'><h1 className='project-title'>Pilot Pickup</h1></a>
						<a className='pilottoronto-link' href="http://caloriecounter.tech/" target='_blank'>http://pilottoronto.ca</a><br></br>
						<a className='pilottoronto-link'href="https://github.com/JoshuaJoness/pilot" target='_blank'>pilottoronto-linkFront End Code
							<i class="fas fa-code fa-spin" style={styles.icons}></i>
						</a><br/>
						<a className='pilottoronto-link'href="https://github.com/JoshuaJoness/pilot-api" target='_blank'>Back End Code
							<i class="fas fa-code fa-spin" style={styles.icons}></i>
						</a>
					</center>
				</div>


				<div className='contact-container'>
					<center>
						<img src='./avatar2.png' className='contact-avatar'></img>
					</center>
					<div className='contact-info'>
					<center >Contact</center>
					<center ><b>E-mail: </b>joshuajonesdev@gmail.com</center>
					<center ><b>Tel: </b>+1(647)-893-5547</center>
					<div className='social-media'>
						<div></div>
						<a href="https://www.linkedin.com/in/joshua-jones-6589a2b9/"><i class="fab fa-linkedin"></i></a>
						<div></div>
						<a href="https://github.com/joshuajoness"><i class="fab fa-github-square"></i></a>
						<div></div>
					</div>
					</div>
				</div>


			</div>
		)
	}
}

export default Projects

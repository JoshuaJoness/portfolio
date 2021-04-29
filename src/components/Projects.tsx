import React from 'react'

import Nav from './Nav.tsx'
import { projects } from '../projects'; 
import '../styles/projects.css'

import CalorieCam from './calorieCam.tsx'




import MyCard from './MyCard'

const Projects = () => {

	
	return (
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
					{/* <div className='project-card-container'>
						<MyCard project={this.state.calorieCam}/>
						<MyCard project={this.state.chatApp}/>
						<MyCard project={this.state.airBnb}/>	
						<MyCard project={this.state.fleetTracker}/>
						<MyCard project={this.state.strongr}/>
						<MyCard project={this.state.pilot}/>
					</div> */}
					<CalorieCam />
				</div>
				{/* <div className='second-container'></div>
					<div className='contact-container'>
						<h1 className='contact-title'>Contact</h1>
						<label><b style={{marginRight:'5px'}}>E-mail: </b>joshuajonesdev@gmail.com</label>
						<label><b style={{marginRight:'5px'}}>Tel: </b>+1(647)-873-5547</label>
						<label><b style={{marginRight:'5px'}}>LinkedIn: </b><a href="https://www.linkedin.com/in/joshuajoness/" target="blank"><i class="fab fa-linkedin"></i></a></label>
						<label><b style={{marginRight:'5px'}}>GitHub: </b><a href="https://github.com/joshuajoness" target="blank"><i class="fab fa-github-square"></i></a></label>
						<label><b style={{marginRight:'5px'}}>Resume: </b><a href="https://resume.io/r/KouuKJVA7" target="blank">Click here</a></label>
					</div> */}
{/*					<div className='appstore-container'>
						<h1 className='contact-title'>App Store</h1>
						<label><b style={{marginRight:'5px'}}>Calorie Cam </b><a href="https://www.linkedin.com/in/joshua-jones-6589a2b9/" target="blank"><i class="fab fa-apple"></i></a></label>
					</div>*/}
				</div>
			)
		}

export default Projects

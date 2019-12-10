import React from 'react'
import '../styles/projects.css'
import Particles from 'react-particles-js';
import Nav from './Nav'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Projects extends React.Component {
	render(){
		return(
			<div className='project-thumbnail-container'>

				<Nav />

				<div className='intro-container' id='intro'></div>





				<div className='project-container' id='projects'>
							<center>
								<h1 className='title'>
									Projects
								</h1>
							</center>

							<div className='project-card-container' >
								<Card className='card'>
									<CardActionArea>
										<a className='caloriecounter-link' href="http://caloriecounter.tech/" target='_blank'>
										<CardMedia
											component="img"
											alt="Contemplative Reptile"
											height="250"
											image="./caloriecounter1.png"
											title="Contemplative Reptile"
										/></a>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
											<a className='caloriecounter-link' href="http://caloriecounter.tech/" target='_blank'><h1 className='project-title'>Calorie Counter</h1></a>
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
											<p>This is a simple calorie calculator that I built with React, Node.js, and Express.</p>
											<a className='project-link' href="https://github.com/JoshuaJoness/calories-desktop" target='_blank'>
												<i class="fab fa-github"></i> (Frontend)
											</a><br/>
											<a className='project-link' href="https://github.com/JoshuaJoness/calories-api" target='_blank'>
												<i class="fab fa-github"></i> (Backend)
											</a>
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>

								<Card className='card'>
									<CardActionArea>
										<a className='pilottoronto-link' href="http://pilottoronto.ca/" target='_blank'>
										<CardMedia
											component="img"
											alt="Contemplative Reptile"
											height="250"
											image="./pilot.png"
											title="Contemplative Reptile"
										/></a>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
												<a className='pilottoronto-link' href="http://pilottoronto.ca/" target='_blank'><h1 className='project-title'>Pilot Pickup</h1></a>
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
												<p>This is a project that I built for a client with a mobile first design in mind.</p>
												<a className='project-link' href="https://github.com/JoshuaJoness/pilot" target='_blank'>
													<i class="fab fa-github"></i> (Frontend)
												</a><br/>
												<a className='project-link' href="https://github.com/JoshuaJoness/pilot-api" target='_blank'>
													<i class="fab fa-github"></i> (Backend)
												</a>
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>

								<Card className='card'>
									<CardActionArea>
										<a className='pilottoronto-link' href="https://airbnb-joshua.herokuapp.com/" target='_blank'>
										<CardMedia
											component="img"
											alt="Contemplative Reptile"
											height="250"
											image="./airbnb4.png"
											title="Contemplative Reptile"
										/></a>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
												<a className='pilottoronto-link' href="https://airbnb-joshua.herokuapp.com/" target='_blank'><h1 className='project-title'>Airbnb Clone</h1></a>
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
												<p>This is an AirBnb clone that I created during my time at Tortuga Coders. This is a fullstack web application built using React, Node.js, MongoDB, and Express. JSON webtokens, B-Crypt, Axios, Cloudinary and Stripe were also used.</p>
												<a className='project-link' href="https://github.com/JoshuaJoness/airbnb-react" target='_blank'>
													<i class="fab fa-github"></i> (Frontend)
												</a><br/>
												<a className='project-link' href="https://github.com/JoshuaJoness/airbnb-api" target='_blank'>
													<i class="fab fa-github"></i> (Backend)
												</a>
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>

								
							</div>
						</div>

						<div className='second-container'></div>

						<div className='contact-container' id='contact'>
							<h1 className='contact-title'>Contact</h1>
							<label><b>E-mail: </b>joshuajonesdev@gmail.com</label>
							<label><b>Tel: </b>+1(647)-893-5547</label>
							<label><b>LinkedIn: </b><a href="https://www.linkedin.com/in/joshua-jones-6589a2b9/"><i class="fab fa-linkedin"></i></a></label>
							<label><b>GitHub: </b><a href="https://github.com/joshuajoness"><i class="fab fa-github-square"></i></a></label>
						</div>



			</div>
		)
	}
}

export default Projects

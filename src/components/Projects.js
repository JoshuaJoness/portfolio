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
									<a href="https://youtu.be/XIhxI6P3FkI" target='_blank'>
									<CardMedia
										component="img"
										alt="Contemplative Reptile"
										height="250"
										image="./foodTracker2.png"
										title="Contemplative Reptile"
										style={{height:'100'}}
									/></a>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											<a href="https://youtu.be/XIhxI6P3FkI" target='_blank'><h1 className='project-title'>Food Tracker (AI Mobile App)</h1></a>
										</Typography>
										<Typography variant="body2" color="textSecondary" component="p" style={{color:'black'}}>
											<center><b>Highlights</b></center>
											<div style={{display: 'grid', gridTemplateColumns:'1fr 1fr'}}>
												<ul>
													<li>React Native</li>
													<li>Expo</li>
													<li>Mobile Development</li>
													<li>Artificial Intelligence</li>
												</ul>
												<ul>
													<li>Machine Learning</li>
													<li>APIs</li>
													<li>Design</li>
												</ul>
											</div>
											<Divider />
											<center><b>Description</b></center>
											<p>This is a mobile app that I built using React Native and Expo. What this app does is:<br/><b>1) Takes picture of any food item</b><br/><b>2) AI technology recognizes food item</b><br/><b>3) Client makes a call to nutrition API to retrieve nutritional information for the recognized item</b></p>
											<Divider />
											<div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
													<i class="fab fa-github" style={{marginTop:'5%'}}></i>
													<p style={{color:'black'}}><b>Sorry, code not available for this project!</b></p>
											</div>
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>

							<Card className='card'>
								<CardActionArea>
									<a href="https://airbnb-joshua.herokuapp.com/" target='_blank'>
									<CardMedia
										component="img"
										alt="Contemplative Reptile"
										height="250"
										image="./airbnb4.png"
										title="Contemplative Reptile"
									/></a>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											<a href="https://airbnb-joshua.herokuapp.com/" target='_blank'><h1 className='project-title'>Airbnb Clone</h1></a>
										</Typography>
										<Typography variant="body2" color="textSecondary" component="p" style={{color:'black'}}>
											<center><b>Highlights</b></center>
											<div style={{display: 'grid', gridTemplateColumns:'1fr 1fr'}}>
												<ul>
													<li>MongoDB (No SQL database)</li>
													<li>React</li>
													<li>NodeJs</li>
													<li>RESTful API</li>
												</ul>
												<ul>
													<li>CRUD operations</li>
													<li>JSON Web Tokens</li>
													<li>B-Crypt</li>
													<li>Stripe</li>
													<li>Cloudinary</li>
												</ul>
											</div>
											<Divider />
											<center><b>Description</b></center>
											<p>This is an AirBnb clone. It was built using React, Node.js, MongoDB, and Express. JSON webtokens, B-Crypt, Axios, Cloudinary and Stripe were also used.<br/><br/>The real highlights of this project are that it is a fullstack application where I built a RESTful API, that performs CRUD operations. Authentication of users is another highlight.<br/><br/><b>**Please note, currently viewable on desktop only</b></p>
											<Divider />
											<div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
												<a className='project-link' href="https://github.com/JoshuaJoness/airbnb-react" target='_blank'>
													<i class="fab fa-github"></i> (Frontend)
												</a>
												<a className='project-link' href="https://github.com/JoshuaJoness/airbnb-api" target='_blank'>
													<i class="fab fa-github"></i> (Backend)
												</a>
											</div>
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>

							<Card className='card'>
								<CardActionArea>
									<a href="http://joshua-chat-app.herokuapp.com/" target='_blank'>
									<CardMedia
										component="img"
										alt="Contemplative Reptile"
										height="250"
										image="./chat.png"
										title="Contemplative Reptile"
									/></a>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
										<a href="http://joshua-chat-app.herokuapp.com/" target='_blank'><h1 className='project-title'>Real-Time Chat App</h1></a>
										</Typography>
										<Typography variant="body2" color="textSecondary" component="p" style={{color:'black'}}>
											<center><b>Highlights</b></center>
											<ul>
												<li>WebSockets</li>
												<li>React Hooks (useState, useEffect)</li>
											</ul>
											<Divider />
											<center><b>Description</b></center>
											<p>This is a real-time chat application built with React, NodeJS, and WebSockets. This project demonstrates my knowledge of React hooks particularly the 'useState' and 'useEffect' hooks.
											<br/><br/>Users are promted to login with a name and a room. They can then chat in realtime with anyone in the same room.</p>
											<Divider />
											<div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
												<a className='project-link' href="https://github.com/JoshuaJoness/chat-app" target='_blank'>
													<i class="fab fa-github"></i> (Frontend)
												</a>
												<a className='project-link' href="https://github.com/JoshuaJoness/chat-app-server" target='_blank'>
													<i class="fab fa-github"></i> (Backend)
												</a>
											</div>
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>

								<Card className='card'>
									<CardActionArea>
										<a href="http://strongr.best/" target='_blank'>
										<CardMedia
											component="img"
											alt="Contemplative Reptile"
											height="250"
											image="./strongr.png"
											title="Contemplative Reptile"
										/></a>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
											<a href="http://strongr.best/" target='_blank'><h1 className='project-title'>Strongr (Calorie Calculator)</h1></a>
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p" style={{color:'black'}}>
												<center><b>Highlights</b></center>
												<div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
												<ul>
													<li>Design</li>
													<li>Video Editing</li>
													<li>Content Creation</li>
												</ul>
												<ul>
													<li>Social Media Marketing</li>
													<li>Mailing List Campaign</li>
												</ul>
												</div>
												<Divider />
												<center><b>Description</b></center>
												<p>This project originally started as a simple calorie calculator.<br/> From there it grew into part of my personal project, which is to promote the mental and emotional benefits of wellness and strength.</p>
												<Divider />
												<div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
													<a className='project-link' href="https://github.com/JoshuaJoness/calories-desktop" target='_blank'>
														<i class="fab fa-github"></i> (Frontend)
													</a>
													<a className='project-link' href="https://github.com/JoshuaJoness/calories-api" target='_blank'>
														<i class="fab fa-github"></i> (Backend)
													</a>
												</div>
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>

								<Card className='card'>
									<CardActionArea>
										<a href="http://pilottoronto.ca/" target='_blank'>
										<CardMedia
											component="img"
											alt="Contemplative Reptile"
											height="250"
											image="./pilot.png"
											title="Contemplative Reptile"
										/></a>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
												<a href="http://pilottoronto.ca/" target='_blank'><h1 className='project-title'>Pilot Pickup</h1></a>
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p" style={{color:'black'}}>
												<center><b>Highlights</b></center>
												<ul>
													<li>Mobile First Design</li>
													<li>Web Design</li>
												</ul>
												<Divider />
												<center><b>Description</b></center>
												<p>This is a project that I built for a client with a mobile first design in mind. It is just a simple booking form for now. This project is more to showcase mobile-first design principles.</p>
												<Divider />
												<div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
												<a className='project-link' href="https://github.com/JoshuaJoness/pilot" target='_blank'>
													<i class="fab fa-github"></i> (Frontend)
												</a>
												<a className='project-link' href="https://github.com/JoshuaJoness/pilot-api" target='_blank'>
													<i class="fab fa-github"></i> (Backend)
												</a>
												</div>
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

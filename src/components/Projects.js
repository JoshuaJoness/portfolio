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
	componentWillMount() {
	console.log(window.innerWidth)
	}
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
					{ /* Carlorie Cam card */}
					<center >
						<div style={{backgroundColor:"#FFFFF4", width:"80%", margin:"5%", border:"1px solid white", borderRadius:"6px"}}>
							<center>
								<Typography gutterBottom variant="h5" component="h2">
									<center><h1 className='big-card-title'>Calorie Cam</h1></center>
								</Typography>
							</center>		
							<br />
						{	window.innerWidth > 500 ?
						<div>
							<div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", marginBottom:"5%"}}>
								<img src="./calorieCam.jpeg" style={{height:"500px"}}/>
								<img src="./calorieCam2.PNG" style={{height:"500px"}}/>
								<img src="./calorieCam3.PNG" style={{height:"500px"}}/>
								<img src="./calorieCam4.PNG" style={{height:"500px"}}/>
							</div>
								<center>
									<iframe width="80%" height="600px"
									src="https://www.youtube.com/embed/O4IJs9kvR9U">
									</iframe>
								</center>
							</div>
							:
							<div>
								<img src="./calorieCam.jpeg" style={{height:"500px", marginBottom:"10%"}}/>
									<center>
										<iframe width="80%" height="100%"
										src="https://www.youtube.com/embed/O4IJs9kvR9U">
										</iframe>
									</center>
							</div>
							}
							<h1>Try it yourself!</h1>
							<h2>1) Download the Expo app.</h2>
							<h2>2) Scan the QR code below.</h2>
							<center><img src="./scan.png" style={{height:"200px"}}/></center>
							<Divider />
							<p style={{fontSize:"20px", marginLeft:"10%", marginRight:"10%", marginTop:"5%"}}>
								This is a mobile application that I built with <b style={{fontSize:"30px"}}>React Native</b> and <b style={{fontSize:"30px"}}>Expo</b>. 
								When you take a picture of your food, the picture is sent to the Clarifai API which uses machine learning to recognize the food item. Clarifai 
								returns the name of the food. I then take this name and make a request to another API which then returns the nutrional infromation for the food item. 
								Users can then choose to log this information.
							</p>
							<a className='big-card-link' href="https://github.com/JoshuaJoness/calorie-log" target='_blank'>
								Check out my code!
								{ window.innerWidth > 500 ?
								<i class="fas fa-hand-point-right" style={{marginLeft:"2%"}}></i>
 								:
								<i class="fas fa-hand-point-down" style={{marginLeft:"2%"}}></i>
								}
								<i class="fab fa-github" style={{marginTop:"2%", marginBottom:"5%", marginLeft:"2%", fontSize:"40px"}}></i> 
							</a>
						</div>
					</center>

					{/* AirBnb Card */}
					<div className='project-card-container'>
							<Card className='card'>
								<CardActionArea>
									<a href="https://airbnb-joshua.herokuapp.com/" target='_blank'>
									<CardMedia
										component="img"
										alt="Application Preview"
										height="250"
										image="./airbnb4.png"
										title="AirBnb"
									/></a>
									<CardContent>
										<center>
											<Typography gutterBottom variant="h5" component="h2">
												<a href="https://airbnb-joshua.herokuapp.com/" target='_blank'><h1 className='project-title'>Airbnb Clone</h1></a>
											</Typography>
										</center>
										
										<Typography variant="body2" color="textSecondary" component="p" style={{color:'black'}}>
<div style={{height:"150px"}}>
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
	</div>
											<Divider />
			<div style={{height:"300px", marginTop:"5%"}}>							
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
</div>
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
					

							<Card className='card'>
								<CardActionArea>
									<a href="https://youtu.be/Yl7txrh6f4s" target='_blank'>
									<CardMedia
										component="img"
										alt="Image of my app"
										height="250"
										image="./fleetTracker.png"
										title="Fleet Tracker"
									/></a>
									<CardContent>
										<center>
											<Typography gutterBottom variant="h5" component="h2">
												<a href="https://youtu.be/Yl7txrh6f4s" target='_blank'><h1 className='project-title'>Fleet Tracker (Video)</h1></a>
											</Typography>
										</center>		
										<Typography variant="body2" color="textSecondary" component="p" style={{color:'black'}}>
<div style={{height:"150px"}}>
											<center><b>Highlights</b></center>
											<div style={{display: 'grid', gridTemplateColumns:'1fr 1fr'}}>
												<ul>
													<li>Electron JS</li>
													<li>React Native</li>
													<li>NodeJS</li>
												</ul>
												<ul>
													<li>AWS 3</li>
													<li>Database design</li>
													<li>MongoDB</li>
												</ul>
											</div>
</div>
											<Divider />
<div style={{height:"300px", marginTop:"5%"}}>
											<center><b>Description</b></center>
											<p>This video was made to demonstrate an application that I made as an MVP (minimum viable product) for a potential client who is interested in keeping track of snow plow fleet.<br/><br/>There are two portions to this app, a desktop application and a mobile application. The desktop application was built using Electron. The mobile app was built with React Native.<br/><br/></p>
											<Divider />
											<div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
												<a className='project-link' href="https://github.com/JoshuaJoness/trackeeApp" target='_blank'>
													<i class="fab fa-github"></i> (Mobile App)
												</a>
												<a className='project-link' href="https://github.com/JoshuaJoness/tracker-server" target='_blank'>
													<i class="fab fa-github"></i> (Server)
												</a>
											</div>
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
										<center>
											<Typography gutterBottom variant="h5" component="h2">
												<a href="http://joshua-chat-app.herokuapp.com/" target='_blank'><h1 className='project-title'>Real-Time Chat App</h1></a>
											</Typography>
										</center>
										
										<Typography variant="body2" color="textSecondary" component="p" style={{color:'black'}}>
<div style={{height:"150px"}}>
											<center><b>Highlights</b></center>
											<ul>
												<li>WebSockets</li>
												<li>React Hooks (useState, useEffect)</li>
											</ul>
</div>
											<Divider />
<div style={{height:"300px", marginTop:"5%"}}>
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
</div>
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>

						

							<Card className='card'>
								<CardActionArea>
									<a href="https://joshua-angular-todo.herokuapp.com/" target='_blank'>
									<CardMedia
										component="img"
										alt=""
										height="250"
										image="./angular.png"
										title=""
									/></a>
									<CardContent>
										<center>
											<Typography gutterBottom variant="h5" component="h2" >
												<p className='project-title'>Angular</p>
												<div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr', alignItems:'center', marginTop:-50}}>
													<a href="https://joshua-angular-todo.herokuapp.com/" target='_blank'><h1 className='project-title'>(To-do List</h1></a>
													<p>&</p>
													<a href="https://joshua-angular-ui.herokuapp.com/" target='_blank'><h1 className='project-title'>Mock-up)</h1></a>
												</div>
											</Typography>
										</center>
										<Typography variant="body2" color="textSecondary" component="p" style={{color:'black'}}>
											<center><b>Highlights</b></center>
												<ul style={{display:'grid', gridTemplateColumns: '1fr 1fr'}}>
													<li>Angular 9</li>
													<li>Bootstrap</li>
												</ul>
											<Divider />
											<center><b>Description</b></center>
											<p>These are two Angular projects that I created to familiarize myself with the framework. The to-do list was created by following a tutorial and the mock-up was me creating something on my own to further deepen my understanding of Angular.</p>
											<Divider />
											<div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
												<a className='project-link' href="https://github.com/JoshuaJoness/myapp" target='_blank'>
													<i class="fab fa-github"></i> (To-do list)
												</a>
												<a className='project-link' href="https://github.com/JoshuaJoness/example" target='_blank'>
													<i class="fab fa-github"></i> (Mock-up)
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
											<center>
												<Typography gutterBottom variant="h5" component="h2">
													<a href="http://strongr.best/" target='_blank'><h1 className='project-title'>Strongr (Calorie Calculator)</h1></a>
												</Typography>
											</center>
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
											<center>
												<Typography gutterBottom variant="h5" component="h2">
													<a href="http://pilottoronto.ca/" target='_blank'><h1 className='project-title'>Pilot Pickup</h1></a>
												</Typography>
											</center>
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
							<label><b>LinkedIn: </b><a href="https://www.linkedin.com/in/joshua-jones-6589a2b9/" target="blank"><i class="fab fa-linkedin"></i></a></label>
							<label><b>GitHub: </b><a href="https://github.com/joshuajoness" target="blank"><i class="fab fa-github-square"></i></a></label>
							<label><b>Resume: </b><a href="https://resume.io/r/KouuKJVA7" target="blank">Click here</a></label>
						</div>
			</div>
		)
	}
}

export default Projects

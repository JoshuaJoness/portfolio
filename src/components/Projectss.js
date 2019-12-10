import React from 'react'
import Nav from './Nav'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import '../styles/projectss.css'

class Projectss extends React.Component {
	render(){
		return(
			<>
			<Nav />
				<div className='project-container'>
							<center>
								<h1 className='title'>
									PROJECTS
								</h1>
							</center>

							<div className='project-card-container'>
								<Card className='card'>
									<CardActionArea>
										<CardMedia
											component="img"
											alt="Contemplative Reptile"
											height="250"
											image="./caloriecounter1.png"
											title="Contemplative Reptile"
										/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
											<a className='caloriecounter-link' href="http://caloriecounter.tech/" target='_blank'><h1 className='caloriecounter-title'>Calorie Counter</h1></a>
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
											<a className='caloriecounter-link' href="http://caloriecounter.tech/" target='_blank'>http://caloriecounter.tech</a><br></br>
											<a className='caloriecounter-link'href="https://github.com/JoshuaJoness/calories-desktop" target='_blank'>Front End Code
												<i class="fas fa-code fa-spin"></i>
											</a><br/>
											<a className='caloriecounter-link'href="https://github.com/JoshuaJoness/calories-api" target='_blank'>Back End Code
												<i class="fas fa-code fa-spin"></i>
											</a>
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>

								<Card className='card'>
									<CardActionArea>
										<CardMedia
											component="img"
											alt="Contemplative Reptile"
											height="250"
											image="./pilot.png"
											title="Contemplative Reptile"
										/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
												<a className='pilottoronto-link' href="http://pilottoronto.ca/" target='_blank'><h1 className='project-title'>Pilot Pickup</h1></a>
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
												<a className='pilottoronto-link' href="http://caloriecounter.tech/" target='_blank'>http://pilottoronto.ca</a><br></br>
												<a className='pilottoronto-link'href="https://github.com/JoshuaJoness/pilot" target='_blank'>pilottoronto-linkFront End Code
													<i class="fas fa-code fa-spin"></i>
												</a><br/>
												<a className='pilottoronto-link'href="https://github.com/JoshuaJoness/pilot-api" target='_blank'>Back End Code
													<i class="fas fa-code fa-spin"></i>
												</a>
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>

								<Card className='card'>
									<CardActionArea>
										<CardMedia
											component="img"
											alt="Contemplative Reptile"
											height="250"
											image="./airbnb4.png"
											title="Contemplative Reptile"
										/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
											<a className='project-link' href="https://airbnb-joshua.herokuapp.com/" target='_blank'><h1 className='project-title'>Airbnb Clone</h1></a>
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
											<a className='project-link' href="https://airbnb-joshua.herokuapp.com/" target='_blank'>https://airbnb-joshua.herokuapp.com</a><br/>
											<a className='project-link' href="https://github.com/JoshuaJoness/airbnb-react" target='_blank'>Front End Code
												<i class="fas fa-code fa-spin"></i>
											</a><br/>
											<a className='project-link' href="https://github.com/JoshuaJoness/airbnb-api" target='_blank'>Back End Code
												<i class="fas fa-code fa-spin"></i>
											</a>
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</div>
						</div>
			</>
		)
	}
}

export default Projectss

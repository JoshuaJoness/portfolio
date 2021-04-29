import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import MyCard from './MyCard';
import resume from './joshua_jones_resume.pdf';
import '../styles/projects.css';

const PROJECTS = [
	{
		projectTitle:'Calorie Cam',
		projectImage:'https://www.youtube.com/embed/O4IJs9kvR9U',
		projectLink:'https://apps.apple.com/us/app/calorie-cam/id1511528894?ls=1',
		projectDescription:['Retrieves nutritional information of food by taking a picture', 
												'Uses machine learning API to recognize food item',
												"Depolyed to Apple's App Store!"],
		highlights: ['React Native','Expo','App Store','API integration','Deployment','UI/UX'],
		projectLinks:['https://github.com/JoshuaJoness/calorie-cam', 'https://apps.apple.com/us/app/calorie-cam/id1511528894?ls=1']
	},
	{
		projectTitle:'Zen Chat',
		projectImage:'./zen.png',
		projectLink:'https://zenchaat.herokuapp.com/',
		projectDescription:['Real-time chat application.', 
												'Created to allow users to share positivity annonymously.', 
												'Discuss mindfulness, yoga, health, and strength!'],
		highlights: ['WebSockets','React Hooks','Responsive Design'],
		projectLinks:['https://github.com/JoshuaJoness/chatapp', 'https://github.com/JoshuaJoness/chatappserver']
	},
];

const Projects = () => {	
	const [width, setWidth] = useState(false);

	useEffect(() => {		
		const width = window.innerWidth;
		setWidth(width);
	}, []);

		return (
			<div className='project-thumbnail-container'>
				<Nav />
				<div className='intro-container' id='intro'></div>
				<div className='project-container' id='projects'>
					<center>
						<h1 className='title' style={{ fontSize: 70 }}>
							Projects
						</h1>
					</center>
					<div className='project-card-container'>
						{PROJECTS.map(project => <MyCard project={project} />)}
					</div>
				</div>
				<div className='second-container'></div>
					<div className='contact-container' style={width >= 997 ? { fontSize: 30, paddingBottom: '30vh' } : {}}>
						<h1 className='contact-title' style={{ fontSize: 70 }} id='contact'>Contact</h1>
						<label><b style={{marginRight:'5px'}}>LinkedIn: </b><a href="https://www.linkedin.com/in/joshuajoness/" target="blank"><i class="fab fa-linkedin"></i></a></label>
						<label><b style={{marginRight:'5px'}}>GitHub: </b><a href="https://github.com/joshuajoness" target="blank"><i class="fab fa-github-square"></i></a></label>
						<label><b style={{marginRight:'5px'}}>Resume: </b><a href={resume} target="blank" download="joshua_jones_resume.pdf">Click here</a></label>
						<label><b style={{marginRight:'5px'}}>Tel: </b>+1(647)-873-5547</label>
						<label><b style={{marginRight:'5px'}}>E-mail: </b>joshuajonesdev@gmail.com</label>
					</div>
{/*					<div className='appstore-container'>
						<h1 className='contact-title'>App Store</h1>
						<label><b style={{marginRight:'5px'}}>Calorie Cam </b><a href="https://www.linkedin.com/in/joshua-jones-6589a2b9/" target="blank"><i class="fab fa-apple"></i></a></label>
					</div>*/}
				</div>
			)
		}

export default Projects

import React, { useEffect, useState } from 'react'
import { animated, useSpring, config } from 'react-spring'
import Button from '@material-ui/core/Button';
import '../styles/nav.css'

const Nav = () => {
	const [hideNav, setHideNav] = useState(false)
	const [width, setWidth] = useState(false)

	const props = useSpring({
		from: { opacity: 1 },
		to: { opacity: 0 },
		config: config.mollases,
		reset: true
	})

	useEffect(() => {
		window.addEventListener('scroll', () => {
			const y = window.scrollY
			setHideNav(y !== 0 ? true : false);
		
		});
		
		const width = window.innerWidth;
		setWidth(width);
	}, [])

	return (
		<animated.div style={hideNav ? props : {}}>
			<nav className='nav'>
				<div>
					<a href='#intro'>JOSHUAJONES.IO</a>
				</div>
				<a href='#projects'><Button style={{ fontSize: width >= 997 ? 25 : 20 }}>Projects</Button></a>
				<a href='#contact'><Button style={{ fontSize: width >= 997 ? 25 : 20 }}>Contact</Button></a>
				<br/>
				
			</nav>
		</animated.div>
	)
}

export default Nav

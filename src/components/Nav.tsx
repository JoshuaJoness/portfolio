import React, { useState } from 'react'
import { useSpring, animated, config } from 'react-spring'
import Button from '@material-ui/core/Button';
import '../styles/nav.css'

const Nav = () => {
	const [fadeIn, setFadeIn] = useState(false);
	const [hideElements, setHideElements] = useState(false);

	const props = useSpring({ 
		to: { opacity: 1 }, 
		from: { opacity: 0 },
		delay: 250,
		config: config.molasses,
		// reset: true,
	})

	const inverseProps = useSpring({
		to: { opacity: 0 }, 
		from: { opacity: 1 },
		// delay: 250,
		config: config.molasses,
		reset: true,
	})

	const fadeStyles = useSpring({
		to: { opacity: 1 }, 
		from: { opacity: 0 },
		delay: 1000,
		config: config.molasses,
	})

	const inverseFadeStyles = useSpring({
		to: { opacity: 0 }, 
		from: { opacity: 1 },
		// delay: 250,
		config: config.molasses,
		reset: true,
	})



	window.addEventListener('scroll', () => window.scrollY !== 0 ? setHideElements(true) : setHideElements(false));

	requestAnimationFrame(() => {
		setFadeIn(true);
	});

	return (
		<>
			<nav className='nav'>
				<animated.div style={!hideElements ? props : inverseProps}>
					<a href='#intro'>JOSHUAJONES.IO</a>
				</animated.div>
				<animated.a href='#projects' style={fadeIn && !hideElements ? fadeStyles : inverseFadeStyles}>
					<Button style={{ fontSize: 25, color: '#F7F7FF' }}>Projects</Button>
				</animated.a>
				<animated.a href='#contact' style={fadeIn  && !hideElements ? fadeStyles : inverseFadeStyles}>
					<Button style={{ fontSize: 25, color: '#F7F7FF' }}>Contact</Button>
				</animated.a>
				<br/>
			</nav>
		</>
	)
}

export default Nav;

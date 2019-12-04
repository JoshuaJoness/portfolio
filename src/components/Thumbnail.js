import React from 'react'
import '../styles/thumbnail.css'

class Thumbnail extends React.Component {
	render(){
		return(
			<div>
				<div className='thumbnail'>
					<img src='./avatar2' className='image'></img>
					<h1 className='title'>Paris</h1>
					<p className='description'>This is all about my trip in Paris. Bon appetite!</p>
				</div>
			</div>
		)
	}
}

export default Thumbnail

import React from 'react'
import '../styles/newhome.css'
import Thumbnail from './Thumbnail'

class NewHome extends React.Component {
	render(){
		return(
			<>
				<div className='thumbnail-container'>
					<Thumbnail />
					<Thumbnail />
					<Thumbnail />
					<Thumbnail />
				</div>
				<div className='item1'>item1</div>
			</>
		)
	}
}

export default NewHome

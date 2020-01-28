import React from 'react'

class Moody extends React.Component{
	render(){
		return(
			<>
				<div style={{backgroundColor: 'white', height:'200vh'}}>
				<div style={{display: 'grid', gridTemplateColumns: '23% 40% 22%'}}>
					<img src="./moody (1).JPG" style={{ height: '300px', display: 'inline'}}></img>
					<img src="./moody (2).JPG" style={{ width: '400px', display: 'inline'}}></img>
					<img src="./moody (3).JPG" style={{height: '', width: '500px'}}></img>
				</div>
				<div>
					<h1>Realize deeply that the present moment is all you ever have. - Eckhart Tolle</h1>
					<img src="./moody (4).JPG" style={{ height: '300px', display: 'inline'}}></img>
				</div>

				<img src="./moody (5).JPG" style={{ height: '300px', display: 'inline'}}></img>
				Moody</div>
			</>
		)
	}
}

export default Moody

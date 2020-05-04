import React from 'react'
import privacy from './privacy.md'
import marked from "marked";

class Privacy extends React.Component {
	state = {}
	componentDidMount() {
		const input = require("./privacy.md");

		fetch(input)
			.then(response => {
				return response.text()
			})
			.then(text => {
				this.setState({
					markdown: marked(text)
				})
			})
	}
		render() {
	  const { markdown } = this.state;

	  return (
	    <section style={{background:'white', padding:30}}>
	      <article dangerouslySetInnerHTML={{__html: markdown}}></article>
	    </section>
	  )
	}
}

export default Privacy





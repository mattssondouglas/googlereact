import React from 'react'

/////////

class Result extends React.Component {
	state = {
		results: [{
			title: 'Article 1',
			url: 'www.testurl.com'
		}, {
			title: 'Article 1',
			url: 'www.testurl.com'
		}]
	}
	render() {
		return {this.state.results.map((result, i) => {
				return (
					<div key={i}>
						<h1>{result.title}</h1>
						<span>{result.url}</span>
					</div>
				)
			})
	}
}

/////////

export default Result

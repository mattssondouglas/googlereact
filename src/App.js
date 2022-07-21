import React from 'react'
import axios from 'axios'


class App extends React.Component {
	state = {
		searchTerms : '',
		results: []
	}

	getSearchResults = async () => {
		let response = await axios.get(`http://localhost:3000/results?search=${this.state.searchTerms}`)
		this.setState({
			results : response.data
		})
	}

	getSearchTerms = (e) => {
		console.log('ww');
		this.setState({
			searchTerms: e.target.value
		}
	)
	}

	render() {
		return (
			<div>
			<nav className="navbar">
      <div className="logo">
        <img src="/google.png" alt="google logo" className="googleLogo" />
      </div>
      <form className="searchBarandButton">
        <input name="searchBar" type="searchbar" className="searchBar" onChange= {e => this.getSearchTerms(e)} value={this.state.searchTerms}/>
        <button type='button' className="searchButton" onClick= {this.getSearchResults}>Search</button>
      </form>
    </nav>
		<span className="numResults">{this.state.results.length} Results</span>
			{this.state.results.map((result, i) => {
					return (
						<div key={i}>
							<span className="websiteAdress">{result.url}</span>
							<h2 className="websiteLink">
								<a href={result.url}>{result.title}</a>
							</h2>
							<p className="websiteDescription">{result.description}</p>
							<ul className="websiteSubLinks">
								{result.links.map((link, k) => {
									return (
										<li key={k}>
											<a href={link.url}>{link.title}</a>
										</li>
									)
								})}
							</ul>
						</div>
					)
		})}
	</div>)}
}

export default App

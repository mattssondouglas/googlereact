import React from 'react'

class App extends React.Component {
	state = {
		results: [
  {
    "title": "JavaScript Tutorial - W3Schools",
    "description": "Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java",
    "url": "https://www.w3schools.com",
    "links": [
      {
        "title": "JavaScript Introduction",
        "url": "https://www.w3schools.com/js/js_intro.asp"
      },
      {
        "title": "JS Where To",
        "url": "https://www.w3schools.com/js/js_whereto.asp"
      },
      {
        "title": "JS Output",
        "url": "https://www.w3schools.com/js/js_output.asp"
      }
    ]
  },
  {
    "title": "The Modern JavaScript Tutorial",
    "description": "Modern JavaScript Tutorial: simple, but detailed explanations with examples and tasks, including: closures, document and events, object oriented programming",
    "url": "https://javascript.info",
    "links": [
      {
        "title": "An Introduction to JavaScript",
        "url": "https://javascript.info/intro"
      },
      {
        "title": "Hello, world!",
        "url": "https://javascript.info/hello-world"
      },
      {
        "title": "Objects",
        "url": "https://javascript.info/object"
      }
    ]
  },
  {
    "title": "Javascript Tutorial - Tutorialspoint",
    "description": "JavaScript is a lightweight, interpreted programming language. It is designed for creating network-centric applications. It is complimentary to and",
    "url": "https://www.tutorialspoint.com/javascript",
    "links": [
      {
        "title": "JavaScript - Overview",
        "url": "https://www.tutorialspoint.com/javascript/javascript_overview.htm"
      },
      {
        "title": "JavaScript - Syntax",
        "url": "https://www.tutorialspoint.com/javascript/javascript_syntax.htm"
      },
      {
        "title": "Variables",
        "url": "https://www.tutorialspoint.com/javascript/javascript_variables.htm"
      }
    ]
  },

  {
    "title": "HTML For Beginners The Easy Way: Start Learning HTML",
    "description": "Our Other HTML Tutorials — The code used to make them visually appealing is known as CSS and we shall focus on this in a later tutorial. For now, we will",
    "url": "https://html.com",
    "links": [
      {
        "title": "HTML for Absolute Beginners",
        "url": "https://html.com/#HTML_for_Absolute_Beginners"
      },
      {
        "title": "HTML Editors",
        "url": "https://html.com/#HTML_Editors"
      },
      {
        "title": "Our Other HTML Tutorials",
        "url": "https://html.com/#Our_Other_HTML_Tutorials"
      }
    ]
  }
]
	}
	render() {
		return (
			<div>
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

import React, { Component } from 'react';
import './Characters.css';

class Characters extends Component {
	constructor(){
		super();
		this.state = { starWarsPeople: [{}]


		}
	}



	componentDidMount() {
		fetch("https://swapi.co/api/people/")
			.then(response => response.json())
			.then(data => {

				this.setState({
					starWarsPeople: data.results,
					luke : data["results"][0],

				});

			})

	}




	render() {
		return (
			<div>
				<h2> Characters </h2>
			<ul>
				{this.state.starWarsPeople.map(({name, gender, height, homeworld, birth_year, url})=>
					<div>

						<h1><a href={url}>{name}</a></h1>
						<br/>
						<li>Home World: {homeworld}</li>
						<li>Species: {gender}</li>
						<li>DOB: {birth_year}</li>
						<li>Sex: {gender}</li>
						<li>Height: {height}</li>
<br/>
					</div>


)}
</ul>

			</div>
		);
	}
}

export default Characters;
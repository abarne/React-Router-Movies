import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movie = ({ match }) => {
	const [ movie, setMovie ] = useState({});

	useEffect(() => {
		const id = 1;
		// change ^^^ that line and grab the id from the URL
		// You will NEED to add a dependency array to this effect hook

		axios
			.get(`http://localhost:5000/api/movies/${match.params.id}`)
			.then((response) => {
				console.log(`${match.params.id}`);
				setMovie(response.data);
				//console.log(props.id);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	// Uncomment this only when you have moved on to the stretch goals
	// const saveMovie = () => {
	//   const addToSavedList = props.addToSavedList;
	//   addToSavedList(movie)
	// }

	if (!movie) {
		return <div>Loading movie information...</div>;
	}
	//return <h1>movie</h1>;
	// 	const { title, director, metascore, stars } = movie;
	return (
		<div className="save-wrapper">
			<div className="movie-card">
				<h2>{movie.title}</h2>
				<div className="movie-director">
					Director: <em>{movie.director}</em>
				</div>
				<div className="movie-metascore">
					Metascore: <strong>{movie.metascore}</strong>
				</div>
				<h3>Actors</h3>

				{/* {movie.stars.map((star) => (
					<div key={star} className="movie-star">
						{star}
					</div>
				))} */}
			</div>
			<div className="save-button">Save</div>
		</div>
	);
};

export default Movie;

import React from "react";
import { movies } from "../data";

function Movies() {
const displayMovies = movies.map(movie => {
  return (
    <div key={movie.title}>
      <h3>{movie.title}</h3>
      <p>Time: {movie.time} minutes</p>
      <p>Genres:</p>
      <ul>
        {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
      </ul>
    </div>
  )
})

  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies}
    </div>
  );
}

export default Movies;

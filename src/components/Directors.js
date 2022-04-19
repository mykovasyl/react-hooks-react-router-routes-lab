import React from "react";
import { directors } from "../data";

function Directors() {
  const displayDirectors = directors.map((director) => {
    return (
      <div key={director.name}>
        <h3>Name: {director.name}</h3>
        <p>Movies:</p>
        <ul>
          {director.movies.map((movie) => (
            <li key={movie} >{movie}</li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {displayDirectors}
    </div>
  );
}

export default Directors;

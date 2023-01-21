import React from "react";
import { movies } from "../data";

function Movies() {

  const movieList = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <h3>{movie.title}</h3>
        <h4>Time: {movie.time}</h4>
        <ul>
          {movie.genres.map((genre, index) => { return <li key={index}>{genre}</li>})}
        </ul>
      </div>
    )
      
  })

  return (
    <>
      <h1>Movies Page</h1>
      {movieList}
    </>
  );
}

  
 

export default Movies;

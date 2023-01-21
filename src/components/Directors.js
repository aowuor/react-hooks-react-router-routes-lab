import React from "react";
import { directors } from "../data";

function Directors() {
  const eachDirector = directors.map((director) => {
    return(
      <div key={director.name}>
        <h3>{director.name}</h3>
        <ul>
          {director.movies.map((movie, index) => <li key={index}>{movie}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {eachDirector}
  </div>

  );
}

export default Directors;

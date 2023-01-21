import React from "react";
import { actors } from "../data";

function Actors() {
  const eachActor = actors.map((actor) => {
    return (
      <div key={actor.name}>
        <h3>{actor.name}</h3>
        <ul>
          {actor.movies.map((movie, index) => <li key={index}>{movie}</li>)}
        </ul>
      </div>
    )
  })
  return (
    <>
      <h1>Actors Page</h1>
      {eachActor}
    </>
  )
}

export default Actors;

// CharacterDetails.js

import React from "react";

export default function CharacterDetails({ character }) {
  return (
    <div className="character-details">
      <img
        className="character-img"
        src={character.image}
        alt={character.name}
      />

      <div className="character-info">
        <h1>{character.name}</h1>
        <p>{character.status}</p>
        <p>{character.species}</p>
        <p>{character.gender}</p>

        <h3>Origin</h3>
        <p>{character.origin.name}</p>

        <h3>Location</h3>
        <p>{character.location.name}</p>

        <h3>Episodes</h3>
        <ul className="episodes-list">
          {character.episode.map((episode) => (
            <li key={episode}>{episode}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// CharacterCard.js

import React from "react";

export default function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />

      <div className="character-card-details">
        <h2>{character.name}</h2>
        <p>
          <strong>Status:</strong> {character.status}
        </p>
        <p>
          <strong>Species:</strong> {character.species}
        </p>
        <p>
          <strong>Gender:</strong> {character.gender}
        </p>
      </div>
    </div>
  );
}

// CharacterDetailsPage.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacter } from "../services/api";

import CharacterDetails from "../components/CharacterDetails";

export default function CharacterDetailsPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacter(id).then((character) => {
      setCharacter(character);
    });
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="character-page">
      <CharacterDetails character={character} />
    </div>
  );
}

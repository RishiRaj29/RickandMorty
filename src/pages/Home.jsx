// Home.js

import React, { useState, useEffect } from "react";
import { getCharacters } from "../services/api";

import CharacterCard from "../components/CharacterCard";
import Header from "../components/Header";
import Filter from "../components/Filter";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    getCharacters(filters).then((characters) => {
      setCharacters(characters);
    });
  }, [filters]);

  function handleSearch(name) {
    setFilters((prev) => ({ ...prev, name }));
  }

  function handleFilter(filters) {
    setFilters(filters);
  }

  return (
    <div className="app">
      <Header onSearch={handleSearch} />

      <Filter onFilter={handleFilter} />

      <div className="character-grid">
        {Array.isArray(characters) &&
          characters.length > 0 &&
          characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
      </div>
    </div>
  );
}

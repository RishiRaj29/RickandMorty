// Header.js

import React, { useState } from "react";

export default function Header({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(search);
  }

  return (
    <header className="header">
      <h1 className="title">Rick & Morty</h1>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          value={search}
          onChange={handleChange}
          className="search-input"
          placeholder="Search characters"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </header>
  );
}

// Filter.js

import React, { useState } from "react";

const filterOptions = [
  { key: "status", name: "Status" },
  { key: "species", name: "Species" },
  { key: "gender", name: "Gender" }
];

export default function Filter({ onFilter }) {
  const [filters, setFilters] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onFilter(filters);
  }

  return (
    <form className="filter-form" onSubmit={handleSubmit}>
      {filterOptions.map((option) => (
        <div key={option.key}>
          <label>{option.name}</label>
          <select
            name={option.key}
            value={filters[option.key]}
            onChange={handleChange}
          >
            <option value="">All</option>
            {/* render filter options */}
          </select>
        </div>
      ))}

      <button className="filter-button" type="submit">
        Apply Filters
      </button>
    </form>
  );
}

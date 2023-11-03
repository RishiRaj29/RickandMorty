// api.js

const API_URL = "https://rickandmortyapi.com/api";

export async function getCharacters(filters = {}) {
  let url = `${API_URL}/character`;

  // Add filters to URL
  Object.entries(filters).forEach(([key, value]) => {
    url += `&${key}=${value}`;
  });

  const response = await fetch(url);
  return await response.json();
}

export async function getCharacter(id) {
  const response = await fetch(`${API_URL}/character/${id}`);
  return await response.json();
}

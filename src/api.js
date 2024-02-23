const API_ENDPOINT =
  "https://api.punkapi.com/v2/beers";

export async function getBeers() {
  const res = await fetch(`${API_ENDPOINT}`);
  if (!res.ok) {
    throw new Error(`${res.status} La resposta del servidor no és correcta`);
  }
  const data = await res.json();
  return data.data;
}

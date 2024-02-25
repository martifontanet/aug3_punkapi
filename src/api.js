
const API_ENDPOINT =
  "https://api.punkapi.com/v2/beers";

export async function getBeers() {
  const res = await fetch(`${API_ENDPOINT}`);
  if (!res.ok) {
    const errorMessage = `<p><i class="material-icons error-icon">error</i><br />Error ${res.status} - Something went wrong</p>`;
    throw new Error(errorMessage);
  }
  const data = await res.json();
  return data;
}

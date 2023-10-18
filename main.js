const API_KEY = "live_l0ii654AjIwmoMG0NEH0vOPDbD5FllJPEqXF8HIB8nFxMXHhoq37OXCLnkwZwvIA";
const BASE_API_URL = "https://api.thecatapi.com/v1/"; 
const API_URL = `${BASE_API_URL}images/search?limit=8&api_key=${API_KEY}`;
const API_FAVORITES_API = `${BASE_API_URL}favourites?limit=2`;
const spanError = document.getElementById('error');

async function loadRandomCats() {
  const data = await fetchData(API_URL);

  if (data === null) return;

  for (let i = 0; i < data.length; i++) {
    addCatImage(data[i].url);
  }
}

async function loadFavoriteCats() {
  const data = await fetchData(API_FAVORITES_API);

  if (data === null) return;
}

async function fetchData(apiUrl) {
  const response = await fetch(apiUrl);

  if (response.status !== 200) {
    spanError.innerHTML = `An error has ocurred with ${response.status} status code`;

    return null;
  }

  const data = await response.json();

  return data;
}

function addCatImage(sourceImage) {
  const randomCatsReference = document.getElementById('randomCats');

  const catArticle = document.createElement('article');
  const catImage = document.createElement('img');
  catImage.alt = 'Random cat picture';
  catImage.src = sourceImage;
  catImage.width = 250;

  const saveFavoriteButton = document.createElement('button');
  saveFavoriteButton.type = 'button';
  saveFavoriteButton.textContent = 'Save cat in favorites';

  catArticle.appendChild(catImage);
  catArticle.appendChild(saveFavoriteButton);

  randomCatsReference.appendChild(catArticle);
}

loadRandomCats();
loadFavoriteCats();
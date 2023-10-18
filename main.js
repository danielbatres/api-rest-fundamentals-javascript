async function loadRandomCats() {
  const data = await fetchData(API_URL);

  if (data === null) return;

  randomCatsReference.innerHTML = '';
  loadData(randomCatsReference, data, false);
}

async function loadFavoriteCats() {
  const data = await fetchData(API_FAVOURITES_API);

  if (data === null) return;

  favoriteCatsReference.innerHTML = '';
  loadData(favoriteCatsReference, data, true);
}

loadRandomCats();
loadFavoriteCats();
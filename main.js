let isLightThemeColor = false;
let isRandom = true;

async function loadRandomCats() {
  const data = await fetchData(API_URL);

  if (data === null) return;

  loadData(data, false);
}

async function loadFavoriteCats() {
  const data = await fetchData(API_FAVOURITES_API);

  if (data === null) return;

  catsReference.innerHTML = '';
  loadData(data, true);
}

function setTheme() {
  isLightThemeColor = !isLightThemeColor;

  if (isLightThemeColor) {
    link.href = "./styles/lightTheme.css";
  } else {
    link.href = "./styles/darkTheme.css";
  }
}

async function setContent(isRandomCats, firstRender) {
  if (isRandom === isRandomCats || isLoading) {
    if (!firstRender) return; 
  }

  selectNavigation(isRandomCats);
  catsReference.innerHTML = "";
  addLoadingCards();

  if (isRandomCats) {
    await loadRandomCats();
  } else {
    await loadFavoriteCats();
  }

  removeLoadingCards();

  isRandom = isRandomCats;
}
 
function selectNavigation(isRandomCats) {
  randomCatsNavigation.className = "";
  favoriteCatsNavigation.className = "";

  if (isRandomCats) {
    randomCatsNavigation.className = "selectedNavigation";
  } else {
    favoriteCatsNavigation.className = "selectedNavigation";
  }
}

async function main() {
  const switchTheme = document.getElementById('switchTheme');
  switchTheme.onclick = () => setTheme();

  setTheme();

  const uploadButton = document.getElementById('upload');
  uploadButton.onclick = () => uploadPhoto();
  randomCatsNavigation.onclick = () => setContent(true, false);
  favoriteCatsNavigation.onclick = () => setContent(false, false); 

  await setContent(true, true);
}

main();
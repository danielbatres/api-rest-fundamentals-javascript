const API_KEY = "live_l0ii654AjIwmoMG0NEH0vOPDbD5FllJPEqXF8HIB8nFxMXHhoq37OXCLnkwZwvIA";
const BASE_API_URL = "https://api.thecatapi.com/v1/";
const API_URL = `${BASE_API_URL}images/search?limit=8`;
const API_FAVOURITES_API = `${BASE_API_URL}favourites`;
const randomCatsReference = document.getElementById("randomCats");
const favoriteCatsReference = document.getElementById("favoriteCats");
const spanError = document.getElementById("error");

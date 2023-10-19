const API_KEY = "live_l0ii654AjIwmoMG0NEH0vOPDbD5FllJPEqXF8HIB8nFxMXHhoq37OXCLnkwZwvIA";
const BASE_API_URL = "https://api.thecatapi.com/v1/";
const API_URL = `${BASE_API_URL}images/search?limit=18`;
const API_FAVOURITES_API = `${BASE_API_URL}favourites`;
const API_IMAGE_UPLOAD = `${BASE_API_URL}images/upload`;
const link = document.getElementById("currentTheme");
const form = document.getElementById('uploadingForm');
const catsReference = document.getElementById("cats");
const spanError = document.getElementById("error");
const randomCatsNavigation = document.getElementById("randomCatsNavigation");
const favoriteCatsNavigation = document.getElementById(
  "favoriteCatsNavigation"
);

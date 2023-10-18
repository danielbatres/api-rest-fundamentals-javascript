const API_KEY = "live_l0ii654AjIwmoMG0NEH0vOPDbD5FllJPEqXF8HIB8nFxMXHhoq37OXCLnkwZwvIA";
const API_URL = `https://api.thecatapi.com/v1/images/search?limit=3&api_key=${API_KEY}`;

async function reload() {
  const response = await fetch(API_URL);
  const data = await response.json();

  console.log(data);
}

reload();

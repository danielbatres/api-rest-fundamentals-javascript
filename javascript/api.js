async function fetchData(apiUrl) {
  const response = await fetch(apiUrl);

  if (!checkResponse(response)) return null;

  const data = await response.json();

  return data;
}

async function postFavorite(imageId) {
  const response = await fetch(API_FAVOURITES_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      image_id: imageId.toString()
    })
  });

  if (!checkResponse(response)) return;

  loadFavoriteCats();
}

async function checkResponse(response) {
  let isSuccess = true;

  if (response.status !== 200) {
    spanError.innerHTML = `An error has ocurred with ${response.status} status code`;

    isSuccess = false;
  }

  return isSuccess;
}

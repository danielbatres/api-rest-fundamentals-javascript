async function fetchData(apiUrl) {
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'X-API-KEY': API_KEY
    }
  });

  if (!checkResponse(response)) return null;

  const data = await response.json();

  return data;
}

async function postFavorite(imageId) {
  const response = await fetch(API_FAVOURITES_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    },
    body: JSON.stringify({
      image_id: imageId.toString(),
    }),
  });

  if (!checkResponse(response)) return;
}

async function removeFavorite(id) {
  const response = await fetch(API_FAVOURITES_API + `/${id}`, {
    method: "DELETE",
    headers: {
      "X-API-KEY": API_KEY
    },
  });

  if (!checkResponse(response)) return;
}

async function uploadPhoto() {
  const formData = new FormData(form);

  const response = await fetch(API_IMAGE_UPLOAD, {
    method: "POST",
    headers: {
      'X-API-KEY': API_KEY
    },
    body: formData,
  });

}

async function checkResponse(response) {
  let isSuccess = true;

  if (response.status !== 200) {
    spanError.innerHTML = `An error has ocurred with ${response.status} status code`;

    isSuccess = false;
  }

  return isSuccess;
}

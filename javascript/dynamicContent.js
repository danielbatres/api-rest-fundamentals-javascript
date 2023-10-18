function loadData(reference, data, isFavorite) {
  for (let i = 0; i < data.length; i++) {
    const url = reference === favoriteCatsReference ? data[i].image.url : data[i].url;

    addCatImage(reference, url, data[i].id, isFavorite);
  }
}

function addCatImage(reference, sourceImage, imageId, isFavorite) {
  const catArticle = document.createElement("article");
  const catImage = document.createElement("img");
  catImage.alt = "Random cat picture";
  catImage.src = sourceImage;

  catArticle.appendChild(catImage);

  const options = document.createElement('div');
  options.className = 'options';

  if (!isFavorite) {
    const saveFavoriteButton = document.createElement("button");
    saveFavoriteButton.type = "button";
    saveFavoriteButton.textContent = "Save cat in favorites";
    saveFavoriteButton.onclick = () => postFavorite(imageId);

    options.appendChild(saveFavoriteButton);
  } else {
    const removeFavoriteButton = document.createElement("button");
    removeFavoriteButton.type = "button";
    removeFavoriteButton.textContent = "Remove cat from favorites";
    removeFavoriteButton.onclick = () => removeFavorite(imageId);

    options.appendChild(removeFavoriteButton);
  }

  catArticle.appendChild(options);

  reference.appendChild(catArticle);
}

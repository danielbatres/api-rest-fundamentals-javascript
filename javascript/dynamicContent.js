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
  catImage.width = 250;

  catArticle.appendChild(catImage);

  if (!isFavorite) {
    const saveFavoriteButton = document.createElement("button");
    saveFavoriteButton.type = "button";
    saveFavoriteButton.textContent = "Save cat in favorites";
    saveFavoriteButton.onclick = () => postFavorite(imageId);

    catArticle.appendChild(saveFavoriteButton);
  } else {
    const removeFavoriteButton = document.createElement("button");
    removeFavoriteButton.type = "button";
    removeFavoriteButton.textContent = "Remove cat from favorites";
    removeFavoriteButton.onclick = () => removeFavorite(imageId);

    catArticle.appendChild(removeFavoriteButton);
  }

  reference.appendChild(catArticle);
}

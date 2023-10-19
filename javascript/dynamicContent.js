let isLoading = true;

function loadData(data, isFavorite) {
  for (let i = 0; i < data.length; i++) {
    const url = isFavorite ? data[i].image.url : data[i].url;

    addCatImage(url, data[i].id, isFavorite);
  }
}

function addCatImage(sourceImage, imageId, isFavorite) {
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
    removeFavoriteButton.onclick = () => {
      removeFavorite(imageId);

      if (!isRandom) {
        loadFavoriteCats();
      }
    };

    options.appendChild(removeFavoriteButton);
  }

  catArticle.appendChild(options);

  catsReference.appendChild(catArticle);
}

function removeLoadingCards() {
  const loadingCards = document.querySelectorAll(".catLoading");

  loadingCards.forEach(element => {
    element.parentNode.removeChild(element);
  });

  isLoading = false;
}

function addLoadingCards() {
  isLoading = true;

  for (let i = 0; i < 20; i++) {
    addLoadingCard();
  }
}

function addLoadingCard() {
  const catLoading = document.createElement('article');
  catLoading.className = 'catLoading';

  catsReference.appendChild(catLoading);
}
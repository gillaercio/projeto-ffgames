const carouselButtons = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");
const infos = document.querySelectorAll(".info");

carouselButtons.forEach((button, indice) => {
  button.addEventListener("click", () => {
    disableSelectedButton();

    markSelectedButton(button);

    hideActiveImage();

    showBackgroundimage(indice);

    hideActiveInfo();

    showInfo(indice);
  });
});

function disableSelectedButton() {
  const selectedButton = document.querySelector(".selected");
  selectedButton.classList.remove("selected");
}

function markSelectedButton(button) {
  button.classList.add("selected");
}

function showBackgroundimage(indice) {
  images[indice].classList.add("active");
}

function hideActiveInfo() {
  const activeInfo = document.querySelector(".info.active");
  activeInfo.classList.remove("active");
}

function showInfo(indice) {
  infos[indice].classList.add("active");
}

function hideActiveImage() {
  const activeImage = document.querySelector(".active");
  activeImage.classList.remove("active");
}

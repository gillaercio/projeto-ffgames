const carouselButtons = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");
const infos = document.querySelectorAll(".info");

carouselButtons.forEach((button, indice) => {
  button.addEventListener("click", () => {
    const selectedButton = document.querySelector(".selected");
    selectedButton.classList.remove("selected");

    button.classList.add("selected");

    const activeImage = document.querySelector(".active");
    activeImage.classList.remove("active");

    images[indice].classList.add("active");

    const activeInfo = document.querySelector(".info.active");
    activeInfo.classList.remove("active");

    infos[indice].classList.add("active");
  });
});

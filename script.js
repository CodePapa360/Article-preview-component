const popUp = document.querySelector(".popup-contents");
const btnShare = document.querySelectorAll(".share-icon");

btnShare.forEach((btn) => {
  btn.addEventListener("click", function () {
    popUp.classList.toggle("show");
    console.log("clicked");
  });
});

const darkModeToggle = document.querySelector("#dark-mode-toggle");
const root = document.documentElement;

darkModeToggle.addEventListener("click", () => {
  root.classList.toggle("dark-mode");
});

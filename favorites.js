const favoriteButtons = document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.innerText = "Added ✓";

    button.style.background = "#16a34a";

    setTimeout(() => {
      button.innerText = "Add To Cart";

      button.style.background = "#ee4d2d";
    }, 2000);
  });
});

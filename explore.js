// SEARCH
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  alert("Searching products...");
});

// ADD TO CART
const productButtons = document.querySelectorAll(".product-btn");

productButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.innerText = "Added ✓";

    button.style.background = "#16a34a";

    setTimeout(() => {
      button.innerText = "Add To Cart";

      button.style.background = "#ee4d2d";
    }, 2000);
  });
});

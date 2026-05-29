// QUANTITY BUTTONS
const plusButtons = document.querySelectorAll(".plus");

const minusButtons = document.querySelectorAll(".minus");

plusButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantity = btn.parentElement.querySelector(".quantity");

    let value = parseInt(quantity.innerText);

    value++;

    quantity.innerText = value;
  });
});

minusButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantity = btn.parentElement.querySelector(".quantity");

    let value = parseInt(quantity.innerText);

    if (value > 1) {
      value--;

      quantity.innerText = value;
    }
  });
});

// CHECKOUT BUTTON
const checkoutBtn = document.getElementById("checkoutBtn");

checkoutBtn.addEventListener("click", () => {
  checkoutBtn.innerText = "Processing...";

  setTimeout(() => {
    checkoutBtn.innerText = "Checkout Success ✓";

    checkoutBtn.style.background = "#16a34a";
  }, 2000);
});

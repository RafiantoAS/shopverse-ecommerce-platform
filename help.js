// FAQ TOGGLE
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// SEARCH BUTTON
const searchBtn = document.getElementById("searchBtn");

const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", () => {
  if (searchInput.value.trim() === "") {
    alert("Please enter help topic");
  } else {
    alert("Searching help for: " + searchInput.value);
  }
});

// CONTACT SUPPORT BUTTON
const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", () => {
  alert("Customer Support will contact you soon 📞");
});

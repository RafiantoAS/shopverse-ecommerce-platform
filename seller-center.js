// START SELLING BUTTON
const startBtn = document.querySelector(".primary-btn");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    alert("Welcome To ShopVerse Seller Program 🚀");
  });
}

// LEARN MORE BUTTON
const learnBtn = document.querySelector(".secondary-btn");

if (learnBtn) {
  learnBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  });
}

// CTA BUTTON
const ctaBtn = document.querySelector(".cta-btn");

if (ctaBtn) {
  ctaBtn.addEventListener("click", () => {
    alert("Seller Registration Coming Soon 😎");
  });
}

// FEATURE HOVER EFFECT
const featureCards = document.querySelectorAll(".feature-card");

featureCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.03)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

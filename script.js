// =========================
// SCROLL TOP
// =========================
const scrollTop = document.getElementById("scrollTop");

if (scrollTop) {
  scrollTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// =========================
// SEARCH
// =========================
const searchButton = document.querySelector(".search-box button");

const searchInput = document.getElementById("searchInput");

const suggestions = document.getElementById("suggestions");

/* PRODUCT LIST */
const products = [
  "iPhone 15 Pro Max",
  "Samsung Galaxy S24 Ultra",
  "MacBook Pro M3",
  "Gaming Laptop ASUS ROG",
  "AirPods Pro",
  "Sony Wireless Headphones",
  "Mechanical Keyboard RGB",
  "Gaming Mouse Logitech",
  "Smart Watch Ultra",
  "Bluetooth Speaker JBL",
  "Sony Camera Pro",
  "Monitor Gaming 144Hz",
  "iPad Air",
  "Xiaomi Pad 6",
  "PlayStation 5",
];

/* SHOW DROPDOWN */
searchInput.addEventListener("focus", () => {
  showSuggestions(searchInput.value);
});

/* INPUT SEARCH */
searchInput.addEventListener("keyup", () => {
  showSuggestions(searchInput.value);
});

/* FUNCTION */
function showSuggestions(value) {
  const keyword = value.toLowerCase();

  suggestions.innerHTML = "";

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(keyword),
  );

  if (filteredProducts.length === 0) {
    suggestions.style.display = "none";
    return;
  }

  filteredProducts.forEach((product) => {
    const li = document.createElement("li");

    li.textContent = product;

    li.addEventListener("click", () => {
      searchInput.value = product;

      suggestions.style.display = "none";
    });

    suggestions.appendChild(li);
  });

  suggestions.style.display = "block";
}

/* CLOSE DROPDOWN */
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-box")) {
    suggestions.style.display = "none";
  }
});

// =========================
// HERO BUTTONS
// =========================
const shopNowBtn = document.querySelector(".primary-btn");

if (shopNowBtn) {
  shopNowBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  });
}

// =========================
// PRODUCT BUTTONS
// =========================
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

// =========================
// CATEGORY HOVER
// =========================
const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// =========================
// PRODUCT CARD HOVER
// =========================
const productCards = document.querySelectorAll(".product-card");

productCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// =========================
// NAVBAR SHADOW
// =========================
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
  } else {
    navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";
  }
});

// =========================
// NOTIFICATION
// =========================
const notificationBtn = document.getElementById("notificationBtn");

const notificationPopup = document.getElementById("notificationPopup");

if (notificationBtn && notificationPopup) {
  notificationBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    notificationPopup.classList.toggle("active");
  });
}

// CLOSE POPUP
document.addEventListener("click", (e) => {
  if (!e.target.closest(".notification-wrapper")) {
    if (notificationPopup) {
      notificationPopup.classList.remove("active");
    }
  }
});

// =========================
// CLEAR NOTIFICATIONS
// =========================
const clearNotifications = document.getElementById("clearNotifications");

if (clearNotifications) {
  clearNotifications.addEventListener("click", () => {
    notificationPopup.innerHTML = `

      <div class="notification-header">
        <h3>Notifications</h3>
      </div>

      <div
        style="
          padding:40px;
          text-align:center;
          color:#666;
        "
      >
        No notifications 😎
      </div>

    `;
  });
}

// =========================
// DOWNLOAD POPUP
// =========================
const downloadBtn = document.getElementById("downloadBtn");

const downloadPopup = document.getElementById("downloadPopup");

const closeDownload = document.getElementById("closeDownload");

// OPEN
if (downloadBtn && downloadPopup) {
  downloadBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    downloadPopup.classList.toggle("active");
  });
}

// CLOSE BUTTON
if (closeDownload) {
  closeDownload.addEventListener("click", () => {
    downloadPopup.classList.remove("active");
  });
}

// CLOSE OUTSIDE
document.addEventListener("click", (e) => {
  if (!e.target.closest(".download-wrapper")) {
    if (downloadPopup) {
      downloadPopup.classList.remove("active");
    }
  }
});

// ===== Categories & Subcategories with images (HOME) =====
const categories = {
  "Electronics": {
    image: "images/Electronic.jpg",
    subs: {
      "Phones":         { image: "images/Phones.jpg" },
      "Laptops":        { image: "images/Laptop.jpg" },
      "Smartwatches":   { image: "images/SmartW.jpg" },
      "Apple Products": { image: "images/AppleD.jpg" },
      "Accessories":    { image: "images/Accessories.jpg" }
    }
  },
  "Clothes": {
    image: "images/Clothes.jpg",
    subs: {
      "Men":   { image: "images/menC.jpg" },
      "Women": { image: "images/WomenC.jpg" },
      "Kids":  { image: "images/KidsC.jpg" }
    }
  },
  "Furniture": {
    image: "images/Furniture.jpg",
    subs: {
      "Bedroom":     { image: "images/bedroom.jpg" },
      "Living Room": { image: "images/livingroom.jpg" }
    }
  },
  "Books": {
    image: "images/Books.jpg",
    subs: {
      "Fiction":     { image: "images/fiction.jpg" },
      "Non-Fiction": { image: "images/nonfiction.jpg" },
      "Manga": { image: "images/manga.jpg" }
    }
  }
};

// Back stack (optional for more complex flows)
let backStack = [];

/* ---------- HOME: render categories ---------- */
function renderCategories() {
  const list = document.getElementById("category-list");
  if (!list) return;

  list.innerHTML = "";
  Object.keys(categories).forEach(cat => {
    const li = document.createElement("li");
    li.className = "category-card";
    li.innerHTML = `
      <img src="${categories[cat].image}" alt="${cat}">
      <p class="category-title">${cat}</p>
    `;
    li.addEventListener("click", () => showSubcategories(cat));
    list.appendChild(li);
  });
}

/* ---------- Navigate to subcategories view on Products.html ---------- */
function showSubcategories(category) {
  backStack.push({ page: "home" });
  window.location.href = `Products.html?category=${encodeURIComponent(category)}&type=sub`;
}

/* ---------- PRODUCTS PAGE: render subcategories grid ---------- */
function renderSubcategories() {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  const type = urlParams.get("type");

  if (type === "sub" && category && categories[category]) {
    const grid = document.getElementById("product-list"); // Shared grid
    if (!grid) return;
    grid.innerHTML = "";

    const subs = categories[category].subs;
    Object.keys(subs).forEach(sub => {
      const card = document.createElement("div");
      card.className = "subcategory-card";
      card.innerHTML = `
        <img src="${subs[sub].image}" alt="${sub}">
        <p class="subcategory-title">${sub}</p>
      `;
      card.addEventListener("click", () => {
        window.location.href = `Products.html?category=${encodeURIComponent(category)}&subcategory=${encodeURIComponent(sub)}`;
      });
      grid.appendChild(card);
    });

    const title = document.getElementById("category-title");
    if (title) title.textContent = `${category} — Subcategories`;
  }
}

/* ---------- Back button behavior ---------- */
function wireBackButton() {
  const backBtn = document.getElementById("back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      // Prefer browser history; fallback to home
      if (window.history.length > 1) window.history.back();
      else window.location.href = "MyAffi.html";
    });
  }
}

/* ---------- Search handling (from both pages) ---------- */
function wireSearch() {
  const btn = document.getElementById("search-btn");
  const input = document.getElementById("search-input");
  if (!btn || !input) return;

  const go = () => {
    const q = input.value.trim();
    if (q) window.location.href = `Products.html?search=${encodeURIComponent(q)}`;
  };
  btn.addEventListener("click", go);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  // On Home
  if (document.getElementById("category-list")) {
    renderCategories();
  }
  // On Products page (subcategories view)
  if (document.getElementById("product-list")) {
    renderSubcategories();
  }

  wireBackButton();
  wireSearch();
});

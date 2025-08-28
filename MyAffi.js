// ===== Categories & Subcategories with images (HOME) =====
const categories = {
  "Electronics": {
    image: "images/Electronic.jpg",
    subs: {
      "Phones":         { image: "images/Phones.jpg", popular: true, new: false },
      "Laptops":        { image: "images/Laptop.jpg", popular: true, new: true },
      "Smartwatches":   { image: "images/SmartW.jpg", popular: true, new: false },
      "Apple Products": { image: "images/AppleD.jpg", popular: false, new: true },
      "Accessories":    { image: "images/Accessories.jpg", popular: false, new: false }
    }
  },
  "Clothes": {
    image: "images/Clothes.jpg",
    subs: {
      "Men":   { image: "images/menC.jpg", popular: true, new: false },
      "Women": { image: "images/WomenC.jpg", popular: true, new: true },
      "Kids":  { image: "images/KidsC.jpg", popular: false, new: true }
    }
  },
  "Furniture": {
    image: "images/Furniture.jpg",
    subs: {
      "Bedroom":     { image: "images/bedroom.jpg", popular: true, new: false },
      "Living Room": { image: "images/livingroom.jpg", popular: false, new: false },
      "Dining":      { image: "images/dining.jpg", popular: false, new: true }
    }
  },
  "Books": {
    image: "images/Books.jpg",
    subs: {
      "Fiction":     { image: "images/fiction.jpg", popular: true, new: false },
      "Non-Fiction": { image: "images/nonfiction.jpg", popular: false, new: false },
      "Manga":       { image: "images/manga.jpg", popular: true, new: true },
      "Academic":    { image: "images/academic.jpg", popular: false, new: false }
    }
  },
  "Beauty": {
    image: "images/Beauty.jpg",
    subs: {
      "Skincare":    { image: "images/skincare.jpg", popular: true, new: true },
      "Makeup":      { image: "images/makeup.jpg", popular: true, new: false },
      "Haircare":    { image: "images/haircare.jpg", popular: false, new: true }
    }
  },
  "Sports": {
    image: "images/Sports.jpg",
    subs: {
      "Fitness":     { image: "images/fitness.jpg", popular: true, new: false },
      "Outdoor":     { image: "images/outdoor.jpg", popular: false, new: true },
      "Apparel":     { image: "images/sportsapparel.jpg", popular: false, new: false }
    }
  }
};

// Featured products data
const featuredProducts = [
  {
    id: 1,
    name: "Wireless Earbuds Pro",
    price: "$89.99",
    image: "images/earbuds.jpg",
    category: "Electronics",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: "$29.99",
    image: "images/cottontshirt.jpg",
    category: "Clothes",
    rating: 4.6,
    reviews: 892,
    badge: "Eco Friendly"
  },
  {
    id: 3,
    name: "Memory Foam Mattress",
    price: "$499.99",
    image: "images/mattress.jpg",
    category: "Furniture",
    rating: 4.9,
    reviews: 563,
    badge: "Top Rated"
  },
  {
    id: 4,
    name: "Skincare Routine Set",
    price: "$79.99",
    image: "images/skincareset.jpg",
    category: "Beauty",
    rating: 4.7,
    reviews: 1034,
    badge: "New"
  }
];

// Search suggestions
const searchSuggestions = [
  "Wireless Earbuds", "Gaming Laptop", "Smart Watch", "iPhone Charger",
  "Men's Jeans", "Women's Dresses", "Kids Shoes", "Winter Coat",
  "Office Chair", "Coffee Table", "Bookshelf", "Mattress",
  "Fiction Books", "Self Help", "Manga Comics", "Textbooks",
  "Face Cream", "Hair Serum", "Makeup Palette", "Perfume"
];

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
      <div class="category-image-wrapper">
        <img src="${categories[cat].image}" alt="${cat}" 
             loading="lazy" onerror="this.src='https://placehold.co/200x150/4f46e5/ffffff?text=${cat}'">
        <div class="category-overlay">
          <span>${Object.keys(categories[cat].subs).length} subcategories</span>
        </div>
      </div>
      <h3 class="category-title">${cat}</h3>
    `;
    li.addEventListener("click", () => showSubcategories(cat));
    li.setAttribute("role", "button");
    li.setAttribute("tabindex", "0");
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        showSubcategories(cat);
      }
    });
    list.appendChild(li);
  });
}

/* ---------- HOME: render featured products ---------- */
function renderFeaturedProducts() {
  const container = document.getElementById("featured-products-container");
  if (!container) return;

  container.innerHTML = "";
  featuredProducts.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" 
             loading="lazy" onerror="this.src='https://placehold.co/300x300/4f46e5/ffffff?text=Product'">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        <button class="quick-view-btn" aria-label="Quick view">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </button>
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <div class="product-category">${product.category}</div>
        <div class="product-rating">
          <div class="rating-stars">
            ${getStarRating(product.rating)}
          </div>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-price">${product.price}</div>
        <button class="btn btn-outline product-btn">View Products</button>
      </div>
    `;
    container.appendChild(productCard);
  });

  // Add event listeners to quick view buttons
  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productCard = btn.closest('.product-card');
      const productName = productCard.querySelector('.product-name').textContent;
      alert(`Quick view: ${productName}\nThis would open a modal with more product details.`);
    });
  });
}

/* Helper function to generate star rating */
function getStarRating(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    stars += `<svg class="star filled" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>`;
  }
  
  if (hasHalf) {
    stars += `<svg class="star half" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>`;
  }
  
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += `<svg class="star empty" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>`;
  }
  
  return stars;
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
        <div class="subcategory-image-wrapper">
          <img src="${subs[sub].image}" alt="${sub}" 
               loading="lazy" onerror="this.src='https://placehold.co/250x200/4f46e5/ffffff?text=${sub}'">
          ${subs[sub].new ? '<span class="badge new">New</span>' : ''}
          ${subs[sub].popular ? '<span class="badge popular">Popular</span>' : ''}
        </div>
        <h3 class="subcategory-title">${sub}</h3>
        <div class="subcategory-meta">
          <span>${getRandomProductCount()} products</span>
        </div>
      `;
      card.addEventListener("click", () => {
        window.location.href = `Products.html?category=${encodeURIComponent(category)}&subcategory=${encodeURIComponent(sub)}`;
      });
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          window.location.href = `Products.html?category=${encodeURIComponent(category)}&subcategory=${encodeURIComponent(sub)}`;
        }
      });
      grid.appendChild(card);
    });

    const title = document.getElementById("category-title");
    if (title) title.textContent = `${category} — Subcategories`;
  }
}

/* Helper function to generate random product count */
function getRandomProductCount() {
  return Math.floor(Math.random() * 50) + 20;
}

/* ---------- Back button behavior ---------- */
function wireBackButton() {
  const backBtn = document.getElementById("back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      // Prefer browser history; fallback to home
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = "index.html";
      }
    });
  }
}

/* ---------- Search handling (from both pages) ---------- */
function wireSearch() {
  const btn = document.getElementById("search-btn");
  const input = document.getElementById("search-input");
  const suggestions = document.getElementById("search-suggestions");
  
  if (!btn || !input) return;

  // Populate initial suggestions
  updateSearchSuggestions('');

  const go = () => {
    const q = input.value.trim();
    if (q) {
      window.location.href = `Products.html?search=${encodeURIComponent(q)}`;
    }
  };

  btn.addEventListener("click", go);
  
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      go();
    }
  });

  // Search suggestions functionality
  input.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    if (query.length > 0) {
      const filtered = searchSuggestions.filter(suggestion => 
        suggestion.toLowerCase().includes(query)
      );
      displaySuggestions(filtered);
    } else {
      suggestions.innerHTML = '';
      suggestions.style.display = 'none';
    }
  });

  // Click on suggestion
  if (suggestions) {
    suggestions.addEventListener('click', (e) => {
      if (e.target.classList.contains('suggestion-item')) {
        input.value = e.target.textContent;
        suggestions.innerHTML = '';
        suggestions.style.display = 'none';
        go();
      }
    });
  }
}

/* Update search suggestions */
function updateSearchSuggestions(query) {
  const filtered = query ? 
    searchSuggestions.filter(suggestion => suggestion.toLowerCase().includes(query.toLowerCase())) :
    searchSuggestions.slice(0, 6);
  displaySuggestions(filtered);
}

/* Display search suggestions */
function displaySuggestions(suggestionsList) {
  const suggestions = document.getElementById("search-suggestions");
  if (!suggestions) return;

  if (suggestionsList.length > 0) {
    suggestions.innerHTML = suggestionsList.map(item => 
      `<div class="suggestion-item" role="option">${item}</div>`
    ).join('');
    suggestions.style.display = 'block';
  } else {
    suggestions.innerHTML = '<div class="no-suggestions">No results found</div>';
    suggestions.style.display = 'block';
  }
}

/* ---------- Accessibility enhancements ---------- */
function enhanceAccessibility() {
  // Add ARIA labels to interactive elements
  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach((card, index) => {
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Browse ${card.querySelector('.category-title').textContent} category`);
    card.setAttribute('tabindex', '0');
  });

  // Add keyboard navigation
  document.addEventListener('keydown', (e) => {
    // Skip to main content
    if (e.key === 's' && e.altKey) {
      e.preventDefault();
      document.querySelector('main').focus();
    }
    // Focus search
    if (e.key === '/' && !e.altKey && !e.ctrlKey) {
      e.preventDefault();
      document.getElementById('search-input')?.focus();
    }
  });

  // Announce page changes for screen readers
  if (document.getElementById('category-title')) {
    const pageAlert = document.createElement('div');
    pageAlert.setAttribute('aria-live', 'polite');
    pageAlert.setAttribute('class', 'sr-only');
    document.body.appendChild(pageAlert);
    
    const title = document.getElementById('category-title').textContent;
    pageAlert.textContent = `Navigated to ${title}`;
  }
}

/* ---------- Performance optimizations ---------- */
function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });

    // Observe all lazy-loaded images
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  // On Home
  if (document.getElementById("category-list")) {
    renderCategories();
  }
  
  // On Home - Featured products
  if (document.getElementById("featured-products-container")) {
    renderFeaturedProducts();
  }

  // On Products page (subcategories view)
  if (document.getElementById("product-list")) {
    renderSubcategories();
  }

  wireBackButton();
  wireSearch();
  enhanceAccessibility();
  lazyLoadImages();

  // Add smooth loading animation
  document.body.classList.add('loaded');
});

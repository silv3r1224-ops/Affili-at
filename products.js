// Map EVERY subcategory name exactly (case sensitive) to its own list
const allProducts = {
  // --- Electronics ---
  "Phones": [
    {name:"IQOO Neo 10",img:"images/IQOOneo10.jpg",link:"https://amzn.to/45xvrbJ",desc:"iQOO Neo 10 (Titanium Chrome, 8GB RAM, 256GB Storage) | Snapdragon 8s Gen 4 Processor & SuperComputing Chip Q1 | 7000 mAh Battery | Segment’s Highest 144 FPS Gaming Smartphone."},
    {name:"iPhone 15",img:"images/iphone15.jpg",link:"#",desc:"Latest iPhone model."},
    {name:"Samsung Galaxy S23",img:"images/galaxys23.jpg",link:"#",desc:"Flagship Samsung phone."},
    {name:"OnePlus 11",img:"images/oneplus11.jpg",link:"#",desc:"Smooth and fast."}
  ],
  "Laptops": [
    {name:"MacBook Air M2",img:"images/macbook.jpg",link:"#",desc:"Lightweight powerful laptop."},
    {name:"Dell XPS 13",img:"images/dellxps.jpg",link:"https://amzn.to/45BQuKr",desc:"Dell XPS 13-9350 Laptop, AI Enabled Intel Core Ultra7 Processor 256V, 16GB, LPDDR5X, 512GB SSD, Intel Arc Graphics, 13" (33.02cm) FHD+ Display, Win 11+MSO'21+McAfee 15 Month, Platinum Silver, 1.22Kg."},
    {name:"HP Spectre x360",img:"images/hpspectre.jpg",link:"#",desc:"Convertible laptop."},
    {name:"Lenovo Yoga 9i",img:"images/yoga9i.jpg",link:"#",desc:"2-in-1 laptop."}
  ],
  "Smartwatches": [
    {name:"Apple Watch Series 9",img:"images/applewatch.jpg",link:"#",desc:"Advanced health tracking."},
    {name:"Samsung Galaxy Watch 6",img:"images/galaxywatch6.jpg",link:"#",desc:"Stylish smartwatch with fitness features."},
    {name:"Amazfit GTR 4",img:"images/amazfitgtr4.jpg",link:"#",desc:"Affordable fitness smartwatch."},
    {name:"Garmin Venu 2",img:"images/garminvenu2.jpg",link:"#",desc:"GPS smartwatch for sports."}
  ],
  "Apple Products": [
    {name:"iPad Pro M2",img:"images/ipadpro.jpg",link:"#",desc:"Powerful Apple tablet."},
    {name:"MacBook Pro M3",img:"images/macbookpro.jpg",link:"#",desc:"Laptop for creators and pros."},
    {name:"iMac 24-inch",img:"images/imac24.jpg",link:"#",desc:"All-in-one desktop."},
    {name:"AirPods Pro 2",img:"images/airpodspro2.jpg",link:"#",desc:"Active noise cancellation."}
  ],
  "Accessories": [
    {name:"Anker PowerCore",img:"images/powerbank.jpg",link:"#",desc:"Fast charging powerbank."},
    {name:"Logitech MX Master 3S",img:"images/mxmaster3s.jpg",link:"#",desc:"Ergonomic wireless mouse."},
    {name:"Sony WH-1000XM5",img:"images/sonyxm5.jpg",link:"#",desc:"Noise-cancelling headphones."},
    {name:"Sandisk 1TB SSD",img:"images/ssd1tb.jpg",link:"#",desc:"Portable SSD storage."}
  ],

  // --- Clothes ---
  "Men": [
    {name:"Formal Shirt",img:"images/menshirt.jpg",link:"#",desc:"Cotton formal wear."},
    {name:"Jeans",img:"images/menjeans.jpg",link:"#",desc:"Classic denim."},
    {name:"Leather Jacket",img:"images/menjacket.jpg",link:"#",desc:"Timeless style."},
    {name:"Sneakers",img:"images/mensneakers.jpg",link:"#",desc:"Casual all-day shoes."}
  ],
  "Women": [
    {name:"Summer Dress",img:"images/womendress.jpg",link:"#",desc:"Light and elegant."},
    {name:"Heels",img:"images/womenheels.jpg",link:"#",desc:"Evening wear heels."},
    {name:"Handbag",img:"images/womenbag.jpg",link:"#",desc:"Stylish leather bag."},
    {name:"Scarf",img:"images/womenscarf.jpg",link:"#",desc:"Soft wool scarf."}
  ],
  "Kids": [
    {name:"Kids T-shirt",img:"images/kidstshirt.jpg",link:"#",desc:"Cartoon print tee."},
    {name:"School Bag",img:"images/schoolbag.jpg",link:"#",desc:"Durable backpack."},
    {name:"Sneakers",img:"images/kidssneakers.jpg",link:"#",desc:"Comfy and sturdy."},
    {name:"Cap",img:"images/kidscap.jpg",link:"#",desc:"Fun baseball cap."}
  ],

  // --- Furniture ---
  "Bedroom": [
    {name:"Queen Bed",img:"images/queenbed.jpg",link:"#",desc:"Sturdy wooden frame."},
    {name:"Wardrobe",img:"images/wardrobe.jpg",link:"#",desc:"Spacious storage."},
    {name:"Bedside Table",img:"images/bedside.jpg",link:"#",desc:"Compact & handy."},
    {name:"Dressing Table",img:"images/dressingtable.jpg",link:"#",desc:"Mirror with drawers."}
  ],
  "Living Room": [
    {name:"Sofa Set",img:"images/sofa.jpg",link:"#",desc:"Comfortable & modern."},
    {name:"Coffee Table",img:"images/coffeetable.jpg",link:"#",desc:"Minimal wood design."},
    {name:"TV Stand",img:"images/tvstand.jpg",link:"#",desc:"Clean cable management."},
    {name:"Bookshelf",img:"images/bookshelf.jpg",link:"#",desc:"Open shelf design."}
  ],

  // --- Books ---
  "Fiction": [
    {name:"The Great Gatsby",img:"images/gatsby.jpg",link:"#",desc:"Classic American novel."},
    {name:"Harry Potter",img:"images/harrypotter.jpg",link:"#",desc:"Fantasy adventure."},
    {name:"The Hobbit",img:"images/hobbit.jpg",link:"#",desc:"Epic fantasy."},
    {name:"1984",img:"images/1984.jpg",link:"#",desc:"Dystopian classic."}
  ],
  "Non-Fiction": [
    {name:"Sapiens",img:"images/sapiens.jpg",link:"#",desc:"History of humankind."},
    {name:"Atomic Habits",img:"images/atomichabits.jpg",link:"#",desc:"Build better habits."},
    {name:"Educated",img:"images/educated.jpg",link:"#",desc:"Powerful memoir."},
    {name:"The Power of Habit",img:"images/powerofhabit.jpg",link:"#",desc:"Science of habits."}
  ],
  "Manga": [
    {name:"Sapiens",img:"images/sapiens.jpg",link:"#",desc:"History of humankind."},
    {name:"Atomic Habits",img:"images/atomichabits.jpg",link:"#",desc:"Build better habits."},
    {name:"Educated",img:"images/educated.jpg",link:"#",desc:"Powerful memoir."},
    {name:"The Power of Habit",img:"images/powerofhabit.jpg",link:"#",desc:"Science of habits."}
  ]

};

// ---- URL params & rendering ----
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
const subcategory = urlParams.get("subcategory");
const search = urlParams.get("search");

const productList = document.getElementById("product-list");
const titleEl = document.getElementById("category-title");

function setTitle(txt) { if (titleEl) titleEl.textContent = txt; }

if (productList) {
  productList.innerHTML = "";
  let productsToShow = [];

  // Highest priority: explicit subcategory
  if (subcategory && allProducts[subcategory]) {
    productsToShow = allProducts[subcategory];
    setTitle(`${subcategory} — Products`);
  }
  // Next: category-level listing if data exists for that key (optional)
  else if (category && allProducts[category]) {
    productsToShow = allProducts[category];
    setTitle(`${category} — Products`);
  }
  // Search across all subcategories
  else if (search) {
    const q = search.toLowerCase();
    Object.entries(allProducts).forEach(([sub, arr]) => {
      arr.forEach(p => {
        if (
          p.name.toLowerCase().includes(q) ||
          (p.desc && p.desc.toLowerCase().includes(q)) ||
          sub.toLowerCase().includes(q)
        ) {
          productsToShow.push(p);
        }
      });
    });
    setTitle(`Search: "${search}"`);
  }
  // Fallback: show all
  else {
    Object.values(allProducts).forEach(arr => productsToShow.push(...arr));
    setTitle("All Products");
  }

  if (productsToShow.length === 0) {
    productList.innerHTML = "<p style='color:#fff;opacity:.9'>No products found.</p>";
  } else {
    productsToShow.forEach(p => {
      const div = document.createElement("div");
      div.className = "product-card";
      div.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.desc ?? ""}</p>
        <a href="${p.link}" target="_blank" rel="noopener">Buy Now</a>
      `;
      productList.appendChild(div);
    });
  }
}




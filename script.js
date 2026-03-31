// Editable endpoints
const APP_SCRIPT_URL = "";          // paste your Google Apps Script Web App URL
const STRIPE_PAYMENT_LINK = "";     // optional Stripe Payment Link for online payments (souvenirs)

const products = [
  { id: "prasad-box", name: "Ram Mandir prasad box", price: 399, unit: "box", tone: "#c65a29", category: "food",
    img: "https://images.unsplash.com/photo-1598968337505-5c5dca0c4d8e?auto=format&fit=crop&w=900&q=80",
    desc: "Assorted peda, dry fruits, and tulsi leaves, sealed for travel." },
  { id: "puja-kit", name: "Complete puja kit", price: 549, unit: "kit", tone: "#9a431f", category: "puja",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
    desc: "Havan samagri, kumkum, roli, agarbatti, diya and cotton wicks." },
  { id: "ram-idol", name: "Ram Darbar brass idol (4 in)", price: 1250, unit: "set", tone: "#b5742b", category: "idol",
    img: "https://images.unsplash.com/photo-1601655096890-1c70cbf59d60?auto=format&fit=crop&w=900&q=80",
    desc: "Hand-cast brass set from local karkhana near Ramkot." },
  { id: "rudraksha", name: "Tulsi & rudraksha mala", price: 320, unit: "piece", tone: "#6d4b2b", category: "puja",
    img: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?auto=format&fit=crop&w=900&q=80",
    desc: "Lightweight mala with cloth pouch; temple-ready." },
  { id: "diyas", name: "Clay diyas (set of 20)", price: 180, unit: "set", tone: "#e08b3d", category: "craft",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    desc: "Handmade at Ayodhya Haat; add ghee or oil and light." },
  { id: "shawl", name: "Saryu aarti angavastram", price: 420, unit: "piece", tone: "#a63e2d", category: "textile",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    desc: "Cotton shawl with Ram naam print; temple appropriate." },
  { id: "sweets", name: "Khoya peda (500g)", price: 340, unit: "box", tone: "#c97c37", category: "food",
    img: "https://images.unsplash.com/photo-1543352634-873f17a7a088?auto=format&fit=crop&w=900&q=80",
    desc: "Fresh daily from Chowk bazaar; packed for travel." },
  { id: "fridge-magnet", name: "Ayodhya skyline magnet", price: 199, unit: "piece", tone: "#7b5aa6", category: "craft",
    img: "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=900&q=80",
    desc: "Minimal magnet with Ram Mandir outline; great keepsake." }
];

const spots = [
  { id: "ram-mandir", name: "Shri Ram Janmabhoomi Mandir", area: "Ramkot", best: "Best: 6-9am", tag: "Must visit",
    photo: "https://images.unsplash.com/photo-1582719478152-7c4a0b0a0a64?auto=format&fit=crop&w=900&q=80",
    note: "Carry transparent bag; deposit mobiles in lockers." },
  { id: "hanuman-garhi", name: "Hanuman Garhi", area: "Ramkot", best: "Best: 8-10am", tag: "Steps 76",
    photo: "https://images.unsplash.com/photo-1582719478450-657c3d138f85?auto=format&fit=crop&w=900&q=80",
    note: "Light sweets for prasad; socks recommended in summer." },
  { id: "kanak-bhavan", name: "Kanak Bhavan", area: "Ramkot", best: "Best: 10-12am", tag: "Music",
    photo: "https://images.unsplash.com/photo-1523528283115-9bf9f73c041a?auto=format&fit=crop&w=900&q=80",
    note: "Known for intricate arches; photography friendly." },
  { id: "saryu", name: "Ram ki Paidi & Saryu Aarti", area: "Naya Ghat", best: "Best: Sunrise / Sunset", tag: "Aarti",
    photo: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    note: "Arrive 20 mins early; boats available till sunset." },
  { id: "nagesh", name: "Nageshwarnath Temple", area: "Theri Bazar", best: "Best: Evening", tag: "Shiva",
    photo: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80",
    note: "Combine with Treta ke Thakur and Dashrath Mahal." },
  { id: "guptar", name: "Guptar Ghat", area: "Gonda Road", best: "Best: Morning", tag: "Quiet",
    photo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    note: "Meditative stretch; lesser crowd and clean steps." }
];

const stays = [
  { name: "Sarayu Riverside Suites", zone: "Naya Ghat", rate: "Rs 4,800", distance: "1.2 km from Ram ki Paidi", perks: ["Breakfast", "Parking", "Airport pickup"] },
  { name: "Ramkot Heritage Stay", zone: "Ramkot", rate: "Rs 3,900", distance: "900 m from Hanuman Garhi", perks: ["Old city access", "Temple view", "Lift"] },
  { name: "Ring Road Comfort Inn", zone: "Ring Road", rate: "Rs 3,200", distance: "10 min drive to temple", perks: ["Quiet", "Parking", "Early check-in"] },
  { name: "Ayodhya Business Hotel", zone: "Civil Lines", rate: "Rs 5,600", distance: "1.8 km from Janmabhoomi", perks: ["Wi-Fi", "Meeting room", "Breakfast"] }
];

const vendors = [
  { name: "Sharma Prasad Bhandar", type: "Puja items", location: "Ramkot", delivery: "Yes", phone: "+91 98765 11111", products: ["Dry prasad", "Puja thali", "Tulsi mala"] },
  { name: "Saryu Handicrafts", type: "Handicrafts", location: "Naya Ghat", delivery: "Pickup & courier", phone: "+91 98765 22222", products: ["Wooden diyas", "Ayodhya magnets", "Brass diyas"] },
  { name: "Chowk Misthan", type: "Food specialties", location: "Chowk bazaar", delivery: "Pickup", phone: "+91 98765 33333", products: ["Khoya peda", "Mathri", "Namkeen"] },
  { name: "Ram Naam Textiles", type: "Clothing / souvenirs", location: "Tedhi Bazar", delivery: "Yes", phone: "+91 98765 44444", products: ["Angavastram", "Shawl", "Stoles"] }
];

const cart = {};

const productGrid = document.getElementById("product-grid");
const spotGrid = document.getElementById("spot-grid");
const stayGrid = document.getElementById("stay-grid");
const vendorGrid = document.getElementById("vendor-grid");
const productFilters = document.getElementById("product-filters");
const productSearchInput = document.getElementById("product-search");
const vendorFilters = document.getElementById("vendor-filters");

const cartCount = document.getElementById("cart-count");
const cartItemsEl = document.getElementById("cart-items");
const cartEmpty = document.getElementById("cart-empty");
const subtotalEl = document.getElementById("subtotal");
const totalEl = document.getElementById("total");
const cartStatus = document.getElementById("cart-status");
const clearCartBtn = document.getElementById("clear-cart");

const planForm = document.getElementById("plan-form");
const planSubmitBtn = document.getElementById("plan-submit");
const planStatus = document.getElementById("plan-status");

const vendorForm = document.getElementById("vendor-form");
const vendorSubmit = document.getElementById("vendor-submit");
const vendorStatus = document.getElementById("vendor-status");

let currentProductFilter = "all";
let currentProductSearch = "";
let currentVendorFilter = "all";

function formatMoney(n) {
  return "Rs " + Number(n).toLocaleString("en-IN", { maximumFractionDigits: 0 });
}

function renderProducts() {
  if (!productGrid) return;
  productGrid.innerHTML = "";
  const term = currentProductSearch.trim().toLowerCase();
  const list = products.filter((p) => {
    const matchesCat = currentProductFilter === "all" || p.category === currentProductFilter;
    const matchesSearch = !term || `${p.name} ${p.desc}`.toLowerCase().includes(term);
    return matchesCat && matchesSearch;
  });

  if (!list.length) {
    productGrid.innerHTML = `<p class="muted">No items match these filters.</p>`;
    return;
  }

  list.forEach((p) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.style.setProperty("--tone", p.tone);
    card.innerHTML = `
      <div class="thumb" style="background-image:url('${p.img}')"></div>
      <div class="body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="price">${formatMoney(p.price)} <span class="unit">/ ${p.unit}</span></div>
        <small class="buy-note">Local delivery | COD or online</small>
        <div class="actions">
          <button class="pill primary add" data-id="${p.id}">Add to cart</button>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

function renderSpots() {
  if (!spotGrid) return;
  spots.forEach((s) => {
    const card = document.createElement("article");
    card.className = "spot-card";
    card.innerHTML = `
      <div class="spot-photo" style="background-image:url('${s.photo}')"></div>
      <div class="spot-body">
        <div class="spot-meta">
          <span class="tag">${s.tag}</span>
          <span>${s.area}</span>
          <span>${s.best}</span>
        </div>
        <h3>${s.name}</h3>
        <p class="muted">${s.note}</p>
      </div>
    `;
    spotGrid.appendChild(card);
  });
}

function renderStays() {
  if (!stayGrid) return;
  stays.forEach((s) => {
    const card = document.createElement("article");
    card.className = "stay-card";
    card.innerHTML = `
      <div class="stay-meta">
        <span class="tag">${s.zone}</span>
        <span>${s.distance}</span>
      </div>
      <h3>${s.name}</h3>
      <div class="stay-meta">
        <strong>${s.rate}</strong>
        <span>per night (double)</span>
      </div>
      <div class="stay-meta">${s.perks.map((p) => `<span class="tag">${p}</span>`).join("")}</div>
    `;
    stayGrid.appendChild(card);
  });
}

function renderVendors() {
  if (!vendorGrid) return;
  vendorGrid.innerHTML = "";
  const list = vendors.filter((v) => currentVendorFilter === "all" || v.type === currentVendorFilter);

  if (!list.length) {
    vendorGrid.innerHTML = `<p class="muted">No vendors match this filter.</p>`;
    return;
  }

  list.forEach((v) => {
    const card = document.createElement("article");
    card.className = "vendor-card";
    card.innerHTML = `
      <div class="vendor-meta">
        <span class="tag">${v.type}</span>
        <span>${v.location}</span>
        <span>${v.delivery}</span>
      </div>
      <h3>${v.name}</h3>
      <div class="vendor-products">${v.products.join(" | ")}</div>
      <div class="vendor-meta">Contact: <a href="tel:${v.phone.replace(/\s+/g, "")}">${v.phone}</a></div>
    `;
    vendorGrid.appendChild(card);
  });
}

function setActiveChip(container, button) {
  if (!container || !button) return;
  container.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
  button.classList.add("active");
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;
  if (!cart[id]) {
    cart[id] = { ...product, qty: 1 };
  } else {
    cart[id].qty += 1;
  }
  renderCart();
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  renderCart();
}

function renderCart() {
  if (!cartItemsEl) return;
  const items = Object.values(cart);
  cartItemsEl.innerHTML = "";
  let subtotal = 0;

  items.forEach((item) => {
    const line = item.price * item.qty;
    subtotal += line;
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div>
        <h4>${item.name}</h4>
        <div class="meta">${item.qty} x ${formatMoney(item.price)} (${item.unit})</div>
      </div>
      <div class="qty">
        <button aria-label="Decrease" data-id="${item.id}" data-delta="-1">-</button>
        <span>${item.qty}</span>
        <button aria-label="Increase" data-id="${item.id}" data-delta="1">+</button>
      </div>
    `;
    cartItemsEl.appendChild(row);
  });

  cartCount.textContent = items.reduce((sum, item) => sum + item.qty, 0);
  subtotalEl.textContent = formatMoney(subtotal);
  totalEl.textContent = formatMoney(subtotal);
  cartEmpty.style.display = items.length ? "none" : "block";
}

function handleCartClick(e) {
  const btn = e.target.closest("button");
  if (!btn) return;
  if (btn.classList.contains("add")) {
    addToCart(btn.dataset.id);
  } else if (btn.dataset.delta) {
    changeQty(btn.dataset.id, Number(btn.dataset.delta));
  }
}

async function submitPlan(evt) {
  evt.preventDefault();
  if (!planForm) return;
  const items = Object.values(cart);
  const formData = new FormData(planForm);
  const experiences = formData.getAll("experiences");

  const payload = {
    type: "trip-plan",
    source: "ayodhya-nagri-web",
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    city: formData.get("city"),
    checkin: formData.get("checkin"),
    checkout: formData.get("checkout"),
    guests: formData.get("guests"),
    intent: formData.get("intent"),
    budget: formData.get("budget"),
    zone: formData.get("zone"),
    experiences,
    notes: formData.get("notes"),
    souvenirs: items.map(({ id, name, qty, price, unit }) => ({ id, name, qty, price, unit })),
    total: Number(totalEl.textContent.replace(/[^0-9.]/g, "")),
    createdAt: new Date().toISOString()
  };

  planSubmitBtn.disabled = true;
  planStatus.textContent = "Sending your plan...";

  if (!APP_SCRIPT_URL) {
    planStatus.textContent = "Set APP_SCRIPT_URL in script.js to send data to Google Sheets.";
    planSubmitBtn.disabled = false;
    return;
  }

  try {
    const res = await fetch(APP_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("Network error");
    planStatus.textContent = "Request received. We will confirm by WhatsApp/email shortly.";
    planForm.reset();
  } catch (err) {
    console.error(err);
    planStatus.textContent = "Could not send right now. Please retry or ping us on WhatsApp.";
  } finally {
    planSubmitBtn.disabled = false;
  }
}

async function submitVendor(evt) {
  evt.preventDefault();
  if (!vendorForm) return;
  const formData = new FormData(vendorForm);
  const payload = {
    type: "vendor-listing",
    source: "ayodhya-nagri-web",
    shop: formData.get("vendorName"),
    phone: formData.get("vendorPhone"),
    vendorType: formData.get("vendorType"),
    products: formData.get("vendorProducts"),
    delivery: formData.get("vendorDelivery"),
    address: formData.get("vendorAddress"),
    notes: formData.get("vendorNotes"),
    createdAt: new Date().toISOString()
  };

  vendorSubmit.disabled = true;
  vendorStatus.textContent = "Submitting your shop...";

  if (!APP_SCRIPT_URL) {
    vendorStatus.textContent = "Set APP_SCRIPT_URL in script.js to send vendor details to Google Sheets.";
    vendorSubmit.disabled = false;
    return;
  }

  try {
    const res = await fetch(APP_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("Network error");
    vendorStatus.textContent = "Thank you! We will verify and publish your listing.";
    vendorForm.reset();
  } catch (err) {
    console.error(err);
    vendorStatus.textContent = "Could not submit. Please call/WhatsApp to finish onboarding.";
  } finally {
    vendorSubmit.disabled = false;
  }
}

function initFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderSpots();
  renderStays();
  renderVendors();
  renderCart();

  if (productFilters) {
    productFilters.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-cat]");
      if (!btn) return;
      currentProductFilter = btn.dataset.cat;
      setActiveChip(productFilters, btn);
      renderProducts();
    });
  }
  if (productSearchInput) {
    productSearchInput.addEventListener("input", (e) => {
      currentProductSearch = e.target.value;
      renderProducts();
    });
  }
  if (vendorFilters) {
    vendorFilters.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-type]");
      if (!btn) return;
      currentVendorFilter = btn.dataset.type;
      setActiveChip(vendorFilters, btn);
      renderVendors();
    });
  }
  if (productGrid) productGrid.addEventListener("click", handleCartClick);
  if (cartItemsEl) cartItemsEl.addEventListener("click", handleCartClick);
  if (clearCartBtn) clearCartBtn.addEventListener("click", () => {
    Object.keys(cart).forEach((k) => delete cart[k]);
    renderCart();
  });
  const cartPill = document.getElementById("cart-pill");
  if (cartPill) {
    cartPill.addEventListener("click", () => {
      const plan = document.getElementById("plan");
      if (plan) plan.scrollIntoView({ behavior: "smooth" });
    });
  }
  if (planForm) planForm.addEventListener("submit", submitPlan);
  if (vendorForm) vendorForm.addEventListener("submit", submitVendor);
  initFooterYear();
});


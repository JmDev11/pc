
const prebuiltPCs = [
    { id: 'pb1', name: 'Nova Pro', type: 'Gaming', price: 1499.99, image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80', cpu: 'AMD Ryzen 5 7600X', gpu: 'NVIDIA RTX 4070', ram: '32GB DDR5', storage: '1TB NVMe SSD' },
    { id: 'pb2', name: 'Creator Studio', type: 'Workstation', price: 2199.99, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80', cpu: 'Intel Core i9-13900K', gpu: 'NVIDIA RTX 4080', ram: '64GB DDR5', storage: '2TB NVMe SSD' },
    { id: 'pb3', name: 'Apex Elite', type: 'Enthusiast', price: 2999.99, image: 'https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop&w=800&q=80', cpu: 'AMD Ryzen 9 7950X3D', gpu: 'NVIDIA RTX 4090', ram: '64GB DDR5', storage: '4TB NVMe SSD' }
];

const pcParts = [
    { id: 'cpu1', category: 'CPU', name: 'AMD Ryzen 7 7800X3D', price: 399.99, specs: '8 Cores, 16 Threads, 5.0 GHz Max Boost', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80' },
    { id: 'cpu2', category: 'CPU', name: 'Intel Core i7-13700K', price: 409.99, specs: '16 Cores, 24 Threads, 5.4 GHz Max Boost', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80' },
    { id: 'gpu1', category: 'GPU', name: 'NVIDIA GeForce RTX 4080 Super', price: 999.99, specs: '16GB GDDR6X, 2550 MHz Core Clock', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80' },
    { id: 'gpu2', category: 'GPU', name: 'AMD Radeon RX 7900 XTX', price: 949.99, specs: '24GB GDDR6, 2500 MHz Core Clock', image: 'https://images.unsplash.com/photo-1532759722434-1e0d0d0cb158?auto=format&fit=crop&w=800&q=80' },
    { id: 'mobo1', category: 'Motherboard', name: 'ASUS ROG Strix B650E-F', price: 259.99, specs: 'AM5 Socket, ATX, PCIe 5.0', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80' },
    { id: 'mobo2', category: 'Motherboard', name: 'MSI MAG Z790 Tomahawk', price: 239.99, specs: 'LGA 1700 Socket, ATX, DDR5', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80' },
    { id: 'ram1', category: 'RAM', name: 'HyperX Predator DDR4 32GB', price: 119.99, specs: 'DDR4-3200, CL16, 4x8GB', image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80' },
    { id: 'ram2', category: 'RAM', name: 'G.Skill Trident Z5 Neo 64GB', price: 214.99, specs: 'DDR5-6000, CL30, 2x32GB', image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80' },
    { id: 'psu1', category: 'PSU', name: 'Thermaltake Smart 500W', price: 49.99, specs: '500W, 80+ White, Non-Modular', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80' },
    { id: 'psu2', category: 'PSU', name: 'SeaSonic FOCUS GX-1000', price: 169.99, specs: '1000W, 80+ Gold, Fully Modular', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80' },
    { id: 'case1', category: 'Case', name: 'Fractal Design North', price: 139.99, specs: 'Mid Tower, ATX, Wood Front Panel', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80' },
    { id: 'case2', category: 'Case', name: 'Lian Li O11 Dynamic EVO', price: 159.99, specs: 'Mid Tower, ATX, Dual Chamber', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80' }
];

const recommendations = [
    { title: 'Budget Gaming Build', desc: 'Great 1080p gaming under $1000', parts: ['cpu1', 'gpu2', 'mobo1', 'ram1', 'psu1', 'case1'], tag: 'Budget' },
    { title: 'High-End Creator', desc: 'Content creation powerhouse', parts: ['cpu2', 'gpu1', 'mobo2', 'ram2', 'psu2', 'case2'], tag: 'Premium' },
    { title: 'Balanced All-Rounder', desc: 'Best value for mixed usage', parts: ['cpu1', 'gpu1', 'mobo1', 'ram2', 'psu2', 'case1'], tag: 'Popular' }
];


let cart = [];
let wishlist = [];
let builderState = { CPU: null, GPU: null, Motherboard: null, RAM: null, PSU: null, Case: null };
let currentPage = 'home';
let currentCategory = 'All';
let searchTerm = '';


const icons = {
    cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>',
    monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    heartFill: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    package: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16.5 9.4l-9-5.19"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>'
};

// ===== NAVIGATION =====
function navigateTo(page, extra) {
    currentPage = page;
    if (extra) { currentCategory = extra; }
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById('page-' + page)?.classList.remove('hidden');
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    document.querySelector(`.nav-links a[data-page="${page}"]`)?.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderCurrentPage();
}

function renderCurrentPage() {
    switch (currentPage) {
        case 'home': renderHome(); break;
        case 'prebuilts': renderPrebuilts(); break;
        case 'builder': renderBuilder(); break;
        case 'parts': renderParts(); break;
    }
}

// ===== RENDER HOME =====
function renderHome() {
    const grid = document.getElementById('featured-grid');
    grid.innerHTML = prebuiltPCs.map(pc => `
        <div class="card animate-in">
            <div class="card-img-wrapper"><img src="${pc.image}" alt="${pc.name}" class="card-img" loading="lazy"></div>
            <div class="card-header">
                <div><span class="badge">${pc.type}</span><h3 style="margin-top:0.5rem">${pc.name}</h3></div>
                <span class="card-price">$${pc.price}</span>
            </div>
            <ul class="prebuilt-specs">
                <li><strong>CPU:</strong> ${pc.cpu}</li>
                <li><strong>GPU:</strong> ${pc.gpu}</li>
                <li><strong>RAM:</strong> ${pc.ram}</li>
                <li><strong>Storage:</strong> ${pc.storage}</li>
            </ul>
            <button class="btn btn-primary btn-full" onclick="addToCart('${pc.id}','prebuilt')">Add to Cart</button>
        </div>
    `).join('');
}

// ===== RENDER PREBUILTS =====
function renderPrebuilts() {
    const grid = document.getElementById('prebuilts-grid');
    grid.innerHTML = prebuiltPCs.map(pc => `
        <div class="card animate-in">
            <div class="card-img-wrapper"><img src="${pc.image}" alt="${pc.name}" class="card-img"></div>
            <div class="card-header">
                <div><span class="badge">${pc.type}</span><h3 style="margin-top:0.5rem">${pc.name}</h3></div>
                <span class="card-price">$${pc.price}</span>
            </div>
            <ul class="prebuilt-specs">
                <li><strong>CPU:</strong> ${pc.cpu}</li>
                <li><strong>GPU:</strong> ${pc.gpu}</li>
                <li><strong>RAM:</strong> ${pc.ram}</li>
                <li><strong>Storage:</strong> ${pc.storage}</li>
            </ul>
            <div style="display:flex;gap:0.5rem">
                <button class="btn btn-primary" style="flex:1" onclick="addToCart('${pc.id}','prebuilt')">Add to Cart</button>
                <button class="btn-icon" onclick="toggleWishlist('${pc.id}','prebuilt')" title="Wishlist">
                    ${wishlist.find(w => w.id === pc.id) ? icons.heartFill : icons.heart}
                </button>
            </div>
        </div>
    `).join('');
}

// ===== RENDER PARTS =====
function renderParts() {
    const categories = ['All', 'CPU', 'GPU', 'Motherboard', 'RAM', 'PSU', 'Case'];
    document.getElementById('filter-tabs').innerHTML = categories.map(c =>
        `<button class="filter-tab ${currentCategory === c ? 'active' : ''}" onclick="filterParts('${c}')">${c}</button>`
    ).join('');

    let filtered = pcParts.filter(p => {
        const matchCat = currentCategory === 'All' || p.category === currentCategory;
        const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.specs.toLowerCase().includes(searchTerm.toLowerCase());
        return matchCat && matchSearch;
    });

    const grid = document.getElementById('parts-grid');
    grid.innerHTML = filtered.length === 0
        ? '<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted)">No components found matching your criteria.</div>'
        : filtered.map(p => `
        <div class="card part-card animate-in">
            ${p.image ? `<div class="part-card-img-wrap"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>` : ''}
            <span class="badge" style="align-self:flex-start;margin-bottom:0.75rem">${p.category}</span>
            <h4>${p.name}</h4>
            <p class="specs">${p.specs}</p>
            <div class="card-price" style="margin-bottom:1rem">$${p.price}</div>
            <div class="part-actions">
                <button class="btn btn-primary btn-sm btn-full" onclick="addToCart('${p.id}','part')">Add to Cart</button>
                <div style="display:flex;gap:0.5rem">
                    <button class="btn btn-secondary btn-sm" style="flex:1" onclick="selectForBuilder('${p.id}')">Add to Builder</button>
                    <button class="btn btn-secondary btn-sm" onclick="openDetail('${p.id}')">Details</button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterParts(cat) { currentCategory = cat; renderParts(); }
function onSearchInput(val) { searchTerm = val; renderParts(); }

// ===== RENDER BUILDER =====
function renderBuilder() {
    const slots = ['CPU', 'GPU', 'Motherboard', 'RAM', 'PSU', 'Case'];
    const total = getBuilderTotal();

    document.getElementById('builder-total').textContent = '$' + total.toFixed(2);
    document.getElementById('builder-total-sidebar').textContent = '$' + total.toFixed(2);

    const slotsEl = document.getElementById('builder-slots');
    slotsEl.innerHTML = slots.map(slot => {
        const part = builderState[slot];
        return `
        <div class="builder-slot ${part ? 'filled' : ''}">
            <div class="slot-left">
                <div class="slot-icon">
                    ${part && part.image ? `<img src="${part.image}" alt="${part.name}" loading="lazy">` : icons.cpu}
                </div>
                <div>
                    <div class="slot-category">${slot}</div>
                    ${part ? `<div class="slot-name">${part.name}</div>` : `<div class="slot-empty">Select a ${slot}</div>`}
                </div>
            </div>
            <div class="slot-right">
                ${part ? `<span class="slot-price">$${part.price}</span>
                    <button class="btn btn-secondary btn-sm" onclick="removeFromBuilder('${slot}')">${icons.x}</button>`
                : `<button class="btn btn-primary btn-sm" onclick="navigateTo('parts','${slot}')">Choose</button>`}
            </div>
        </div>`;
    }).join('');

    // Summary
    document.getElementById('summary-list').innerHTML = slots.map(slot =>
        `<li><span class="label">${slot}</span><span class="value">${builderState[slot] ? '$' + builderState[slot].price : '—'}</span></li>`
    ).join('');

    // Recommendations
    renderRecommendations();
}

function renderRecommendations() {
    const el = document.getElementById('recommendations-list');
    el.innerHTML = recommendations.map((r, i) => {
        const total = r.parts.reduce((sum, pid) => sum + (pcParts.find(p => p.id === pid)?.price || 0), 0);
        return `
        <div class="rec-card">
            <div class="rec-info">
                <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.25rem">
                    <h4>${r.title}</h4>
                    <span class="badge">${r.tag}</span>
                </div>
                <p>${r.desc} — <strong>$${total.toFixed(2)}</strong></p>
            </div>
            <button class="btn btn-primary btn-sm" onclick="applyRecommendation(${i})">Apply Build</button>
        </div>`;
    }).join('');
}

function applyRecommendation(idx) {
    const rec = recommendations[idx];
    const slots = ['CPU', 'GPU', 'Motherboard', 'RAM', 'PSU', 'Case'];
    rec.parts.forEach((pid, i) => {
        const part = pcParts.find(p => p.id === pid);
        if (part) builderState[slots[i]] = part;
    });
    renderBuilder();
    showToast('Build recommendation applied!');
}

function selectForBuilder(partId) {
    const part = pcParts.find(p => p.id === partId);
    if (!part) return;
    builderState[part.category] = part;
    showToast(`${part.name} added to builder`);
    navigateTo('builder');
}

function removeFromBuilder(slot) {
    builderState[slot] = null;
    renderBuilder();
}

function getBuilderTotal() {
    return Object.values(builderState).reduce((sum, p) => sum + (p?.price || 0), 0);
}

function addBuilderToCart() {
    const parts = Object.values(builderState).filter(Boolean);
    if (parts.length === 0) { showToast('Add some parts first!'); return; }
    parts.forEach(p => { if (!cart.find(c => c.id === p.id)) cart.push({ ...p }); });
    updateBadges();
    showToast(`${parts.length} parts added to cart!`);
}

// ===== CART =====
function addToCart(id, type) {
    const item = type === 'prebuilt' ? prebuiltPCs.find(p => p.id === id) : pcParts.find(p => p.id === id);
    if (!item) return;
    cart.push({ ...item });
    updateBadges();
    showToast(`${item.name} added to cart`);
}

function removeFromCart(idx) {
    cart.splice(idx, 1);
    updateBadges();
    renderCart();
}

function getCartTotal() { return cart.reduce((s, i) => s + i.price, 0); }

function renderCart() {
    const body = document.getElementById('cart-body');
    const footer = document.getElementById('cart-footer');
    if (cart.length === 0) {
        body.innerHTML = `<div class="sidebar-empty">${icons.cart}<p>Your cart is empty</p></div>`;
        footer.innerHTML = '';
        return;
    }
    body.innerHTML = cart.map((item, i) => `
        <div class="sidebar-item">
            <img src="${item.image || ''}" alt="" class="sidebar-item-img">
            <div class="sidebar-item-info"><h4>${item.name}</h4><p>${item.category || item.type || ''}</p></div>
            <span class="sidebar-item-price">$${item.price}</span>
            <button class="btn-icon" onclick="removeFromCart(${i})">${icons.trash}</button>
        </div>
    `).join('');
    footer.innerHTML = `
        <div class="sidebar-total"><span>Total</span><span>$${getCartTotal().toFixed(2)}</span></div>
        <button class="btn btn-primary btn-full">Checkout</button>`;
}

function toggleCart() {
    renderCart();
    document.getElementById('cart-sidebar').classList.toggle('active');
    document.getElementById('cart-overlay').classList.toggle('active');
}

// ===== WISHLIST =====
function toggleWishlist(id, type) {
    const idx = wishlist.findIndex(w => w.id === id);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast('Removed from wishlist');
    } else {
        const item = type === 'prebuilt' ? prebuiltPCs.find(p => p.id === id) : pcParts.find(p => p.id === id);
        if (item) { wishlist.push({ ...item }); showToast(`${item.name} added to wishlist`); }
    }
    updateBadges();
    renderCurrentPage();
}

function renderWishlist() {
    const body = document.getElementById('wishlist-body');
    if (wishlist.length === 0) {
        body.innerHTML = `<div class="sidebar-empty">${icons.heart}<p>Your wishlist is empty</p></div>`;
        return;
    }
    body.innerHTML = wishlist.map((item, i) => `
        <div class="sidebar-item">
            <img src="${item.image || ''}" alt="" class="sidebar-item-img">
            <div class="sidebar-item-info"><h4>${item.name}</h4><p>${item.category || item.type || ''}</p></div>
            <span class="sidebar-item-price">$${item.price}</span>
            <button class="btn-icon" onclick="wishlist.splice(${i},1);updateBadges();renderWishlist();">${icons.trash}</button>
        </div>
    `).join('');
}

function toggleWishlistSidebar() {
    renderWishlist();
    document.getElementById('wishlist-sidebar').classList.toggle('active');
    document.getElementById('wishlist-overlay').classList.toggle('active');
}

// ===== DETAIL MODAL =====
function openDetail(partId) {
    const part = pcParts.find(p => p.id === partId);
    if (!part) return;
    const inWishlist = wishlist.find(w => w.id === part.id);
    const modal = document.getElementById('detail-modal');
    document.getElementById('modal-content').innerHTML = `
        <div class="modal-header">
            <button class="modal-close" onclick="closeDetail()">${icons.x}</button>
            ${part.image ? `<img src="${part.image}" alt="${part.name}" class="modal-img">` : ''}
        </div>
        <span class="badge">${part.category}</span>
        <h2 style="margin:0.75rem 0 0.5rem">${part.name}</h2>
        <div class="card-price" style="font-size:1.5rem;margin-bottom:1rem">$${part.price}</div>
        <p style="color:var(--text-secondary);margin-bottom:1rem">${part.specs}</p>
        <ul class="modal-specs">
            <li><span>Category</span><span>${part.category}</span></li>
            <li><span>Price</span><span>$${part.price}</span></li>
            <li><span>Specifications</span><span>${part.specs}</span></li>
        </ul>
        <div class="modal-actions">
            <button class="btn btn-primary" style="flex:1" onclick="addToCart('${part.id}','part');closeDetail()">Add to Cart</button>
            <button class="btn btn-secondary" style="flex:1" onclick="selectForBuilder('${part.id}');closeDetail()">Add to Builder</button>
            <button class="btn-icon" style="color:${inWishlist ? 'var(--accent-purple)' : 'var(--text-muted)'}" onclick="toggleWishlist('${part.id}','part');openDetail('${part.id}')">
                ${inWishlist ? icons.heartFill : icons.heart}
            </button>
        </div>`;
    modal.classList.add('active');
}

function closeDetail() { document.getElementById('detail-modal').classList.remove('active'); }

// ===== BADGES & TOAST =====
function updateBadges() {
    const cb = document.getElementById('cart-badge');
    const wb = document.getElementById('wishlist-badge');
    cb.textContent = cart.length; cb.style.display = cart.length > 0 ? 'flex' : 'none';
    wb.textContent = wishlist.length; wb.style.display = wishlist.length > 0 ? 'flex' : 'none';
}

function showToast(msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = icons.check + ' ' + msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
    updateBadges();
});

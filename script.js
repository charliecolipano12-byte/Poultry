/* Local-first chicken catalog. Replace storage helpers with an API when a backend is available. */
const STORAGE = { chickens: 'mf-chickens-v1' };
const photos = [
  'images/chicken-01.jpg',
  'images/chicken-02.jpg',
  'images/chicken-03.jpg',
  'images/chicken-04.jpg',
  'images/chicken-05.jpg',
  'images/chicken-06.jpg'
];
const legacyPhotos = [
  'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1763517174823-61148e142c8e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1759836675448-1acadfa25b6a?auto=format&fit=crop&w=900&q=80',
  'https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?auto=format&fit=crop&w=900&q=80',
  'https://plus.unsplash.com/premium_photo-1664971411530-9d2199405d53?auto=format&fit=crop&w=900&q=80',
  'https://plus.unsplash.com/premium_photo-1661963268465-6e586f17855c?auto=format&fit=crop&w=900&q=80'
];
const fallbackSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#e9eddf"/><circle cx="400" cy="300" r="145" fill="#fffefa"/><path d="M280 350c0-76 58-138 130-138 28 0 54 9 74 25l49-29-8 61c18 21 28 49 28 79 0 73-59 132-132 132h-20c-68 0-121-57-121-130z" fill="#d9bd82"/><circle cx="472" cy="288" r="10" fill="#344c37"/><path d="m510 314 55 18-52 20M383 215c-8-23 9-42 25-34 13-30 46-12 40 16" fill="#a75935"/><text x="400" y="550" text-anchor="middle" font-family="Arial" font-size="20" fill="#344c37">MEADOW &amp; FEATHER</text></svg>';
const IMAGE_FALLBACK = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(fallbackSvg)}`;
globalThis.CHICKEN_IMAGE_FALLBACK = IMAGE_FALLBACK;
const sampleChickens = [
  {id:'hen-001',name:'Ruby',breed:'Rhode Island Red',ageMonths:4,price:38,stock:8,description:'A bright, dependable layer with a curious nature and beautiful deep-red feathers.',sex:'Pullet (female)',weight:'1.8–2.2 lb',color:'Rich chestnut red',temperament:'Confident & friendly',purpose:'Eggs',health:'Vaccinated and raised with care.',image:photos[0],featured:true},
  {id:'hen-002',name:'Daisy',breed:'White Leghorn',ageMonths:4,price:32,stock:2,description:'An energetic classic layer known for bright white feathers and plentiful eggs.',sex:'Pullet (female)',weight:'1.5–1.9 lb',color:'Snow white',temperament:'Active & alert',purpose:'Eggs',health:'Vaccinated and health-checked.',image:photos[1],featured:true},
  {id:'hen-003',name:'Clover',breed:'Native / Free-range',ageMonths:4,price:28,stock:0,description:'A hardy free-range favorite, naturally curious and well suited to backyard life.',sex:'Pullet (female)',weight:'1.4–1.8 lb',color:'Mixed natural colors',temperament:'Hardy & independent',purpose:'Dual purpose',health:'Farm-raised with daily health checks.',image:photos[2],featured:false},
  {id:'hen-004',name:'Sunny',breed:'Sasso',ageMonths:4,price:42,stock:6,description:'A sweet-natured, robust bird with warm golden feathers and a calm disposition.',sex:'Pullet (female)',weight:'2.1–2.8 lb',color:'Golden russet',temperament:'Gentle & easygoing',purpose:'Dual purpose',health:'Vaccinated and raised on our family farm.',image:photos[3],featured:false},
  {id:'hen-005',name:'Maple',breed:'Plymouth Rock',ageMonths:5,price:48,stock:5,description:'A family-friendly all-rounder with classic barred feathers and a lovely temperament.',sex:'Pullet (female)',weight:'3.0–3.6 lb',color:'Black & white barred',temperament:'Calm & sociable',purpose:'Dual purpose',health:'Vaccinated and health-checked.',image:photos[4],featured:true},
  {id:'hen-006',name:'Pepper',breed:'Native / Free-range',ageMonths:5,price:35,stock:3,description:'A resilient local favorite that loves to forage and settles happily into a home flock.',sex:'Pullet (female)',weight:'2.2–2.7 lb',color:'Mottled brown',temperament:'Independent & curious',purpose:'Eggs',health:'Raised free-range and vaccinated.',image:photos[5],featured:false},
  {id:'hen-007',name:'Poppy',breed:'Rhode Island Red',ageMonths:5,price:45,stock:1,description:'A confident young hen with excellent laying potential and a big personality.',sex:'Pullet (female)',weight:'3.1–3.7 lb',color:'Deep mahogany red',temperament:'Friendly & bold',purpose:'Eggs',health:'Vaccinated and checked by our farm team.',image:photos[0],featured:false},
  {id:'hen-008',name:'Hazel',breed:'Broiler',ageMonths:5,price:40,stock:7,description:'A healthy, farm-raised bird bred for a robust build and easygoing nature.',sex:'Female',weight:'4.0–5.0 lb',color:'Soft buff white',temperament:'Gentle & quiet',purpose:'Meat',health:'Vaccinated and raised with daily care.',image:photos[1],featured:false},
  {id:'hen-009',name:'Willow',breed:'White Leghorn',ageMonths:6,price:55,stock:4,description:'A lively young hen nearing lay, ideal for a productive backyard flock.',sex:'Pullet (female)',weight:'3.5–4.0 lb',color:'Clean white',temperament:'Lively & observant',purpose:'Eggs',health:'Fully vaccinated and ready for her new home.',image:photos[2],featured:false},
  {id:'hen-010',name:'Fern',breed:'Plymouth Rock',ageMonths:6,price:58,stock:0,description:'A gentle, handsome bird with a steady temperament, great for first-time keepers.',sex:'Pullet (female)',weight:'4.0–4.8 lb',color:'Silver barred',temperament:'Docile & people-friendly',purpose:'Dual purpose',health:'Vaccinated and monitored daily.',image:photos[3],featured:false},
  {id:'hen-011',name:'Juniper',breed:'Sasso',ageMonths:7,price:62,stock:3,description:'A sturdy, even-tempered Sasso hen with a lovely copper coat and strong build.',sex:'Pullet (female)',weight:'4.4–5.2 lb',color:'Warm copper',temperament:'Calm & sturdy',purpose:'Breeding',health:'Vaccinated and health-checked.',image:photos[4],featured:false},
  {id:'hen-012',name:'Mabel',breed:'Rhode Island Red',ageMonths:8,price:68,stock:2,description:'A mature, friendly hen with a sunny personality and rich red plumage.',sex:'Pullet (female)',weight:'4.8–5.5 lb',color:'Glossy mahogany',temperament:'Affectionate & steady',purpose:'Eggs',health:'Vaccinated and fully checked.',image:photos[5],featured:false}
];

function readStore(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.error(`Unable to read ${key} from local storage.`, error);
    return fallback;
  }
}
function writeStore(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Unable to save ${key} to local storage.`, error);
    alert('Your browser could not save this change. Check available storage and try again.');
    return false;
  }
}
function chickens() {
  const saved = readStore(STORAGE.chickens, null);
  if (!Array.isArray(saved)) {
    writeStore(STORAGE.chickens, sampleChickens);
    return sampleChickens;
  }
  let changed = false;
  const migrated = saved.map(item => {
    const base = sampleChickens.find(chicken => chicken.id === item.id);
    const ageMonths = Number(item.ageMonths ?? item.age ?? base?.ageMonths ?? 4);
    const result = { ...item, ageMonths: Number.isInteger(ageMonths) && ageMonths >= 4 ? ageMonths : base?.ageMonths || 4 };
    if ('age' in result) delete result.age;
    if (typeof result.featured !== 'boolean') result.featured = base?.featured || false;
    const legacyPhotoIndex = legacyPhotos.indexOf(item.image);
    if (legacyPhotoIndex !== -1) result.image = photos[legacyPhotoIndex];
    changed ||= result.ageMonths !== item.ageMonths || 'age' in item ||
      typeof item.featured !== 'boolean' || result.image !== item.image;
    return result;
  });
  if (changed) writeStore(STORAGE.chickens, migrated);
  return migrated;
}
function ageMonths(item) { return Number(item.ageMonths ?? item.age ?? 4); }
function category(item) { return ageMonths(item) >= 6 ? '6' : String(ageMonths(item)); }
function categoryLabel(item) { return category(item) === '6' ? '6+ months' : `${ageMonths(item)} months`; }
function exactAgeLabel(item) { return `${ageMonths(item)} months${ageMonths(item) > 6 ? ' · 6+ months' : ''}`; }
function stockStatus(item) { return item.stock <= 0 ? 'Sold Out' : item.stock <= 3 ? 'Low Stock' : 'In Stock'; }
function money(amount) { return `$${Number(amount).toFixed(2)}`; }
function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
}
function imageMarkup(src, alt, className, loading = 'lazy') {
  return `<img class="${className}" src="${escapeHTML(src || IMAGE_FALLBACK)}" alt="${escapeHTML(alt)}" loading="${loading}" onerror="this.onerror=null;this.src='${IMAGE_FALLBACK}'">`;
}
function chickenCard(item) {
  const status = stockStatus(item);
  return `<article class="product-card"><a href="product.html?id=${encodeURIComponent(item.id)}" aria-label="View ${escapeHTML(item.name)}, ${escapeHTML(item.breed)}">${imageMarkup(item.image, `${item.name}, a ${item.breed} chicken`, 'product-image')}<div class="product-card-body"><div class="card-meta"><span>${exactAgeLabel(item)}</span><span class="stock-pill ${status === 'Low Stock' ? 'low' : status === 'Sold Out' ? 'sold' : ''}">${status}</span></div><h3>${escapeHTML(item.name)} · ${escapeHTML(item.breed)}</h3><p>${escapeHTML(item.description)}</p><div class="card-footer"><span class="price">${money(item.price)}</span><span class="card-link">View details →</span></div></div></a></article>`;
}
function setupMenu() {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (!button || !nav) return;
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    button.textContent = open ? '×' : '☰';
  });
}
function renderFeatured() {
  const target = document.querySelector('#featured-products');
  if (!target) return;
  const featured = chickens().filter(item => item.featured);
  target.innerHTML = featured.length ? featured.map(chickenCard).join('') : '<p class="empty-state">Featured chickens will appear here soon.</p>';
}
function renderShop() {
  const target = document.querySelector('#shop-products');
  if (!target) return;
  const params = new URLSearchParams(location.search);
  let selectedCategory = params.get('age') || 'all';
  if (!['all','4','5','6'].includes(selectedCategory)) selectedCategory = 'all';
  const render = () => {
    const results = selectedCategory === 'all' ? chickens() : chickens().filter(item => category(item) === selectedCategory);
    target.innerHTML = results.map(chickenCard).join('');
    document.querySelector('#results-count').textContent = `${results.length} ${results.length === 1 ? 'chicken' : 'chickens'}`;
    document.querySelector('#empty-state').hidden = results.length > 0;
    document.querySelectorAll('.category-chip').forEach(button => button.classList.toggle('selected', button.dataset.category === selectedCategory));
  };
  document.querySelectorAll('.category-chip').forEach(button => button.addEventListener('click', () => {
    selectedCategory = button.dataset.category;
    render();
  }));
  render();
}
function renderProduct() {
  const target = document.querySelector('#product-detail');
  if (!target) return;
  const item = chickens().find(chicken => chicken.id === new URLSearchParams(location.search).get('id'));
  if (!item) {
    target.innerHTML = '<div class="empty-state"><h2>Chicken not found</h2><p>This listing may have been removed.</p><a class="button button-primary" href="shop.html">Browse chickens</a></div>';
    return;
  }
  document.title = `${item.name} · ${item.breed} | Meadow & Feather Farm`;
  document.querySelector('#crumb-name').textContent = item.name;
  const status = stockStatus(item);
  target.innerHTML = `<div class="product-detail">${imageMarkup(item.image, `${item.name}, a ${item.breed} chicken`, 'detail-image', 'eager')}<div class="detail-copy"><span class="eyebrow">${exactAgeLabel(item)} · FARM RAISED</span><h1>${escapeHTML(item.name)}</h1><div class="detail-breed">${escapeHTML(item.breed)} · ${categoryLabel(item)} category</div><div class="detail-price">${money(item.price)}</div><p class="detail-description">${escapeHTML(item.description)}</p><span class="stock-pill ${status === 'Low Stock' ? 'low' : status === 'Sold Out' ? 'sold' : ''}">${status} · ${item.stock} available</span><div class="detail-facts"><div><b>Sex</b><span>${escapeHTML(item.sex || 'Not specified')}</span></div><div><b>Weight</b><span>${escapeHTML(item.weight || 'Not specified')}</span></div><div><b>Color</b><span>${escapeHTML(item.color || 'Not specified')}</span></div><div><b>Temperament</b><span>${escapeHTML(item.temperament || 'Not specified')}</span></div><div><b>Purpose</b><span>${escapeHTML(item.purpose || 'Not specified')}</span></div><div><b>Health</b><span>${escapeHTML(item.health || 'Farm-raised and cared for.')}</span></div></div></div></div>`;
}
function renderAdmin() {
  const items = chickens();
  document.querySelector('#admin-listings').innerHTML = items.map(item => `<tr><td>${escapeHTML(item.name)} · ${escapeHTML(item.breed)}</td><td>${exactAgeLabel(item)}</td><td>${money(item.price)}</td><td>${item.stock}</td><td><span class="stock-pill ${stockStatus(item) === 'Low Stock' ? 'low' : stockStatus(item) === 'Sold Out' ? 'sold' : ''}">${stockStatus(item)}</span></td><td>${item.featured ? 'Yes' : 'No'}</td><td><div class="table-actions"><button type="button" data-edit="${escapeHTML(item.id)}">Edit</button><button type="button" data-delete="${escapeHTML(item.id)}">Delete</button></div></td></tr>`).join('');
  document.querySelectorAll('[data-edit]').forEach(button => button.addEventListener('click', () => openListing(items.find(item => item.id === button.dataset.edit))));
  document.querySelectorAll('[data-delete]').forEach(button => button.addEventListener('click', () => {
    const item = items.find(entry => entry.id === button.dataset.delete);
    if (item && confirm(`Delete ${item.name} from your listings?`)) {
      if (writeStore(STORAGE.chickens, items.filter(entry => entry.id !== item.id))) renderAdmin();
    }
  }));
}
function openListing(item = null) {
  const form = document.querySelector('#listing-form');
  form.reset();
  document.querySelector('#listing-error').textContent = '';
  document.querySelector('#dialog-title').textContent = item ? 'Edit chicken' : 'Add a chicken';
  const exactAge = item ? ageMonths(item) : 4;
  const values = {
    id:item?.id || '', name:item?.name || '', breed:item?.breed || '',
    'age-category':category({ageMonths:exactAge}), 'age-months':exactAge,
    price:item?.price ?? '', stock:item?.stock ?? '', sex:item?.sex || '',
    weight:item?.weight || '', color:item?.color || '', temperament:item?.temperament || '',
    purpose:item?.purpose || 'Eggs', image:item?.image || '', description:item?.description || '',
    health:item?.health || ''
  };
  Object.entries(values).forEach(([key,value]) => { document.querySelector(`#listing-${key}`).value = value; });
  document.querySelector('#listing-featured').checked = item?.featured || false;
  document.querySelector('#listing-image-file').value = '';
  updateImagePreview(item?.image || '');
  document.querySelector('#listing-dialog').showModal();
}
function updateImagePreview(src) {
  const preview = document.querySelector('#listing-image-preview');
  if (!src) {
    preview.hidden = true;
    preview.removeAttribute('src');
    return;
  }
  preview.src = src;
  preview.hidden = false;
}
async function compressImage(file) {
  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => typeof reader.result === 'string' ? resolve(reader.result) : reject(new Error('Image file could not be read.'));
    reader.onerror = () => reject(reader.error || new Error('Image file could not be read.'));
    reader.readAsDataURL(file);
  });
  const image = await new Promise((resolve, reject) => {
    const element = new Image();
    element.onload = () => resolve(element);
    element.onerror = () => reject(new Error('Image file could not be decoded.'));
    element.src = dataUrl;
  });
  const scale = Math.min(1, 1200 / Math.max(image.naturalWidth, image.naturalHeight));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(image.naturalWidth * scale);
  canvas.height = Math.round(image.naturalHeight * scale);
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Image compression is unavailable in this browser.');
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  const blob = await new Promise((resolve, reject) => {
    canvas.toBlob(result => result ? resolve(result) : reject(new Error('Image compression failed.')), 'image/jpeg', 0.82);
  });
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => typeof reader.result === 'string' ? resolve(reader.result) : reject(new Error('Compressed image could not be read.'));
    reader.onerror = () => reject(reader.error || new Error('Compressed image could not be read.'));
    reader.readAsDataURL(blob);
  });
}
function initImageControls() {
  const imageInput = document.querySelector('#listing-image');
  const fileInput = document.querySelector('#listing-image-file');
  const error = document.querySelector('#listing-error');
  imageInput.addEventListener('input', () => {
    fileInput.value = '';
    updateImagePreview(imageInput.value.trim());
  });
  fileInput.addEventListener('change', async () => {
    const file = fileInput.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/') || file.size > 12 * 1024 * 1024) {
      error.textContent = 'Choose an image smaller than 12 MB.';
      fileInput.value = '';
      return;
    }
    error.textContent = '';
    try {
      const compressed = await compressImage(file);
      imageInput.value = compressed;
      updateImagePreview(compressed);
    } catch (problem) {
      console.error('Unable to process the selected chicken image.', problem);
      error.textContent = problem.message || 'Unable to process this image. Try another file.';
      fileInput.value = '';
    }
  });
  document.querySelector('#listing-image-preview').addEventListener('error', event => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = IMAGE_FALLBACK;
  });
}
function initAdmin() {
  if (document.body.dataset.page !== 'admin') return;
  renderAdmin();
  initImageControls();
  document.querySelector('#add-listing').addEventListener('click', () => openListing());
  document.querySelectorAll('.dialog-close').forEach(button => button.addEventListener('click', () => document.querySelector('#listing-dialog').close()));
  const ageCategoryInput = document.querySelector('#listing-age-category');
  const ageMonthsInput = document.querySelector('#listing-age-months');
  ageCategoryInput.addEventListener('change', () => {
    const months = Number(ageMonthsInput.value);
    if (ageCategoryInput.value === '4') ageMonthsInput.value = '4';
    else if (ageCategoryInput.value === '5') ageMonthsInput.value = '5';
    else if (months < 6) ageMonthsInput.value = '6';
  });
  ageMonthsInput.addEventListener('input', () => {
    const months = Number(ageMonthsInput.value);
    if (Number.isInteger(months) && months >= 4) ageCategoryInput.value = category({ageMonths:months});
  });
  document.querySelector('#listing-form').addEventListener('submit', event => {
    event.preventDefault();
    const id = document.querySelector('#listing-id').value;
    const fields = ['name','breed','price','stock','sex','weight','color','temperament','purpose','image','description','health'];
    const values = Object.fromEntries(fields.map(field => [field,document.querySelector(`#listing-${field}`).value.trim()]));
    values.ageMonths = Number(ageMonthsInput.value);
    values.price = Number(values.price);
    values.stock = Number(values.stock);
    values.featured = document.querySelector('#listing-featured').checked;
    if (!values.name || !values.breed || !Number.isInteger(values.ageMonths) || values.ageMonths < 4 || values.ageMonths > 36 ||
        !Number.isFinite(values.price) || values.price <= 0 || !Number.isInteger(values.stock) || values.stock < 0) {
      document.querySelector('#listing-error').textContent = 'Enter a name, breed, valid age, price, and whole-number stock quantity.';
      return;
    }
    if (values.image && !/^(https?:\/\/\S+|data:image\/jpeg;base64,[a-z0-9+/=]+|images\/[a-z0-9._/-]+)$/i.test(values.image)) {
      document.querySelector('#listing-error').textContent = 'Use an http or https image URL, upload an image, or choose a local image from the images folder.';
      return;
    }
    const items = chickens();
    const next = id ? items.map(item => item.id === id ? {...item,...values} : item) :
      [{id:`hen-${Date.now()}`,...values},...items];
    if (writeStore(STORAGE.chickens,next)) {
      document.querySelector('#listing-dialog').close();
      renderAdmin();
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {
  setupMenu();
  chickens();
  renderFeatured();
  renderShop();
  renderProduct();
  initAdmin();
});
globalThis.addEventListener('storage', event => {
  if (event.key !== STORAGE.chickens) return;
  renderFeatured();
  renderShop();
  renderProduct();
  if (document.body.dataset.page === 'admin') renderAdmin();
});

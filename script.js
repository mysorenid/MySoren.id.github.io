// --- Hero Slider Logic ---
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlideIndex = 0;

function currentSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentSlideIndex = index;
}

// Auto play hero slider
setInterval(() => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  currentSlide(currentSlideIndex);
}, 5000);


// --- Product Carousel Logic ---
const track = document.querySelector('.product-track');
let productIndex = 0;

setInterval(() => {
  productIndex++;
  
  // Asumsi ada 4 produk, tampilkan 3 sekaligus
  if (productIndex > 1) { 
    productIndex = 0;
  }
  
  track.style.transform = `translateX(-${productIndex * 33.33}%)`;
}, 4000);

// Fungsi Buka-Tutup Pop-up Filter
function toggleFilter() {
    const filterMenu = document.getElementById('filterMenu');
    filterMenu.classList.toggle('show');
}

// Menutup filter otomatis jika klik di luar area menu
window.addEventListener('click', function(event) {
    const filterMenu = document.getElementById('filterMenu');
    const filterBtn = document.querySelector('.filter-btn-nav');
    
    if (!filterBtn.contains(event.target) && !filterMenu.contains(event.target)) {
        filterMenu.classList.remove('show');
    }
});

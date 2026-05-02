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

// Buka & Tutup Filter
function toggleFilter() {
    const menu = document.getElementById('filterMenu');
    menu.classList.toggle('show');
}

// Klik Size (Bisa pilih banyak)
document.querySelectorAll('.size-btn').forEach(btn => {
    btn.onclick = function() {
        this.classList.toggle('active');
    }
});

// Logika Filter Utama
function terapkanFilter() {
    const bahanTerpilih = Array.from(document.querySelectorAll('.filter-bahan:checked')).map(cb => cb.value);
    const sizeTerpilih = Array.from(document.querySelectorAll('.size-btn.active')).map(btn => btn.dataset.size);
    const produk = document.querySelectorAll('.product-card');

    produk.forEach(p => {
        const dataBahan = p.dataset.bahan;
        const dataSize = p.dataset.size;

        const matchBahan = bahanTerpilih.length === 0 || bahanTerpilih.includes(dataBahan);
        const matchSize = sizeTerpilih.length === 0 || sizeTerpilih.some(s => dataSize.includes(s));

        if (matchBahan && matchSize) {
            p.style.display = "block";
        } else {
            p.style.display = "none";
        }
    });

    toggleFilter(); // Tutup menu setelah klik
}

// Klik di luar untuk tutup
window.onclick = function(event) {
    if (!event.target.matches('.filter-btn-nav') && !event.target.closest('.filter-popup')) {
        const popup = document.getElementById('filterMenu');
        if (popup) popup.classList.remove('show');
    }
}

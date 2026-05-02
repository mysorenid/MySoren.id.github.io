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

function toggleFilter() {
    document.getElementById('filterMenu').classList.toggle('show');
}

// Fungsi Utama untuk Memfilter Produk
function terapkanFilter() {
    // 1. Ambil bahan apa saja yang diceklis
    const checkboxes = document.querySelectorAll('input[name="bahan"]:checked');
    let bahanTerpilih = Array.from(checkboxes).map(cb => cb.value);

    // 2. Ambil semua kartu produk
    const produk = document.querySelectorAll('.product-card');

    produk.forEach(item => {
        let bahanProduk = item.getAttribute('data-bahan');
        
        // 3. Logika: Jika tidak ada yang diceklis, tampilkan semua. 
        // Jika diceklis, tampilkan yang cocok saja.
        if (bahanTerpilih.length === 0 || bahanTerpilih.includes(bahanProduk)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });

    // Tutup menu setelah klik terapkan
    toggleFilter();
}

// --- Fungsi Slider Bagian About ---
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');

function currentSlide(index) {
  // 1. Hilangkan class active dari semua slide & dot
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  
  // 2. Tambahkan class active ke yang diklik
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

// Fungsi agar slider jalan otomatis
setInterval(() => {
  // Cari tahu slide mana yang sekarang lagi aktif
  let activeIndex = [...slides].findIndex(s => s.classList.contains('active'));
  
  // Hitung slide berikutnya (kalau sudah di akhir, balik ke 0)
  let nextIndex = (activeIndex + 1) % slides.length;
  
  // Jalankan fungsi pindah slide
  currentSlide(nextIndex);
}, 5000); // Geser setiap 5 detik


// --- Fungsi Geser Bagian New Arrivals ---
let track = document.querySelector('.product-track');
let productIndex = 0;

setInterval(() => {
  productIndex++;
  // Geser Sejauh 33.33% (lebar satu produk)
  
  if (productIndex > 1) { // Kita asumsikan hanya menggeser sekali untuk 4 produk
    productIndex = 0;
  }
  
  // Geser track ke kiri
  track.style.transform = `translateX(-${productIndex * 33.33}%)`;
}, 4000); // Geser setiap 4 detik

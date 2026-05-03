// Slider Hero Logic
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let currentSlideIndex = 0;

function currentSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentSlideIndex = index;
}

// Auto slide hero
setInterval(() => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  currentSlide(currentSlideIndex);
}, 5000);

// Product Slider Logic
let track = document.querySelector('.product-track');
let productIndex = 0;
let totalProducts = document.querySelectorAll('.product-card').length;

setInterval(() => {
  productIndex++;
  // Jika sudah melewati batas tampilan (asumsi tampil 3 produk sekaligus)
  if (productIndex > totalProducts - 3) {
    productIndex = 0;
  }
  track.style.transform = `translateX(-${productIndex * 33.33}%)`;
}, 4000);

// Hero Slider Logic
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let currentIdx = 0;

function currentSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentIdx = index;
}

setInterval(() => {
    currentIdx = (currentIdx + 1) % slides.length;
    currentSlide(currentIdx);
}, 5000);

// Product Carousel Logic
let track = document.querySelector('.product-track');
let productIdx = 0;

setInterval(() => {
    productIdx++;
    // Karena kita tampilkan 3 produk, dan total ada 4, maka max index geser adalah 1
    if (productIdx > 1) { 
        productIdx = 0;
    }
    track.style.transform = `translateX(-${productIdx * 33.33}%)`;
}, 4000);

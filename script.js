let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let currentStep = 0;

function currentSlide(index) {
    // Hilangkan semua status active
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    // Aktifkan slide yang dipilih
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentStep = index;
}

// Slider otomatis setiap 5 detik
setInterval(() => {
    currentStep++;
    if (currentStep >= slides.length) {
        currentStep = 0;
    }
    currentSlide(currentStep);
}, 5000);

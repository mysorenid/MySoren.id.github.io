function currentAboutSlide(n) {
    const slides = document.querySelectorAll('.about-slide');
    const dots = document.querySelectorAll('.dot-a');

    // Sembunyikan semua slide & matikan semua dot
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Tampilkan slide yang diklik
    slides[n].classList.add('active');
    dots[n].classList.add('active');
}

// Tambahan: Otomatis pindah slide tiap 5 detik
let autoIndex = 0;
setInterval(() => {
    autoIndex++;
    if (autoIndex > 2) autoIndex = 0;
    currentAboutSlide(autoIndex);
}, 5000);

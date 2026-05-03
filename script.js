// --- AUTO SLIDER UNTUK NEW ARRIVALS (INDEX) ---
const track = document.querySelector('.product-track');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
let index = 0;

if (track && nextBtn && prevBtn) {
    function moveNext() {
        const cardWidth = document.querySelector('.product-card').offsetWidth + 20;
        const maxScroll = track.scrollWidth - track.parentElement.offsetWidth;
        index = (Math.abs(index) < maxScroll) ? index - cardWidth : 0;
        track.style.transform = `translateX(${index}px)`;
    }
    nextBtn.addEventListener('click', moveNext);
    prevBtn.addEventListener('click', () => {
        const cardWidth = document.querySelector('.product-card').offsetWidth + 20;
        index = (index < 0) ? index + cardWidth : -(track.scrollWidth - track.parentElement.offsetWidth);
        track.style.transform = `translateX(${index}px)`;
    });
    setInterval(moveNext, 3000);
}

// --- AUTO SLIDER UNTUK HERO SECTION (INDEX) ---
const mainSlides = document.querySelectorAll('.main-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

if (mainSlides.length > 0) {
    setInterval(() => {
        mainSlides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % mainSlides.length;
        mainSlides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }, 4000);
}

// --- LOGIKA FILTER POP-UP (BAJU & CELANA) ---
const filterBtn = document.getElementById('filterBtn');
const filterPopup = document.getElementById('filterPopup');
const applyFilter = document.getElementById('applyFilter');

if (filterBtn && filterPopup) {
    // Membuka & Menutup Filter
    filterBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        filterPopup.classList.toggle('show');
    });

    // Menutup filter saat klik tombol 'Terapkan'
    if (applyFilter) {
        applyFilter.addEventListener('click', () => {
            filterPopup.classList.remove('show');
        });
    }

    // Menutup filter jika klik di luar
    window.addEventListener('click', (event) => {
        if (!filterPopup.contains(event.target) && event.target !== filterBtn) {
            filterPopup.classList.remove('show');
        }
    });
}

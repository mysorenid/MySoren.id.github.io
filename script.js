// --- AUTO SLIDER UNTUK NEW ARRIVALS ---
const track = document.querySelector('.product-track');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let index = 0;

// Fungsi untuk geser ke kanan
function moveNext() {
    const cardWidth = document.querySelector('.product-card').offsetWidth + 20;
    const maxScroll = track.scrollWidth - track.parentElement.offsetWidth;
    
    if (Math.abs(index) < maxScroll) {
        index -= cardWidth;
    } else {
        index = 0; // Kembali ke awal kalau sudah mentok
    }
    track.style.transform = `translateX(${index}px)`;
}

// Fungsi untuk geser ke kiri
function movePrev() {
    const cardWidth = document.querySelector('.product-card').offsetWidth + 20;
    if (index < 0) {
        index += cardWidth;
    } else {
        index = -(track.scrollWidth - track.parentElement.offsetWidth); // Ke paling akhir
    }
    track.style.transform = `translateX(${index}px)`;
}

// Event Listener Tombol
nextBtn.addEventListener('click', moveNext);
prevBtn.addEventListener('click', movePrev);

// AUTO PLAY: Geser otomatis setiap 3 detik
let autoPlay = setInterval(moveNext, 3000);

// Berhenti auto-play kalau mouse ada di atas slider (biar pengunjung bisa liat produk)
track.parentElement.addEventListener('mouseenter', () => clearInterval(autoPlay));
track.parentElement.addEventListener('mouseleave', () => autoPlay = setInterval(moveNext, 3000));

// --- AUTO SLIDER UNTUK HERO SECTION (ABOUT) ---
const mainSlides = document.querySelectorAll('.main-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function nextMainSlide() {
    mainSlides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + 1) % mainSlides.length;
    
    mainSlides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Ganti slide setiap 5 detik
setInterval(nextMainSlide, 4000);

// LOGIKA POP UP FILTER
const filterBtn = document.getElementById('filterBtn');
const filterPopup = document.getElementById('filterPopup');

if (filterBtn) {
    filterBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Mencegah klik menyebar
        filterPopup.classList.toggle('show');
    });

    // Tutup pop up kalau klik di luar area filter
    document.addEventListener('click', function(e) {
        if (!filterPopup.contains(e.target) && e.target !== filterBtn) {
            filterPopup.classList.remove('show');
        }
    });
}


// Cek jika elemen ada di halaman sebelum menjalankan script
const filterBtn = document.getElementById('filterBtn');
const filterPopup = document.getElementById('filterPopup');
const applyFilter = document.getElementById('applyFilter');

if (filterBtn && filterPopup) {
    // Membuka & Menutup Filter saat tombol diklik
    filterBtn.onclick = function(e) {
        e.stopPropagation();
        filterPopup.classList.toggle('show');
    };

    // Menutup filter saat klik tombol 'Terapkan'
    if (applyFilter) {
        applyFilter.onclick = function() {
            filterPopup.classList.remove('show');
        };
    }

    // Menutup filter jika klik di luar area popup
    window.onclick = function(event) {
        if (!filterPopup.contains(event.target) && event.target !== filterBtn) {
            filterPopup.classList.remove('show');
        }
    };
}


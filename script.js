// ==========================================
// 1. LOGIKA FILTER (Untuk baju.html & celana.html)
// ==========================================
const filterBtn = document.getElementById('filterBtn');
const filterPopup = document.getElementById('filterPopup');
const applyFilter = document.getElementById('applyFilter');

if (filterBtn && filterPopup) {
    // Fungsi Buka/Tutup saat tombol Filter diklik
    filterBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Mencegah event klik menyebar ke window
        filterPopup.classList.toggle('show');
    });

    // Tutup saat tombol 'Terapkan' diklik
    if (applyFilter) {
        applyFilter.addEventListener('click', function() {
            filterPopup.classList.remove('show');
        });
    }

    // Tutup otomatis jika klik di luar area filter
    window.addEventListener('click', function(e) {
        if (!filterPopup.contains(e.target) && e.target !== filterBtn) {
            filterPopup.classList.remove('show');
        }
    });
}

// ==========================================
// 2. LOGIKA SLIDER NEW ARRIVALS (Untuk index.html)
// ==========================================
const track = document.querySelector('.product-track');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
let index = 0;

if (track && nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        const cardWidth = document.querySelector('.product-card').offsetWidth + 20;
        const maxScroll = track.scrollWidth - track.parentElement.offsetWidth;
        if (Math.abs(index) < maxScroll) {
            index -= cardWidth;
            track.style.transform = `translateX(${index}px)`;
        }
    });

    prevBtn.addEventListener('click', () => {
        const cardWidth = document.querySelector('.product-card').offsetWidth + 20;
        if (index < 0) {
            index += cardWidth;
            track.style.transform = `translateX(${index}px)`;
        }
    });
}

// ==========================================
// 3. LOGIKA AUTO SLIDER HERO (Untuk index.html)
// ==========================================
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
    }, 5000);
}

// --- LOGIKA FILTER BARANG ---
const checkboxes = document.querySelectorAll('.filter-check');
const products = document.querySelectorAll('.product-card');
const applyBtn = document.getElementById('applyFilter');

if (applyBtn) {
    applyBtn.addEventListener('click', () => {
        // 1. Ambil semua nilai yang dicentang
        const checkedValues = Array.from(checkboxes)
            .filter(input => input.checked)
            .map(input => input.value);

        // 2. Loop setiap produk
        products.forEach(product => {
            const productBahan = product.getAttribute('data-bahan');

            // Jika tidak ada yang dicentang, tampilkan semua
            if (checkedValues.length === 0) {
                product.style.display = 'block';
            } 
            // Jika bahan produk ada di dalam daftar yang dicentang, tampilkan
            else if (checkedValues.includes(productBahan)) {
                product.style.display = 'block';
            } 
            // Jika tidak cocok, sembunyikan
            else {
                product.style.display = 'none';
            }
        });
        
        // Tutup popup setelah apply
        document.getElementById('filterPopup').classList.remove('show');
    });
}

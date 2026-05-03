document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. LOGIKA BUKA/TUTUP POPUP FILTER ---
    const filterBtn = document.getElementById('filterBtn');
    const filterPopup = document.getElementById('filterPopup');
    const applyBtn = document.getElementById('applyFilter');

    if (filterBtn && filterPopup) {
        filterBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            filterPopup.classList.toggle('show');
        });

        window.addEventListener('click', function(e) {
            if (!filterPopup.contains(e.target) && e.target !== filterBtn) {
                filterPopup.classList.remove('show');
            }
        });
    }

    // --- 2. LOGIKA PENYARINGAN (FILTERING) BARANG ---
    const checkboxes = document.querySelectorAll('.filter-check');
    const products = document.querySelectorAll('.product-card');

    if (applyBtn) {
        applyBtn.addEventListener('click', function() {
            // Ambil semua bahan yang dicentang
            const selectedBahan = Array.from(checkboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);

            products.forEach(product => {
                const productBahan = product.getAttribute('data-bahan');

                // Jika tidak ada yang dicentang, tampilkan semua
                if (selectedBahan.length === 0) {
                    product.style.display = 'block';
                } 
                // Jika bahan produk ada di list yang dicentang, tampilkan
                else if (selectedBahan.includes(productBahan)) {
                    product.style.display = 'block';
                } 
                // Jika tidak cocok, sembunyikan
                else {
                    product.style.display = 'none';
                }
            });

            // Tutup popup setelah klik Terapkan
            filterPopup.classList.remove('show');
        });
    }

    // --- 3. LOGIKA SLIDER (Hanya jalan jika ada elemennya/di Index) ---
    const track = document.querySelector('.product-track');
    if (track) {
        const nextBtn = document.querySelector('.next-btn');
        const prevBtn = document.querySelector('.prev-btn');
        let index = 0;

        nextBtn.addEventListener('click', () => {
            const cardWidth = document.querySelector('.product-card').offsetWidth + 20;
            index -= cardWidth;
            track.style.transform = `translateX(${index}px)`;
        });
    }
});

// --- LOGIKA SEARCH BAR ---
const searchInput = document.querySelector('.search-input');

if (searchInput) {
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const allProducts = document.querySelectorAll('.product-card');

        allProducts.forEach(product => {
            // Mengambil teks dari Judul Produk (h3)
            const productName = product.querySelector('h3').innerText.toLowerCase();
            
            // Jika nama produk mengandung kata yang diketik, tampilkan. Jika tidak, sembunyikan.
            if (productName.includes(searchTerm)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
}

const searchBtn = document.querySelector('.search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        searchInput.focus(); // Fokus ke kotak ketik saat ikon diklik
    });
}

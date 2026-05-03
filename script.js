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

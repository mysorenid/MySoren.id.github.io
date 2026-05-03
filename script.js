const track = document.querySelector('.product-track');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let index = 0;

nextBtn.addEventListener('click', () => {
    const cardWidth = document.querySelector('.product-card').offsetWidth + 25;
    const maxScroll = track.scrollWidth - track.parentElement.offsetWidth;
    
    if (Math.abs(index) < maxScroll) {
        index -= cardWidth;
        track.style.transform = `translateX(${index}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    const cardWidth = document.querySelector('.product-card').offsetWidth + 25;
    
    if (index < 0) {
        index += cardWidth;
        track.style.transform = `translateX(${index}px)`;
    }
});

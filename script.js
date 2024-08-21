// Navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Lógica do Carrossel (opcional)
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showCarouselItem(index) {
    items.forEach((item, i) => {
        item.style.display = (i === index) ? 'block' : 'none';
    });
}

document.querySelector('.carousel').addEventListener('scroll', () => {
    const scrollLeft = document.querySelector('.carousel').scrollLeft;
    const width = document.querySelector('.carousel-item').offsetWidth;
    currentIndex = Math.round(scrollLeft / width);
    showCarouselItem(currentIndex);
});

showCarouselItem(currentIndex);

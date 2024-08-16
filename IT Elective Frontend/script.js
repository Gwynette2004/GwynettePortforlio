// Flipatron //
document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
});

// Image //

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const offset = -index * (100 / 3); // Calculate the offset to show the correct slide for 3 images
    slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Automatically move to the next slide every 3 seconds
setInterval(nextSlide, 3000);

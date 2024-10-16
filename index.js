let slideIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

// Initial call to show first slide
showSlide(slideIndex);

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex >= dots.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = dots.length - 1;
    showSlide(slideIndex);
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlide(slideIndex);
}

function showSlide(index) {
    // Ensure index is in bounds
    if (index >= dots.length) index = 0;
    if (index < 0) index = dots.length - 1;

    // Move slides
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;

    // Update active dot
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}



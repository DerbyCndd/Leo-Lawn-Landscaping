document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider2');
    const slides = document.querySelectorAll('.slider2 img');
    const totalSlides = slides.length;
    let index = 0;

    const changeSlide = () => {
        index = (index + 1) % totalSlides;
        slider.scrollTo({
            left: slider.clientWidth * index,
            behavior: 'smooth'
        });
    };

    const interval = setInterval(changeSlide, 7000); // Muda a cada 3 segundos

    // Optional: Add navigation click functionality
    const navDots = document.querySelectorAll('.slider-nav a');
    navDots.forEach((dot, dotIndex) => {
        dot.addEventListener('click', () => {
            clearInterval(interval); // Stop auto slide change on manual click
            index = dotIndex;
            slider.scrollTo({
                left: slider.clientWidth * index,
                behavior: 'smooth'
            });
        });
    });
});
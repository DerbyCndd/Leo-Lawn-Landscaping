document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider2');
    const slides = document.querySelectorAll('.slider2 img');
    const totalSlides = slides.length;
    let index = 0;

    const changeSlide = (newIndex) => {
        index = (newIndex + totalSlides) % totalSlides; // ensures the index is within bounds
        slider.scrollTo({
            left: slider.clientWidth * index,
            behavior: 'smooth'
        });
    };

    const autoChangeSlide = () => {
        changeSlide(index + 1);
    };

    let interval = setInterval(autoChangeSlide, 7000);

    // Optional: Add navigation click functionality
    const navDots = document.querySelectorAll('.slider-nav a');
    navDots.forEach((dot, dotIndex) => {
        dot.addEventListener('click', () => {
            clearInterval(interval); // Stop auto slide change on manual click
            changeSlide(dotIndex);
        });
    });

    // Manual navigation buttons
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');

    prevButton.addEventListener('click', () => {
        clearInterval(interval); // Stop auto slide change on manual click
        changeSlide(index - 1);
    });

    nextButton.addEventListener('click', () => {
        clearInterval(interval); // Stop auto slide change on manual click
        changeSlide(index + 1);
    });
});

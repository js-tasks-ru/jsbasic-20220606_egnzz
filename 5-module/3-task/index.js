function initCarousel() {
  const maxSlides = 4;
  const carouselMove = document.querySelector('.carousel__inner');
  const leftArrow = document.querySelector('.carousel__arrow_left');
  const rightArrow = document.querySelector('.carousel__arrow_right');

  let activeSlide = 0;
  arrowsVisibility();

  rightArrow.addEventListener("click", () => {
    activeSlide--;
    carouselMove.style.transform = 'translateX(' + carouselMove.offsetWidth * activeSlide + 'px)';
    arrowsVisibility();
  });

  leftArrow.addEventListener("click", () => {
    activeSlide++;
    carouselMove.style.transform = 'translateX(' + carouselMove.offsetWidth * activeSlide + 'px)';
    arrowsVisibility();
  });

  function arrowsVisibility() {
    if (activeSlide <= (maxSlides - 1)) {
      rightArrow.style.display = 'none';
      leftArrow.style.display = '';
    }
    if (activeSlide >= 0) {
      rightArrow.style.display = '';
      leftArrow.style.display = 'none';
    }
    if ((activeSlide < 0) && (activeSlide > -(maxSlides - 1))) {
      rightArrow.style.display = '';
      leftArrow.style.display = '';
    }
  }
}

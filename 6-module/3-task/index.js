import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.activeSlide = 0;
    this.maxSlides = this.slides.length;
    this.carouselMove = document.querySelector('.container');

    this.render();
    document.addEventListener("DOMContentLoaded", (evt) => {
      this.plusButton();
      this.arrowRight();
      this.arrowLeft();
      this.arrowsVisibility();
    });
  }

  plusButton() {
    this.button = document.querySelector(".carousel__inner");
    this.button.addEventListener("click", (evt) => {
      if (evt.target.parentElement.className.includes("button")) {
        this.event = new CustomEvent("product-add", {
          detail: this.slides[Math.abs(this.activeSlide)].id,
          bubbles: true
        });
        this.button.dispatchEvent(this.event);
      }
    });
    this.button.addEventListener("product-add", (evt) => {
    // console.log(evt.detail)
    });
  }

  arrowRight() {
    this.rightArrow = document.querySelector(".carousel__arrow_right");
    this.rightArrow.addEventListener("click", (evt) => {
      this.activeSlide--;
      evt.target
        .parentElement
        .parentElement
        .querySelector(".carousel__inner")
        .style
        .transform = 'translateX(' + this.carouselMove.offsetWidth * this.activeSlide + 'px)';
      this.arrowsVisibility();
    });
  }

  arrowLeft() {
    this.leftArrow = document.querySelector(".carousel__arrow_left");
    this.leftArrow.addEventListener("click", (evt) => {
      this.activeSlide++;
      evt.target
        .parentElement
        .parentElement
        .querySelector(".carousel__inner")
        .style
        .transform = 'translateX(' + this.carouselMove.offsetWidth * this.activeSlide + 'px)';
      this.arrowsVisibility();
    });
  }

  arrowsVisibility() {
    this.right = document.querySelector(".carousel__arrow_right");
    this.left = document.querySelector(".carousel__arrow_left");

    if (this.activeSlide <= (this.maxSlides - 1)) {
      this.right.style.display = 'none';
      this.left.style.display = '';
    }
    if (this.activeSlide >= 0) {
      this.right.style.display = '';
      this.left.style.display = 'none';
    }
    if ((this.activeSlide < 0) && (this.activeSlide > -(this.maxSlides - 1))) {
      this.right.style.display = '';
      this.left.style.display = '';
    }
  }

  render() {
    this.allSlides = this.slides.map(function (slide) {
      return `<div class="carousel__slide" data-id="${slide.id}">
      <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${slide.price.toFixed(2)}</span>
        <div class="carousel__title">${slide.name}</div>
        <button type="button" class="carousel__button">
         <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`;
    }).join('');

    this._elem = createElement(`<div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
    <div class = "carousel__inner">
    ${this.allSlides}
      </div>
     </div>`
    );
  }

  get elem() { 
    return this._elem;
  }
}

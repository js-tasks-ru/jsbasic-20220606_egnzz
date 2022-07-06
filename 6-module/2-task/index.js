import createElement from '../../assets/lib/create-element.js';
export default class ProductCard {
  constructor(product) {
    
    this._product = product;
    this._pathImages = "/assets/images/products/";
    this._pathIcons = "/assets/images/icons/";

    this._elem = createElement(`
    <div class="card">
      <div class="card__top">
      <img src="${this._pathImages + this._product.image}" class="card__image" alt="product">
      <span class="card__price">€${this._product.price.toFixed(2) }</span>
      </div>
      <div class="card__body">
        <div class="card__title">${this._product.name}</div>
        <button type="button" class="card__button">
          <img src="${this._pathIcons}plus-icon.svg" alt="icon">
        <button>
      </div>
    </div>
    `);
  }

  get elem () {

    this.event = new CustomEvent("product-add", {
      detail: this._product.id,
      bubbles: true
    });
    this._elem.dispatchEvent(this.event);

    return this._elem;
  }

}
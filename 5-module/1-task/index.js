function hideSelf() {
  let button = document.body.querySelector('.hide-self-button');
  button.addEventListener("click", (event) => event.target.hidden = true);

}

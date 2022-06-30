function toggleText() {
  let txtButton = document.querySelector(".toggle-text-button");
  let txt = document.getElementById("text");
  txtButton.addEventListener("click", event => {
	 if(txt.hidden) txt.hidden = false;
	 else txt.hidden = true;
  });
}

function highlight(table) {
  let lastTD = table.querySelectorAll('tr > td:last-child');
  for(let prop of lastTD) {
   if(prop.getAttribute("data-available") == 'true') {
	   console.log(prop.getAttribute("data-available"))
	prop.parentElement.classList.add("available");
   } else if(prop.getAttribute("data-available") == 'false') prop.parentElement.classList.add("unavailable");

  if(!prop.hasAttribute("data-available")) {
	  prop.parentElement.setAttribute("hidden", "");
  }

  if(prop.previousElementSibling.textContent === 'm') {
	prop.parentElement.classList.add("male");
   } else if (prop.previousElementSibling.textContent === 'f')
      prop.parentElement.classList.add("female");    
 }

  let firstTD = table.querySelectorAll('tr > td:first-child');
  for(let prop of firstTD) {
   let age = parseInt(prop.nextElementSibling.innerHTML);
   if(age < 18) prop.parentElement.style.textDecoration = 'line-through';
  }
}

function isEmpty(obj) {
  // ваш код...
  let n = 0;
  for (let prop in obj) {
   n++;
  }
  if(n === 0) return true;
  else return false;
}

function filterRange(arr, a, b) {
  let newArr = [];
  for(let prop of arr) {
   if((prop >= a) && (prop <= b)) {
     newArr.push(prop);
   }
  }
  return newArr;
}

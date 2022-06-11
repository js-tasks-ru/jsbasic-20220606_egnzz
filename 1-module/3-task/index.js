function ucFirst(str) {
  if(str) { 
   const newStr = str[0].toUpperCase() + str.slice(1);
   return newStr;
  }
  if(str == '') return '';
}

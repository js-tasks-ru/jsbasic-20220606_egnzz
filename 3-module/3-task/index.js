function camelize(str) {
  let splitStr = [];
  let letterStr = [];
  let result = '';

  splitStr = str.split("-");
  splitStr.forEach((item, index) => {
  if(item) {
   letterStr = item.split('');
   if( index != 0 ) letterStr[0] = letterStr[0].toUpperCase();
   letterStr = letterStr.join('');
   result += letterStr;
   }
  });
  return result;
}

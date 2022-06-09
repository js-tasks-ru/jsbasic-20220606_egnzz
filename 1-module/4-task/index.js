function checkSpam(str) {
  const tstStr1 = ('1xBet').toLowerCase();
  const tstStr2 = ('XXX').toLowerCase();
  str = str.toLowerCase();

  if(str.includes(tstStr1) || str.includes(tstStr2)) return true;
  else return false;
}

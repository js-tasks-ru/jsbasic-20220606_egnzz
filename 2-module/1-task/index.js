function sumSalary(salaries) {
  let result = 0;
  for(let param in salaries) {
   if (parseInt(salaries[param]))  result += salaries[param];
  }
  return result;
}

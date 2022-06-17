function showSalary(users, age) {
  const result = [];
  users.forEach(item => {
    if(item.age <= age) {
      result.push(item.name + ', ' + item.balance)
    }
  });
 return result.join('\n');
}

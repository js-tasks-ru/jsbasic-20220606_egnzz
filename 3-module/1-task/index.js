function namify(users) {
  let result = [];
  users.forEach (function(user) {
   result.push(user.name);
  });
  return result;
}

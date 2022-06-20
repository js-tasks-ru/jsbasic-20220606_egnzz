function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  ul.innerHTML = friends.map( (user) => `<li>${user.firstName} ${user.lastName}</li>`).join('\n');
  return ul;
}

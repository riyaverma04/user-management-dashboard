export const getUserFromLocalStorage = (id) => {
  const users = JSON.parse(localStorage.getItem("addedUsers")) || [];
  return users.find(user => user.id.toString() === id.toString()); // match ID
};

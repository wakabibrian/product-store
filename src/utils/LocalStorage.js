// Local storage key
const REGISTERED_USERS = "registered_users";
const ACTIVE_USER = "active_user";

const addNewUser = (newUser) => {
  //1. Get existing users from local storage
  const usersStr = localStorage.getItem(REGISTERED_USERS) || "[]";
  const users = JSON.parse(usersStr);

  //2. Push new user to the existing users
  users.push(newUser);

  //3. Save updated user
  localStorage.setItem(REGISTERED_USERS, JSON.stringify(users));
};

const checkIfUserExists = (userEmail) => {
  //1. Get existing users from local storage
  const usersStr = localStorage.getItem(REGISTERED_USERS) || "[]";
  const users = JSON.parse(usersStr);

  //2. Check if user-email matches any existing email

  const userIsFound = users.find((user) => user.email === userEmail);

  if (userIsFound) {
    return true;
  } else {
    return false;
  }
};

const getUser = (userEmail, password) => {
  const usersStr = localStorage.getItem(REGISTERED_USERS) || null;
  if (usersStr === null) return null;

  const users = JSON.parse(usersStr);

  const userIsFound = users.find(
    (user) => user.email === userEmail && user.password === password,
  );
  return userIsFound;
};

const updateActiveUser = (user) => {
  localStorage.setItem(ACTIVE_USER, JSON.stringify(user));
};

const getActiveUser = () => {
  const activeUser = localStorage.getItem(ACTIVE_USER) || null;

  if (activeUser === null) {
    return null;
  }

  return JSON.parse(activeUser);
};

export {
  addNewUser,
  checkIfUserExists,
  getUser,
  updateActiveUser,
  getActiveUser,
};

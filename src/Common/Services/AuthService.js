import Parse from "parse";

export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  console.log("User: ", user);
  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    .catch((error) => {
      alert(`ERROR: ${error.message}`);
    });
};

export const getAllUsers = () => {
  const User = Parse.Object.extend("User");
  const query = new Parse.Query(User);
  return query.find().then((results) => {
    console.log("Data: ", results);
    return results;
  });
};

export const loginUser = async (userName, password) => {
  try {
    const user = await Parse.User.logIn(userName, password);
    // Do stuff after successful login.
    return user;
  } catch (error) {
    console.error(error);
    alert("Invalid username/password");
    return "";
  }
};

import Parse from "parse";

// Returns all Events with a Specific User Pointer
export const getUserEvents = (UserPointer) => {
  const Event = Parse.Object.extend("Event");
  const query = new Parse.Query(Event);

  // Query for specific User ID
  query.equalTo("UserPointer", { "__type": "Pointer", "className": "_User", "objectId": UserPointer });

  return query.find().then((results) => {
    // returns array of Lesson objects
    return results;
  });
};

export const getEventById = async (EventId) => {
  const Event= Parse.Object.extend("Event");
  const query = new Parse.Query(Event);

  try {
    const event = await query.get(EventId);
    return event;
  } catch(error) {
    alert(`Error connecting to: ${error.message}`);
    return({});
  }
};

// export const loginUser = async (userName, password) => {
//   try {
//     const user = await Parse.User.logIn(userName, password);
//     // Do stuff after successful login.
//     return user;
//   } catch (error) {
//     console.error(error);
//     alert("Invalid username/password");
//     return "";
//   }
// };
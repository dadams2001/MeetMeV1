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
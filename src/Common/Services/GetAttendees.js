// Query Attendees
import Parse from "parse";
//function state for atendees
export const getEventAttendees = (EventPointer) => {
  const Attendee = Parse.Object.extend("Attendee");
  const query = new Parse.Query(Attendee);

  // visitQuery.equalTo('user', { "__type": "Pointer", "className": "_User", "objectId": userId });
  // Query for specific event ID
  query.equalTo("EventPointer", { "__type": "Pointer", "className": "Event", "objectId": EventPointer });

  return query.find().then((results) => {
    // returns array of Lesson objects
    return results;
  });
};

// uninvite poeple operation 
export const uninviteAttendee = () => {
  const Attendee = Parse.Object.extend("Attendee");
  const query = new Parse.Query(Attendee);
  return query.find().then((attendee) => {
    attendee.destroy();
  });
};
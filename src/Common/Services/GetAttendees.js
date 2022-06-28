// Query Attendees
import Parse from "parse";
//function state for atendees
export const getAllAttendees = () => {
  const Attendee = Parse.Object.extend("Attendee");
  const query = new Parse.Query(Attendee);
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
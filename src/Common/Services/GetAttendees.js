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


// Add New Attendee
export const addNewAttendee = (AttendeeName, EventPointer) => {
  const Attendee = Parse.Object.extend("Attendee");
  const attendee = new Attendee();

  attendee.set("AttendeeName", AttendeeName);
  attendee.set("EventPointer", EventPointer);

  attendee.save()
  .then((gameScore) => {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + gameScore.id);
  }, (error) => {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  });
}
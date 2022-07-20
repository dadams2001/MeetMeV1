import Parse from "parse";
  
  export const getAllEvents = () => {
    const Event = Parse.Object.extend("Event");
    const query = new Parse.Query(Event);
    return query.find().then((results) => {
      console.log("Data: ", results);
      return results;
    });
  };

  export const createEventfunc = (newEvent) => {
  
    const Event = new Parse.Object.extend("Event");
    const enew = new Event();
    
    
    console.log(newEvent);
    
    //enew.attributes.EventName = newEvent.EventName;

    const dateString = new Date(newEvent.Date);
    var userPointer = Parse.User.current();

    console.log(dateString);
    console.log(userPointer);
    
    enew.set("EventName", newEvent.EventName);
    enew.set("Date", dateString);
    enew.set("Address", newEvent.Address);
    enew.set("Description", newEvent.Description);
    enew.set("UserPointer", userPointer);
    console.log(enew);
    return enew
    .save()
      .then((newEventSaved) => {
        return newEventSaved;
      })
      .catch((error) => {
  
        alert(`Error: ${error.message} or please create an account or sign in`);
      });
  };

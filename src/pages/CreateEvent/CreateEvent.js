import './CreateEvent.css';
// Import Child Components
import Footer from '../../components/footer/footer.js';
import Header from '../../components/Header/Header';
import {createEventfunc} from "../../Common/Services/EventService.js";
import FormCreateEvent from "../../components/CreateEventForm/FormCreateEvent";
import Address from '../../components/Address/Address';
//get atendees from function getEventAttendess

//useEffect and useState
import React, { useEffect, useState } from "react";
import Parse from "parse";


export default function CreateEventPage() {


  var userPointer = Parse.User.current(); 
  const dateString = new Date();
  
  const [newEvent, setNewEvent] = useState({
    EventName: "",
    Date: Date(),
    Address: "",
    Description: "",
    UserPointer: {userPointer}
  });
 
  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
 
  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {

    if (newEvent && add) {
      createEventfunc(newEvent).then((eventCreated) => {
        if (eventCreated) {
          alert(
            `${eventCreated.get("EventName")}!`
          );
        }
        // TODO: redirect user to main app
        setAdd(false);
      });
   }
  }, [newEvent, add]);
 
  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;


    setNewEvent({
      ...newEvent,
      [name]: newValue
    });
  };
 
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);

  };
 
 
    return (
      <div className="CreateEvent">
        <Header/>
        <h2>Create Your Event Here</h2>
        <FormCreateEvent  event={newEvent} onSubmit={onSubmitHandler} onChange={onChangeHandler}/>
        <br />
        <Address />
          <br />
          <br />
          <Footer/>
      </div>
    );
}
 

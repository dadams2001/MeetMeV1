import './Profile.css';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Parse from "parse";

 
// Import Child Components
import Footer from '../../components/footer/footer.js';
import Header from '../../components/Header/Header';
import EventDashboard from '../../components/EventDashboard/EventDashboard';


function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}


 
const Profile = (props)  => {
  const user = Parse.User.current();
  
  const doRequestPasswordReset  = async function (props)
  {
        // Functions used by the screen components
      // Note that this value come from state variables linked to your text input
      const emailValue = user.get('email');
      try {
        await Parse.User.requestPasswordReset(emailValue);
        alert(`Success! Please check ${emailValue} to proceed with password reset.`);
        return true;
      } catch (error) {
        // Error can be caused by lack of Internet connection
        alert(`Error! ${error}`);
        return false;
      }
    };

 
  if (user) {
    return (
      <div className="Profile">
      <Header/>
      <div className="user-settings">
        <h1>Welcome back, {user.get("firstName") + ' ' + user.get("lastName")}</h1>
        <ul class="list" >
        <li>Full Name: <strong>{user.get('firstName')+' '+user.get('lastName')}</strong></li>
      <li>Username: <strong>{user.get('username')}</strong></li>
      <li>Password:   
      <button
            onClick={() => doRequestPasswordReset()}
            type="primary"
            className="form_button"
            class="form-button">
            Request password reset
          </button> 
        </li>

        </ul>
        </div>
        <br />
        <br />
        <div class="events">
        <EventDashboard UserPointer={user.id} />
        </div>
        <Footer/>
      </div>);
  } else {
    return (
      <div className="Profile">
        <Header/>
          <p>PROFILE</p>
          <GuestGreeting />
          <Footer/>
        </div>
      );
  }
}

export default Profile;
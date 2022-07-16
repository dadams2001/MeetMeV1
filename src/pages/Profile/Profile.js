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
  
  if (user) {
    return (
      <div className="Profile">
      <Header/>
        <h1>Welcome back, {user.get("firstName") + ' ' + user.get("lastName")}</h1>
        <EventDashboard UserPointer={user.id} />
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
import './Profile.css';
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Parse from "parse";

 
// Import Child Components
import Footer from '../../components/footer/footer.js';
import Header from '../../components/Header/Header';

function UserGreeting(props) {
  return <h1>Welcome back! </h1>;

}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

 
const Profile = (props)  => {
  const isLoggedIn = props.isLoggedIn;
    const user= Parse.User.current();
  
  if (isLoggedIn) {
    return (
      <div className="Profile">
      <Header/>
        <p>{"PROFILE for " + user.get("firstName") +"!"}</p>
        <UserGreeting />
        <Footer/>
      </div>);
  }
  return (
    <div className="Profile">
      <Header/>
        <p>PROFILE</p>
        <GuestGreeting />
        <Footer/>
      </div>
    );
}

export default Profile;
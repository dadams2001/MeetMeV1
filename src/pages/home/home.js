import './home.css';

// Import Child Components
import Footer from '../../components/footer/footer.js';
import Header from '../../components/Header/Header';
import AttendeeDashboard from '../../components/AttendeeDashboard/AttendeeDashboard';

//get atendees from function getEventAttendess
import { getEventAttendess } from "../../Common/Services/GetAttendees";

//useEffect and useState
import { useEffect, useState } from "react";

export default function Home() {
    return (
      <div className="Home">
        <Header/>
        <h1>Welcome to MeetMe</h1>
          <p>First, begin by creating and event</p>
          <p>Then, invite your friends through your profile!</p>
          <Footer/>
      </div>
    );
}
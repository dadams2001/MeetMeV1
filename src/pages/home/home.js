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
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            HOME
          </a>
          <Footer/>
      </div>
    );
}
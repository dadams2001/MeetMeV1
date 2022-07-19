import './MyEventUser.css';
import Footer from '../../components/footer/footer.js';
import Header from '../../components/Header/Header';
import Address from '../Address/Address';
import AttendeeDashboard from '../../components/AttendeeDashboard/AttendeeDashboard';
import { useLocation } from 'react-router-dom';
import copy from 'copy-to-clipboard';
import { User } from 'parse';
import Parse from "parse";
//get atendees from function getEventAttendess
import { getEventAttendees } from "../../Common/Services/GetAttendees";

//useEffect and useState
import { useEffect, useState } from "react";

export default function MyEventUser({event}, props) {
    const path = useLocation().pathname;
    var user = Parse.User.current();
    const d = event.get('Date');
    const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    getEventAttendees("yia8siddLu").then((response) => {
      setAttendees(response);
    });
  }, []);

    return(
        
        <div class="MyEventUser">
        <Header />
            <h1>
            {user.get('firstName')}'s {event.get("EventName")}
            </h1>
            
            <ul class="list-form">
                <li>
                    Day: { d.toDateString()}
                </li>
                <li>
                    When: {d.toLocaleTimeString()}
                </li>
                <li>
                    Where: {event.get('Address')}
                </li>
            </ul>
            <p>
                Make sure to invite your friends! Share this party by sending the link below
            </p>
            <button class="btn-form"
                onClick = {() =>{copy(path)}}
            >
                copy link
            </button>
            <AttendeeDashboard attendees={attendees} />
            <Address />
            <Footer />
        </div>
       
    );
}
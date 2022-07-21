import './MyEventUser.css';
import Footer from '../../components/footer/footer.js';
import Header from '../../components/Header/Header';
import Address from '../Address/Address';
import AttendeeDashboard from '../../components/AttendeeDashboard/AttendeeDashboard';
import { useLocation } from 'react-router-dom';
import copy from 'copy-to-clipboard';
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
    const [EventNameClicked, setEventNameClicked] = useState(false);
    const [EventDateClicked, setEventDateClicked] = useState(false);
    const [EventAddyClicked, setEventAddyClicked] = useState(false);

  useEffect(() => {
    getEventAttendees(event.id).then((response) => {
      setAttendees(response);
    });
  }, [event.id]);

    return(
        <div class="MyEventUser">
        <Header />
            <h1>
                {user.get('firstName')}'s {event.get("EventName")}
            </h1>
            {!EventNameClicked ?
                <div className='InputBox'>
                    <p>
                        Day: { d.toDateString()}
                    </p>
                    <button onClick={()=>{setEventNameClicked(true)}} >Edit</button>
                </div>
                :
                <div className='InputBox'>
                    <input type="text" />
                    <button onClick={()=>{setEventNameClicked(false)}}>Update</button>
                </div>
            }

            {!EventDateClicked ?
                <div className='InputBox'>
                    <p>
                        When: {d.toLocaleTimeString()}
                    </p>
                    <button onClick={()=>{setEventDateClicked(true)}} >Edit</button>
                </div>
                :
                <div className='InputBox'>
                    <input type="text" />
                    <button onClick={()=>{setEventDateClicked(false)}}>Update</button>
                </div>
            }

            {!EventAddyClicked ?
                <div className='InputBox'>
                    <p>
                        Where: {event.get('Address')}
                    </p>
                    <button onClick={()=>{setEventAddyClicked(true)}} >Edit</button>
                </div>
                :
                <div className='InputBox'>
                    <input type="text" />
                    <button onClick={()=>{setEventAddyClicked(false)}}>Update</button>
                </div>
            }
        
            {/* <ul class="list-form">
                <li>
                    Day: { d.toDateString()}
                </li>
                <li>
                    When: {d.toLocaleTimeString()}
                </li>
                <li>
                    Where: {event.get('Address')}
                </li>
            </ul> */}
            <p>
                Make sure to invite your friends! Share this party by sending the link below
            </p>
            <button class="btn-form"
                onClick = {() =>{copy("localhost:3000" + path)}}
            >
                copy link
            </button>
            <AttendeeDashboard attendees={attendees} />
            <Address />
            <Footer />
        </div>
       
    );
}
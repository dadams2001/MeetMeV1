import './MyEventGuest.css';
import Footer from '../../components/footer/footer.js';
import Header from '../../components/Header/Header';
import AttendeeDashboard from '../../components/AttendeeDashboard/AttendeeDashboard';
import Address from '../Address/Address';
import { getEventAttendees } from "../../Common/Services/GetAttendees";
import { useEffect, useState } from "react";
import { addNewAttendee } from '../../Common/Services/GetAttendees';

export default function MyEventGuest({event}, props) {
    const d = event.get('Date');
    const [attendees, setAttendees] = useState([]);
    const [submitted, setSubmitted] = useState(null);
    const [newAttendee, setNewAttendee] = useState("");

  useEffect(() => {
    getEventAttendees(event.id).then((response) => {
      setAttendees(response);
    });
  }, [event.id]);

  const onSubmitHandler = () => {
    setSubmitted(true);
    addNewAttendee(newAttendee, event)
  }

    return(
        <div class="container">
            <Header />
            <br />
            <h1>
                You've been invited to a <strong>{event.get("EventName")} </strong>!
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
            <Address />
            <AttendeeDashboard attendees={attendees} />
            {(!submitted) ?
                <div className='FormContainer'>
                    <input 
                        type="text" 
                        onChange={(e) => setNewAttendee(e.target.value)}
                        placeholder='Enter your name!' />
                    <button onClick={()=>{onSubmitHandler()}}>Submit</button>
                </div>
                :
                <p id="SeeYouThere">
                    We'll see you there!
                </p>
            }
            <Footer />
        </div>
        
    );
}
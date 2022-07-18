import './MyEventGuest.css';
import Footer from '../../components/footer/footer.js';
import Header from '../../components/Header/Header';
import AttendeeDashboard from '../../components/AttendeeDashboard/AttendeeDashboard';
import { getEventAttendees } from "../../Common/Services/GetAttendees";
import { useEffect, useState } from "react";
export default function MyEventGuest({event}, props) {
    const d = event.get('Date');
    const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    getEventAttendees("yia8siddLu").then((response) => {
      setAttendees(response);
    });
  }, []);

    return(
        <div class="container">
            <Header />
            <br />
            <h1>
                You've been invited to a <strong>{event.get("EventName")} </strong>
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
            <AttendeeDashboard attendees={attendees} />
            <Footer />
        </div>
        
    );
}
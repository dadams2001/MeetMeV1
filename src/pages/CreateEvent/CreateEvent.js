import './CreateEvent.css';

// Import Child Components
import Footer from '../../components/footer/footer.js';
import Header from '../../components/Header/Header';
import AttendeeDashboard from '../../components/AttendeeDashboard/AttendeeDashboard';


//get atendees from function getEventAttendess
import { getEventAttendees } from "../../Common/Services/GetAttendees";

//useEffect and useState
import { useEffect, useState } from "react";

export default function CreateEvent() {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    getEventAttendees("yia8siddLu").then((response) => {
      setAttendees(response);
    });
  }, []);


    return (
      <div className="CreateEvent">
        <Header/>
        <AttendeeDashboard attendees={attendees} />
       <br />
          <Footer/>
      </div>
    );
}

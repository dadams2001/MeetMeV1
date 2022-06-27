import './home.css';
import Footer from '../../components/footer/footer.js';
import AttendeeDashboard from '../../components/AttendeeDashboard/AttendeeDashboard';
//get atendees from function getAllAttendees
import { getAllAttendees } from "../../Common/Services/GetAttendees";

//useEffect and useState
import { useEffect, useState } from "react";

export default function Home() {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    getAllAttendees().then((response) => {
      setAttendees(response);
    });
  }, []);


    return (
      <div className="Home">
        <header className='Home-header'>
          <AttendeeDashboard attendees={attendees} />
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
        </header>
      </div>
    );
}
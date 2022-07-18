import './EventDashboard.css';
import { useEffect, useState } from 'react';
import { getUserEvents } from '../../Common/Services/EventQueries';
import EventCard from '../EventCard/EventCard';
import { Link } from 'react-router-dom';




//EventsDashboard function concatenates and displays the names on the parse back4app list
export default function EventDashboard({UserPointer}) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getUserEvents(UserPointer).then((response) => {
      setEvents(response);
    });
  }, []);

  return (
    <div>
      <h3 className="listname">My Events</h3>
      <div>
        {events.length > 0 && (
         <ul className='EventsList'> 
            {events.map((event) => (
              <EventCard event={event} />
            ))}
            <Link to="/CreateEvent"> <button class="buttonlink">+ Add Event</button></Link>
          </ul>
        )}
         
      </div>
    <br />
    </div>
  );
}

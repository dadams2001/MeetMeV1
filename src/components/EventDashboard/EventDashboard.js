import './EventDashboard.css';
import { useEffect, useState } from 'react';
import { getUserEvents } from '../../Common/Services/EventQueries';
import EventCard from '../EventCard/EventCard';

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
          </ul>
        )}
      </div>
    </div>
  );
}

import './attendees.css';
//AttendeeDashboard function concatenates and displays the names on the parse back4app list
export default function AttendeeDashboard({ attendees }) {
  return (
    <div className='DashBoardContainer'>
      <h3 className="listname">Attendees Invited</h3>
      <div>
        {attendees.length > 0 && (
         <ul> 
          
          {attendees.map((attendee) => (
          <li key={attendee.get("objectId")}>
            {attendee.get("AttendeeName")}
          </li>
        
        ))}
      </ul>
      )}
      </div>

    </div>
  );
}

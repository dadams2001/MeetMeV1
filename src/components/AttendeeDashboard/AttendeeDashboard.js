import './attendees.css';

//AttendeeDashboard function concatenates and displays the names on the parse back4app list
export default function AttendeeDashboard({ attendees }) {
  return (
    <div>
      <h3 class="listname">Attendees</h3>
      <ul>
        {attendees.map((attendee) => (
          <li key={attendee.get("objectId")}>
            {attendee.get("FirstName") + " " + attendee.get("LastName")}
          </li>
        ))}
      </ul>
    </div>
  );
}

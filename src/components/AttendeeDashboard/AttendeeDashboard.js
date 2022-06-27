//AttendeeDashboard function concatenates and displays the names on the parse back4app list
export default function AttendeeDashboard({ attendees }) {
  return (
    <div>
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

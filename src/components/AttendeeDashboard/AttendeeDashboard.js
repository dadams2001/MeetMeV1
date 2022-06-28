import './attendees.css';
import Address from "./Address";

const onClickHandler = (e) => {
  e.preventDefault();
  // Trigger add flag to create lesson and
  // re-render list with new lesson
};

// Handler to track changes to the child input text
const onChangeHandler = (e) => {
  e.preventDefault();
  console.log(e.target.value);
  // Continuously updating name to be added on submit
};
//AttendeeDashboard function concatenates and displays the names on the parse back4app list
export default function AttendeeDashboard({ attendees }) {
  return (
    <div>
      <h3 class="listname">Attendees Invited</h3>
      <div>
        {attendees.length > 0 && (
         <ul> 
          
          {attendees.map((attendee) => (
          <li key={attendee.get("objectId")}>
            {attendee.get("FirstName") + " " + attendee.get("LastName")}
          </li>
        
        ))}
      </ul>
      )}
      </div>
      <Address onClick={onClickHandler} onChange={onChangeHandler} />
    </div>
  );
}

import React from "react";
//header function concatenates and displays the names on the parse back4app list
export function Header({ attendees }) {
  return (
    <div>
      <ul>
        {attendees.map((attendee) => (
          <li key={attendee.get("objectId")} class="test">
            {attendee.get("FirstName") + " " + attendee.get("LastName")}
          </li>
        ))}
      </ul>
    </div>
  );
}

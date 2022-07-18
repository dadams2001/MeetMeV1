import './EventCard.css';
import { useEffect, useState } from 'react';
import { getUserEvents } from '../../Common/Services/EventQueries';
import { useNavigate } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

export default function EventCard({event}) {
  const navigate = useNavigate();

  const onClickHandler = () => {

    navigate(
      "/events/" + event.get("UserPointer").id + "/" + event.id
    );
  }
  return (
    <div  className="EventCardContainer" onClick={onClickHandler}>
      {console.log(event.get("Date").toString())}
      <h2>{event.get("EventName")}</h2>
      <p>{event.get("Address")}</p>
      <p>{event.get("Date").toString()}</p>
    </div>
  );
}

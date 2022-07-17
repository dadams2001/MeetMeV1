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
    <div onClick={onClickHandler}>
      <h3 className="EventCardContainer">{event.get("EventName")}</h3>
    </div>
  );
}

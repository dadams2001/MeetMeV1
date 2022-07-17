import './MyEvent.css';

import { useParams } from 'react-router-dom';
import Parse from 'parse';

import { getEventById } from '../../Common/Services/EventQueries';
import { useEffect, useState } from 'react';
import MyEventGuest from '../../components/MyEventGuest/MyEventGuest';
import MyEventUser from '../../components/MyEventUser/MyEventUser';

export default function MyEvent() { 
   const CurrentUser = Parse.User.current();
    
    let { UserId } = useParams();
    let { EventId } = useParams();

   const [event, setEvent] = useState({});
   const [isLoaded, setisLoaded] = useState(false);

   useEffect(() => {
        getEventById(EventId).then((event) => {
            setEvent(event);
            setisLoaded(true);
        });
    }, [EventId]);

    // return(
    //     <div>Hello world</div>
    // );

    if(!isLoaded) {
        return(
            <div>Loading...</div>
        );
    }
    
    if(!CurrentUser) {
        return(
            <MyEventGuest event={event} />
        );
    }
    else if (UserId != CurrentUser.id) {
        return(
            <MyEventGuest event={event} />
        ) 
    }
    else {
        return(
            <MyEventUser event={event} />
        );
    }
}
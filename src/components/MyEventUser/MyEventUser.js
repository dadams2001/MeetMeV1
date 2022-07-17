import './MyEventUser.css';
import { useLocation } from 'react-router-dom';
import copy from 'copy-to-clipboard';

export default function MyEventUser({event}) {
    const path = useLocation().pathname;
    return(
        <div>
            <h1>
                {event.get("EventName") + " User"} 
            </h1>
            <button
                onClick = {() =>{copy(path)}}
            >
                Give us a click, yeah!
            </button>
        </div>
        
    );
}
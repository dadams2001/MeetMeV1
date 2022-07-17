import './MyEventGuest.css';
import { useLocation } from 'react-router-dom';
import copy from 'copy-to-clipboard';

export default function MyEventGuest({event}) {
    return(
        <div>
            <h1>
                {event.get("EventName") + " Guest"} 
            </h1>
        </div>
        
    );
}
import './Header.css';
import { Link } from 'react-router-dom';
import Parse from 'parse';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const onLogoutHandler = () => {
        Parse.User.logOut().then(() => {
            navigate("/")
        });
    }
    return(
        <div className="header-container">
            <ul class="navigation">
                <li>
                    <div class="dropdown">
                        <button class="dropbtn" id="menu">MENU</button>
                        <div class="dropdown-content">
                            <Link to="/CreateEvent">CREATE</Link>
                            <Link to="/">HOME</Link>
                        </div>
                    </div>
                </li>
                <li>
                    <h1><span class="meetme">MeetMe</span></h1>
                </li>
                <li>
                    <div class="dropdown">
                        <button class="dropbtn" id='profile'>PROFILE</button>
                        <div class="dropdown-content">
                            <Link to="/Profile">PROFILE</Link>
                            {(Parse.User.current()) ?
                                <div id="logout" onClick={onLogoutHandler}>LOGOUT</div> 
                                :
                                <Link to="/Login">LOGIN</Link>
                            }
                            
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );   
}